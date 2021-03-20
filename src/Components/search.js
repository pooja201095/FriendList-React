import { useState } from "react"

export default function Search({updateTerm}) {
    let [searchQuery,setsearchQuery]= useState('');

    function onChangeHandler(e) {
        setsearchQuery(e.target.value);
    }

    function searchList() {
        updateTerm(searchQuery);
    }

    return <div className="input-box">
        <input placeholder="Enter search text..." type="text" className="input-bar" value={searchQuery} onChange={onChangeHandler} onKeyUp={searchList}/>
    </div>
}