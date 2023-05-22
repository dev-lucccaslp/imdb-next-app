import React from 'react';

export function Results({results}) {
  return (
    <div>
      {results.map((result) => (
        <div key={result.id}>
          {result.original_title}
        </div>
      ))}    
    </div>
  )
}
