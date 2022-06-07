import React from "react";
import { useLocation } from "react-router-dom";
import { Link } from "react-router-dom";
const MyQuizzes = () => {
  const location = useLocation();
  const keyArr = Object.keys(localStorage);
  const user = location.state.user;
  const Delete = () => {


    {keyArr.map((obj, i) => {

      if (obj.includes(user)) {

        const arr = JSON.parse(localStorage.removeItem(obj));

      }

    })}

  }
  return (
    
    <div>
      {keyArr.map((obj) => {
        if (obj.includes(user)) {
          const arr = JSON.parse(localStorage.getItem(obj));
          const title = obj.substring(user.length);
          return (
            <div className="container  ">
              <div className="card text-center  mt-3" style={{ width: "500px", position:"flex" }}>
                 <img src="https://wallpaperaccess.com/full/2384073.jpg" alt="" style={{ height:"150px"}}/> 
                <div className="card-body ">
                  <h5 className="card-title">{title}</h5>
                  
                  <div className="d-grid ">
                    <button className="btn btn-outline-primary">
                      <Link to={`/home/MyQuizzes/Attempt`} state={{ arr }}>
                        <span className="text-dark">Attempt </span>
                      </Link>
                    </button>
                    <buton className="btn btn-outline-danger mt-3" onClick={Delete}> Delete quiz

                    </buton>
                  </div>
                </div>
              </div>
            </div>
            
          );
        }
        return null;
      })}
    </div>
    
  );
};

export default MyQuizzes;
