import React, {Component} from 'react';
import withcopyRight from "../WithCopyright";

class Another extends Component {
    render() {
        return (
            <div >
                Another {this.props.name}
            </div>
        );
    }
}

export default withcopyRight(Another);