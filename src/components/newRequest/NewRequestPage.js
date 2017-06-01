import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';
import { bindActionCreators } from 'redux';
import toastr from 'toastr';

import { loadTypes, saveNewProduct } from '../../actions/requestsActions';
import { RequestPage } from '../request/RequestPage';
import RequestForm from './RequestForm';

export class NewRequestPage extends React.Component {

  constructor(props, context) {
    super(props, context);

    this.state = {
      product: {}
    };

    this.saveNewRequest = this.saveNewRequest.bind(this);
    this.updateProductState = this.updateProductState.bind(this);
  }

  validate(product) {
    switch (product.type) {
      case 'plane ticket':
        return product && product.departureDate && product.departureAirport && product.returnDate && product.returnAirport;
      case 'Hivy T-shirt':
        return product && product.size && product.size.length > 0;
      case 'Madeleine':
        return product && product.coating && product.coating.length > 0;
      default:
        return true;
    }
  }

  saveNewRequest(event, type) {
    event.preventDefault();

    const product = this.state.product;
    product.type = type;
    product.id = Date.now();
    const productType = this.props.requests.types.find(product => product.type === type);
    const productExists = productType ? true : false;
    if (productExists) {
      product.custom = true;
    }

    if (!this.validate(product)) {
      return toastr.error('Please enter all the fields');
    }

    this.props.actions.saveNewProduct(this.state.product);
  }

  updateProductState(event) {
    const field = event.target.name;
    const product = this.state.product;
    product[field] = event.target.value;
    return this.setState({ product });
  }

  render() {
    return (
      <div>
        <RequestForm
          onChange={this.updateProductState}
          onSave={this.saveNewRequest}
        />
      </div>
    );
  }
}

NewRequestPage.propTypes = {
  actions: PropTypes.object.isRequired,
  requests: PropTypes.object
};

NewRequestPage.contextTypes = {
  router: PropTypes.object
};

const mapStateToProps = (state) => ({ requests: state.requests });

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators({ loadTypes, saveNewProduct }, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(NewRequestPage);

