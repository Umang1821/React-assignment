import React from "react";

const Modal = ({ onClose, results, data }) => {
  return (
    <div className="modal" tabIndex={"-1"} id="staticBackdrop">
      <p></p>
      <div className="modal-dialog" onClick={onClose}></div>
      <div className="modal-content">
        <header className="modal-header">
          <p className="modal-title">Your answers</p>
          <button className="delete" onClick={onClose}></button>
        </header>
        <section className="modal-body content">
          <ul>
            {results.map((result, i) => (
              <li key={i} className="mb-6">
                <p>
                  <strong>{result.q}</strong>
                </p>
                <p
                  className={
                    result.a === data[i].answer
                      ? "bg-success text-white p-2"
                      : "bg-danger text-white p-2"
                  }
                >
                  Your answer: {result.a}
                </p>
                {result.a !== data[i].answer && (
                  <p className="bg-link text-white p-2">
                    Correct answer: {data[i].answer}
                  </p>
                )}
              </li>
            ))}
          </ul>
        </section>
      </div>
    </div>
  );
};

export default Modal;