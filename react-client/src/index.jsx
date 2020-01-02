import React from 'react';
import ReactDOM from 'react-dom';
import TopTen from './components/topTen.jsx';
import TopAuthors from './components/topAuthors.jsx';
import $ from 'jquery';

class App extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            route : "/stories"
        }
    }
    switchRoute(route){
        this.setState({route})
    }
    render(){
        return <div>
            <span style={{fontSize:"20px", cursor:"pointer", margin:"10px", color: this.state.route == "/stories"? null: "grey"}}
             onClick={this.switchRoute.bind(this, "/stories")}> Top Ten Stories </span>
            <span style={{fontSize:"20px", cursor:"pointer", margin:"10px", color: this.state.route == "/authors"? null: "grey"}}
             onClick={this.switchRoute.bind(this, "/authors")}> Top Ten Authors </span>

             {this.state.route == "/stories"? <TopTen />: <TopAuthors />}
    

        </div>
    }
}


ReactDOM.render(<App />, document.getElementById('app'));

