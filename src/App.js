import React, {Component} from 'react';
import ScrollBox from "./chap05/ScrollBox";

class App extends Component {

    render() {
        return (
            <div>
                <ScrollBox ref={(ref) => this.scrollBox = ref}/>
                <button onClick={() => this.scrollBox.scrollTopBottom()}>맨 밑으로</button>
            </div>
        );
    }
}

export default App;