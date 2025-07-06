import React from "react"
import Header from '../others/Header.jsx'
import TaskListNumber from '../others/TaskListNumber.jsx'
import TaskList from '../TaskList/TaskList.jsx'

const EmployeeDashboard = (props) => {
  return (
    <div className="p-10 bg-[#1C1C1C] h-screen">
      {/* <h1>{data.id}</h1> */}
       <Header changeUser = {props.changeUser} data={props.data}/>
       <TaskListNumber data={props.data}/>
       <TaskList data={props.data}/>
    </div>

  )
}

export default EmployeeDashboard ;