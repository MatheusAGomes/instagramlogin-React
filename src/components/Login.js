import './Login.css'
import {FacebookSquare} from '@styled-icons/boxicons-logos/FacebookSquare'
import titulo from '../img/Screenshot 2022-01-28 132733.png'
const Login = () =>{

    return(
        <div className='quadrado'>
        <img src={titulo}/>
        <input type="text" placeholder="Phone number, username, or e-mail"></input>
        <input type="text" placeholder="Password"></input>
        <button style={{fontSize:'9px',fontWeight:'bold'}}>Log In</button>
        <div className='or'>
        <hr width="60" />
        <label>OR</label>
        <hr width="60"/>
        </div>
        <div className='face'>
            <div>
            <FacebookSquare size="20" color="#3b5998"/>
            <strong><a href='/' color='blue'>Log in with Facebook</a></strong> 
            </div>
        <a href='/' style={{ fontSize: '8px'}}>Forgot password?</a>
        </div>
        </div>
    );

}

export default Login