import LayOut from "../../components/Layout";
import React, { useState } from 'react';
import { Card, Col, Row } from 'antd';
import { useEffect } from "react";
import ACard from "./Card";
const url = "product/products"
const Product = () => {
    let i = 0
    const [product, SetProduct] = useState([]);
    const [refresh, SetRefresh] = useState(0);
    const onDelete = (id) => {
        const a = async() => {
          const response = await fetch(url + "/" + id, {
            method: 'DELETE', // Method itself
            headers: {
              'Content-type': 'application/json; charset=UTF-8' // Indicates the content 
            },
          });
          const json = await response.json();
        }
        a();
        setTimeout(function(){
            SetRefresh(refresh + 1)
        }, 500);
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
              SetProduct(json);
            } catch (error) {
              
            } finally {
              
            }
          };
          fetchData();
    },[refresh])
    return (<>
    <LayOut>

  <Row gutter={16}>
    {product._embedded ? product._embedded.products.map((item)=> {
        
       return(<><Col span={8}>
        <ACard data = {item} onDelete = {onDelete}></ACard>
        <br></br>
      </Col></>) 
    }) : <>a</>}
  </Row>

    </LayOut>
    </>)
}
export default Product;