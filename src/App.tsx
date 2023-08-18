import ReactHelmet from "./components/ReactHelmet";
import Globals from "./components/Globals";
import Login from "./pages/Login";
import Register from "./pages/Register";
import { Route, Routes } from "react-router-dom";
import { useState } from "react";
import { TUser } from "./types";

function App() {
  const [users, setUsers] = useState<TUser[]>([]);

  return (
    <>
      <ReactHelmet />
      <Globals />
      <Routes>
        <Route element={<Login users={users} />} path="/login" />
        <Route element={<Register users={users} />} path="/register" />
      </Routes>
    </>
  );
}

export default App;
