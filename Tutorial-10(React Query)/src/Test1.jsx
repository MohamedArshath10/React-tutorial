import React from 'react'
import { useQuery } from 'react-query'

const Test1 = () => {
  const {isLoading, data, error} = useQuery('gitHubData',apiCall )

  function apiCall(){
    
      return fetch('https://api.github.com/repos/MohamedArshath10/React-tutorial').then((res) => res.json())
    }
  
  if (isLoading) return <div>Loading...</div>

  if (error) return <h1>An error occured {error}</h1>

  console.log(data);
  return (
    <div>
      <h1>Repo name: {data.name}</h1>
      <h1>Repo sub count: {data.subscribers_count}</h1>
      <h1>Stargazers: {data.stargazers_count}</h1>
      <h1>Visibility: {data.visibility}</h1>
    </div>
  )
}

export default Test1