import React from 'react';
import PropTypes from 'prop-types';
import ExternalLink from '../external-link/external-link';

import './assistance-type.scss';

export default function AssistanceType(props) {
  return (
    <div id={props.id} className="card mb-1">
      <h3 className="card-header">{ props.data.title }</h3>
      <div className="card-body">
        <div className="list-group list-group-flush">
          {
            props.data.description && (
              <p className="lead">{ props.data.description }</p>
            )
          }
          {
            props.data.ages && (
              <li class="list-group-item">
              <h4>Ages</h4>
              {
                props.data.ages.map((age, index) => (
                  <dl>
                  <dt>From</dt>
                  <dd>{age.from}</dd>
                  <dt>To</dt>
                  <dd>{age.to}</dd>
                  <dt>Hours</dt>
                  <dd>{age.hours}</dd>
                  {
                    age.notes && (
                      <div>
                      <dt>Notes</dt>
                      <dd>{age.notes}</dd>
                      </div>
                    )
                  }
                  </dl>
                ))
              }
              </li>
            )
          }
          {
            props.data.qualifications && (
              <li className="list-group-item">
                <h4>Qualifications</h4>
                <ul>
                  {
                    props.data.qualifications.map((qualification) => (
                      <li>{qualification}</li>
                    ))
                  }
                </ul>
              </li>
            )
          }
          {
            props.links && (
              <ul>
                {
                  props.links.map((link, index) => (
                    <li>
                      <ExternalLink href={ link.href } text={ link.text } key={ `${link.href}-${link.text}` } />
                    </li>
                  ))
                }
              </ul>
            )
          }
        </div>
      </div>
    </div>
  )
}

AssistanceType.propTypes = {
  id: PropTypes.string.isRequired,
  data: PropTypes.shape({
    title: PropTypes.string,
    description: PropTypes.string,
    qualifications: PropTypes.array,
    ages: PropTypes.array,
    links: PropTypes.array
  }).isRequired
};
