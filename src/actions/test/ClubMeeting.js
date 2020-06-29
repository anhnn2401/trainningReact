function requestEditMeeting () {
  return {
    type: types.REQUEST_EDIT_MEETING
  }
}

function editMeetingFailure () {
  return {
    type: types.EDIT_MEETING_FAILURE
  }
}

export function editMeeting (data, clubId, meetingId) {
  return dispatch => {
    dispatch(requestEditMeeting())
    return axios({
      url: Network.apiClubMeeting(clubId, meetingId),
      method: 'PATCH',
      data
    }).then(response => {
      window.location = `/clubs/${clubId}/meetings`
    }).catch(err => {
      dispatch(editMeetingFailure())
    })
  }
}