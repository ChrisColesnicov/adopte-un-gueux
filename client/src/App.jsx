import { Outlet } from "react-router-dom";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import "./styles/App.css";
import "./styles/accueil.css";

function App() {
  return (
    <>
      <Navbar />
      <main>
        <Outlet />
      </main>
      <Footer />
    </>
  );
}

export default App;
