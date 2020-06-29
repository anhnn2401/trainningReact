import React, {Component} from 'react';
import {connect} from 'react-redux';

class Child extends Component {
    render() {
        // console.log("child", this.props.counter);
        return (
            <div>
                <p>{this.props.counter}</p>
            </div>
        )
    }
}

const mapStateToProps = state => ({
    counter: state.counter
});

export default connect(mapStateToProps, null)(Child);

