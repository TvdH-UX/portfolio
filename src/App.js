import styles from "./App.module.css";
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
  return (
    <div>
      <div className={styles.grain}></div>
      <div className={styles.container}>
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
