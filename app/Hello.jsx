'use strict'
import React from 'react';
import {ButtonToolbar, Button} from 'react-bootstrap';
import Header from './header';


module.exports = React.createClass({
    displayName: 'HelloReact',
    render: function(){
        return (
          <div>
            <Header />
            <ButtonToolbar>
              <Button bsStyle="primary" bsSize="large">Primary</Button>
              <Button>default</Button>
            </ButtonToolbar>
          </div>
        )
    }
});
