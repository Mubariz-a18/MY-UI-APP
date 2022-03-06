import { Component } from "react";
class Counter extends Component {
    state = { count : this.props.count } 
    increase = () => {
        let cnt = this.state.count;
        this.setState({count:cnt+1})
    }
    decrease = ()=>{
        let cnt = this.state.count;
        this.setState({count:cnt-1})
    }

    render() { 
        return <div>
            <button onClick={this.increase}>+</button>
            <h4>{this.state.count}</h4>
            <button onClick={this.decrease}>-</button>
        </div>
    }
}
 
export default Counter;