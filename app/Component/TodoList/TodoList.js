import React from 'react';


class TodoList extends React.Component{




constructor(props)
{
super(props);

 this.state={

 }
 }
render(){
return(	
	<div>
      <ul>
      	{
      		this.props.todos.map((todo,index)=>{
      			return(
      				<li key={index}>
      					<p>{todo.title}</p>
      				</li>
  				)
      		})
      	}
      </ul>
	</div>
);
};


}

export default TodoList;












