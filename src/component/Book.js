import React from 'react';
import useAxios from 'axios-hooks'

const Book = () => {
  const [{ data, loading, error}] = useAxios(
    `http://localhost:8080/api/sample/book`
  )
  if (loading) return 'Loading...'
  if (error) return 'Error!'

  return (
    <div>
      <h2>
       book
      </h2>  
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </div>

  );
}

export default Book;