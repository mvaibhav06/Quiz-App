import { useState } from "react";

const Intro = ({ getApi, isButtonClicked }) => {
  const [category, setCategory] = useState("any");
  const [amount, setAmount] = useState("5");
  const [difficulty, setDifficulty] = useState("any");
  const [type, setType] = useState("any");

  const finalApi = () => {
    let api = `https://opentdb.com/api.php?amount=${amount}`;
    if (category !== "any") {
      api += `&category=${category}`;
    }
    if (difficulty !== "any") {
      api += `&difficulty=${difficulty}`;
    }
    if (type !== "any") {
      api += `&type=${type}`;
    }
    return api;
  };

  const handleStart = () => {
    let api = finalApi();
    getApi(api);
    isButtonClicked(true);
  };

  const handleType = (event) => {
    setType(event.target.value);
  };

  const handleDiff = (event) => {
    setDifficulty(event.target.value);
  };

  const handleAmount = (event) => {
    setAmount(event.target.value);
  };

  const handleCategory = (event) => {
    setCategory(event.target.value);
  };

  return (
    <div className="container my-3">
      <h2>The Ultimate Trivia Quiz</h2>
      <hr />
      <p>In which category do you want to play the quiz?</p>

      <select
        value={category}
        onChange={handleCategory}
        className="form-select"
        aria-label="Default select example"
      >
        <option disabled>SELECT QUIZ CATEGORY</option>
        <option value="any">Any Category</option>
        <option value="9">General Knowledge</option>
        <option value="10">Entartainment: Books</option>
        <option value="11">Entartainment: Films</option>
        <option value="21">Sports</option>
      </select>

      <p className="my-2">How many questions do you want in your quiz?</p>

      <select
        value={amount}
        onChange={handleAmount}
        className="form-select"
        aria-label="Default select example"
      >
        <option disabled>SELECT NO. OF QUESTIONS</option>
        <option value="1">1</option>
        <option value="2">2</option>
        <option value="3">3</option>
        <option value="4">4</option>
        <option value="5">5</option>
      </select>

      <p className="my-2">How difficult do you want your quiz to be?</p>
      <select
        value={difficulty}
        onChange={handleDiff}
        className="form-select"
        aria-label="Default select example"
      >
        <option disabled>SELECT DIFFICULTY LEVEL</option>
        <option value="any">Any Difficulty</option>
        <option value="easy">Easy</option>
        <option value="medium">Medium</option>
        <option value="hard">Hard</option>
      </select>

      <p className="my-2">Which type of questions do you want in your quiz?</p>
      <select
        value={type}
        onChange={handleType}
        className="form-select"
        aria-label="Default select example"
      >
        <option disabled>SELECT QUESTION TYPE</option>
        <option value="any">Any Type</option>
        <option value="multiple">Multiple Choice</option>
        <option value="boolean">True / False</option>
      </select>
      <p className="my-2">Please select the countdown time for your quiz.</p>

      <div className="timer">
        <select className="form-select" aria-label="Default select example">
          <option disabled>SELECT MINUTES</option>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
          <option value="5">5</option>
        </select>

        <select className="form-select" aria-label="Default select example">
          <option disabled>SELECT SECONDS</option>
          <option value="0">0</option>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
          <option value="5">5</option>
        </select>
      </div>
      <button onClick={handleStart} className="my-3 btn btn-primary">
        Play Now &nbsp;&nbsp; &#9658;
      </button>
    </div>
  );
};

export default Intro;
