import React, {Component} from 'react';

class LifeCycleSample extends Component {
    state = {
        number: 0,
        color: null,
    }

    myRef = null; // ref를 설정할 부분

    constructor(props) { // 컴포넌트 만들 때 처음으로 실행
        super(props); // constructor를 작성할 때, 반드시 super(props) 호출 -> Component 클래스가 지닌 생성자 함수 호출
        console.log('constructor');
    }

    static getDerivedStateFromProps(nextProps, prevState) { // props로 받아온 값을 state에 동기화
        console.log('getDerivedStateFromProps');
        if(nextProps !== prevState) {
            return { color: nextProps.color };
        }
        return null;
    }

    componentDidMount() { // 첫 렌더링 완료 후
        console.log('componentDidMount');
    }

    shouldComponentUpdate(nextProps, nextState) { // 리렌더링을 시작할지 여부
        console.log('shouldComponentUpdate', nextProps, nextState);
        // 숫자의 마지막 자리가 4면 리렌더링하지 않음
        return nextState.number % 10 !== 4;
    }

    componentWillUnmount() { // 제거
        console.log('componentWillUnmount');
    }

    getSnapshotBeforeUpdate(prevProps, prevState) { // 브라우저에 실제로 반영되기 직전
        console.log('getSnapshotBeforeUpdate');
        if(prevProps.color !== this.props.color) {
            return this.myRef.style.color;
        }
        return null;
    }

    componentDidUpdate(prevProps, prevState, snapshot) { // 리렌더링 완료 후
        console.log('componentDidUpdate', prevProps, prevState);
        if(snapshot) { // snapshot : getSnapshotBeforeUpdate에서 반환한 값
            console.log('업데이트되기 직전 색상 : ', snapshot);
        }
    }

    handleClick = () => {
        this.setState({
            number: this.state.number + 1
        });
    }

    render() { // 컴포넌트 모양새 정의
        console.log('render');

        const style = {
            color: this.props.color
        };

        return (
            <div>
                <h1 style={style} ref={ref => this.myRef=ref}>{this.state.number}</h1>
                <p>color: {this.state.color}</p>
                <button onClick={this.handleClick}>더하기</button>
            </div>
        );
    }
}

export default LifeCycleSample;