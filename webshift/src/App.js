import { Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Register from "./pages/Register";
//import ProfileUser from "./pages/ProfileUser";
//import CancelledShift from "./pages/CancelledShift";
//import ShiftUser from "./pages/ShiftUser";
//import ShiftOperatorView from "./pages/ShiftOperatorView";
//import ProfileOperator from "./pages/ProfileOperator";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </div>
  );
}

export default App;
