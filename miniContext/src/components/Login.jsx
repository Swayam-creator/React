import React ,{useState,useContext} from 'react';
// import UserContextProvider from '../context/userContextProvider';
import UserContext from '../context/UserContext';

function Login() {
    const[ username, setUsername ]=useState('');
 const[password, setPassword]=useState('');
 const {setUser}=useContext(UserContext);
 const handleSubmit = (e)=>{
 e.preventDefault();
 setUser({username,password});
 }
  return (
      <div className='pd m'>
        <input type='text' value={username}
         onChange={(e)=> setUsername(e.target.value)}
         placeholder='Enter your username'/>
         {'    '}
        <input type='password' value={password}  
        onChange={(e)=>setPassword(e.target.value)}
        placeholder='Enter your password'/>
        <button onClick={handleSubmit}>Login</button>
    </div>
  )
}

export default Login