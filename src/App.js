import "./App.css";
import Intro from "./Intro";
import Navbar from "./Navbar";
import { useState } from "react";
import Questions from "./Questions";

function App() {
  const [api, setApi] = useState("https://opentdb.com/api.php?amount=5");
  const [isSubmitted, setSubmitted] = useState(false);

  const isButtonClicked = (bool) => {
    setSubmitted(bool);
  };

  const getApi = (finalApi) => {
    setApi(finalApi);
  };

  return (
    <div>
      <Navbar />
      {!isSubmitted && (
        <Intro getApi={getApi} isButtonClicked={isButtonClicked} />
      )}
      {isSubmitted && <Questions api={api} />}
    </div>
  );
}

export default App;
