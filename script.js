const QUOTE = "sgjjgksfjksdfjksajfksajfksjfka";
const AUTHOR = "Me"
class App extends React.Component{
    constructor(props){
        super(props);
        this.state={
            sup: "sup"
        };
    }

    render() {
        return(
            <div className="container bg-light w-50 h-50" id="quote-box">
                <div id="text"></div>
                <div id="author"></div>
                <a className="float-left fixed-bottom" href="twitter.com/intent/tweet" id="tweet-quote"><i class="fa fa-twitter fa-5x"></i></a>
                <button type="button" className="btn btn-primary float-right" id="new-quote">New Quote</button>
            </div>
        );
    }
}

ReactDOM.render(<App/>, document.getElementById("app"))