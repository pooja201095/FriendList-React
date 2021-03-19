import { useState } from "react"

export default function Search({updateTerm}) {
    let [searchQuery,setsearchQuery]= useState('');

    function onChangeHandler(e) {
        setsearchQuery(e.target.value);
    }

    function searchList() {
        updateTerm(searchQuery);
    }

    return <div className="search-container">
        <input type="text" value={searchQuery} onChange={onChangeHandler} onKeyUp={searchList}/>
    </div>
}