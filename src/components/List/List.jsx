import React from 'react';


function List({ render, items }) {


  
 

  return <>{render(items)}</>; // Render the list using the 'render' prop
}

export default List;
