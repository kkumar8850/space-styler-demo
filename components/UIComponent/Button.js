import React from 'react'

function Button({children}) {
  return (
    <button className='border-primary dark:border-secondary border-2 rounded-full px-6 py-2 text-sm mr-2 mb-2'>
        {children}
    </button>
  )
}

export default Button