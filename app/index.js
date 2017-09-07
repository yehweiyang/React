import React from 'react';
import ReactDOM from 'react-dom';
import TodoHeader from './Component/TodoHeader/TodoHeader'

class App extends React.Component{

	constructor(props){

		super(props);
		 this.handleTodoChange=this.handleTodoChange.bind(this);
		 this.state={
			todo:{
				id:'0',
				title:''
			}
		 };
	 }

	 handleTodoChange(e){
	 	this.setState({
	 		todo:{
	 			title:e.target.value
	 		}
	 	});
	 	console.log(this.state);
	 }

	render(){
		  return(	
		  	<div>
		      	<TodoHeader todo={this.state.todo}
		      		onTodoChange={this.handleTodoChange}/>
	      		<p>-----------</p>
			</div>
		);
	};


}


ReactDOM.render(<App/>,document.getElementById("app"));











