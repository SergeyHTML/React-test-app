import {LOAD_ARTICLES, SUCCESS} from '../constans'

export default (articles = [], action) => {
  const {type, payload} = action

  switch (type) {
    case LOAD_ARTICLES + SUCCESS:
      return payload.properties.data
    default:
      return articles
  }
}