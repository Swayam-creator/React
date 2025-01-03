import React, { useEffect, useState } from 'react'

const Fetch = () => {
    const [users,setUsers]=useState([]);
    
        useEffect(()=>{
            fetch('https://api.github.com/users').then(response=>response.json()).then(data=>setUsers(data)).catch(err=>console.error(err))
        },[]);
  
    
  return (
    <div>
      <h1 className='font-bold text-xl'>User list</h1>
    <ul>
        {
            users.map(user=>{
                return <li className='list-disc mx-5 border-spacing-10bottom-2 hover:border-blue-500' key={user.id}>
                <a  href={user.html_url} className='text-blue-500 hover:text-blue-700 border-b-2 border-transparent hover:border-red-100 '>{user.login}</a>
                </li>
            })
        }
    </ul>
    </div>
  )
}

export default Fetch
