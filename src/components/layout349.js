import React from 'react'

import PropTypes from 'prop-types'

import './layout349.css'

const Layout349 = (props) => {
  return (
    <div className="layout349-layout349 thq-section-padding">
      <div className="layout349-max-width thq-section-max-width">
        <div className="layout349-image-container">
          <img
            alt={props.placeholderImageAlt}
            src={props.placeholderImageSrc}
            className="layout349-placeholder-image thq-img-ratio-16-9"
          />
        </div>
        <div className="layout349-content">
          <div className="layout349-section-title">
            <div className="layout349-content1">
              <h2 className="thq-heading-2">{props.text}</h2>
              <p className="thq-body-large">{props.text1}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

Layout349.defaultProps = {
  text1:
    "Enjoy a simple way to customise an extensive range of products to your heart's content when you sign in after your photo session",
  placeholderImageSrc:
    'https://images.unsplash.com/photo-1485145782098-4f5fd605a66b?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDZ8fHNoaXJ0JTIwbXVnJTIwbWFnbmV0JTIwY2FyZHxlbnwwfHx8fDE3MTY3NDQwMTZ8MA&ixlib=rb-4.0.3&w=1400',
  text: 'Your Moments, Your Way',
  placeholderImageAlt: 'Image of Easy Booking feature',
}

Layout349.propTypes = {
  text1: PropTypes.string,
  placeholderImageSrc: PropTypes.string,
  text: PropTypes.string,
  placeholderImageAlt: PropTypes.string,
}

export default Layout349
