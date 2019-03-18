import $ from 'jquery'
import {LOAD_ARTICLES, LOAD_TEMPLATES, START, SUCCESS, FAIL} from '../constans'

export function loadArticles() {
  return (dispatch) => {
    dispatch({
      type: LOAD_ARTICLES + START,
    })

    $.get('http://demo4452328.mockable.io/properties')
      .done((properties) => {
        $.get('http://demo4452328.mockable.io/templates')
          .done((templates) => {
            dispatch({
              type: LOAD_TEMPLATES + SUCCESS,
              payload: {templates}
            })
            dispatch({
              type: LOAD_ARTICLES + SUCCESS,
              payload: {properties}
            })
          })
          .fail(error => {
            dispatch({
              type: LOAD_TEMPLATES + FAIL,
              payload: {error}
            })
          })
      })
      .fail(error => {
        dispatch({
          type: LOAD_ARTICLES + FAIL,
          payload: {error}
        })
      })
  }
}
