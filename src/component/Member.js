import React from 'react';
import useAxios from 'axios-hooks'

const Member = (match) => {
  const [{ data, loading, error}] = useAxios(
    `http://springboot-demo-wspark-test.apps.ocp4.local/api/library/member`
  )
  if (loading) return 'Loading...'
  if (error) return 'Error!'

  return (
    <div>
      <h2>
       Member 
      </h2>       
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </div>

  );
}
export default Member;