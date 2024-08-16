import React from 'react'

export default class Todo extends React.Component {
  render() {
    const {id, name, completed} = this.props.todo
    const { toggle} = this.props
    return (
      <div onClick={() => toggle(id)}>
        {name} {completed &&  '✔️'}
      </div>
    )
  }
}   
