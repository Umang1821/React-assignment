import Signup from "./Components/Registration";
import Login from "./Components/Login";
import Home from "./Components/Home";
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import SetQuestion from "./Components/SetQuestion";
import MyQuizzes from "./Components/MyQuizzes";
import Attempt from "./Components/Attempt";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/home" element={<Home />} />
        <Route
          exact
          path="/home/SetQuestion"
          element={<SetQuestion />}
        ></Route>
        <Route exact path="/home/MyQuizzes" element={<MyQuizzes />}></Route>
        <Route path="/home/MyQuizzes/Attempt" element={<Attempt />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;