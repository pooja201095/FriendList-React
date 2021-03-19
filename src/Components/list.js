import Item from './item';
import nextId from "react-id-generator";

export default function List({list,searchTerm}) {

    return <div className="list-container">
        {
            list.length ?
            searchTerm ?
            list.filter((item)=>(item.name).indexOf(searchTerm) > -1).map((item)=> <Item key={nextId('i')} item={item}/>)
            :
            list.map((item,i)=> <Item key={nextId('i')} item={item}/>) :
            <div> Add Friends to your list</div>
        }
    </div>
}