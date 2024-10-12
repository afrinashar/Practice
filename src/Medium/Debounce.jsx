import {useState, useEffect} from 'react'

const Debounce = () => {


    const [users, setUsers] = useState([]);
    const [searchTerm, setSearchTerm] = useState("");
    //debounce
    const [usersData, setUsersData] = useState([]);
    const [searchText, setSearchText] = useState("");
    const [filteredUser, setFilteredUser] = useState({});
    useEffect(() => {
      fetch("https://jsonplaceholder.typicode.com/users")
        .then((result) => result.json())
        .then((data) => {
          console.log("users", data);
          setUsers(data);
        })
        .catch((error) => console.error("Error fetching user data:", error));
    }, []);
    //search
    const filteredUsers = users.filter((user) =>
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

  return (
    <div>
       <h6>
        {" "}
        Task-3:{" "}
        <h4>
          <strong>
            Optimized Search Using debounce and cancelable technique
          </strong>
        </h4>
        Improve the search functionality using debounce and cancelable request
        and display filtered user details only.
      </h6>
      <h4>Users Data</h4>
      <input
        type="text"
        placeholder="Search by username"
        value={searchText}
        onChange={(e) => handleSearch(e.target.value)}
      />
      <table
        style={{
          borderCollapse: "collapse",
          margin: "auto",
          width: "60%",
          border: "1px solid #ddd",
        }}
      >
        <thead>
          <tr
            style={{
              border: "1px solid #ddd",
              backgroundColor: "blue",
              color: "white",
            }}
          >
            <th>S.No</th>
            <th>Name</th>
            <th>User Name</th>
            <th>Company</th>
            <th>Email</th>
            <th>Mobile</th>
            <th>Address</th>
            <th>Website</th>
          </tr>
        </thead>
        <tbody>
          {usersData &&
            usersData.map((datas) => {
              return (
                <>
                  <tr>
                    <th>{datas.id}</th>
                    <th>{datas.name}</th>
                    <th>{datas.username}</th>
                    <th>{datas.company.name}</th>
                    <th>{datas.email}</th>
                    <th>{datas.mobile}</th>
                    <th>
                      {datas.address.street},{datas.address.city},
                      {datas.address.zipcode}
                    </th>
                    <th>{datas.website}</th>
                  </tr>
                </>
              );
            })}
        </tbody>
      </table>
      <div>
        <h4>Search Result</h4>
        {filteredUser && filteredUser.name}
      </div>
      <h6></h6>
    </div>
  )
}

export default Debounce
