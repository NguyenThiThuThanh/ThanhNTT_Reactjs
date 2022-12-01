import React from "react";

function Child1({setMessage}) {
  const onBtnClick = () => {
    setMessage('message from child1')
  }

  return (
    <div>
      <button onClick={onBtnClick}>
        Child1
      </button>
    </div>
  )
}

export default Child1;