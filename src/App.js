import logo from './logo.svg';
import { Input } from 'antd';
import { Button } from 'antd/es/radio';
import { useState } from 'react';
import axios from "axios";
import './App.css';

function App() {
  const [phone,setphone] = useState("");
  const [name,setname] = useState("");
  const sender = () =>{
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
    axios.post(`https://api.ultramsg.com/instance46986/messages/chat?token=whq8hu6sl95rpc4b&to=+91${phone}&body=Hi ${name} \n \n
    Thanks for shopping with D_PARADISE. It was pleasure serving you. In order to serve you better, give us some ratings and also follow our instagram handle at https://www.instagram.com/d_paradise9/ or @d_paradise9. \n \n
    Link for the location and review - https://g.page/r/CefxVUYrn4_8EBM/review`,
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
      <Button type="primary" style={{color:'blue'}} onClick={()=>sender()}>Submit</Button>
    </div>
  );
}

export default App;
