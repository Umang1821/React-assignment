import React from "react";
import { useNavigate, Link } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { useState } from "react";
function Home() {
  const navigate = useNavigate();
  const location = useLocation();
  const [isLogin, setIsLogin] = useState(true);
  const logout = () => {
    sessionStorage.removeItem("userInfo");
    navigate("/login");
    setIsLogin(false);
  };
  return (
    <>
      {!isLogin ? (
        navigate("/login")
      ) : (
        <div
          className="bg-co"
          style={{
            backgroundColor:"white ",
            height: "100vh",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
          }}>
          <div className="row">
          <div className="col-md-5  d-none d-sm-none d-md-block">
           <img
              src="https://img.freepik.com/free-vector/question-answers-background-with-search-symbol_1017-27388.jpg"
              alt=""
              style={{ width: "100%", height: "608px" }}>
            </img>
          </div>
           <div className="col-sm-3" style={{ height: "0px", width: "600px", marginTop:"40px" }}> 
               <div className="fw-bold fs-3 text-center text-dark ">
                Create your own Quiz
              </div>
              <div
                className="d-flex flex-column justify-content-center "
                style={{ marginTop: "35px" }}>
                <button className="btn btn-outline-primary">
                  <Link
                    to={`/home/SetQuestion`}
                    state={{ user: location.state.email }}>
                  <span className="text-dark ">Create Quiz</span>
                  </Link>
                </button>
                
                <button className="btn btn-outline-primary text-center mt-4">
                  <Link
                    to={`/home/MyQuizzes`}
                    state={{ user: location.state.email }}>
                  <span className="text-dark">My Quiz</span>
                  </Link>
                </button>
                <button className="btn btn-outline-dark mt-4" onClick={logout}>
                   Logout
                </button>
              </div>
              </div>
              </div>
            {/* <div className="col-sm-4"></div> */}
            
          </div>
         
      )}
    </>
  );
}

export default Home;