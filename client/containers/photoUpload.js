import { connect } from 'react-redux'
import PhotoUpload from '../components/photo/PhotoUpload'
//import other actions from actions folder

const mapStateToProps = (state) => {
  //update props with relevent states
  return {
    isUploaded: state.photo.isUploaded,
    showPhotoInGalley: state.photo.showPhotoInGalley,
    error: state.photo.error
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onDrop: (photo) => {
      dispatch(/**/
        type: 'UPLOAD_REQUEST'
      )
      // from dropZone example
      // this.setState({
      //   files: files
      // });
    },
    onOpenClick: () => {
      dispatch(/**/)
      // from dropZone example
      // this.refs.dropzone.open();
    },
    onUploadSuccess: (response) => {
      dispatch: 'UPLOAD_SUCCESS'
    },
    onUploadButtonClick: (metaData) => {
      dispatch: 
    },
    onToggleUpload: () => {
      dispatch({
        type: 'TOGGLE_PHOTOUPLOAD_MODAL'
      })
    }
  }
}

const container = connect(
  mapStateToProps, 
  mapDispatchToProps
)(PhotoUpload);

export default container;

/*
import { connect } from 'react-redux'
import Auth from '../components/auth/Auth' 
import { SignupUser } from '../actions/signup' 
import { SigninUser } from '../actions/signin'

const mapStateToProps = (state) => {
  // return object with the relevant state. related to DATA
  return {
    isAuthenticated: state.auth.isAuthenticated,
    showSigninAndNotSignup: state.auth.showSigninAndNotSignup,
    error: state.auth.error

  }
}

const mapDispatchToProps = (dispatch) => {
  // return object with the props that depend on a dispatch action. related to BEHAVIOR
  return {
    onSigninModalClick: () => {
      // refactor to extract these actions
      dispatch({
        type: 'TOGGLE_SIGNIN_MODAL'
      })
    },
    // this will be called when you hear back from an ajax request.
    onSigninSubmit: (creds) => {
      dispatch(SigninUser(creds));
    },
    onSignupSubmit: (creds) => {
      dispatch(SignupUser(creds));
    },
    toggleSigninOrSignupLink: () => {
      dispatch({
        type: 'TOGGLE_SIGNIN_OR_SIGNUP_LINK'
      })
    }
  }
}

// tentative convention will be that containers are lower case, while their corresponding presentational components are upper case
const container = connect(
  mapStateToProps,
  mapDispatchToProps
)(Auth);

export default container;
*/