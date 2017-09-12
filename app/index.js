import React from 'react';
import ReactDOM from 'react-dom';
import TodoHeader from './Component/TodoHeader/TodoHeader'
import TodoList from './Component/TodoList/TodoList'
import LifeCycle from './Component/LifeCycle/LifeCycle'

class App extends React.Component{

	constructor(props){

		super(props);
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
	 	console.log(22);
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
		  	<LifeCycle/>
		      	<TodoHeader todo={this.state.todo}
		      		onTodoChange={this.handleTodoChange.bind(this)}
		      		addTodo={this.handleAddTodo.bind(this)}/>
	      		<TodoList todos={this.state.todos}/>
			</div>
		);
	};


}


ReactDOM.render(<App/>,document.getElementById("app"));











