import React, { useState } from 'react';
import { PlusOutlined } from '@ant-design/icons';
import {
  Button,
  Cascader,
  Checkbox,
  DatePicker,
  Form,
  Input,
  InputNumber,
} from 'antd';
import { useForm } from 'antd/lib/form/Form';
const url = "order/orders"
const HandInOreder = (props) => {
  const id = props.id
  console.log(id)
  const [componentDisabled, setComponentDisabled] = useState(false);
  const [form] = Form.useForm();
  const [state, setState] = useState();
  const doPost = props.doPost
  console.log(doPost)
  if (doPost === 1) {
    //   a();
    const data = form.getFieldsValue();
    const newdata = {
        clientId : data.clientId,
        number : data.number,
        price : data.price,
        productId : id

    }
    const a = async() => {
        const response = fetch(url, {
            method: "POST", // *GET, POST, PUT, DELETE, etc.
            headers: {
            "Content-Type": "application/json",
            // 'Content-Type': 'application/x-www-form-urlencoded',
            },
            body: JSON.stringify(newdata),
        })
        
        console.log(response)
    }
    a();
      // Additional logic for what to do with the form data
    }

  return (
    <>
      <Form form={form}
        labelCol={{
          span: 4,
        }}
        onFinish={(value) => {handleFormSubmit(value)}}
        wrapperCol={{
          span: 14,
        }}
        layout="horizontal"
        disabled={componentDisabled}
        style={{
          maxWidth: 600,
        }}
      >
    
        <Form.Item label="Number" name= "number">
          <InputNumber />
        </Form.Item>
     
        <Form.Item label="Price" name= "price">
          <Input />
        </Form.Item>
        <Form.Item label="Client ID" name= "clientId">
          <Input />
        </Form.Item>
      </Form>
    </>
  );
};

export default HandInOreder