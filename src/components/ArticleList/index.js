import React, {Component} from 'react'
import ArticleCard from '../ArticleCard'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import {loadArticles} from '../../AC'

class ArticleList extends Component {

  static propTypes = {
    articles: PropTypes.array.isRequired,
    templates: PropTypes.array.isRequired
  };

  state = {
    selectValue: 0
  }

  componentWillMount() {
    const {loadArticles} = this.props
    loadArticles();
  }

  render() {
    const {articles, templates} = this.props
    let model = [];

    if (templates.length > 0){
      model = templates[this.state.selectValue].template
    }

    const element = articles.map(article => <div className="col-sm-6 col-lg-4" key={article.id}><ArticleCard
      templates={model} article={article}/></div>)

    const option = templates.map(option => <option value={option.id - 1} key={option.id}>Template {option.id}</option>)

    return (
      <div>
        <select onChange={this.handleChange} className="form-control form-control-sm" style={{marginBottom: '15px'}}>
          {option}
        </select>
        <div className="row">
          {element}
        </div>
      </div>

    )
  }

  handleChange = event => {
    this.setState({
      selectValue: event.target.value
    })
  }

}

export default connect((state) => ({
  articles: state.articles,
  templates: state.templates
}), {loadArticles})(ArticleList)