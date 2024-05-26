import React from 'react'

import PropTypes from 'prop-types'

import './faq1.css'

const FAQ1 = (props) => {
  return (
    <div className="faq1-faq7 thq-section-padding">
      <div className="faq1-max-width thq-section-max-width">
        <div className="thq-flex-column">
          <h2 className="thq-heading-2">{props.heading1}</h2>
        </div>
        <div className="thq-flex-column faq1-list">
          <div className="faq1-list-item1">
            <p className="faq1-faq1-question thq-body-large">
              {props.faq1Question}
            </p>
            <span className="thq-body-small">{props.faq1Answer}</span>
          </div>
          <div className="faq1-list-item2">
            <p className="faq1-faq2-question thq-body-large">
              {props.faq2Question}
            </p>
            <span className="thq-body-small">{props.faq2Answer}</span>
          </div>
          <div className="faq1-list-item3">
            <p className="faq1-faq3-question thq-body-large">
              {props.faq3Question}
            </p>
            <span className="thq-body-small">{props.faq3Answer}</span>
          </div>
          <div className="faq1-list-item4">
            <p className="faq1-faq4-question thq-body-large">
              {props.faq4Question}
            </p>
            <span className="thq-body-small">{props.faq4Answer}</span>
          </div>
          <div className="faq1-list-item5">
            <p className="faq1-faq5-question thq-body-large">
              {props.faq5Question}
            </p>
            <span className="thq-body-small">{props.faq5Answer}</span>
          </div>
        </div>
        <div className="thq-flex-column">
          <div className="faq1-content1">
            <h2 className="thq-heading-2">{props.heading2}</h2>
            <p className="faq1-text2 thq-body-large">{props.content2}</p>
          </div>
          <div className="faq1-container">
            <button className="thq-button-outline faq1-button">
              <span className="thq-body-small">{props.action1}</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

FAQ1.defaultProps = {
  content1: 'Here are some questions others have asked.',
  faq3Answer:
    "You can browse through our customisable products, apply your favourite photo from your photo session, and customise them until they're perfect for you.",
  heading1: 'FAQs',
  faq5Answer:
    'The delivery time for your ordered merchandise may vary depending on your location and the type of products selected. You will receive an estimated delivery time during the ordering process.',
  content2: "Please don't hesitate to ask, we're here to help.",
  faq1Answer:
    'You can easily make a booking via your account by selecting the desired date and time for your session and providing basic personal information and contact details.',
  faq3Question: 'How can I order personalised merchandise with my photos?',
  faq4Answer:
    'There is no limit to the number of photos or products you can order. You can select as many as you like.',
  faq5Question: 'How long does it take to receive my ordered merchandise?',
  heading2: 'Still have a question?',
  faq2Answer:
    'Yes, we will contact you once your photos are ready, then you can view and download them directly from your account.',
  faq1Question: 'How can I make a booking for a photography session?',
  faq2Question: 'Can I view and download my photos online?',
  action1: 'Contact',
  faq4Question: 'Is there a limit to the number of products I can order?',
}

FAQ1.propTypes = {
  content1: PropTypes.string,
  faq3Answer: PropTypes.string,
  heading1: PropTypes.string,
  faq5Answer: PropTypes.string,
  content2: PropTypes.string,
  faq1Answer: PropTypes.string,
  faq3Question: PropTypes.string,
  faq4Answer: PropTypes.string,
  faq5Question: PropTypes.string,
  heading2: PropTypes.string,
  faq2Answer: PropTypes.string,
  faq1Question: PropTypes.string,
  faq2Question: PropTypes.string,
  action1: PropTypes.string,
  faq4Question: PropTypes.string,
}

export default FAQ1
