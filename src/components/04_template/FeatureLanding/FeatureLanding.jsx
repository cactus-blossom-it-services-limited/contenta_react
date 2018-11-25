import React, { Component } from 'react';

const API = 'https://dev-contentacms.pantheonsite.io/api/';
const DEFAULT_QUERY = 'recipes';

class Features extends Component {
constructor(props) {
  super(props);

  this.state = {
    recipes: { data: [] },
  };
}

  componentDidMount() {
    fetch(API + DEFAULT_QUERY)
      .then(response => response.json())
      .then(recipes => this.setState({ recipes }));
  }

  render() {
    return (
      <ul>
        {this.state.recipes.data.map(
          recipe =>
          (<li key={recipe.attributes.uuid}>
            <h3>{recipe.attributes.title}</h3>
          </li>),
        )}
      </ul>
    );
  }

}

export default Features;
