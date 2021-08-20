import React, { useState } from 'react'
import userData from "../../utils/store/Store"
import { users } from '../../api/users';
import { useDispatch } from 'react-redux';
import { updateUserData } from '../../utils/store/actions';

export default function LoginForm() {
  console.log(users)

  const user = userData.getState();
  const dispatch = useDispatch()

  const [formState, setFormState] = useState({
    name: user.name,
    pass: user.pass
  })

  const requestAuth = () => {
    console.log("Request auth")
    const username = formState.name.trim().toLowerCase();
    const password = formState.pass.trim().toLowerCase();
    if (username && password) {
      const user = users.filter((user) => user.username === username && user.password === password)
      if (user.length > 0) {
        console.log('Found it!!!!', user)
        dispatch(updateUserData(user[0].username))

      }
      return true
    }
    return false
  }
  const paramsChange = (param, value) => {
    setFormState({
      ...formState,
      [param]: value
    })
    console.log(formState)
  }

  return (
    <div>
      <h3>Login</h3>
      <form onSubmit={requestAuth}>
        <p>User: <input type="text"
                        onChange={({ target: { value } }) => paramsChange('name', value)}/></p>
        <p>Pass: <input type="password"
                        onChange={({ target: { value } }) => paramsChange('pass', value)}/></p>
        <input type="button" value="Send" onClick={requestAuth}></input>
      </form>
    </div>
  )
}
