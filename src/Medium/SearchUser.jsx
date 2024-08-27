import {useState, useEffect} from 'react'

export const SearchUser = () => {
    const [searchTerm, setSearchTerm] = useState('');
    //debounce
    const [usersData, setUsersData] = useState([]);
    const [searchText, setSearchText] = useState("");
    const [filteredUser, setFilteredUser] = useState({});
    useEffect(() => {
      fetch('https://jsonplaceholder.typicode.com/users')
        .then((result) => result.json())
        .then((data) => {
          console.log("users", data)
          setUsers(data)
        })
        .catch(error => console.error('Error fetching user data:', error));
    }, []);
    //search
    const filteredUsers = users.filter(user =>
      user.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
  //debounce
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((data) => {
        console.log("fetched data", data);
        setUsersData(data);
      })
      .catch((error) => {
        console.log("Errror While fetching user data");
      });
  }, []);
    useEffect(() => {
      const abortController = new AbortController();
      const filterTimer = setTimeout(() => {
        try {
          fetch(
            `https://jsonplaceholder.typicode.com/users?username=${searchText}`,
            {
              signal: abortController.signal, // Pass the AbortController's signal to the fetch request
            }
          )
            .then((response) => response.json())
            .then((data) => {
              console.log("FilteredUser ", data);
              setFilteredUser(data[0]);
            });
        } catch (error) {
          if (error.name === "AbortError") {
            console.log("Request was aborted");
          } else {
            console.error("Error fetching user data:", error);
          }
        }
      }, 300);
  
      return () => {
        abortController.abort();
        clearTimeout(filterTimer);
      };
    }, [searchText]);
  
    const handleSearch = (value) => {
      setSearchText(value);
    };
    const handleAscendingSort = () => {
      const users = [...usersData].sort((a, b) =>
        a.username.localeCompare(b.username)
      );
      setUsersData(users);
    };
  
    const handleDescendingSort = () => {
      const users = [...usersData].sort((a, b) =>
        b.username.localeCompare(a.username)
      );
      setUsersData(users);
    };
  console.log(filteredUser);
    console.log(users);
  return (<>
    <div>SearchUser</div>
 <h6>   <h4><strong>Implement Search Functionality</strong></h4>
Fetch the user details and display user names. Also, implement a search bar functionality on the username.</h6>
   <input
   type="search"
   value={searchTerm}
   onChange={(e)=>setSearchTerm(e.target.value)}
   >
   </input>
   <table  style={{ borderCollapse: 'collapse', margin: 'auto', width: '60%', border: '1px solid #ddd' }}><thead>
        <tr  style={{ border: '1px solid #ddd', backgroundColor: 'blue', color: 'white' }}><th>S.No</th><th>Name</th><th>User Name</th><th>Company</th><th>Email</th><th>Mobile</th><th>Address</th><th>Website</th></tr></thead>
        <tbody>
          {filteredUsers && filteredUsers.map((datas) => { return (<><tr><th>{datas.id}</th><th>{datas.name}</th><th>{datas.username}</th><th>{datas.company.name}</th><th>{datas.email}</th><th>{datas.mobile}</th><th>{datas.address.street},{datas.address.city},{datas.address.zipcode}</th><th>{datas.website}</th></tr></>) })}
        </tbody>

      </table>
  </>)
}
