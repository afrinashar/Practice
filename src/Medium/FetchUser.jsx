<<<<<<< HEAD
/* eslint-disable react/no-unescaped-entities */
import {useEffect, useState} from 'react'

const FetchUser = () => {
    const [users, setUsers] = useState([]);
      
    useEffect(() => {
      fetch('https://jsonplaceholder.typicode.com/users')
        .then((result) => result.json())
        .then((data) => {
          console.log("users", data)
          setUsers(data)
        })
        .catch(error => console.error('Error fetching user data:', error));
    }, []);
  return (
    <div>
        <h6>`Task-1: Fetch the users list and display
        Write code to fetch the user's details from the open source rest endpoint and display the user's details in the table with proper style and in the center.`</h6>
      <table  style={{ borderCollapse: 'collapse', margin: 'auto', width: '60%', border: '1px solid #ddd' }}><thead>
        <tr  style={{ border: '1px solid #ddd', backgroundColor: 'blue', color: 'white' }}><th>S.No</th><th>Name</th><th>User Name</th><th>Company</th><th>Email</th><th>Mobile</th><th>Address</th><th>Website</th></tr></thead>
        <tbody>
          {users && users.map((datas) => { return (<><tr><th>{datas.id}</th><th>{datas.name}</th><th>{datas.username}</th><th>{datas.company.name}</th><th>{datas.email}</th><th>{datas.mobile}</th><th>{datas.address.street},{datas.address.city},{datas.address.zipcode}</th><th>{datas.website}</th></tr></>) })}
        </tbody>

      </table>
    </div>
  )
}

export default FetchUser
=======
/* eslint-disable react/no-unescaped-entities */
import {useEffect, useState} from 'react'

const FetchUser = () => {
    const [users, setUsers] = useState([]);
      
    useEffect(() => {
      fetch('https://jsonplaceholder.typicode.com/users')
        .then((result) => result.json())
        .then((data) => {
          console.log("users", data)
          setUsers(data)
        })
        .catch(error => console.error('Error fetching user data:', error));
    }, []);
  return (
    <div>
        <h6>`Task-1: Fetch the users list and display
        Write code to fetch the user's details from the open source rest endpoint and display the user's details in the table with proper style and in the center.`</h6>
      <table  style={{ borderCollapse: 'collapse', margin: 'auto', width: '60%', border: '1px solid #ddd' }}><thead>
        <tr  style={{ border: '1px solid #ddd', backgroundColor: 'blue', color: 'white' }}><th>S.No</th><th>Name</th><th>User Name</th><th>Company</th><th>Email</th><th>Mobile</th><th>Address</th><th>Website</th></tr></thead>
        <tbody>
          {users && users.map((datas) => { return (<><tr><th>{datas.id}</th><th>{datas.name}</th><th>{datas.username}</th><th>{datas.company.name}</th><th>{datas.email}</th><th>{datas.mobile}</th><th>{datas.address.street},{datas.address.city},{datas.address.zipcode}</th><th>{datas.website}</th></tr></>) })}
        </tbody>

      </table>
    </div>
  )
}

export default FetchUser
>>>>>>> 40d3f5c578858cb4d8da71bbb6a2db7ab3b0c574
