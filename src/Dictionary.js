import React, { useState } from "react";
import axios from "axios";
import "./Dictionary.css";
let apiKey = '08tc66c2dd234aae04o0a7f3aee015bc'

export default function Dictionary() {
    let [keyword, setKeyword] = useState("");

    function handleResponse(response) {
        console.log(response.data[0]);
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
    </form>
    </div>

    ); 
};