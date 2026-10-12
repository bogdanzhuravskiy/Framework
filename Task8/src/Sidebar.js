import React from 'react'
import { links } from './data'

const Sidebar = () => {
  return (
    <ul className='links'>
      {links.map(({ id, url, text }) => (
        <li key={id}>
          <a href={url}>{text}</a>
        </li>
      ))}
    </ul>
  )
}

export default Sidebar
