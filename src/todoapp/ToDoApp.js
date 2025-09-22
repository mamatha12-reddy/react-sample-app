import React, { useEffect, useRef, useState } from "react";
import "../App.css";
/*const App = () => {
  const [count, setCount] = useState(0);
  const [start, setStart] = useState(false);
  const timerIdRef = useRef(null);
  timerIdRef.current=count
  
  const [num,setnum]=useState(count)
  useEffect(() => {
   
   setTimeout(()=>{
    setnum(count)
    console.log("number===",timerIdRef.current)
   },2000)
   
    
    
  })
  
  const onStart = () => {
    setCount(count+1)
 setStart(true)
  };
  
  const onStop = () => {
   // clearTimeout(timer);
    setStart(false);
  };
  
  
  return(
    <div className="box">
      <h1>Count: {count}</h1>
      <button onClick={onStart}>Start</button>
      <button onClick={onStop}>Stop</button>
      <h1>Number:{num}</h1>
    </div>
  );
}*/




/*Features to Implement
A form with an input and button to add tasks.

A list of tasks with:

Task name

Checkbox to mark as completed

Delete button

Filter buttons: "All", "Active", "Completed"

Task count at the bottom*/

const ToDoApp = () => {
  useEffect(()=>{
    console.log("child function")
  },[])
  const taskObj = [
    {
      taskName: "Task1",
      id: 1,
      checked: false,
    },
    {
      taskName: "Task2",
      id: 2,
      checked: false,
    },
  ];
  const [tasks, setTasks] = useState(taskObj);
  const [taskName, setTaskName] = useState("");
  const [activeTab, setActiveTab] = useState([]);
  const [completeTab, setCompleteTab] = useState([]);
  const [tasksList, setTasksList] = useState(taskObj);
  const [value,setValue]=useState(0)



  const handleAddTask = (e) => {
    const newTask = {
      id: Date.now(),
      taskName: taskName,
      checked: false,
    };

    setTasks([...tasks, newTask]);
    setTasksList([...tasksList, newTask]);
    // taskList=tasks
  };

  const handleToggle = (id) => {
    const taskList = tasks.map((task) => {
      if (task.id === id) {
        return { ...task, checked: !task.checked };
      } else {
        return task;
      }
    });
    setTasks(taskList);
    setTasksList(taskList);
  };

  const handleDelete = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
    setTasksList(tasksList.filter((task) => task.id !== id));
  };

  const handleAllTasks = (status) => {
    if (status === "All") {
      
      setTasks(tasksList);
    } else if (status === "Active") {
      const activeTask = tasksList.filter((task) => task.checked === false);
      setActiveTab(activeTask);
      setTasks(activeTask);
    } else if (status === "Completed") {
      const completeTask = tasksList.filter((task) => task.checked === true);
      setCompleteTab(completeTask);
      setTasks(completeTask);
    }
  };

  const remaining = tasks.filter((t) => !t.checked).length;

  return (
    <div className="App">
      <div className="Box">
        <h1 className="text">Task Manager</h1>
        <input
          type="text"
          placeholder="Add Task"
          onChange={(e) => setTaskName(e.target.value)}
          className="input"
        />
        <button className="submit" onClick={() => handleAddTask()}>
          Add Task
        </button>
        <hr />
        <div className="taskList">
          {tasks.map((taskName, ind) => {
            return (
              <div>
                <div key={ind} className="taskRow">
                  <input
                    type="checkBox"
                    checked={taskName.checked}
                    onChange={(e) => handleToggle(taskName.id)}
                  />
                  <div> {taskName.taskName}</div>
                  <button onClick={() => handleDelete(taskName.id)}>
                    Delete
                  </button>
                </div>
                <hr />
              </div>
            );
          })}
        </div>
        <div className="buttonTabs">
          <button className="button" onClick={() => handleAllTasks("All")}>
            All
          </button>
          <button className="button" onClick={() => handleAllTasks("Active")}>
            Active
          </button>
          <button
            className="button"
            onClick={() => handleAllTasks("Completed")}
          >
            Completed
          </button>
        </div>
        <p className="text">Tasks remaining: {remaining}</p>
      </div>

      <h1>Add button</h1>
      <button onClick={()=>setValue(value+1)}>Increment</button>
      <h1>{value}</h1>
      <h1>To-do App</h1>
    </div>
  );
};

export default ToDoApp;
