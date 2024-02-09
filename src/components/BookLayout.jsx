import React from 'react'
import { Link, NavLink, Outlet } from 'react-router-dom'

function BookLayout() {
  return (
    <>
     <ul>
        <li>
          <NavLink style={({isActive}) => {
            return isActive ? {color: 'red'} : {}
          }} to="/book/1">Book1</NavLink>
        </li>
        <li>
          <Link to="/book/2">Book2</Link>
        </li>
        <li>
            <Link to="/book/new">BookNew</Link>
        </li>
      </ul>
      <Outlet/>
    </>
  )
}

export default BookLayout