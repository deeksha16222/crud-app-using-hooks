import React, { useState } from 'react'

const AddUserForm = (props) => {
  const initialFormState = { id: null, name: '', email: '' }
  const [user, setUser] = useState(initialFormState)

  const handleInputChange = (event) => {
    const { name, value } = event.target
    setUser({ ...user, [name]: value, [user]: value })

  }

  return (
    <form
      onSubmit={(event) => {
        event.preventDefault()
        if (!user.name || !user.email) return

        props.addUser(user)
        setUser(initialFormState)
      }}
    >
      <label>Name</label>
      <input
        type="text"
        name="name"
        value={user.name}
        onChange={handleInputChange}
      /> <br/> <br/>
      <label>Username</label>
      <input
        type="email"
        name="email"
        value={user.email}
        onChange={handleInputChange}
      /> <br/> <br/> <br/> 
      <button>Add new user</button>
    </form>
  )
}

export default AddUserForm