import React, {Component} from 'react';

class EventPractice extends Component {
    // state 초깃값 설정
    state = {
        username: '',
        message: ''
    };

    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        });
    }

    handleClick = (e) => {
        alert(this.state.username + ': ' + this.state.message);
        this.setState({
            usernmae: '',
            message: ''
        });
    }

    render() {
        return (
            <div>
                <h1>이벤트 연습</h1>
                <input
                    type="text"
                    name="username"
                    placeholder="사용자명"
                    value={this.state.username} // value 값을 state 값으로 설정
                    onChange={this.handleChange}
                />
                <input
                    type="text"
                    name="message"
                    placeholder="아무거나 입력해 보세요."
                    value={this.state.message} // value 값을 state 값으로 설정
                    onChange={this.handleChange}
                />
                <button onClick={this.handleClick}>확인</button>
            </div>
        );
    }
}

export default EventPractice;