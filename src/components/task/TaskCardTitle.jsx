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
  return (
    <div onClick={handleClick}>
      {isClick ? (
        <form onSubmit={handleSubmit}>
          <input type="text" onChange={haandleChange} />
        </form> 
      ): (
        <h3>{inputCardTitle}</h3>
      )}
    </div>
  )
}