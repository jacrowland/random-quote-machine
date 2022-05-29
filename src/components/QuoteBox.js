import { QuoteBoxContent } from "./QuoteBoxContent";
import { Button } from "./Button";
import { Icon } from "./Icon";

export function QuoteBox(props) {
    return (
      <div id="quote-box" className="centered">
          <QuoteBoxContent text={props.quote.text} author={props.quote.author} color={props.color}/>
        <div id="buttons" className="transition-ease">
          <div id="social-buttons">
            <Button key="twitter-button" value={<Icon key="twitter-icon" value="fa-twitter"/>} color={props.color}/>
            <Button key="tumblr-button" value={<Icon key="tumblr-icon" value="fa-tumblr"/>} color={props.color}/>
          </div>
          <div>
            <Button callback={props.handleChange} key="new-quote-button" id="new-quote" value="New quote" color={props.color}/>
          </div>
        </div>
      </div>
    );
}