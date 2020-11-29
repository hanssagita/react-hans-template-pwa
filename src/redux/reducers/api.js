import {
  SUCCESS_GET_DUMMY
} from '../types'

const initialState = {
  dummy: ''
}

const successGetDummy = (state, action) => {
  return {
    ...state,
    dummy: action.data
  }
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case SUCCESS_GET_DUMMY: return successGetDummy(state, action)
    default: return state
  }
}

export default reducer
