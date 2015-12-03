'use strict'
import React from 'react';
import Header from './Header';
import Footer from './Footer';
import Navbar from './Navbar';
import {ButtonToolbar, Button, PageHeader} from 'react-bootstrap';


module.exports = React.createClass({
    render: function(){
        return (
          <div style={{paddingTop: '20px'}}>
            <div className="container" style={{paddingBottom: '75px'}}>
              <Header />
              <Navbar />

              <div className="row">
                <div className="col-md-8">
                  <PageHeader>MD-8</PageHeader>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus dictum, ante a varius luctus, justo metus sodales eros, at finibus diam elit sed erat. Suspendisse rutrum augue ex, sit amet hendrerit felis tempor at. Nulla cursus lacinia est ac posuere. Fusce tincidunt leo eu dolor rhoncus, sed posuere dui feugiat. Morbi id dui lectus. Nam et lacinia ipsum. Donec tincidunt, dolor eu ultricies finibus, odio tortor iaculis augue, efficitur hendrerit elit risus et est. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.</p>
                    <p>consectetur</p>
                    <p>Fin</p>
                    <ButtonToolbar>
                      <Button bsStyle="primary" bsSize="large">Primary!</Button>
                    </ButtonToolbar>
                </div>
                
                <div className="col-md-4">
                  <PageHeader><small>MD-4</small></PageHeader>
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus dictum, ante a varius luctus, justo metus sodales eros, at finibus diam elit sed erat. Suspendisse rutrum augue ex, sit amet hendrerit felis tempor at. Nulla cursus lacinia est ac posuere. Fusce tincidunt leo eu dolor rhoncus, sed posuere dui feugiat. Morbi id dui lectus. Nam et lacinia ipsum. Donec tincidunt, dolor eu ultricies finibus, odio tortor iaculis augue, efficitur hendrerit elit risus et est. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.</p>
                </div>
              </div>

            </div>
            <Footer />
          </div>
        )
    }
});
