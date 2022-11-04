import React, { useState, useEffect } from 'react'

const EditUserForm = props => {
  const [ user, setUser ] = useState(props.currentUser)

  useEffect(
    () => {
      setUser(props.currentUser)
    },
    [ props ]
  )
  
  const handleInputChange = event => {
    const { name, value } = event.target

    setUser({ ...user, [name]: value })
  }

  return (
    <form
      onSubmit={event => {
        event.preventDefault()

        props.updateUser(user.id, user)
      }}
    >
      <label>Name</label>
      <input type="text" name="name" value={user.name} onChange={handleInputChange} />
      <label>Username</label> 
      <input type="email" name="email" value={user.email} onChange={handleInputChange} /> <br/> <br/>
      <button>Update user</button> <br/> <br/>
      <button onClick={() => props.setEditing(false)} className="button muted-button">
        Cancel
      </button> 
    </form>
  )
}

export default EditUserForm