import React from 'react'

import PropTypes from 'prop-types'

import './text.css'

const Text = (props) => {
  return (
    <div className="text-container">
      <p className="text-text thq-body-large">{props.content5}</p>
    </div>
  )
}

Text.defaultProps = {
  content5: '@pixel.pet.photography',
}

Text.propTypes = {
  content5: PropTypes.string,
}

export default Text
