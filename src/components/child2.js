import React from "react";

function Child2(props) {
  const { selectedMessage } = props

  return (
    <div>
      <p>{selectedMessage}</p>
    </div>
  )
}

export default Child2;