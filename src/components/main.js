import React, {Component} from 'react';
import * as actions from '../actions';
import {connect} from 'react-redux';
import Child from './Child.jsx';

class Main extends Component {
    handleIncrease = () => {
        this.props.counterIncrease();
        console.log('____', this.props.counterIncrease);
        
    };

    handleDecrease = () => {
        this.props.counterDecrease();
        console.log(this.props.counterDecrease)
    };

    render() {
        return (
          <div>
            <div>
            <Child />
            </div>
            <div>
              <button
                  onClick={this.handleIncrease}>Increase</button>
              <button
                  onClick={this.handleDecrease}>Decrease</button>
            </div>
          </div>
        )
    }
}

export default connect(null, actions)(Main);
