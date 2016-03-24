export const SHOW_NEXT = 'SHOW_NEXT'
export const SHOW_PREV = 'SHOW_PREV'
export const TOGGLE_GALLERY = 'TOGGLE_GALLERY'

export function nextTile() {
  return {
    type: SHOW_NEXT
  }
}

export function prevTile() {
  return {
    type: SHOW_PREV
  }
}

export function toggleView(tile) {
  return {
    type: TOGGLE_GALLERY,
    payload: tile
  }
}

export function submitInput(userId, mediaId, feedback) {

  const config = {
    method: 'POST',
    headers: {'Content-Type': 'application/x-www-form-urlencoded'},
    body: `userId=${userId}&feedback=${feedback}&mediaId=${mediaId}`
  }

  return (dispatch) => {
    fetch('http://localhost:8000/api/feedback/submitFeedback', config)
    .then( response => (
      response.json()
    ))
    .then( data => {
      // do something with the data
      console.log('data', data);
    })
    .catch( err => {
      console.log('err', err);
    })
  }
}