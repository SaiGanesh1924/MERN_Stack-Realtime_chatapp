import React from 'react'
import Messages from './Messages';
import Messageinput from './Messageinput';
import Chatnotselected from './chatnotselected';
const Messagecontainer = () => {
	const nochatselected = true;
  return (
    <div className='md:min-w-[450px] flex flex-col'>
 		{nochatselected?(
			<Chatnotselected/>
		):(
				<>
				{/* Header */}
				<div className='bg-slate-500 px-4 py-2 mb-2'>
					<span className='label-text'>To:</span> <span className='text-gray-900 font-bold'>sai ganesh</span>
				</div>

				<Messages />
		   <Messageinput />
			</>
		)} 
 		</div>
 	);
}

export default Messagecontainer



