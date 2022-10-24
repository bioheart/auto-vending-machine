import React from 'react'

const MenuBtn = ({menu, onClick}) => {
  return (
    <>
      <button className='menu-btn btn' onClick={()=>onClick(menu)}>{menu.name}</button>
    </>
  )
}

export default MenuBtn