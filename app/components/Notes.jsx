import React from 'react';
import Note from './Note';

export default ({ notes, onDelete=() => {} }) => (
  <ul>
    {notes.map(({task, id}) =>
      <li key={id}>
        <Note>
          <span>{task}</span>
          <button onClick={onDelete.bind(null, id)}>x</button>
        </Note>
      </li>
    )}
  </ul>
)