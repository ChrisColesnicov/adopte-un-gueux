import { Outlet, useLoaderData } from "react-router-dom";
import Papa from "papaparse"

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import "./styles/App.css";
import "./styles/accueil.css";

function App() {
  const dataFromLoader = useLoaderData();

  const parse = () =>
    Papa.parse(dataFromLoader.data, {
      header: true,
      complete: (result) => result,
    });
  const { data } = parse();
    console.info(data)
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
