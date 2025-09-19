import React, { useState } from "react";
import axios from "axios";
import Results from "./Results.js";
import "./Dictionary.css";

export default function Dictionary() {
  const [keyword, setKeyword] = useState("");
  const [results, setResults] = useState(null);
  const apiKey = "08tc66c2dd234aae04o0a7f3aee015bc";

  function handleResponse(response) {
    setResults(response.data);
  }

  function search(event) {
    event.preventDefault();
    if (!keyword) return;

    const apiUrl = `https://api.shecodes.io/dictionary/v1/define?word=${keyword}&key=${apiKey}`;
    axios.get(apiUrl).then(handleResponse).catch((err) => console.error(err));
  }

  function handleKeywordChange(event) {
    setKeyword(event.target.value);
  }

  return (
    <div className="Dictionary">
      <div className="search-container mb-5 text-center">
        <form onSubmit={search} className="d-flex justify-content-center">
          <input
            type="search"
            value={keyword}
            onChange={handleKeywordChange}
            placeholder="Search a word"
            className="form-control rounded-pill shadow-sm"
          />
          <button
            type="submit"
            className="btn btn-pastel ms-2 rounded-pill shadow-sm"
          >
            Search
          </button>
        </form>
      </div>

      <Results results={results} />
    </div>
  );
}
