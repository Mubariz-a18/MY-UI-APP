function ShouldRender(props) {
    return ( props.condition ? props.child : null );
}

export default ShouldRender;