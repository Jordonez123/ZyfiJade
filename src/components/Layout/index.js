import React, { useState } from 'react';
import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
} from '@ant-design/icons';
import styles from './index.less';
import { Layout, Menu, Button } from 'antd';
import MenuItem from 'antd/lib/menu/MenuItem';
import { Link } from 'react-router-dom';
import { useEffect } from 'react';
const { Header, Sider, Content } = Layout;
const LayOut = (props) => {
  const getlonlat = "http://ip-api.com/json";
  const url = "https://api.openweathermap.org/data/2.5/weather?"
  const [collapsed, setCollapsed] = useState(false);
  const [lonlat, setLonlat] = useState([]);
  const [temp, setTemp] = useState([]);
  useEffect(()=> {
    const fetchlon = async() => {
      const res = await fetch(getlonlat);
      const result = await res.json();
      setLonlat({
        lon: result.lon,
        lat : result.lat
      });
    }
    fetchlon();
  },[])
  useEffect(()=> {
    const fetchData = async() =>{
      try {
        const response = await fetch (url + "lat=" + lonlat.lat.toString() +"&"+ "lon=" + lonlat.lon.toString() + "&appid=fee3017762c8a455c971d67d83f251d4");
        const json = await response.json();
        console.log(json, "json")
        console.log(json.main, "main")
        setTemp ({
          "weather" :json.weather[0].main,
          "temp":json.main.temp,
        })
      } catch(error){
      }
      finally {
      }
    }
    fetchData();
  },[lonlat])
  console.log(temp)
  return (
    <Layout className={styles.layout}>
      <Sider trigger={null} collapsible collapsed={collapsed} className={styles.Sider}>
        <div className="demo-logo-vertical" />
        <Menu className= {styles.Sider} mode='inline'>
            <MenuItem><Link to="/order">Order</Link></MenuItem>
            <MenuItem><Link to="/Product">Product</Link></MenuItem>
            <MenuItem><Link to="/create">Create</Link></MenuItem>
        </Menu>
      </Sider>
      <Layout className={styles.Content}>
        <Header className={styles.Header}
          style={{
            padding: 0,
            backgroundColor: 'white',
          }}
        >
          <div className={styles.weather}>{Math.floor((parseInt(temp.temp) - 273.15))}℃    </div>
          <div className={styles.weather2}>{temp.weather + "   "}</div>
        </Header>
        <Content
          style={{
            margin: '24px 16px',
            padding: 24,
            minHeight: 280,
            //background: colorBgContainer,
          }}
        >
        {props.children}
        </Content>
      </Layout>
    </Layout>
  );
};
export default LayOut;