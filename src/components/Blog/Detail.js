import React, { Component } from 'react';
import PropTypes from 'prop-types'
import './blog.scss';


class Detail extends Component {
  render() {
    const { title, body, url } = this.props.blog;

    return (
      <div className='blogDetail' onClick={() => window.open(url, "_blank")}>
        <h1 className='blogTitle'>{title}</h1>
        <p className='blogBody' dangerouslySetInnerHTML={{ __html: body.body }} />
      </div>
    )
  }
}

Detail.propTypes = {
  detail: PropTypes.shape({
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired,
    id: PropTypes.number.isRequired
  }),
  type: PropTypes.string.isRequired
}

export default Detail;