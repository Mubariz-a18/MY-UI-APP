import { Component } from "react";

class AutoCounter extends Component {
    state = { count: 0 }
    constructor() {
        super();
        setInterval(
            () => {
                const cnt = this.state.count
                this.setState({ count: cnt + 1 })
            }
       ,1000 )
    }

    render() {
        return (<div>
            <h2>{this.state.count}</h2>
        </div>);
    }
}

export default AutoCounter