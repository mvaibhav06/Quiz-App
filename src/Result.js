const Result = ({ score, totalQuestions }) => {
  const grade = () => {
    let percent = (score / totalQuestions) * 100;
    if (percent >= 90) return "A";
    else if (percent >= 80) return "B";
    else if (percent >= 70) return "C";
    else if (percent >= 60) return "D";
    else return "F";
  };
  return (
    <div>
      <figure className="text-end my-3">
        <blockquote className="blockquote">
          <p>Learning is a journey. Keep going, and you'll get there.</p>
        </blockquote>
        <figcaption className="blockquote-footer">
          Someone famous in <cite title="Source Title">Vaibhav Masetty</cite>
        </figcaption>
      </figure>

      <div className="container">
        <h4>Grade: {grade()}</h4>
        <h4>Total Questions: {totalQuestions}</h4>
        <h4>Correct Answers: {score}</h4>
        <h4>Your Score: {(score / totalQuestions) * 100}%</h4>
        <h4>Passing Score: 60%</h4>
      </div>
    </div>
  );
};

export default Result;
