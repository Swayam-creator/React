import React,{useState} from 'react'
import './mobilelist.css'
const Form = () => {
 const [formData,setFormData]=useState({
    name:'',
    email:'',
    password:''
 });
 const handleInput = (e)=>{
    const{name,value}=e.target;
    setFormData({...formData,[name]:value})
 }
 const handleSubmit = (e)=>{
 e.preventDefault();
 }

  return (
    <div className='flex items-center justify-center h-screen'>
    
    <div className='w-full max-w-lg border border-black rounded-md p-6'>
    <h1 className='text-center font-bold  text-xl'>User Form </h1>
    <form onSubmit={handleSubmit}>
        <label className="block">
            Name:
            <input className="inline mx-7 mt-5 w-3/4 px-3 py-2 border border-gray-300 rounded-md 
            text-black
            focus:outline-none focus:ring focus:ring-blue-500 "type='text' value={formData.name} 
            name="name" onChange={handleInput}/>
        </label>
        <br/>
        <label>
            Email:
            <input className="inline mx-8 mt-5 w-3/4 px-3 py-2 border border-gray-300 rounded-md
             text-black focus:outline-none focus:ring focus:ring-blue-500 " type='email' value={formData.email}  name="email" onChange={handleInput}/>
        </label>

        <br/>
        <br/>
        <label>
            Password:
            <input className= "inline mx-2 mt-5 w-3/4 px-3 py-2 border  text-black border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-500 " type='password' value={formData.password} 
            name='password'
            onChange={handleInput}/>
        </label>
        <br/>    
        <br/>
        <div className="flex justify-center w-full">
            <button
              type="submit"
              className="px-4  w-3/4 py-2  bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none focus:ring focus:ring-blue-300"
            >
              Submit
            </button>
          </div>
    </form>
    </div>
    </div>
  )
}

export default Form
