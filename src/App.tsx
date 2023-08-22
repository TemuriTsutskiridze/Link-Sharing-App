import ReactHelmet from "./components/ReactHelmet";
import Globals from "./components/Globals";
import Login from "./pages/Login";
import Register from "./pages/Register";
import { Route, Routes } from "react-router-dom";
import { useState } from "react";
import { TUser } from "./types";

function App() {
  const storedUsers = localStorage.getItem("users");
  const initialUsers = storedUsers ? JSON.parse(storedUsers) : [];
  const [users, setUsers] = useState<TUser[]>(initialUsers);

  return (
    <>
      <ReactHelmet />
      <Globals />
      <Routes>
        <Route
          element={<Login users={users} setUsers={setUsers} />}
          path="/login"
        />
        <Route
          element={<Register users={users} setUsers={setUsers} />}
          path="/register"
        />
      </Routes>
    </>
  );
}

export default App;
