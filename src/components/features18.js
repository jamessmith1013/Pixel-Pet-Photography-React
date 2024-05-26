import React from 'react'

import PropTypes from 'prop-types'

import './features18.css'

const Features18 = (props) => {
  return (
    <div className="features18-layout349 thq-section-padding">
      <div className="features18-max-width thq-section-max-width">
        <div className="features18-content">
          <div className="features18-section-title">
            <div className="features18-content1">
              <h2 className="thq-heading-2">{props.feature1Title}</h2>
              <p className="thq-body-large">{props.feature1Description}</p>
            </div>
          </div>
        </div>
        <div className="features18-image-container">
          <img
            alt={props.feature1ImageAlt}
            src={props.feature1ImageSrc}
            className="thq-img-ratio-16-9"
          />
        </div>
      </div>
    </div>
  )
}

Features18.defaultProps = {
  feature1Description:
    'Your special moments will be captured with precision and Creativity. So whatever the occasion, all you need to do is relax and be your natual, photogenic self!',
  feature1Title: 'Service Tailored to You!',
  feature1ImageSrc:
    'https://images.unsplash.com/photo-1462926795244-b273f8a5454f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcxNjczNzYyMnw&ixlib=rb-4.0.3&q=80&w=1080',
  feature1ImageAlt: 'Professional Photography Services',
}

Features18.propTypes = {
  feature1Description: PropTypes.string,
  feature1Title: PropTypes.string,
  feature1ImageSrc: PropTypes.string,
  feature1ImageAlt: PropTypes.string,
}

export default Features18
