import data from "./Data.json"

import React,{useState} from 'react';

const itemPerPage = 10;
const itemTotalPage = data.length/itemPerPage;

const DataTable = () => {
  const [currentPage,setCurrentPage] = useState(1);
  const lastItem = currentPage*itemPerPage;
  const firstItem =lastItem-itemPerPage;
  const currentItem = data.slice(firstItem,lastItem);

  return (
    <table className="min-w-full divide-y divide-gray-200">
      <thead className="bg-gray-50">
        <tr>
          <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
            ID
          </th>
          <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
            First Name
          </th>
          <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
            Last Name
          </th>
          <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
            City
          </th>
        </tr>
      </thead>
      <tbody className="bg-white divide-y divide-gray-200">
        {currentItem.map(item => (
          <tr key={item.id}>
            <td className="px-6 py-4 whitespace-nowrap">{item.id}</td>
            <td className="px-6 py-4 whitespace-nowrap">{item.first_name}</td>
            <td className="px-6 py-4 whitespace-nowrap">{item.last_name}</td>
            <td className="px-6 py-4 whitespace-nowrap">{item.city}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default DataTable;
