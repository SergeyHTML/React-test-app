import React from 'react'
import './style.scss'
import DynamicTemplate from '../DynamicTemplate'
import PropTypes from 'prop-types'

function ArticleCard({templates, article}){

  return (
    <div className="card" style={{marginBottom: '15px'}}>
      <div className="card-body">
        <DynamicTemplate
          article = {article}
          model={templates}
        />
      </div>
    </div>
  )

}

ArticleCard.propTypes = {
  articles: PropTypes.array,
  templates: PropTypes.array
}

export default ArticleCard