import React from 'react'
import videocamera from "../reactIcons/videocamera.png";
import More from "../reactIcons/more.png"
import addUser from "../reactIcons/addUser.png"
import Messages from "./Messages";
import Input from "./Input"
const Chat = () => {
  return (
    <div className = 'chat'>
      <div className='chatInfo'>
        <span>Guy</span>
        <div className="chatIcons">
          <img src={videocamera} alt=''/>
          <img src={addUser} alt=''/>
          <img src={More} alt=''/>
        </div>
      </div>
      <Messages/>
      <Input/>
    </div>
  )
}

export default Chat
