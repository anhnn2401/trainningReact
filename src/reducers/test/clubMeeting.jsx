const { types } = require("node-sass");

function meetings (state = initialStateOfMeetings, action) {
  switch (action.type) {
    case type.REQUEST_EDIT_MEETING:
      return Object.assign({}, state, {
        editingMeeting: true
      })
    case types.EDIT_MEETING_FAILURE:
      return Object.assign({}, state, {
        editingMeeting: false
      })
    case types.RESET_MEETING_RESULTS:
      return Object.assign({}, state, {
        searchResults: []
      })
    default:
      return state
  }
}