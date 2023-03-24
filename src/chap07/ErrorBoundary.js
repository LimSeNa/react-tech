import React, {Component} from 'react';

class ErrorBoundary extends Component {
    state = {
        error: false
    };

    componentDidCatch(error, errorInfo) { // 에러가 발생했을 때, 오류 UI를 보여줌
        this.setState({
            error: true
        });
        console.log({error, errorInfo}); // error: 어떤 에러 발생, errorInfo: 어디서 에러 발생
    }

    render() {
        if (this.state.error) return <div>에러가 발생했습니다.⚠️</div>
        return this.props.children;
    }

}

export default ErrorBoundary;