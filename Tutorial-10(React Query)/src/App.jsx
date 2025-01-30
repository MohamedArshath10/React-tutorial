import React from 'react'
import {QueryClientProvider, QueryClient } from 'react-query'
import Test1 from './Test1'

const App = () => {

  const queryClient = new QueryClient()
  return (
    <QueryClientProvider client={queryClient}>
      <Test1></Test1>
    </QueryClientProvider>
  )
}

export default App