import React, { useState, useEffect } from 'react'
import axios from 'axios'

const ApiGet = () => {
    const [data, setData] = useState([])
    useEffect(() => {
      axios.get("https://jsonplaceholder.typicode.com/todos").then(jsonData => setData(jsonData.data.slice(0,15)))
    }
      , [])
    return (
      <div>
        <center>
        <table border={8}>
          <thead>
            <tr >
              <td>ID</td>
              <td>Title</td>
            </tr>
          </thead>
          <tbody>
            {
              data.map(
                item => 
                  <tr key={item.id} >
                    <td>{item.id}</td>
                    <td>{item.title}</td>
                  </tr>
              )
            }
          </tbody>
        </table>
        </center>
      </div>
    )
}

export default ApiGet
