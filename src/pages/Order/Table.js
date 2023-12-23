import React, { useState } from 'react';
import { Space, Table, Tag, Input } from 'antd';
import styles from "./index.less"
const { Column, ColumnGroup } = Table;
const url = "order/orders"
const Tab = (props) => {
  const [state, setState] = useState()
  const data = props.data;
  const onDelete = props.onDelete
  console.log(data)
  

  return (
    <>
  <Table dataSource={data} 
  >
    <Column title="Order ID" dataIndex="orderId" key="orderId" />
    <Column title="Product ID" dataIndex="productId" key="productId" />
    <Column title="Number" dataIndex="number" key="number" />
    <Column title="Price" dataIndex="price" key="price" />
    <Column title="Client ID" dataIndex="clientId" key="clientId" />
    <Column title="Saleman ID" dataIndex="salesmanId" key="salemanId" />
    <Column title="Create Time" dataIndex="creationTime" key="time" />
    <Column title="Finished Time" dataIndex="finishedTime" key="time" />

    <Column
      title="Status"
      dataIndex="authorised"
      key="authorised"
      render={(authorised) => {
        if (authorised == null) {
          return (<></>)
        }
        if (authorised ==false)
        return (<>
        <Tag>Pending</Tag>
        </>)
        else {
          return <Tag>Done</Tag>
        }
      }}
    />
   
    <Column
      title="Action"
      key="action"
      render={(text, record, index) => (
        <Space size="middle">
          <a onClick={() => {
            onDelete(text.orderId)}}>Delete</a>
        </Space>
      )}
    />
  </Table>
  </>
  )
};
export default Tab;