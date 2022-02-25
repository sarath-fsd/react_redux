import { NavLink, Route, Routes } from "react-router-dom";
import "./styles.css";
import UserForm from "./pages/userForm";
import UserDetails from "./pages/userDetailsPage";

export default function App() {
  return (
    <div className="App">
      <NavLink to="/" style={{ paddingRight: 10 }}>
        Home
      </NavLink>
      <NavLink to="/user-details">User Details</NavLink>
      <Routes>
        <Route path="/" element={<UserForm />}></Route>
        <Route path="/user-details" element={<UserDetails />}></Route>
      </Routes>
    </div>
  );
}
