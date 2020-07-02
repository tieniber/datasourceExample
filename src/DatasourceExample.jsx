import "./ui/DatasourceExample.css";
import { Component, createElement } from "react";
import { hot } from "react-hot-loader/root";

class DatasourceExample extends Component {
    constructor(props) {
        super(props);
        this.renderItems = this.renderItems.bind(this);
        this.loadMore = this.loadMore.bind(this);
    }

    renderItems() {
        const { content, data } = this.props;
        return data.status === "available" ? data.items.map(item => content(item)) : null;
    }

    render() {
        return (
            <div>
                {this.renderItems()}
                <button onClick={this.loadMore}>Load More...</button>
            </div>
        );
    }

    loadMore() {
        const { offset, refreshAction } = this.props;
        offset.setValue(offset.value.plus(5));
        refreshAction.execute();
    }
}

export default hot(DatasourceExample);
