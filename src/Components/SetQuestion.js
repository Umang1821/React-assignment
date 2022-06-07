import React, { useState } from "react";
import { useLocation } from "react-router-dom";



const SetQuestion = () => {
  const location = useLocation();

  const [question, setQuestion] = useState({
    title: "",
    question: "",
    option1: "",
    option2: "",
    option3: "",
    option4: "",
    answer: "",
  });

  const [isAdded, setIsAdded] = useState(false);

  const [addQuestionDetails, setAddQuestionDetails] = useState([]);

  const inputEvent = (event) => {
    const { name, value } = event.target;
    setQuestion((prevData) => {
      return {
        ...prevData,
        [name]: value,
      };
    });
    setIsAdded(false);
  };

  const addEvent = (e) => {
    setAddQuestionDetails((prevData) => {
      return [...prevData, question];
    });
    setIsAdded(true);
    document.getElementById("form").reset();
  };

  const addTOStorage = () => {
    localStorage.setItem(
      location.state.user + `${question.title}`,
      JSON.stringify(addQuestionDetails)
    );
    alert("Your Quiz has been successfully created. you can see it im home page");
    setAddQuestionDetails([]);
  };
  return (
    <div className="border border-primary">
      <div className="container-fluid bg-secondary">
        <div className="row mt-1 mx-1">
        <div className="col-md-4 px-2"></div>
          <div className="col-md-4 text-center text-bg-info h2">
            Enter Quiz Details
          </div>
          <div className="col-md-4"></div>
        </div>
        {isAdded ? (
          <h5 className="text-bg-success">Question is Added</h5>
        ) : null}
        <form className="mt-5" id="form">
          <div className="row">
            <label
              htmlFor="quiz_title"
              className="form-check-label col-md-2 h5"
            >
              Enter Quiz Title :
            </label>
            <input
              type="text"
              id="quiz_title"
              name="title"
              value={question.title}
              onChange={inputEvent}
              className="col-md-8"
              placeholder="Quiz Title"
            ></input>
          </div>
          <div className="row mt-3">
            <label htmlFor="question" className="form-check-label col-md-2 h5 ">
              Enter Question :
            </label>
            <textarea
              rows=""
              id="question"
              name="question"
              columns=""
              value={question.question}
              className="form-text col-md-8"
              placeholder="Enter your question"
              onChange={inputEvent}
            />
            <div className="container d-flex flex-column justify-content-center align-items-center">
              <input
                placeholder="option1"
                name="option1"
                className="mt-3 w-50"
                type="text"
                value={question.option1}
                onChange={inputEvent}
              />
              <input
                placeholder="option2 "
                name="option2"
                type="text"
                className="mt-3 w-50"
                value={question.option2}
                onChange={inputEvent}
              />
              <input
                placeholder="option3"
                name="option3"
                type="text"
                className="mt-3 w-50"
                value={question.option3}
                onChange={inputEvent}
              />
              <input
                placeholder="option4"
                name="option4"
                type="text"
                className="mt-3 w-50"
                value={question.option4}
                onChange={inputEvent}
              />
              <input
                placeholder="Enter the Correct ansnwer"
                name="answer"
                type="text"
                className="mt-3 w-50"
                value={question.answer}
                onChange={inputEvent}
              ></input>

              <div
                type="submit"
                onClick={addEvent}
                className="btn btn-outline-dark mt-4 "
              >
                Add another Question
              </div>
              <div
                type="submit"
                className="btn btn-outline-dark mt-4 mb-5 "
                onClick={addTOStorage}
                style={{ marginLeft: "5px" }}
              >
                Add Quiz
              </div>
              
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SetQuestion;