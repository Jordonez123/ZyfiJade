import React, { useState } from 'react';
import { EditOutlined, EllipsisOutlined, SettingOutlined } from '@ant-design/icons';
import { Avatar, Card } from 'antd';
import Mod from './modal';
import Description from './Desciption'
import BNCImage from "./Assets/BNC.png"
import DKZ_Series from "./Assets/DKZ Series.png"
import N from "./Assets/N.png"
import N_SMA_KJ from "./Assets/N:SMA-KJ.png"
import SMP_plug from "./Assets/SMP plug.png"
import SSMA from "./Assets/SSMA.png"
import TNC from "./Assets/TNC.png"
import MCX from "./Assets/MCX.png"
import dingzhen from "./Assets/dingzhen.jpg"
const ACard = (props) => {
    const data = props.data
    const id = data.productId;
    const onDelete = props.onDelete
    // {
    //   "productName": "string",
    //   "stockQuantity": 0,
    //   "type": "string",
    //   "description": "string",
    //   "_links": {
    //     "additionalProp1": {
    //       "href": "string",
    //       "hreflang": "string",
    //       "title": "string",
    //       "type": "string",
    //       "deprecation": "string",
    //       "profile": "string",
    //       "name": "string",
    //       "templated": true
    //     },
    // const name = data.name
    const name = data.productName
    const picture = {
        'BNC' : "https://joey6156.s3.us-east-2.amazonaws.com/6156_Project/DKZ+Series.png",
        'DKZ_Series' : "https://joey6156.s3.us-east-2.amazonaws.com/6156_Project/DKZ+Series.png",
        'N' : "https://joey6156.s3.us-east-2.amazonaws.com/6156_Project/N.png",
        'N:SMA_KJ' : "https://joey6156.s3.us-east-2.amazonaws.com/6156_Project/N%3ASMA-KJ.png",
        'SMP plug' : "https://joey6156.s3.us-east-2.amazonaws.com/6156_Project/SMP+plug.png",
        'SSMA' : "https://joey6156.s3.us-east-2.amazonaws.com/6156_Project/SSMA.png",
        'TNC' : "https://joey6156.s3.us-east-2.amazonaws.com/6156_Project/TNC.png",
        'MCX' : "https://joey6156.s3.us-east-2.amazonaws.com/6156_Project/MCX.png"
    }
    const { Meta } = Card;
    return(
  <Card
    style={{
      width: 300,
    }}
    cover={
      <img
        alt="example"
        src= {picture[name]}
      />
    }
    actions={[
      <SettingOutlined key="setting" onClick={() => {onDelete(id)}}/>,
      <Mod id = {id}></Mod>,
      <Description data = {data}></Description>,
    ]}
  >
    <Meta
      avatar={<Avatar src= {dingzhen} />}
      title={data.productName}
    />
  </Card>
    )
}
export default ACard;