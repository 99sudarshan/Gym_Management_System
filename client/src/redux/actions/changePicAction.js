import { PICTURE_CHANGE } from './actionTypes'

const changePicAction = (picture) => {
  return {
    type: PICTURE_CHANGE,
    payload: picture,
  }
}

export { changePicAction }
