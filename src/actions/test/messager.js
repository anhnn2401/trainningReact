import * as types from '../types'

export function listAll() {
  return {
    type : types.RECEIVE_DATA,
    data: [{id: 1}]
    // data : JSON.parse(localStorage.getItem('contentMessenges')) || [],
  }
};
// export function addMessenge(messenge) {
//   return {
//     type : types.ADD_MESSENGE,
//     messenge
//   }
// }
export function saveForm(messenge) {
  return {
    type : types.SAVE_FORM,
    messenge
  }
}
export const toggleForm = () => {
  return {
    type : types.TOGGLE_FORM
  }
}
export const openForm = () => {
  return {
    type : types.OPEN_FORM
  }
}
export const closeForm = () => {
  return {
    type : types.CLOSE_FORM
  }
}
export const editMessenge = (messege) => {
    return {
      type : types.EDIT_MESSENGE,
      messege,
    }
}
export const deleteMessenge = (id) => {
  return {
    type : types.DELETE_MESSENGE,
    id 
  }
}
// export function editMeeting (data, clubId, meetingId) {
//   return dispatch => {
//     dispatch(requestEditMeeting())
//     return axios({
//       url: Network.apiClubMeeting(clubId, meetingId),
//       method: 'PATCH',
//       data
//     }).then(response => {
//       window.location = `/clubs/${clubId}/meetings`
//     }).catch(err => {
//       dispatch(editMeetingFailure())
//     })
//   }
// }