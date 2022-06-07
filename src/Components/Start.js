import React from "react";

const Start = ({ onQuizStart }) => {
  return (
    <div className="card" style={{ width: "18rem" }}>
      <div className="card-text">
        <div className="content">
          <h1 className="card-title text-center">All the best</h1>
          <div className="d-grid">
            <button
              className="btn btn-outline-primary btn-block btn-lg  "
              onClick={onQuizStart}
            >
              Click to Start
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Start;