import React,{Component} from 'react' ;


class Button extends Component{
    constructor(props){
        super(props) ;
        this.state = {
            startingText: this.props.inputText,
            translatedText: '',
        };
    }

    componentWillReceiveProps(nextProps){
        this.setState({startingText: nextProps.inputText}, ()=>{
            this.componentDidMount() ;
        }) ;
        console.log('next props: ' + nextProps.inputText);
    }

    componentDidMount(){
        console.log('Button text: ' + this.props.inputText) ;
        fetch(`http://api.funtranslations.com/translate/pirate.json?text=${this.props.inputText}`).then(results => {
            return results.json()
        }).then(data => {
            this.setState({translatedText: data.contents.translated}) ;
        })
    }


    render(){
        return(
            <div className="container2">
                <div className="container1">
                    {this.state.translatedText}
                </div>
            </div>
        )
    }
}

export default Button ;