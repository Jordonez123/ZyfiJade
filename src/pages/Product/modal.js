import React, { useState } from 'react';
import { Button, Modal } from 'antd';
import {PlusOutlined} from '@ant-design/icons'
import HandInOreder from './handInOrder';
const Mod = (props) => {
  const id = props.id

  const [state, setState] = useState(0);
  const [open, setOpen] = useState(false);
  const [confirmLoading, setConfirmLoading] = useState(false);
  const [modalText, setModalText] = useState('Content of the modal');
  const url = "ngrok"
  const showModal = () => {
    setOpen(true);
  };
  const handleOk = () => {
    setState(1)
    setModalText('Creating');
    setConfirmLoading(true);
    const a = async() => {
      const response = await fetch(url, {
        method: 'POST', // 指定请求类型为 POST
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({  }) // 将参数转换为 JSON 字符串
      });
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      setOpen(false);
      setConfirmLoading(false);
    }
    a();
  };
  const handleCancel = () => {
    setOpen(false);
  };
  // console.log(state)
  return (
    <>
      <div onClick={showModal}>
      <PlusOutlined />
      </div>
      <Modal
        title="Title"
        open={open}
        onOk={handleOk}
        confirmLoading={confirmLoading}
        onCancel={handleCancel}
      >
      <HandInOreder doPost = {state} id = {id}></HandInOreder>
      </Modal>
    </>
  );
  
};
export default Mod;