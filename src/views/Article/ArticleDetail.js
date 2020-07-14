import React, {Component} from 'react';


class ArticleDetail extends Component {
    backtohome = ()=>{
        this.props.history.push({
            pathname:'/home',
            state:{
                id:this.props.match.params.id
            }
        });
    }
    render() {
        console.log(this.props)
        return (
            <div>
                文章{this.props.match.params.id}
                <button onClick={this.backtohome}>返回首页</button>
            </div>
        );
    }
}

export default ArticleDetail;