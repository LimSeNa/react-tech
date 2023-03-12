import React, {Component} from 'react';

class Counter extends Component {
    state = {
        number: 0,
        fixedNumber: 0
    };
    render() {
        const {number, fixedNumber} = this.state; // state 조회
        return (
            <div>
                <h1>{number}</h1>
                <h2>바뀌지 않는 값: {fixedNumber}</h2>
                <button onClick={() => {
                    this.setState(prevState => {
                        return {
                            number: prevState.number + 1
                        };
                    });
                    // 다음 코드는 위 코드와 똑같은 기능을 함
                    // 함수에서 바로 객체를 반환한다는 의미
                    this.setState(prevState => ({
                        number: prevState.number + 1
                    }));
                }}>+1
                </button>
            </div>
        );
    }
}

export default Counter;