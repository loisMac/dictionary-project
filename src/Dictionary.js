import React, { useState } from "react";
import axios from "axios";
import Results from "./Results.js";
import "./Dictionary.css";


export default function Dictionary() {
    let [keyword, setKeyword] = useState("");
    let [results, setResults] = useState(null);
    let apiKey = "08tc66c2dd234aae04o0a7f3aee015bc";
    

    function handleResponse(response) {
        setResults(response.data[0]);
    }

    function search(event) {
        event.preventDefault();
       
    }

    // API documentation link: https://www.shecodes.io/learn/apis/dictionary

    let apiUrl = `https://api.shecodes.io/dictionary/v1/define?word=${keyword}&key=${apiKey}`;
    axios.get(apiUrl).then(handleResponse);

    function handleKeywordChange(event) {
        setKeyword(event.target.value);
    }

    return (
    <div className="Dictionary">
    <form onSubmit={search}>
    <input type="search"  onChange={handleKeywordChange} />
    <button type="submit">Search</button>
    </form>
    <Results results={results} />
    </div>

    ); 
};