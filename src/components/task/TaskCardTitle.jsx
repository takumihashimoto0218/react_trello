import React, { useState } from "react";

export const TaskCardTitle = () => {
  const [isClick, setIsClick] = useState(false);
  const [inputCardTitle, setInputCardTitle] = useState("Today")

  const handleClick = () => {
    setIsClick(true);
  }

  const haandleChange = (e) => {
    setInputCardTitle(e.target.value);
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsClick(false);
  }

  const handleBlur = () => {
    setIsClick(false)
  }
  return (
    <div onClick={handleClick} className="taskCardTitleArea">
      {isClick ? (
        <form onSubmit={handleSubmit}>
          <input
            className="taskCardTitleInupt"
            autoFocus
            type="text" 
            onChange={haandleChange} 
            onBlur={handleBlur} 
            value={inputCardTitle}
            maxLength="10"
          />
        </form> 
      ): (
        <h3>{inputCardTitle}</h3>
      )}
    </div>
  )
}
