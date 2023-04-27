import React from 'react'
import attachImage from '../reactIcons/attatchImage.png';
import paperclip from '../reactIcons/clip.png';
const Input = () => {
  return (
    <div className='input'>
      <input type="text" placeholder='Message'/>
      <div className="send">
        <img src={paperclip} alt=""/>
        <input type='file' style={{display:"none"}} id="file"/>
        <label htmlFor='file'>
          <img src={attachImage} alt=""/>
        </label>
        <button>Send</button>
      </div>
    </div>
  )
}

export default Input
