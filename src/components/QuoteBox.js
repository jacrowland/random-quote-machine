import { QuoteBoxContent } from "./QuoteBoxContent";
import { Button } from "./Button";
import { Icon } from "./Icon";

export function QuoteBox(props) {
    return (
      <div id="quote-box" className="centered">
          <QuoteBoxContent text={props.quote.text} author={props.quote.author} color={props.color}/>
        <div id="buttons" className="transition-ease">
          <div id="social-buttons">
            <Button target="_blank" href={encodeURI(`https://twitter.com/intent/tweet?text="${props.quote.text}" ${props.quote.author}&hashtags=quotes`)} id="tweet-quote" value={<Icon key="twitter-icon" value="fa-twitter"/>} color={props.color}/>
          </div>
          <div>
            <Button callback={props.handleChange} key="new-quote-button" id="new-quote" value="New quote" color={props.color}/>
          </div>
        </div>
      </div>
    );
}

//`https://www.tumblr.com/widgets/share/tool?posttype=quote&tags=quotes&caption=${props.quote.author}&content=${props.quote.text}&shareSource=tumblr_share_button`
