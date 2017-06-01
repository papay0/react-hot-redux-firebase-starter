import React from 'react';
import { connect } from 'react-redux';
import TextInput from '../common/TextInput';
import Autocomplete from 'react-autocomplete';
import { bindActionCreators } from 'redux';
import { loadTypes } from '../../actions/requestsActions';


export class RequestForm extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.state = { value: '' };
  }

  getProductTypes() {
    const { types } = this.props;
    return types;
  }

  matchStateToTerm(o, value) {
    return (
      o.type.toLowerCase().indexOf(value.toLowerCase()) !== -1
    );
  }

  productExists(productType) {
    return this.getProductTypes().find(product => product.type === productType);
  }

  getProductForm(productType) {
    const onChange = this.props.onChange;
    switch (productType) {
      case 'plane ticket':
        return (
          <div>
            <TextInput
              name="departureDate"
              label="Departure Date"
              onChange={onChange}
              mandatory
            />
            <TextInput
              name="departureAirport"
              label="Departure Airport"
              onChange={onChange}
              mandatory
            />
            <TextInput
              name="returnDate"
              label="Return Date"
              onChange={onChange}
              mandatory
            />
            <TextInput
              name="returnAirport"
              label="Return Airport"
              onChange={onChange}
              mandatory
            />
          </div>

        );
      case 'Hivy T-shirt':
        return (
          <div>
            <TextInput
              name="size"
              label="Size"
              onChange={onChange}
              mandatory
            />
            <TextInput
              name="gender"
              label="Gender"
              onChange={onChange}
            />
          </div>);
      case 'Madeleine':
        return (
          <div>
            <TextInput
              name="coating"
              label="Coating"
              onChange={onChange}
              mandatory
            />
          </div>);

      default:
        return <p>Oooops </p>;
    }
  }

  onSave(event, type) {
    this.props.onSave(event, type);
  }

  render() {

    const styles = {
      item: {
        padding: '2px 6px',
        cursor: 'default'
      },

      highlightedItem: {
        color: 'white',
        background: 'hsl(200, 50%, 50%)',
        padding: '2px 6px',
        cursor: 'default'
      },

      menu: {
        border: 'solid 1px #ccc'
      }
    };

    return (
      <form>
        <h1>New request</h1>
        <h3>What do you need?</h3>
        <Autocomplete
          name="request"
          value={this.state.value}
          inputProps={{ name: 'Type', id: 'type-autocomplete' }}
          items={this.getProductTypes()}
          getItemValue={(item) => item.type}
          shouldItemRender={this.matchStateToTerm}
          onChange={(event, value) => this.setState({ value })}
          onSelect={value => this.setState({ value })}
          renderItem={(item, isHighlighted) => (
            <div
              style={isHighlighted ? styles.highlightedItem : styles.item}
              key={item.id}
            >{item.type}</div>
          )}
        />
        {this.productExists(this.state.value) && this.getProductForm(this.state.value)}
        <br />
        <br />
        <input
          type="submit"
          value={'Create a new request'}
          className="btn btn-primary"
          onClick={(event) => this.onSave(event, this.state.value)}
        />
      </form>
    );
  }
}

RequestForm.propTypes = {
  onSave: React.PropTypes.func.isRequired,
  onChange: React.PropTypes.func.isRequired,
  types: React.PropTypes.array
};

const mapStateToProps = (state) => ({ types: state.requests.types });

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators({ loadTypes }, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(RequestForm);
