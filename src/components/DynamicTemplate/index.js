import React, {Fragment} from 'react'
import SliderImg from '../Slider'
import PropTypes from 'prop-types'

function DynamicTemplate({model, article}) {

  return (
    renderCard(model, article)
  )
}

function renderCard(model, article) {
  let cardUI = model.map((m) => {
    let type = m.component
    let field = m.field
    let children = m.children || []
    let priceBlock = <h5 className="card-title">{article.price} грн.</h5>

    if (type === 'ADDRESS' && article[field]) {
      return (
        <Fragment key={type}>
          <p className="card-text">{article[field]}</p>
        </Fragment>
      )
    }

    if (type === 'IMAGE' && article[field]) {
      const imgs = article[field].map((img, i) => <img src={img} key={i} className="card-img-top"
                                                       alt={article[field]}/>)
      const price = (children.length > 0) ? priceBlock : ''

      return (
        <Fragment key={type}>
          <div className="img-block">
            <SliderImg imgs={imgs}/>
            {price}
          </div>
        </Fragment>
      )
    }
    if (type === 'PRICE' && article[field]) {
      return (
        <Fragment key={type}>
          {priceBlock}
        </Fragment>
      )
    }

    if (type === 'AREA' && article[field]) {
      return (
        <Fragment key={type}>
          <p className="card-text">
            <small className="text-muted">{article[field]} кв.м.</small>
          </p>
        </Fragment>
      )
    }
    return true
  })

  return cardUI
}

DynamicTemplate.propTypes = {
  articles: PropTypes.array,
  templates: PropTypes.array
}
export default DynamicTemplate