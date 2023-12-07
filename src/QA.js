import { useState, useEffect } from "react";

const QA = ({ item, handleScore }) => {
  const [options, setOptions] = useState([]);

  useEffect(() => {
    let newOptions = item.incorrect_answers.slice();
    newOptions.push(item.correct_answer);

    if (newOptions.length === 2) {
      let correct_index = Math.floor(Math.random() * 2);

      let temp = newOptions[1];
      newOptions[1] = newOptions[correct_index];
      newOptions[correct_index] = temp;
    } else {
      let correct_index = Math.floor(Math.random() * 4);
      let temp = newOptions[3];
      newOptions[3] = newOptions[correct_index];
      newOptions[correct_index] = temp;
    }

    setOptions(newOptions);

    return () => {
      setSelectedOption(null);
    };
  }, [item]);

  const [selectedOption, setSelectedOption] = useState(null);

  const handlebtn1 = () => {
    setSelectedOption(0);
    if (options[0] === item.correct_answer) {
      handleScore();
    }
  };

  const handlebtn2 = () => {
    setSelectedOption(1);
    if (options[1] === item.correct_answer) {
      handleScore();
    }
  };

  const handlebtn3 = () => {
    setSelectedOption(2);
    if (options[2] === item.correct_answer) {
      handleScore();
    }
  };

  const handlebtn4 = () => {
    setSelectedOption(3);
    if (options[3] === item.correct_answer) {
      handleScore();
    }
  };

  return (
    <div className="container my-3">
      <div className="card">
        <div className="card-body">
          <h4>Q.{item.question}</h4>
        </div>
      </div>

      <p className="text-center" style={{ marginTop: "30px" }}>
        Please choose one of the following answers:
      </p>
      <hr />
      <div className="options">
        <button
          onClick={handlebtn1}
          className={`btn btn-outline-secondary ${
            selectedOption === 0 ? "clicked" : ""
          }`}
        >
          {options[0]}
        </button>
        <button
          onClick={handlebtn2}
          className={`btn btn-outline-secondary ${
            selectedOption === 1 ? "clicked" : ""
          }`}
        >
          {options[1]}
        </button>
        {options.length > 2 ? (
          <>
            <button
              onClick={handlebtn3}
              className={`btn btn-outline-secondary ${
                selectedOption === 2 ? "clicked" : ""
              }`}
            >
              {options[2]}
            </button>
            <button
              onClick={handlebtn4}
              className={`btn btn-outline-secondary ${
                selectedOption === 3 ? "clicked" : ""
              }`}
            >
              {options[3]}
            </button>
          </>
        ) : null}
      </div>
    </div>
  );
};

export default QA;
