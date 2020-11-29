import {
  SUCCESS_GET_DUMMY
} from '../types'

import {
  callGetDummy
} from '../../api'

const getDummy = () => {
  return dispatch => {
    callGetDummy(res => {
      const data = res.body.data
      dispatch({
        type: SUCCESS_GET_DUMMY,
        data: data
      })
    }, res => console.log(res))
  }
}

export {
  getDummy
}
