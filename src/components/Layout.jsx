import { Outlet } from "react-router-dom";
import WaveAnimation from "./WaveAnimation";
import PropTypes from "prop-types";

const Layout = ({ setDifficulty, difficulty, message, setMessage }) => {
  return (
    <>
      <WaveAnimation />
      <main className="container flex min-h-screen items-center justify-center gap-6 py-3">
        <Outlet context={{ setDifficulty, difficulty, message, setMessage }} />
      </main>
    </>
  );
};

Layout.propTypes = {
  setDifficulty: PropTypes.func,
  difficulty: PropTypes.string,
  message: PropTypes.string,
  setMessage: PropTypes.func,
};

export default Layout;
