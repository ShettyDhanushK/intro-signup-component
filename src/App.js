import React from 'react';
import './styles.css';
import error from './assets/icon-error.svg';

const App = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    if(e.target[0].value == ''){
      document.getElementById('error-1').style.display = 'block';
      document.getElementById('text-error-1').style.display = 'block';
      document.getElementById('input-1').style.border = '3.5px solid hsl(0, 100%, 74%) ';
      document.getElementById('fname').placeholder = "";
    }
    if(e.target[1].value == ''){
      document.getElementById('error-2').style.display = 'block';
      document.getElementById('text-error-2').style.display = 'block';
      document.getElementById('input-2').style.border = '3.5px solid hsl(0, 100%, 74%) ';
      document.getElementById('lname').placeholder = "";
    }
    if(e.target[2].value == ''){
      document.getElementById('error-3').style.display = 'block';
      document.getElementById('text-error-3').style.display = 'block';
      document.getElementById('input-3').style.border = '3.5px solid hsl(0, 100%, 74%) ';
      document.getElementById('email').placeholder = "email@example.com";
      document.getElementById('email').style.color = "hsl(0, 100%, 74%)";
    }
    if(e.target[3].value == ''){
      document.getElementById('error-4').style.display = 'block';
      document.getElementById('text-error-4').style.display = 'block';
      document.getElementById('input-4').style.border = '3.5px solid hsl(0, 100%, 74%) ';
      document.getElementById('password').placeholder = "";
    }
  }
  return (
    <div className='app'>
      <div className='app__bg'>
        <div className='app__intro'>
          <h1>Learn to code by watching others</h1>
          <p>See how experienced developers solve problems in real-time. Watching scripted tutorials is great, but understanding how developers think is invaluable.</p>
        </div>
        <div className='app__signup'>
          <div className='app__signup-1'>
            <h4><b>Try it free 7 days</b>&nbsp;then $20/mo. thereafter</h4>
          </div>
          <div className='app__signup-2'>
          <form onSubmit={handleSubmit}>
            <div className='app__signup-2-input' id="input-1">
              <input type="text" id='fname' placeholder='First Name' />
              <img src={error} alt="error" id="error-1" />
            </div>
            <p className='app__signup-2-error' id="text-error-1">First Name cannot be empty</p>
            <div className='app__signup-2-input' id="input-2">
              <input type="text" id='lname' placeholder='Last Name'/>
              <img src={error} alt="error" id="error-2" />
            </div>
            <p className='app__signup-2-error' id="text-error-2">Last Name cannot be empty</p>
            <div className='app__signup-2-input' id="input-3">
              <input type="email" id='email' placeholder='Email Address' />
              <img src={error} alt="error" id="error-3" />
            </div>
            <p className='app__signup-2-error' id="text-error-3">Email Address cannot be empty</p>
            <div className='app__signup-2-input' id="input-4">
              <input type="password" id='password' placeholder='Password' />
              <img src={error} alt="error" id="error-4" />
            </div>
            <p className='app__signup-2-error' id="text-error-4">Password cannot be empty</p>
            <input type="submit" value="CLAIM YOUR FREE TRAIL"/>
            
            <p className='app__terms'>By clicking the button, you are agreeing to our <b>Terms and Services</b></p>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App