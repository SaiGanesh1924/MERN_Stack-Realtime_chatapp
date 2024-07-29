import React from 'react'
import Sidebar_ from '../../components/sidebar/Sidebar_'
import Conversations from '../../components/conversations/Conversations'
import Messagecontainer from '../../components/messages/Messagecontainer'
const Home = () => {
  return (
    <div className='flex sm:h-[450px]  md:h-[550px]  rounded-lg  overflow-hidden bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0'>
    
    <Sidebar_></Sidebar_>
    <Messagecontainer></Messagecontainer>
    
 </div>
  )
}

export default Home
