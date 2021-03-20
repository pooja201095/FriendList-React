import { useState,useContext } from "react";
import ListContext from './context';

export default function Input() {
    let [listContext,setContext] = useContext(ListContext);
    let [name,setName] = useState('');

    const onChangeHandler = (e) => {
        setName(e.target.value);
    }

    const addToList = (e) => {
        if(e.key === "Enter") {
            let storedList = JSON.parse(sessionStorage.getItem('list')) || [];
            var regExp = /[a-zA-Z]/g;
            if(!storedList.filter((ele)=> ele.name === e.target.value).length && regExp.test(e.target.value)) {
                storedList.push({name:e.target.value,isFav: false});
                sessionStorage.setItem('list',JSON.stringify(storedList));
                setContext(storedList);
            } else {
                alert('Please enter a valid non-duplicate name')
            }
            setName('');
        }
    }

    return <div className="input-box">
        <input className="input-bar" placeholder="Enter your friend's name..." type="text" value={name} onChange={onChangeHandler} onKeyDown={addToList}></input>
    </div>
}