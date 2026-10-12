import React from 'react'
import { social } from './data'

const Social = () => {
  return (
    <ul className='social-icons'>
      {social.map(({ id, url, icon }) => (
        <li key={id}>
          <a href={url}>{icon}</a>
        </li>
      ))}
    </ul>
  )
}

export default Social
