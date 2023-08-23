import styles from "./App.module.css";
import { useRef } from "react";
import { Route, Routes, HashRouter } from "react-router-dom";
import { Home } from "./pages/Home";
import { MijnWerk } from "./pages/MijnWerk";
import { OverMij } from "./pages/OverMij";
import { NodeScape } from "./pages/NodeScape";
import { TalentDex } from "./pages/TalentDex";
import { Trivia } from "./pages/Trivia";
import { NavBar } from "./components/NavBar";
import { Footer } from "./components/Footer";

function App() {
  const cursor = useRef(null);
  const changePosition = (e) => {
    cursor.current.style.top = `${e.clientY}px`;
    cursor.current.style.left = `${e.clientX}px`;
  };
  return (
    <div>
      <div className={`${styles.cursor} ${styles.dot}`} ref={cursor}></div>
      <div className={styles.grain}></div>
      <div className={styles.container} onMouseMove={changePosition}>
        <div className={styles.body}>
          <NavBar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/mijnwerk" element={<MijnWerk />} />
            <Route path="/mijnwerk/nodescape" element={<NodeScape />} />
            <Route path="/mijnwerk/talentdex" element={<TalentDex />} />
            <Route path="/mijnwerk/trivia" element={<Trivia />} />
            <Route path="/overmij" element={<OverMij />} />
          </Routes>
          <Footer />
        </div>
      </div>
    </div>
  );
}

export default App;
