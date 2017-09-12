import React from 'react';




const TodoHeader = (props) => (
		<div>
			<h1>Todo Header</h1>
			<input value={props.todo.title} type="text"
				onChange={props.onTodoChange} /><br/>
			<button onClick={props.addTodo}>新增</button>
		</div>
		)
// class TodoHeader extends React.Component{

// 	constructor(props){
// 		super(props);
// 		this.state={

// 		}
// 		console.log(props.todo);
// 	}



// 	render(){
// 		return(	
// 			<div>
// 		      <h1>Todo Header</h1>
// 		      <input value={this.props.todo.title} type="text"
// 		      		onChange={this.props.onTodoChange} /><br/>
// 		      <button onClick={this.props.addTodo}>新增</button>
// 			</div>
// 		);
// 	};


// }

export default TodoHeader;












