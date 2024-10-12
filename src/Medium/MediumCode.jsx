import { useEffect, useState } from "react";
import Signup from "./Signup";
import { Todo } from "./Todo";
import { Cart } from "./Cart";
//import { Mp3 } from "../components/Mp3";
const MediumCode = () => {
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
    <>
       <div>Medium Coding</div>
      <Cart /> <Todo />
      
     
       
      <Signup />
    </>
  );
};
export default MediumCode;
