import React from 'react'

function Navbarbutton(props){
  return (
    <div className='nav-left-button-greensheet align-middle'>
        <div className='nav-button-text'>{props.pageName}</div>
    </div>
  )
}

export default Navbarbutton
