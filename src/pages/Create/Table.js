import React, { useState } from 'react';
import {
  Button,
  Cascader,
  DatePicker,
  Form,
  Input,
  InputNumber,
  Radio,
  Select,
  Switch,
  TreeSelect,
} from 'antd';
import TextArea from 'antd/lib/input/TextArea';
const url = "product/products"
const Tab = () => {
    const [form] = Form.useForm();
    const Submit = () => {
        const data = form.getFieldsValue();
        const sendData = {
            productId : data.productId,
            productName : data.productName,
            type : data.Type,
            stockQuantity : data.stockQuantity,
            description : data.description
        }
        const a = async() => {
            const response = fetch(url, {
                method: "POST", // *GET, POST, PUT, DELETE, etc.
                headers: {
                "Content-Type": "application/json",
                // 'Content-Type': 'application/x-www-form-urlencoded',
                },
                body: JSON.stringify(sendData),
            })
            const json = await response
            if (json.ok) {
                window.location.href = '/create'
            }
            console.log(json)
        }
        a();
        
    }
    return(<>

    <Form
      form={form}
      labelCol={{
        span: 4,
      }}
      wrapperCol={{
        span: 14,
      }}
      layout="horizontal"
      style={{
        maxWidth: 600,
      }}
    >
  
      <Form.Item label="Product ID" name="productId">
        <Input />
      </Form.Item>
      <Form.Item label="productName" name="productName">
      <Select>  
        
          <Select.Option value="N">N</Select.Option>
          <Select.Option value="TNC">TNC</Select.Option>
          <Select.Option value="SMP plug">SMP plug</Select.Option>
          <Select.Option value="MCX">MCX</Select.Option>
          <Select.Option value="N:SMA_KJ">N:SMA_KJ</Select.Option>
          <Select.Option value="SSMA">SSMA</Select.Option>
          <Select.Option value="DKZ Series">DKZ Series</Select.Option>
          <Select.Option value="BNC">BNC</Select.Option>
        </Select>
      </Form.Item>
      <Form.Item label="Type" name="Type">
        <Select>
          <Select.Option value="demo">Demo</Select.Option>
        </Select>
      </Form.Item>
      <Form.Item label="stockQuantity" name="stockQuantity">
        <InputNumber />
      </Form.Item>
      <Form.Item label="description" name="description">
        <TextArea></TextArea>
      </Form.Item>
      <Form.Item >
        <Button type='primary' onClick={() => {Submit()}}>Create</Button>
      </Form.Item>
    </Form>

    </>)
}
export default Tab;