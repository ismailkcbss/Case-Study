import React from 'react'
import {useHistory} from 'react-router-dom'

export default function Cases() {
    const history = useHistory();

const handlePostRequest = () => {
    history.push('/CreateRequest')
}

  return (
    <div>
      <div>
        <input
        type='text'
        placeholder="Search..."
        />

        <button onClick={handlePostRequest}>Create Request</button>
      </div>

      <div className='RequestList'>
        
      </div>
    </div>
  )
}
