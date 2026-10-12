import React from 'react'
import { FaEdit, FaTrash } from 'react-icons/fa'
const List = ({ items, removeItem, editItem }) => {
  return (
    <div className='grocery-list'>
      {items.map(({ id, title }) => (
        <article key={id} className='grocery-item'>
          <p className='title'>{title}</p>
          <div className='btn-container'>
            <button type='button' className='edit-btn' onClick={() => editItem(id)} aria-label={`Edit ${title}`}>
              <FaEdit />
            </button>
            <button type='button' className='delete-btn' onClick={() => removeItem(id)} aria-label={`Delete ${title}`}>
              <FaTrash />
            </button>
          </div>
        </article>
      ))}
    </div>
  );
}

export default List
