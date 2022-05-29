

export function QuoteBoxContent(props) {
    return (
        <div style={{color: props.color}}>
            <div id="quote-text" >
            <i class="fa fa-quote-left"></i>
            <span id="text"> {props.text}</span>  
            </div>
            <div id="quote-author">
            - <span id="author">{props.author == null ? 'Unknown' : props.author}</span>
            </div>
        </div>
    );
}