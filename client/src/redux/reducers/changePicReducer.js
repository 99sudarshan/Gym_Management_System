import { PICTURE_CHANGE } from '../Actions/actionTypes'

const initialState = {
  picture: '',
}

const changePicReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case PICTURE_CHANGE:
      return {
        ...state,
        picture: payload,
      }
    default:
      return state
  }
}

export default changePicReducer
