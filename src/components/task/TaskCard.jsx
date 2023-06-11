import React, { useState } from "react";
import { TaskCardTitle } from "./TaskCardTitle";
import { TaskCardDeleteButton } from "./button/TaskCardDeleteButton";
import { TaskAddInput } from "./input/TaskAddInput";
import { Tasks } from "./Tasks";

export const TaskCard = () => {
  const [inputText, setInputText] = useState("");
  const [taskLIst, setTaskLIst] = useState([]);
  return (
    <div className="taskCard">
      <TaskCardTitle />
      <TaskCardDeleteButton />
      <TaskAddInput 
        inputText={inputText} 
        setInputText={setInputText} 
        setTaskLIst={setTaskList}
        taskLIst={taskLIst}
      />
      <Tasks />
    </div>
  )
}