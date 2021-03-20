import Item from './item';
import nextId from "react-id-generator";

export default function List({list,searchTerm,isChecked,from}) {
    // let sorted = isChecked ? 
    // [...list].sort((a,b)=> a.name < b.name ? -1 : 1 ).sort((a,b)=> a.isFav==b.isFav ? 0 : a.isFav>b.isFav ? -1 : 1) :
    // [...list]; //both alphabetically and by fav

    let currentPageItems = list.slice(from, from+4);

    let sorted = isChecked ? 
    [...currentPageItems].sort((a,b)=> a.isFav===b.isFav ? 0 : a.isFav>b.isFav ? -1 : 1) :
    [...currentPageItems];

    return <div className="list-container">
        {
            sorted.length ?
            searchTerm ?
            sorted.filter((item)=>item.name.toUpperCase().indexOf(searchTerm.toUpperCase()) > -1).map((item)=> <Item key={nextId('i')} item={item}/>)
            :
            sorted.map((item,i)=> <Item key={nextId('i')} item={item}/>) :
            <div className="title"> Add Friends to your list</div>
        }
    </div>
}