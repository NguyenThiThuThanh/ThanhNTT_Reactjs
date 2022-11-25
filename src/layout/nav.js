import React from "react";

function Nav({isOpen}) {
  return (
    <div className={`navbar ${isOpen ? 'show' : ''}`}>
      menu open
    </div>
  )
}

export default Nav;