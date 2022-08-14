import React, { useState } from 'react';
import './Table.css';
import { AiFillProfile } from "react-icons/ai";

function Table() {
      const [data, setData] = useState([]);

      async function getData() {
      
            let fetchedData = await fetch("/segments");
            let response = await fetchedData.json();
            setData(response['data']);
      }
      
      getData();

      const getId = () => {
            let icons = document.querySelectorAll('.icon');
            for(let i = 0; i<icons.length; i++) {
                  icons[i].addEventListener('click', () => {
                        localStorage.setItem("data", JSON.stringify(data[i]));
                        // eslint-disable-next-line no-restricted-globals
                        location.href = "Info";
                  });
            }
      }

      return (
            <div className="tableContainer">
                  <table className='table'>
                        <thead>
                        <tr className='table_row'>
                              <th>Segment</th>
                              <th>Country</th>
                              <th>Product</th>
                              <th>Profile View</th>
                        </tr>
                        </thead>
                        <tbody>
                        {data.map((element) => (
                              <tr className='table_content_row'>
                                    <td>{element.Segment}</td>
                                    <td>{element.Country}</td>
                                    <td>{element.Product}</td>
                                    <td>
                                          <AiFillProfile className='icon' onClick={getId}/>
                                    </td>
                              </tr>
                        ))}
                        </tbody>
                  </table>
            </div>
      )
}

export default Table