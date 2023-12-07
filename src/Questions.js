import { useState, useEffect } from "react";
import axios from "axios";
import Spinner from "./Spinner";
import QA from "./QA";
import Result from "./Result";

const Questions = ({ api }) => {
  const [data, setData] = useState([]);
  const [isLoading, setLoading] = useState(true);
  const [index, setIndex] = useState(0);
  const [showResult, setResult] = useState(false);

  const [score, setScore] = useState(0);

  const handleScore = () => {
    setScore(score + 1);
  };

  const fetchData = async () => {
    const response = await axios.get(`${api}`);
    setData(response.data.results);
    setLoading(false);
  };

  const handleQuestion = () => {
    if (index < data.length - 1) {
      setIndex(index + 1);
    } else {
      setResult(true);
    }
  };

  useEffect(() => {
    fetchData();
    console.log(data);
  }, []);

  return (
    <div>
      {isLoading && <Spinner />}
      {!showResult && !isLoading && (
        <QA handleScore={handleScore} item={data[index]} />
      )}
      {!showResult && !isLoading && (
        <div className="container next">
          <button
            onClick={handleQuestion}
            className="nextButton btn btn-primary"
          >
            Next &nbsp; &rarr;
          </button>
        </div>
      )}

      {showResult && <Result score={score} totalQuestions={data.length} />}
    </div>
  );
};

export default Questions;
