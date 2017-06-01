import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';
import { bindActionCreators } from 'redux';

import { loadRequests } from '../../actions/requestsActions';
import { RequestPage } from '../request/RequestPage';

export class RequestsPage extends React.Component {

  render() {
    const { requests } = this.props;
    const requestsList = requests.products.map(request => {
      return (<RequestPage key={request.id} request={request} />);
    });
    return (
      <div>
        <h1>List of requests</h1>
        <Link to="request" className="btn btn-primary btn-sm">New request</Link>
        {requestsList}
      </div>
    );
  }
}

RequestsPage.propTypes = {
  actions: PropTypes.object.isRequired,
  requests: PropTypes.object
};

RequestsPage.contextTypes = {
  router: PropTypes.object
};

const mapStateToProps = (state) => ({ requests: state.requests });

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators({ loadRequests }, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(RequestsPage);

