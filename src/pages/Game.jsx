import { Link, Navigate, useOutletContext, useParams } from "react-router-dom";
import {
  difficultyOptions,
  livesOptions,
  imagesOptions,
  showClueOptions,
} from "../utils/config";
import { useCallback, useEffect, useState } from "react";
import Loader from "../components/Loader";
import { getRandom } from "../services/word";

const Game = () => {
  const { username } = useParams();
  const { difficulty, setDifficulty, setMessage } = useOutletContext();
  const [points, setPoints] = useState(0);
  const [lives, setLives] = useState(null);
  const [time, setTime] = useState(null);
  const [loading, setLoading] = useState(true);
  const [word, setWord] = useState(null);
  const [goToDashboard, setGoToDashboard] = useState(false);
  const [images, setImages] = useState([]);
  const [heart, setHeart] = useState("");
  const [showClue, setShowClue] = useState(false);

  const reset = useCallback(() => {
    setPoints(0);
    setLives(0);
    setTime(0);

    if (setDifficulty) {
      setDifficulty(null);
    }
  }, [setDifficulty]);

  const handleClick = useCallback(() => {
    reset();

    setMessage("El juego se finalizo correctamente. No sumaste puntos.");
  }, [setMessage, reset]);

  // const loseLife = () => {
  //   setLives(lives - 1);
  // };

  // const addPoints = () => {
  //   setPoints(points + pointsMultiplier[difficulty]);
  // };

  const endGame = useCallback(() => {
    reset();

    setMessage(
      "Perdiste. No tenes suficientes vidas o el tiempo ha terminado.",
    );

    setGoToDashboard(true);
  }, [setGoToDashboard, reset, setMessage]);

  useEffect(() => {
    const timer = setInterval(() => {
      setTime(time - 1);
    }, 1000);

    return () => clearInterval(timer);
  }, [time]);

  useEffect(() => {
    if (lives !== null) {
      setHeart("❤️".repeat(lives));

      setShowClue(showClueOptions[difficulty] >= lives ? true : false);
    }
  }, [lives, difficulty]);

  useEffect(() => {
    const fetchData = async () => {
      const getWord = async () => {
        const word = await getRandom(difficulty);

        if (word) {
          setWord(word.data);
        }
      };

      await getWord();
    };

    if (difficulty) {
      setLives(livesOptions[difficulty]);
      setPoints(0);

      setImages(imagesOptions[difficulty]);
      fetchData();
    }
  }, [difficulty]);

  useEffect(() => {
    if (word) {
      setTime(word.time);

      setLoading(false);
    }
  }, [word]);

  useEffect(() => {
    if (lives !== null) {
      if (lives === 0) {
        endGame();
      }

      if (time !== null && time === 0) {
        endGame();
      }
    }
  }, [lives, endGame, time]);

  return (
    <>
      {loading ? (
        <div className="card bg-base-200 shadow-xl">
          <div className="card-body">
            <Loader />
          </div>
        </div>
      ) : (
        <div className="grid grid-cols-1 gap-4 p-2 lg:grid-cols-5">
          {goToDashboard && <Navigate to="/dashboard" replace={true} />}
          <div className="lg:col-span-5">
            <div className="card w-full bg-base-200 shadow-xl">
              <div className="card-body">
                <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
                  <h2 className="text-center text-3xl font-bold">
                    Juego del Ahorcado
                  </h2>
                  <Link
                    to="/dashboard"
                    type="button"
                    className="btn btn-accent"
                    onClick={handleClick}
                  >
                    Finalizar Juego
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className="card bg-base-200 shadow-xl lg:col-span-2">
            <div className="card-body">
              <div className="flex h-full flex-col items-center justify-center gap-6">
                <div className="flex justify-center">
                  <img src={images[lives]} alt="Imagen del ahorcado" />
                </div>
                <div
                  className="flex flex-col items-center justify-center gap-4"
                  id="word"
                >
                  <div className="mt-6 flex gap-2">
                    {word.word.split("").map((letter, index) => (
                      <div
                        key={index}
                        className="w-10 border-b-2 border-primary"
                      ></div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-row gap-4 lg:col-span-2 lg:flex-col">
            {showClue && (
              <div className="card h-[300px] bg-base-200 shadow-xl">
                <div className="card-body">
                  <h3 className="text-2xl font-bold">Pistas</h3>
                  <div className="flex flex-col gap-2" id="hints">
                    {word.clue}
                  </div>
                </div>
              </div>
            )}
            <div className="card bg-base-200 shadow-xl">
              <div className="card-body">
                <div className="flex flex-col items-center justify-center gap-4">
                  <div className="flex flex-wrap justify-center gap-2 md:flex-row">
                    <button className="btn btn-accent">Q</button>
                    <button className="btn btn-accent">W</button>
                    <button className="btn btn-accent">E</button>
                    <button className="btn btn-accent">R</button>
                    <button className="btn btn-accent">T</button>
                    <button className="btn btn-accent">Y</button>
                    <button className="btn btn-accent">U</button>
                    <button className="btn btn-accent">I</button>
                    <button className="btn btn-accent">O</button>
                    <button className="btn btn-accent">P</button>
                  </div>
                  <div className="flex flex-wrap justify-center gap-2 md:flex-row">
                    <button className="btn btn-accent">A</button>
                    <button className="btn btn-accent">S</button>
                    <button className="btn btn-accent">D</button>
                    <button className="btn btn-accent">F</button>
                    <button className="btn btn-accent">G</button>
                    <button className="btn btn-accent">H</button>
                    <button className="btn btn-accent">J</button>
                    <button className="btn btn-accent">K</button>
                    <button className="btn btn-accent">L</button>
                  </div>
                  <div className="flex flex-wrap justify-center gap-2 md:flex-row">
                    <button className="btn btn-accent">Z</button>
                    <button className="btn btn-accent">X</button>
                    <button className="btn btn-accent">C</button>
                    <button className="btn btn-accent">V</button>
                    <button className="btn btn-accent">B</button>
                    <button className="btn btn-accent">N</button>
                    <button className="btn btn-accent">M</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="card bg-base-200 shadow-xl">
            <div className="card-body items-center justify-center gap-4">
              <div className="flex w-full cursor-pointer flex-col items-center justify-center gap-2 rounded-md bg-secondary p-2 text-white shadow-xl transition-colors duration-300 ease-in-out hover:bg-secondary/80">
                <p className="font-semibold">Nombre del jugador</p>
                <span className="text-lg font-bold">{username}</span>
              </div>
              <div className="flex w-full cursor-pointer flex-col items-center justify-center gap-2 rounded-md bg-secondary p-2 text-white shadow-xl transition-colors duration-300 ease-in-out hover:bg-secondary/80">
                <p className="font-semibold">Dificultad del juego</p>
                <span className="text-lg font-bold">
                  {difficultyOptions[difficulty] ?? "Dificultad desconocida"}
                </span>
              </div>
              <div className="flex w-full cursor-pointer flex-col items-center justify-center gap-2 rounded-md bg-secondary p-2 text-white shadow-xl transition-colors duration-300 ease-in-out hover:bg-secondary/80">
                <p className="font-semibold">Puntuación</p>
                <span className="text-lg font-bold">{points}</span>
              </div>
              <div className="flex w-full cursor-pointer flex-col items-center justify-center gap-2 rounded-md bg-secondary p-2 text-white shadow-xl transition-colors duration-300 ease-in-out hover:bg-secondary/80">
                <p className="font-semibold">Vidas restantes</p>
                <span className="text-lg font-bold">{heart}</span>
              </div>
              <div className="flex w-full cursor-pointer flex-col items-center justify-center gap-2 rounded-md bg-secondary p-2 text-white shadow-xl transition-colors duration-300 ease-in-out hover:bg-secondary/80">
                <p className="font-semibold">Tiempo restante</p>
                <span className="text-lg font-bold">{time}</span>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Game;
