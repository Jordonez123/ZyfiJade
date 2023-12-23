import LayOut from "../../components/Layout";
import styles from "./index.less"
import { useEffect, useState } from "react";
import { Space, Table, Tag, Input } from 'antd';
import Tab from "./Table";
import { useSelector } from 'react-redux';
const url = "order/orders";
const App = () => {

  // const loginValues = useSelector((state) => state.loginValues);
  // console.log("these are the login values: ", loginValues);
  const [data, setData] = useState([]);
  const [refresh, SetRefresh] = useState(0);
  const {Search} = Input
  const onSearch = (id) => {
      const b = async() => {
        const response = await fetch(url + "/" + id);
        const json = await response.json();
        setData(json.data)
      }
      b();
  }
  const onDelete = (id) => {
    const a = async() => {
      const response = await fetch(url + "/" + id, {
        method: 'DELETE', // Method itself
        headers: {
          'Content-type': 'application/json; charset=UTF-8' // Indicates the content 
        },
      });
      const json = await response.json();
      setTimeout(function(){
        SetRefresh(refresh + 1)
    }, 500);
    }
    a();
  }
    
    useEffect(()=>{
        const fetchData = async () => {
            try {
              const response = await fetch(url);
              if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
              }
              const json = await response.json();
              console.log(json)
              setData(json.data);
            } catch (error) {
              
            } finally {
              
            }
          };
          fetchData();
    },[refresh])
  
    return (
        <LayOut>
          <Search
          className= {styles.Search}
          placeholder="input search text"
          allowClear
          enterButton="Search"
          size="large"
          onSearch={(item) => {onSearch(item)}}
    />
            <Tab data = {data} onDelete = {onDelete}/>
        </LayOut>
    )
}
export default App;