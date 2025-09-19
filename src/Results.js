import React, { useState } from "react";
import Meaning from "./Meaning";
import "./Results.css"; // make sure this CSS file exists

export default function Results({ results }) {
  const [showAll, setShowAll] = useState(false);

  if (!results) return null;

  const firstThree = results.meanings.slice(0, 3);
  const extraMeanings = results.meanings.slice(3);
  const meaningsToShow = showAll ? results.meanings : firstThree;

  return (
    <div className="Results">
      <h2 className="mb-1">{results.word}</h2>

      {results.phonetic && (
        <p className="text-muted fst-italic mb-2">{results.phonetic}</p>
      )}

      {results.phonetics?.map((p, index) =>
        p.audio ? (
          <audio key={index} controls className="mb-2">
            <source src={p.audio} type="audio/mpeg" />
            Your browser does not support the audio element.
          </audio>
        ) : null
      )}

      {meaningsToShow.map((meaning, index) => (
        <Meaning key={index} meaning={meaning} />
      ))}

      {extraMeanings.length > 0 && (
        <button
          type="button"
          className="btn-pastel show-more mt-3 d-block mx-auto rounded-pill shadow-sm"
          onClick={() => setShowAll((prev) => !prev)}
        >
          {showAll ? "Show Less" : "Show More"}
        </button>
      )}
    </div>
  );
}
