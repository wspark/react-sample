import React from 'react';
import useAxios from 'axios-hooks'

const Book = () => {
  const [{ data, loading, error}] = useAxios(
    `http://openjdk-app-wspark-test2.apps.ocp4.local/api/library/book`
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