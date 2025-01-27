import React, { Component } from 'react' 
// class based components created using 'rce' lifecycle methods

export class App2 extends Component {

    constructor(props){
        super(props)

        this.state ={
            first: 0,
            second: 100,
        }
    }
// the alternate of useEffect in initial state
    componentDidMount(){
        console.log('component did mount')
    }
// the alternat eof useEffect when the first state is changed
    componentDidUpdate(prev,prevState){
        if(prevState.first !== this.state.first){
            console.log("First value is changed");
        }
    }
  render() {
    return (
      <div> 
        <h1>Class based Component</h1>
        <h1>First: {this.state.first}</h1>
        <button onClick={() => this.setState({first: this.state.first + 1})}>Add</button>
        <h1>Second: {this.state.second}</h1>
        <button onClick={() => this.setState({second: this.state.second + 1})}>Add</button>
      </div>
    )
  }
}

export default App2