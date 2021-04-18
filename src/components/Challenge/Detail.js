import React, { Component } from 'react';
import PropTypes from 'prop-types'
import './challenge.scss';

class Detail extends Component {
  render() {
    const { title, body, url } = this.props.detail;

    return (
      <div className='challengeDetail' onClick={() => window.open(url, "_blank")}>
        <h1 className='challengeTitle'>{title}</h1>
        <p className='challengeBody' dangerouslySetInnerHTML={{ __html: body.body }} />
      </div>
    )
  }
}

Detail.propTypes = {
  detail: PropTypes.shape({
    title: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired,
    id: PropTypes.number.isRequired,
    body: PropTypes.object.isRequired
  }),
  type: PropTypes.string.isRequired
}

export default Detail;