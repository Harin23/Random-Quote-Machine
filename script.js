class App extends React.Component{
    constructor(props){
        super(props);
        this.state={
            data: [],
            quote: "",
            author: ""
        };
        this.newQuote = this.newQuote.bind(this)
    }
    componentDidMount(){
        fetch("https://type.fit/api/quotes")
        .then(res=>res.json())
        .then(res=>{
            let rand = res[Math.floor(Math.random() * res.length)];
            this.setState({
                data: res,
                quote: rand.text,
                author: rand.author
            });
        });
    }
    newQuote(){
        let rand = this.state.data[Math.floor(Math.random() * this.state.data.length)];
        this.setState({
            quote: rand.text,
            author: rand.author
        });
    }
    render() {
        return(
            <div className="container bg-light w-50 h-50" id="quote-box">
                <div className="p-3" id="text">
                <i className="fa fa-quote-left pr-2"></i>
                {this.state.quote}
                <i className="fa fa-quote-right pl-2"></i>
                </div>
                <div className="float-right text-right pr-3" id="author">-{this.state.author}</div>
                <div className="container-fluid fixed-bottom p-3" id="icons">
                    <a id="tweet-quote" target="_blank" className="float-left pr-2" href="twitter.com/intent/tweet"><i className="fa fa-twitter fa-3x"></i></a>
                    <a className="float-left pr-2" href="" id="tweet-quote"><i className="fa fa-facebook fa-3x"></i></a>
                    <a className="float-left pr-2" href="" id="tweet-quote"><i className="fa fa-instagram fa-3x"></i></a>
                    <button type="button" className="btn btn-primary float-right" id="new-quote" onClick={this.newQuote}>New Quote</button>
                </div>
            </div>
        );
    }
}

ReactDOM.render(<App/>, document.getElementById("app"))