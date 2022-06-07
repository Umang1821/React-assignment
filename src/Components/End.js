import React, { useEffect, useState } from "react";

const End = ({ results, data, onReset, onAnswersCheck, time }) => {
  const [correctAnswers, setCorrectAnswers] = useState(0);

  useEffect(() => {
    let correct = 0;
    results.forEach((result, index) => {
      if (result.a === data[index].answer) {
        correct++;
      }
    });
    setCorrectAnswers(correct);
    
  }, []);
  return (
    <div className="card bg-light text-dark" style={{ width: "20rem" }}>
      <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSS5hIwjqVip_RrKmFwa1bI8AkkGgZ4ybnhyFGyT4PjJ5hxNfzsVVQ5ZJXd9fOYgfaaYNI&usqp=CAU" alt="" />
      <div className="card-body " style={{width: "700px"}}>
        <div className="content">
          <h3>Your answered</h3>
          <p>
            {correctAnswers} out of {data.length}
          </p>
          <h3>correct</h3>

          
          <button className="btn btn-outline-primary mt-5 px-3" onClick={onReset}>
            Try again
          </button>
        </div>
        
      </div>
    </div>
  );
};

export default End;