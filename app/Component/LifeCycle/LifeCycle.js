import React from 'react';

class LifeCycle extends React.Component{

	constructor(props){
		super(props);
		this.state ={
			name : "Jerry"
		}
		this.handleClick = this.handleClick.bind(this);
		}

	componentWillMount(){
		console.log('componentWillMount');
	}

	componentDidMount(){
		console.log('componentDidMount');
	}

	componentWillUpdate(){
		console.log('componentWillUpdate');
	}

	componentDidUpdate(){
		console.log('componentDidUpdate');
	}

handleClick(){
	this.setState({
		name : "Bibby"
	})
}

	render(){
		return(	
			<div onClick={this.handleClick}>
		      Hello World {this.state.name}
			</div>
		);
	};

}


export default LifeCycle;