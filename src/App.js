
import { useState } from 'react';
import './App.css';
import Input from './Components/input';
import List from './Components/list';
import Search from './Components/search';
import ListContext from './Components/context';

function App() {
  let list = JSON.parse(sessionStorage.getItem('list')) || [];
  let [searchTerm, setSearchTerm] = useState('');
  let [isChecked, setIsChecked] = useState(false);
  const [listContext, setContext] = useState(list);
  let [pageFrom,setPageFrom] = useState(0);

  const onSearchTermUpdate = (term) => {
    setSearchTerm(term);
  }

  const clearList = () => {
    let userResponse = window.confirm('Are you sure you want to clear the list?');
    if(userResponse){
    setContext([]);
    sessionStorage.removeItem('list');
    }
  }

  const previousPage = () => {
    setPageFrom(pageFrom-4)
  }

  const nextPage = () => {
    setPageFrom(pageFrom+4);
  }

  return (
    <ListContext.Provider value={[listContext, setContext]}>
    <div className="app"> 
      <h3 className ="title">Friend List</h3>
      <hr></hr>
      <Input ></Input>
      {listContext.length ? <Search updateTerm={onSearchTermUpdate} ></Search>: ''}
      <List list={listContext} searchTerm={searchTerm} isChecked={isChecked} from={pageFrom}></List>
      {listContext.length>4 ?
      <>
      {pageFrom ? <button className="page icon-btn" onClick={previousPage}>&lt;</button>:''}
      {!listContext.length<= pageFrom &&  listContext.length/4 >= (pageFrom/4)+1 ?<button className="page icon-btn" onClick={nextPage}>&gt;</button>:''}
      </>: ''}
      {listContext.length ?
      <>
      <span className="checkbox-field"><input type="checkbox" checked={isChecked} onChange={()=>setIsChecked(!isChecked)}/><label>Sort By Favourite</label></span>
      <button className="clear" onClick={clearList}>Clear All</button>
      </> :
      ''}
    </div>
   </ListContext.Provider>
  );
}

export default App;
