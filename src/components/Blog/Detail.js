import React, { Component } from 'react';
import PropTypes from 'prop-types'


class Detail extends Component {
  render() {
    const { title, body, url } = this.props.blog;

    return (
      <>
        <h1 onClick={() => window.open(url, "_blank")}>{title}</h1>
        <p dangerouslySetInnerHTML={{ __html: body.body }} />
      </>
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