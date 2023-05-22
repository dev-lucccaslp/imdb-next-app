"use client";

import React, { useEffect } from 'react'

export default function Error({error,reset}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div className='text-center mt-10'>
      <h2>Something went wrong!</h2>
      <button className='hover:text-amber-600'
        onClick={
          // Attempt to recover by trying to re-render the segment
          () => reset()
        }
      >
        Try again
      </button>  
    </div>
  )
}
