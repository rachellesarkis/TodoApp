import React, {useState, useEffect} from 'react';
import axios from "axios";
// import AxiosCall from './Components/AxiosCall';
import Todos from './Components/Todos';

function App() {
  let [users, setUsers] = useState([]);
  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/posts")
      .then(response => {
        let initialData = response.data;
        let slicedData = initialData.slice(0, 10);
        setUsers(slicedData)
      }
        );
  }, []);

  console.log(users)
  return (
    <div className="App" style={{backgroundColor: '#1c4d6d'}} >
     <div> 
      {/* <AxiosCall users={users} />  */}
      <Todos />
     </div>
    </div>
  );
}

export default App;
