
import { useState } from 'react';
import './App.css';
import Input from './Components/input';
import List from './Components/list';
import Search from './Components/search';
import ListContext from './Components/context';

function App() {
  let list = JSON.parse(sessionStorage.getItem('list')) || [];
  let [searchTerm, setSearchTerm] = useState('');
  const [listContext, setContext] = useState(list);
  console.log("app",listContext);

  // const onListUpdated = (list) => {
  //   setList(list);
  // }

  const onSearchTermUpdate = (term) => {
    setSearchTerm(term);
  }

  const clearList = () => {
    // setList([]);
    setContext([]);
    sessionStorage.removeItem('list');
  }

  return (
    <ListContext.Provider value={[listContext, setContext]}>
    {/* <div className="app">  */}
      <Input ></Input>
      <Search updateTerm={onSearchTermUpdate} ></Search>
      <List list={listContext} searchTerm={searchTerm}></List>
      <button onClick={clearList}>clear</button>
    {/* </div> */}
   </ListContext.Provider>
  );
}

export default App;
