import ReactHelmet from "./components/ReactHelmet";
import Globals from "./components/Globals";
import Login from "./pages/Login";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <>
      <ReactHelmet />
      <Globals />
      <Routes>
        <Route element={<Login />} path="/login" />
      </Routes>
    </>
  );
}

export default App;
