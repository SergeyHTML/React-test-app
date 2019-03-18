import {SUCCESS, LOAD_TEMPLATES} from '../constans'

export default (templates = [], action) => {
  const {type, payload} = action
  switch (type) {
    case LOAD_TEMPLATES + SUCCESS:
      return payload.templates
    default:
      return templates
  }
}