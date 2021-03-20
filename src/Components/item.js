import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar as farfaStar } from '@fortawesome/free-regular-svg-icons';
import { faStar as fasfaStar } from '@fortawesome/free-solid-svg-icons';
import { faTrashAlt as farfaTrash } from '@fortawesome/free-solid-svg-icons';
import { useContext } from 'react';
import ListContext from './context';

export default function Item({item}) {
    let [listContext,setContext] = useContext(ListContext);

    const setFavourite = () => {
        let selectedEle = JSON.parse(sessionStorage.getItem('list')).filter((ele)=>ele.name===item.name);
        let modifiledList = JSON.parse(sessionStorage.getItem('list')).map((item) => {
            if(item.name === selectedEle[0].name){
                item.isFav = !item.isFav;
            }
            return item;
        });
        sessionStorage.setItem('list',JSON.stringify(modifiledList));
        setContext(modifiledList);
    }

    const deleteFriend = () => {
        let response = window.confirm('Are you sure you want to delete this friend?');
        if(response) {
        let modifiledList = JSON.parse(sessionStorage.getItem('list')).filter((ele)=>ele.name!==item.name);
        sessionStorage.setItem('list',JSON.stringify(modifiledList));
        setContext(modifiledList);
        }
    }

    return <div className="item">
        <div className="item-name">{item.name}</div>
        <div className="action-btn">
        <span className="icon-btn"><FontAwesomeIcon icon={item.isFav ? fasfaStar : farfaStar} onClick={setFavourite}/></span>
        <span className="icon-btn"><FontAwesomeIcon icon={farfaTrash} onClick={deleteFriend} /></span>
        </div>
    </div>
}