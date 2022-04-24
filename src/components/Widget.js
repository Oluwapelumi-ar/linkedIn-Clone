import { FiberManualRecord, Info } from '@mui/icons-material';
import React from 'react';
import './Widget.css'

function Widget() {

  const newsArticle = (heading, subtitle) => {
    return (
      <div className="widgets__article">
      <div className="widgets__articleLeft">
        <FiberManualRecord />
      </div>
      <div className="widgets__articleRight">
        <h4>{heading}</h4>
        <p>{subtitle}</p>
      </div>
    </div>
    )
    
  }

  return (
    <div className='widgets'>
      <div className="widgets__header">
        <h2>LinkedIN News</h2>
        <Info />
      </div>
      {newsArticle('Shuks is the next big thing','Top news -   9999 Lovers')}
      {newsArticle('Shuks is the next big thing','Top news -   9999 Lovers')}
      {newsArticle('Shuks is the next big thing','Top news -   9999 Lovers')}
      {newsArticle('Shuks is the next big thing','Top news -   9999 Lovers')}
      {newsArticle('Shuks is the next big thing','Top news -   9999 Lovers')}
      
    </div>

  )
}

export default Widget