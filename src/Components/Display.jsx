//Keep it simple, just return all the words that contain the substring.
import React from 'react'

export default function Display({keysToShow}) {
  return (
    <div className='Display-Div'>
      The keys containing the search element are:<br/>
      {keysToShow}
   </div>
  )
}
