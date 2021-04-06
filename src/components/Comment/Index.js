import React, { Component } from 'react';
import PropTypes from 'prop-types'

class Index extends Component {
  render() {
    const { comment } = this.props.comment;

    return (
      <li className='commentText' dangerouslySetInnerHTML={{ __html: comment }} />
    );
  }
}

Index.propTypes = {
  comment: PropTypes.shape({
    comment: PropTypes.string.isRequired,
    id: PropTypes.number.isRequired
  }),
  type: PropTypes.string.isRequired
}

export default Index;