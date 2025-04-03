import React, { useState } from 'react'
import userContext from './UserContext'

const UserState = (props) => {
    let userData=JSON.parse(localStorage.getItem('login'))
    const [user, setuser] = useState({
        email: userData?userData.email:'',
        login:userData?userData.login:false,
    });
  return (
    <userContext.Provider value={{user,setuser}}>
      {props.children}
    </userContext.Provider>
  )
}

export default UserState
