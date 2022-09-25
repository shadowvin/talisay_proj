import Home from "./pages/home/Home";
import Login from "./pages/login/Login";
import List from "./pages/list/List";
import Single from "./pages/single/Single";
import New from "./pages/new/New";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { restaurantInputs, hotelInputs } from "./formSource";
import "./style/dark.scss";
import { useContext } from "react";
import { DarkModeContext } from "./context/darkModeContext";

function App() {
  const { darkMode } = useContext(DarkModeContext);

  return (
    <div className={darkMode ? "app dark" : "app"}>
      <BrowserRouter>
        <Routes>
          <Route path="/">
            <Route index element={<Home />} />
            <Route path="login" element={<Login />} />
            <Route path="hotels">
              <Route index element={<List />} />
              <Route path=":hotelId" element={<Single />} />
              <Route
                path="new"
                element={<New inputs={hotelInputs} title="Add New Hotel" />}
              />
            </Route>
            <Route path="restaurant">
              <Route index element={<List />} />
              <Route path=":restaurantId" element={<Single />} />
              <Route
                path="new"
                element={<New inputs={restaurantInputs} title="Add New Restaurant" />}
              />
            </Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
