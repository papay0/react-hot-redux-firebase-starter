import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';
import { bindActionCreators } from 'redux';

import { loadRequests } from '../../actions/requestsActions';

export class RequestPage extends React.Component {
  constructor(props, context) {
    super(props, context);

    this.state = {
      expanding: false
    };
  }

  getInformation(request) {
    let title = '';
    switch (request.type) {
      case 'plane ticket':
        title = request.type + ': ' + request.departureAirport + ' => ' + request.returnAirport;
        break;
      case 'Hivy T-shirt':
        title = request.type + ': ' + request.size;
        break;
      case 'Madeleine':
        title = request.type + ': ' + request.coating;
        break;
      default:
        title = request.type;
    }
    return title;
  }

  getDetails(request) {
    switch (request.type) {
      case 'plane ticket':
        return (
          <div>
            <p>Departure airport: {request.departureAirport}</p>
            <p>Departure date: {request.departureDate}</p>
            <p>Arrival airport: {request.returnAirport}</p>
            <p>Arrival date: {request.returnDate}</p>
          </div>);
      case 'Hivy T-shirt':
        return (
          <div>
            <p>Size: {request.size}</p>
            <p>Gender: {request.gender ? request.genre : 'Unknown'}</p>
          </div>
        );
      case 'Madeleine':
        return (
          <div>
            <p>Coating: {request.coating}</p>
          </div>);
      default:
        return (<p>Ooops</p>);
    }
  }

  render() {
    const { request } = this.props;
    return (
      <div>
        <h3>{this.getInformation(request)}</h3>
        {this.state.expanding && this.getDetails(request)}
        <input
          value={request.custom ? (this.state.expanding ? 'Show less' : 'Show more') : 'No details'}
          disabled={!request.custom}
          className="btn btn-primary"
          onClick={() => {
            this.setState({ expanding: !this.state.expanding });
          }} />
      </div>
    );
  }
}

export default RequestPage;
