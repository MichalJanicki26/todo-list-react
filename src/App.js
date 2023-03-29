import React, { useState } from 'react';
import Container from "./Container";
import Header from "./Header";
import Section from "./Section";
import Form from "./Form";
import Buttons from "./Buttons";
import Tasks from "./Tasks";

function App() {
  const [hideDone, setHideDone] = useState(false);

  const [tasks, setTasks] = useState([
    { id: 1, content: "przejść na Reacta", done: false },
    { id: 2, content: "zjeść kolację", done: false },
  ]);

  const toggleHideDone = () => {
    setHideDone(hideDone => !hideDone);
  };

  const removeTask = (id) => {
    setTasks(tasks => tasks.filter(task => task.id !== id));
  };

  const toggleTaskDone = (id) => {
    setTasks(tasks => tasks.map(task => {
      if (task.id === id) {
        return {...task, done: !task.done };
      }

      return task;
    }));
  }

  return (
    <Container>
      <Header
        title="Lista Zadań"
      />

      <Section
        title="Dodaj nowe zadanie"
        body={<Form />}
      />

      <Section
        title="Lista Zadań"
        extraHeaderContent={
          <Buttons
            tasks={tasks}
            hideDone={hideDone}
            toggleHideDone={toggleHideDone}
          />}
        body={
          <Tasks
            tasks={tasks}
            hideDone={hideDone}
            removeTask={removeTask}
            toggleTaskDone={toggleTaskDone}
          />}
      />
    </Container>
  );
}

export default App;