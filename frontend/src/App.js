import './App.css';
import Home from './component/Home';
import Register from './component/Register';
import Header from './component/Header'
import Footer from './component/Footer';
import Login from './component/Login'
import About from './component/About'
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import ChatRoom from './component/ChatRoom';
import AvailRoom from './component/AvailRoom';
import {io} from 'socket.io-client';
import { useEffect, useState } from 'react';



function App() {

  const url = 'http://localhost:5000'
  const [socket, setSocket] = useState(io(url, {autoConnect : false}));

  useEffect(() => {
    socket.connect();
  }, [])

  return (

    
    <div>  
      <BrowserRouter>
      <Header/>
        <Routes>
        
          <Route element={<Home></Home>} path="/" />
          <Route element={<Home></Home>} path="home" />
         
          <Route element={<Register></Register>} path="register"/> 
          <Route element={<Login></Login>} path="Login"/>
          <Route element={<AvailRoom socket={socket}></AvailRoom>} path="AvailRoom"/>
          <Route element={<ChatRoom socket={socket}></ChatRoom>} path="ChatRoom"/>
          <Route element={<About></About>} path="About"/>
          
         
          
        </Routes>
        <Footer/>
        
      </BrowserRouter>
      
      </div>
      
      
      
      
    
  );
}

export default App;
