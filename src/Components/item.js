import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar as farfaStar } from '@fortawesome/free-regular-svg-icons';
import { faStar as fasfaStar } from '@fortawesome/free-solid-svg-icons';
import { faTrashAlt as farfaTrash } from '@fortawesome/free-solid-svg-icons';
import { useContext, useState } from 'react';
import ListContext from './context';

export default function Item({item}) {
    let [listContext,setContext] = useContext(ListContext);
    // let [currentItem,setCurrentItem]= useState(item);
    console.log('item',listContext)

    const setFavourite = () => {
        let selectedEle = JSON.parse(sessionStorage.getItem('list')).filter((ele)=>ele.name===item.name);
        let modifiledList = JSON.parse(sessionStorage.getItem('list')).map((item) => {
            if(item.name === selectedEle[0].name){
                item.isFav = !item.isFav;
                // setCurrentItem(item);
            }
            return item;
        });
        sessionStorage.setItem('list',JSON.stringify(modifiledList));
        setContext(modifiledList);
    }

    const deleteFriend = () => {
        let modifiledList = JSON.parse(sessionStorage.getItem('list')).filter((ele)=>ele.name!==item.name);
        sessionStorage.setItem('list',JSON.stringify(modifiledList));
        setContext(modifiledList);
    }

    return <div className="item">
        {item.name}
        <FontAwesomeIcon className="favourite" icon={item.isFav ? fasfaStar : farfaStar} onClick={setFavourite}/>
        <FontAwesomeIcon className="delete" icon={farfaTrash} onClick={deleteFriend}/>
    </div>
}