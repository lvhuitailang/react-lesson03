import React, {Component} from 'react';


class ArticleDetail extends Component {
    render() {
        return (
            <div>
                文章{this.props.match.params.id}
            </div>
        );
    }
}

export default ArticleDetail;