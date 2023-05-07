import "bootstrap/dist/css/bootstrap.min.css"
import Data from"./Data.json"
import { useState } from 'react';
const PageData = () =>{
  const[currentPage,setCurrentPage]=useState(1)
  const dataPerPage = 10;
  const lastPage = currentPage*dataPerPage;
  const firstPage = lastPage - dataPerPage;
  const records = Data.slice(firstPage,lastPage);
  const nPages =Math.ceil(Data.length/dataPerPage)
  const pageNumbers = [...Array(nPages+1).keys()].slice(1)
  const prevPage = () =>{
    if(currentPage!==firstPage){
      setCurrentPage(currentPage-1)
    }

  }
  const nextPage =() =>{
    if (currentPage!==lastPage){
      setCurrentPage(currentPage+1)
    }
  
  }

   
  
  return (
    <div>
      
      <table className='table'>
        <thead>
          <tr>
            <th>ID</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>City</th>

          </tr>
        </thead>
        <tbody>{
          records.map((data) =>(
            <tr key={data.id}>
              <td>{data.id}</td>
              <td>{data.first_name}</td>
              <td>{data.last_name}</td>
              <td>{data.city}</td>

          </tr>
          )
          )}
          
          
        </tbody>

      </table>
      <nav>
        <ul className='pagination'>
          <li className='page-item'>
            <a className='page-link' onClick={prevPage} >Previous</a>
          </li>
          {pageNumbers.map((n,i)=>(
          <li className={`page-item ${currentPage === n ? 'active' : ''} `} key = {i}>
            <a className='page-link' onClick={()=> setCurrentPage(n)} >{n}</a>
          </li>
          ))}
          <li className='page-item'>
            <a className='page-link' onClick={nextPage}  > Next</a>

          </li>
        
        </ul>
      </nav>


    </div>
  );


}
export default PageData;