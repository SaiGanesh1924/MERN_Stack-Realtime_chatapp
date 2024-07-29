import React from 'react'
import Searchinput from './Searchinput'
import Conversations from '../conversations/Conversations'
import LogoutButton from '../Logoutbutton.jsx'
const Sidebar_ = () => {
  return (
    <div  className='border-r border-slate-500  p-4 flex flex-col'>
      <Searchinput></Searchinput>
      <div className='divider px-3'></div>
      <Conversations></Conversations>
      <LogoutButton></LogoutButton>
    </div>
  )
}

export default Sidebar_
