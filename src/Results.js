import React, { useState } from "react";
import Meaning from "./Meaning";

export default function Results(props) {
  const [showAll, setShowAll] = useState(false);

  if (!props.results) return null;

  const result = props.results;
  const firstThree = result.meanings.slice(0, 3);
  const extraMeanings = result.meanings.slice(3);
  const meaningsToShow = showAll ? result.meanings : firstThree;

  return (
    <div className="Results">
      <h2>{result.word}</h2>

      {meaningsToShow.map((meaning, index) => (
        <Meaning key={index} meaning={meaning} />
      ))}

      {extraMeanings.length > 0 && (
        <button
          type="button"
          className="btn btn-primary"
          onClick={() => setShowAll((prev) => !prev)}
        >
          {showAll ? "Show Less" : "Show More"}
        </button>
      )}
    </div>
  );
}
