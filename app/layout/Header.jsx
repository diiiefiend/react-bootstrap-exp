import React from 'react';
import {Jumbotron} from 'react-bootstrap';

module.exports = React.createClass({
  render(){
    return (
      <Jumbotron>
        <h1>react bootstrap demo</h1>
        <p>now with hotloading enabled!</p>
      </Jumbotron>
    )
  }
});
