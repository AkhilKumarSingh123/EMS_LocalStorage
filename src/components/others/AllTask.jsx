import React, {useContext} from "react"
import {AuthContext} from "../../context/AuthProvider"

const AllTask = () => {
  const [userData, setUserData] = useContext(AuthContext)   
  return (
    <div className="bg-[#1c1c1c] p-2 rounded mt-5">
         <div className="bg-red-400 mb-2 text- py-2  flex justify-between rounded">
               <h2 className='w-1/5 font-medium'>Employee Name</h2>
               <h3 className='w-1/5 font-medium'>New Task</h3>
               <h5 className='w-1/5 font-medium'>Active Task</h5>
               <h5 className='w-1/5 font-medium'>Completed</h5>
               <h5 className='w-1/5 font-medium'>Failed</h5>

         </div>
         <div className="h-[80%]">
              {userData.map(function(elem, idx){
                return <div key={idx} className="border-2 border-emerald-800 py-2 px-4 mb-2 flex justify-between rounded">
                      <h2 className='w-1/5 text-lg font-medium text-white-400'>{elem.firstname}</h2>
                      <h3 className='w-1/5 text-lg font-medium text-blue-400'>{elem.taskCount.newTask}</h3>
                      <h5 className='w-1/5 text-lg font-medium text-yellow-400'>{elem.taskCount.active}</h5>
                      <h5 className='w-1/5 text-lg font-medium text-green-400'>{elem.taskCount.complete}</h5>
                      <h5 className='w-1/5 text-lg font-medium text-red-400'>{elem.taskCount.failed}</h5>
                    </div>
              })}  
         </div>
                              
    </div>

  )
}

export default AllTask ;