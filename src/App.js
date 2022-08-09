import React, { useState } from 'react';
import ReactPaginate from 'react-paginate';
// import Items from './component/Items';
import JsonData from "./MOCK_DATA.json"
import './App.css';

function App() {
  const [users, setUsers]=useState(JsonData.slice(0,100))
  const [pageNumber, setPageNumber]=useState(0)
  const usersPerPage=5
  const pagesVisited=pageNumber*usersPerPage 

  const displayUsers=users.slice(pagesVisited, pagesVisited+usersPerPage).map((user)=>{
    return(
      <div className='user'>
        <h3>{user.first_name}</h3>
        <h3>{user.last_name}</h3>
        <h3>{user.email}</h3>
      </div>
    )

  })
  const pageCount=Math.ceil(users.length/usersPerPage)

  const changePage=({selected})=>{
    setPageNumber(selected)
  }
  return (
    <div className='App'>
      {displayUsers}
      <ReactPaginate 
      previousLabel={"Previous"}
      nextLabel={"Next"}
      pageCount={pageCount}
      onPageChange={changePage}
      containerClassName={"paginationBttns"}
      previousLinkClassName={"previousBttn"}
      nextLinkClassName={"nextBttn"}
      disabledClassName={"paginationDisabled"}
      activeClassName={"paginationActive"}/>
    </div>
  );
}

export default App;
