import React from 'react';


const handleClick = () => {
    console.log("Mary Akinyode")
}

const Body = () => {
  return (
    <>

    <button onClick={handleClick} className='bg-blue-500 rounded p-2 m-2 cursor-pointer'>
        Click me
    </button>
    </>
  )
}

export default Body

