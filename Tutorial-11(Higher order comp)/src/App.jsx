import React from 'react'
import Button from './Button'
import withCLickTracking from './withClickTrackinng'

const App = () => {
  const ButtonTacking = withCLickTracking(Button)
  return (
    <div>
      <ButtonTacking label={"pay now"} trackingdata = { {name:'arshath', amount: "2000"}} />
    </div>
  )
}

export default App