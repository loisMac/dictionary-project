import React, { useEffect, useState } from "react";

export default function Meaning({ meaning }) {
  const [fadeIn, setFadeIn] = useState(false);

  useEffect(() => {
    setFadeIn(true);
    return () => setFadeIn(false);
  }, [meaning]);

  return (
    <div
      className={`Meaning card mb-3 p-3 shadow-sm pastel-card ${
        fadeIn ? "fade-in" : ""
      }`}
    >
      <h5 className="text-capitalize mb-2">{meaning.partOfSpeech}</h5>
      <p className="mb-1">{meaning.definition}</p>

      {meaning.example && (
        <p className="text-muted fst-italic mb-1">{meaning.example}</p>
      )}

      {meaning.synonyms?.length > 0 && (
        <p className="mb-1">
          <strong>Synonyms:</strong> {meaning.synonyms.join(", ")}
        </p>
      )}

      {meaning.antonyms?.length > 0 && (
        <p className="mb-0">
          <strong>Antonyms:</strong> {meaning.antonyms.join(", ")}
        </p>
      )}
    </div>
  );
}
