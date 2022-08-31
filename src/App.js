import './App.css';
import {FaFacebook} from "react-icons/fa"
import {FaGoogle} from "react-icons/fa"
import {FaInstagram} from "react-icons/fa"
import About from './About';
const leftimage =new URL('./images/image (3).png',import.meta.url)


function  App() {
  return (
    <div className='App'>
      <div className='Texts'>
        <h5>Don't have an account?<span>Sign up</span> </h5>
        <h4>EddieShop</h4>
      <h1>Welcome Back</h1>
      <label>
    <p className='Email'>Your email</p>
    <input className='Text' name="email" placeholder='naimasalim@gmail.com'/>
  </label>
  <label>
    <p>Password</p>
    <input className='Text'  name="password" placeholder='atleast 8 characters'/>
  </label>
<br></br><br></br>
  <label>
  <input className='Checkbox'></input>
  <h6>Keep me logged in</h6>
  </label>
  </div>
  <p className='Forgot-password'>Forgot password?</p>
  <button onClick>Login</button>
  <h2>___________________________or__________________________</h2>
    <img src={leftimage} className='Leftimage' alt='logo'/>
    <div className='facebook'>
      <FaFacebook />
    </div>
    <div className='google'>
      <FaGoogle/>
    </div>
    <div className='instagram'>
      <FaInstagram/>
    </div>
    <About/>
  </div>
   
 );

}
export default App;
