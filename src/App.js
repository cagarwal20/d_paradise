import logo from './logo.svg';
import { Input } from 'antd';
import { Button } from 'antd/es/radio';
import { useState } from 'react';
import axios from "axios";
import { DownOutlined, SmileOutlined } from '@ant-design/icons';
import type { MenuProps } from 'antd';
import { Spin } from 'antd';
import { Dropdown, Space } from 'antd';
import './App.css';

function App() {
  const [phone,setphone] = useState("");
  const [name,setname] = useState("");
  const [loading,setloading] = useState(false) 
  const [message,setmessage] = useState("");
  var dict = { "Marketing message" : `Hi ${name} , Welcome to D_Paradise! Your one-stop destination for all things stylish and trendy! 

  Discover a world of fashion and accessories that will transport you to a fashionista's paradise. Located in the heart of city - https://g.page/r/CefxVUYrn4_8EBM/review , we're here to help you make a style statement like never before. 
  
  Follow us on Instagram for a sneak peek into our latest arrivals, style tips, and exclusive offers:  https://www.instagram.com/d_paradise9/` , 
    "Thank you message" : `Hi ${name}  

    Thanks for shopping with D_PARADISE. It was pleasure serving you. In order to serve you better, give us some ratings and also follow our instagram handle at https://www.instagram.com/d_paradise9/. 

    Link for the location and review - https://g.page/r/CefxVUYrn4_8EBM/review`
  };
  const items: MenuProps['items'] = [
    {
      key: '1',
      label: (
        <Button onClick={()=>setmessage(dict["Thank you message"])}>Thank you message!</Button>
      ),
    },
    {
      key: '2',
      label: (
        <Button onClick={()=>setmessage(dict["Marketing message"])}>Marketing message</Button>
      ),
    },
  
  ];
  const sender = () =>{
   setloading(true) 
    if (name.match(/^[A-Za-z\s]*$/)==null){
      window.alert('enter a valid name')
      window.location.reload()
    }
    if (name.length==0){
      window.alert('please fill the name')
      window.location.reload()
    }
    if (phone.length<10){
      window.alert('please fill the phone number')
      window.location.reload()
    }
    if (phone.match(/^[0-9]+$/) == null){
      window.alert('enter a valid number')
      window.location.reload()
    }
    if(message.length<10){
      window.alert('please select a message')
      window.location.reload()
    }
    axios.post(`https://api.ultramsg.com/instance46986/messages/chat?token=whq8hu6sl95rpc4b&to=+91${phone}&body=${message}`,
  {headers: {  
    'Content-Type': 'application/x-www-form-urlencoded'
  }}).then(res=>{
    window.alert('sent successfully!')
    window.location.reload()
  })
  }
  return (
    <div className="App">
      <img src='https://img.freepik.com/free-vector/illustrated-woman-working-customer-support_23-2148942144.jpg?w=1000' style={{maxWidth: "45%", maxHeight: "50%"}}></img>
      <div className='intro'>Message Sender</div>
      <div className='input'><Input size="medium" className='input' placeholder="Enter Name" onChange={e => setname(e.target.value)}/></div>
      <div className='input'><Input size="medium" className='input' placeholder="Enter phone number" onChange={e => setphone(e.target.value)}/></div>
      <Dropdown menu={{ items }} className='input'>
        <a onClick={(e) => e.preventDefault()}>
          <Space>
            Select message
            <DownOutlined />
          </Space>
        </a>
      </Dropdown>
      <div className='input'>{message}</div>
      <Spin spinning={loading}>
          <Button type="primary" style={{color:'blue'}} onClick={()=>sender()}>Submit</Button>
      </Spin>
    </div>
  );
}

export default App;
