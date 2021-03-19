import React from 'react';

let list = JSON.parse(sessionStorage.getItem('list')) || [];

const ListContext = React.createContext(list);

export default ListContext;