import Header from './components/Header'
import Tasks from './components/Tasks'
import { useState } from 'react'


function App() {

  const [tasks, setTasks] = useState([
    {
      id: 1,
      text: 'Doctor Appointment',
      dateTime: '5th Feb 2021 at 2:00PM',
      reminder: true
    },
    {
      id: 2,
      text: 'Teacher Appointment',
      dateTime: '5th Feb 2021 at 2:00PM',
      reminder: true
    },
    {
      id: 3,
      text: 'Shopkeeper payment',
      dateTime: '5th Feb 2021 at 2:00PM',
      reminder: true
    },
  ])

  const deleteTask = (id) => {
    // console.log('delete', id)
    setTasks(tasks.filter((task) => task.id !== id))
  }

  const toggleReminder = (id) => {
    // console.log('onToggle', id)
    setTasks(tasks.map((task) =>
      task.id === id
        ? { ...task, reminder: !task.reminder, }
        : task
    )
    )
  }

  return (
    <div className="container">
      <Header />
      {tasks.length > 0 ? <Tasks tasks={tasks} onDelete={deleteTask} onToggle = {toggleReminder} /> : <p>No task to show</p>}
    </div>
  );

}
export default App;

