import React, {Component} from 'react';
import LifeCycleSample from "./chap07/LifeCycleSample";
import ErrorBoundary from "./chap07/ErrorBoundary";

// 랜덤 색상을 생성
function getRandomColor() {
    return `#` + Math.floor(Math.random() * 16777215).toString(16);
}

class App extends Component {
    state = {
        color: '#000000'
    }

    handleClick = () => {
        this.setState({
            color: getRandomColor()
        });
    }

    render() {
        return (
            <div>
                <button onClick={this.handleClick}>랜덤 색상</button>
                <ErrorBoundary>
                    <LifeCycleSample color={this.state.color}/>
                </ErrorBoundary>
            </div>
        );
    }
}

export default App;