import { Suspense, useEffect, useState } from "react";
import logo from "../assets/img/logo.png";
import { Navigate, useOutletContext } from "react-router-dom";
import PropTypes from "prop-types";
import useJwt from "../hooks/useJwt";
import { user, getUsersPoints } from "../services/user";
import Loader from "../components/Loader";
import Alert from "../components/Alert";

const Dashboard = ({ logout }) => {
  const [goToLogin, setGoToLogin] = useState(false);
  const [goToGame, setGoToGame] = useState(false);
  const [userData, setUserData] = useState(null);
  const [points, setPoints] = useState([]);
  const [showError, setShowError] = useState(false);
  const [errorType, setErrorType] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [showMessage, setShowMessage] = useState(false);
  const { jwt } = useJwt();
  const { setDifficulty } = useOutletContext();
  const { message, setMessage } = useOutletContext();

  useEffect(() => {
    if (!localStorage.getItem("jwt")) {
      setGoToLogin(true);
    }
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      if (jwt) {
        const userData = await user(jwt);

        if (userData) {
          setUserData(userData.data);
        }
      }
    };

    fetchData();
  }, [jwt, setUserData]);

  useEffect(() => {
    const fetchData = async () => {
      const points = await getUsersPoints();
      if (points) {
        setPoints(points.data);
      }
    };

    fetchData();
  }, [setPoints]);

  useEffect(() => {
    if (message) {
      setShowMessage(true);
    }
  }, [message]);

  const handleSubmit = (e) => {
    e.preventDefault();

    const data = new FormData(e.target);

    if (data.get("difficulty") && data.get("difficulty").length > 0) {
      setDifficulty(data.get("difficulty"));
      setGoToGame(true);
    } else {
      setShowError(true);
      setErrorType("error");
      setErrorMessage("Debes seleccionar una dificultad.");
    }
  };

  const handleClose = () => {
    setShowError(false);
    setShowMessage(false);
    setErrorMessage("");
    setMessage("");
  };

  return (
    <>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
        {goToLogin && <Navigate to="/" />}

        {goToGame && <Navigate to={`/game/${userData?.username}`} />}

        <div className="card bg-base-200 shadow-xl md:col-span-2">
          <div className="card-body">
            <div className="flex justify-center">
              <div className="avatar">
                <div className="w-32 rounded-full bg-secondary-content p-2">
                  <img src={logo} alt="logo" />
                </div>
              </div>
            </div>
            <h2 className="text-center text-3xl font-bold">
              Juego del Ahorcado
            </h2>
          </div>
        </div>
        <div className="relative md:col-span-2">
          {showMessage && (
            <Alert
              type="success"
              message={message}
              action={handleClose}
              showAction={true}
            />
          )}
        </div>
        <div className="flex flex-col gap-4">
          <div className="card bg-base-200 shadow-xl">
            <div className="card-body">
              <h3 className="text-center text-2xl font-bold">Cuenta</h3>
              <div className="flex flex-row justify-between gap-4">
                <div className="flex flex-col gap-2">
                  <p className="font-semibold">Nombre de usuario</p>
                  <kbd className="kbd kbd-md">{userData?.username}</kbd>
                </div>
                <div className="flex flex-col gap-2">
                  <p className="font-semibold">Puntuación</p>
                  <kbd className="kbd kbd-md">{userData?.points}</kbd>
                </div>
              </div>
              <div className="mt-6 flex justify-center">
                <button
                  className="btn btn-outline btn-accent w-full"
                  onClick={() => {
                    logout();

                    setGoToLogin(true);
                  }}
                >
                  Cerrar sesión
                </button>
              </div>
            </div>
          </div>
          <div className="card bg-base-200 shadow-xl">
            <div className="card-body">
              {showError && (
                <Alert
                  type={errorType}
                  message={errorMessage}
                  action={handleClose}
                  showAction={true}
                />
              )}

              <h3 className="text-center text-2xl font-bold">Jugar</h3>
              <form
                className="flex flex-col gap-4"
                method="POST"
                onSubmit={handleSubmit}
              >
                <div className="form-control">
                  <label className="label" htmlFor="difficulty">
                    <span className="label-text">Dificultad</span>
                  </label>
                  <select
                    id="difficulty"
                    className="select select-bordered select-primary"
                    name="difficulty"
                    defaultValue={""}
                  >
                    <option value={""}>Seleccione la dificultad</option>
                    <option value={"easy"}>Fácil</option>
                    <option value={"medium"}>Medio</option>
                    <option value={"hard"}>Difícil</option>
                  </select>
                </div>
                <div className="form-control flex justify-center">
                  <button type="submit" className="btn btn-outline btn-accent">
                    Empezar Juego
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
        <div className="card bg-base-200 shadow-xl">
          <div className="card-body">
            <h3 className="text-3xl font-bold">Tabla de puntuaciones</h3>
            <div className="h-[400px] overflow-x-auto">
              <table className="table table-zebra">
                <thead className="sticky top-0">
                  <tr>
                    <th>Nombre</th>
                    <th>Puntuación</th>
                  </tr>
                </thead>
                <tbody>
                  <Suspense
                    fallback={
                      <tr className="hover">
                        <th colSpan="2" className="text-center">
                          <Loader />
                        </th>
                      </tr>
                    }
                  >
                    {points.map((point) => (
                      <tr key={point.id} className="hover">
                        <td>{point.username}</td>
                        <td>{point.points}</td>
                      </tr>
                    ))}
                  </Suspense>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

Dashboard.propTypes = {
  logout: PropTypes.func.isRequired,
};

export default Dashboard;
