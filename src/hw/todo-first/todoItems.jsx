import React from "react";

class TodoComponent extends React.Component{

  constructor(){
    super()
    this.state = {
      todos: [
        {
          id: 1,
          task: 'first task',
          done: false
        }
      ],
      input: '',
      todo: '123'
    };

    this.handleAddNote = this.handleAddNote.bind(this);
    this.handleChangeNote = this.handleChangeNote.bind(this);
  }

  handleChangeNote(e){
    this.setState({
      input: e.target.value
    })
  }

  handleAddNote(){
    const element = {
      id: this.state.todos.length + 1,
      task: this.state.input,
      done: false
    }
    
    this.setState({
      todos: [...this.state.todos, element]
    });
  }

  handleCheckedNote(id){
    this.setState({
      todos: [
        ...this.state.todos.map((item)=>(
          item.id === id 
          ? {...item, done: !item.done}
          : {...item} 
        ))
      ]
    })
  }

  handleDeleteNote(id){
    let del = this.state.todos.filter((e)=> e.id !== id);
    this.setState({
      todos: del
    });
  }

    render(){
        return(
            <div>
                <input onChange={this.handleChangeNote} type="text"/>
                <button onClick={this.handleAddNote}>Add</button>
            
                <div className="tasks">
                  {this.state.todos.map((e)=>(
                    <div className="newTask">
                      <p
                      className={e.done ? "done noteValue" : "notdone noteValue"}
                      onClick={()=> this.handleCheckedNote(e.id)}
                      key={e.id}
                      >
                        {e.task} 
                      </p>
                      <button onClick={()=> this.handleDeleteNote(e.id)}>Delete</button>
                    </div>
                  ))}
                </div>
            </div>

        )
    }
}

export default TodoComponent;