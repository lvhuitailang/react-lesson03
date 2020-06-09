import React, {Component} from 'react';


const withcopyRight = (YourComponet)=>{
    return class WithCopyright extends Component {

        render() {
            return (
                <div>
                    <YourComponet {...this.props}/>
                    &copy;2020&emsp;大灰灰
                </div>
            );
        }
    }
}


export default withcopyRight;