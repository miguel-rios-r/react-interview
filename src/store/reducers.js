const login = (user, pass) => {
    if ( user === "miguel" && pass === "123") {
        return true
    }
    return false
}

// const
const initialData = {
    logged: false,
    fetching: false
  }
  const LOGIN = "LOGIN"
  const LOGIN_SUCCESS = "LOGIN_SUCCESS"
  const LOGIN_ERROR = "LOGIN_ERROR"
  
  // reducers
  const reducer = ( state = initialData, action ) => {
    switch ( action.type ) {
      case LOGIN:
        return { ...state, fetching: true }
      case LOGIN_SUCCESS:
        return { ...state, fetching: false, ...action.payload, logged: true }
      case LOGIN_ERROR:
        return { ...state, fetching: false, error: action.payload }
      default:
        return state
    }
  }
  export default reducer
  
  export const doLoginAction = () => (dispatch, getState) => {
    dispatch({
      type: LOGIN
    })
    return login('miguel', '123')
      .then( user => {
        dispatch({
            type: LOGIN_SUCCESS,
            payload: {
              uid: '123456',
              displayName: 'Miguel'
            }
          })
      })
      .catch( err => {
        dispatch({
          type: LOGIN_ERROR,
          payload: {...err}
        })
      })
  }