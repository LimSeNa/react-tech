const MyComponent = props => {
    return <div>안녕하세요. 저의 이름은 {props.name}입니다.</div>;
};

MyComponent.defaultProps = {
    name: '기본 이름'
};

export default MyComponent;