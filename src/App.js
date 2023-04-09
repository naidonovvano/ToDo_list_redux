import "./App.css";
import { Routes, Route, useLocation } from "react-router-dom";
import { HomePage } from "./pages/HomePage";
import { LoginPage } from "./pages/LoginPage";
import { RegisterPage } from "./pages/RegisterPage";
import { animated, useTransition } from "react-spring";

export const App = () => {
  const location = useLocation();
  const transitions = useTransition(location, {
    from: {
      opacity: 0,
    },
    enter: {
      opacity: 1,
    },
    leave: {
      opacity: 0,
    },
  });
  return (
    <div className="App container-fluid">
      <div className="routesContainer">
        {transitions((styles, item) => (
          <animated.div style={styles}>
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/login" element={<LoginPage />} />
              <Route path="/register" element={<RegisterPage />} />
            </Routes>
          </animated.div>
        ))}
      </div>
    </div>
  );
};
