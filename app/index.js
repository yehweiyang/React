import React from 'react';
import ReactDOM from 'react-dom';
import TodoHeader from './Component/TodoHeader/TodoHeader'
import TodoList from './Component/TodoList/TodoList'

class App extends React.Component{

	constructor(props){

		super(props);
		 this.handleTodoChange=this.handleTodoChange.bind(this);
		 this.handleAddTodo=this.handleAddTodo.bind(this);
		 this.state={
			todo:{
				id:'0',
				title:''
			},
			todos:[]
		 };
	 }

	 handleTodoChange(e){
	 	this.setState({
	 		todo:{
	 			title:e.target.value
	 		}
	 	});
	 	console.log(this.state.todo);
	 }

	 handleAddTodo(e){
	 	this.state.todos.push(this.state.todo);
	 	this.setState({
	 		todos:this.state.todos,
	 		todo:{
	 			id:0,
	 			title:''
	 		}
	 	});
	 }

	render(){
		  return(	
		  	<div>
		      	<TodoHeader todo={this.state.todo}
		      		onTodoChange={this.handleTodoChange}
		      		addTodo={this.handleAddTodo}/>
	      		<TodoList todos={this.state.todos}/>
			</div>
		);
	};


}


ReactDOM.render(<App/>,document.getElementById("app"));











