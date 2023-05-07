import React from 'react'

const Records = ({data}) => {
    
  return (  
    <table className="table">
        <thead>
            <tr>
                <th scope='col'>ID</th>
                <th scope='col'>Title</th>
                <th scope='col'>Body</th>
                

            </tr>
        </thead>
        <tbody>
            {data.map(item => (
                
                <tr key={item.id}>
                    <td>{item.id} </td>
                    <td>{item.title} </td>
                    <td>{item.body} </td>
                    
                
                </tr>
            ))}
        </tbody>
    </table>
  ) 
}

export default Records ;