export function Button(props) {
    return (
        <a target={props.target} onClick={props.callback} class="btn" id={props.id} href={props.href} style={{backgroundColor: props.color}}>
            {props.value}
        </a>
    )
}