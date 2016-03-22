var initialState = {
  isAuthenticated: localStorage.getItem('id_token') ? true : false,
  isFetching: false,
  error: '',
  username: '',
  showSigninAndNotSignup: true
}

// reducer that handles authentication
const auth = (state=initialState, action) => {
  switch (action.type) {
    case 'AUTH_REQUEST':
      return Object.assign({}, state, {
        isFetching: true,
      })
    case 'AUTH_SUCCESS':
      return Object.assign({}, state, {
        isFetching: false,
        isAuthenticated: true,
        error: ''
      })
    case 'AUTH_FAILURE':
      return Object.assign({}, state, {
        isFetching: false,
        isAuthenticated: false,
        error: action.payload.message
      })
    case 'LOGOUT':
      localStorage.clear();
      console.log('localStorage is cleared');
      return Object.assign({}, state, {
        isAuthenticated: false,
        error: ''
      })
    case 'TOGGLE_SIGNIN_OR_SIGNUP_LINK':
      return Object.assign({}, state, {
        showSigninAndNotSignup: !state.showSigninAndNotSignup,
        error: ''
      })

    default:
      return state;
  }
}


export default auth


