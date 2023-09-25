import './App.css';
import Sidebar from './components/Sidebar/sidebar.js';
import TaskCard from './components/TaskCards/card.js';
import TaskModal from './components/TaskModal/TaskModal.jsx';
import TaskList from './components/TaskModal/TaskList.jsx';

import { useState } from 'react';

function App() {

  const [isModalVisible, setModalVisible] = useState(false);

  //Choosing Category State

  const [selectedCategory, setSelectedCategory] = useState("");
  const handleCreatedTaskClick = () => {
    setModalVisible(true);
  };

  const handleTaskCreated = (task) => {
    setModalVisible(false);
  }


  return (
    <div className ="App">
      <TaskModal isVisible={isModalVisible} onClose={handleTaskCreated} />
      <Sidebar onCreateTaskClick={handleCreatedTaskClick} onCategorySelect = {setSelectedCategory} />      
      <TaskList category ={selectedCategory}/>
      {/* Used to Display Test Card Subjects <TaskCard /> */}
      
    </div>
  );

}

export default App;
