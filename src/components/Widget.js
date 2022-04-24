import { Info } from '@mui/icons-material';
import React from 'react';
import './Widget.css'

function Widget() {
  return (
    <div className='widgets'>
      <div className="widgets__header">
        <h2>LinkedIN News</h2>
        <Info />
      </div>
    </div>
  )
}

export default Widget