import { Outlet } from "react-router-dom";

import "./styles/App.css";
import "./styles/accueil.css";
import "./styles/cart.css";

function App() {
  return (
    <main>
      <Outlet />
    </main>
  );
}

export default App;
