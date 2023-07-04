import React, { Component } from 'react';
import { graphql } from 'react-apollo';
import query from '../queries/CurrentUser';

export class Header extends Component {
  render() {
    console.log(this.props.data);
    if (this.props.data.loading) {
      return <p>Loading...</p>;
    }
    return <div>Header</div>;
  }
}

export default graphql(query)(Header);
