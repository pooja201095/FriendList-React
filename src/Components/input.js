import { useState,useContext } from "react";
import ListContext from './context';

export default function Input({updateList}) {
    let [listContext,setContext] = useContext(ListContext);
    let [name,setName] = useState('');
    console.log('input',listContext);

    const onChangeHandler = (e) => {
        setName(e.target.value);
    }

    const addToList = (e) => {
        if(e.key === "Enter") {
            let storedList = JSON.parse(sessionStorage.getItem('list')) || [];
            storedList.push({name:e.target.value,isFav: false});
            sessionStorage.setItem('list',JSON.stringify(storedList));
            // updateList(storedList);
            setContext(storedList);
            setName('');
        }
    }

    return <div className="input-field">
        <input type="text" value={name} onChange={onChangeHandler} onKeyDown={addToList}></input>
    </div>
}