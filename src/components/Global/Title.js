// Dependencies
import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Title extends Component {
  static propTypes = {
    title: PropTypes.string.isRequired
  };
  render() {
    return (
    <div class="page-head"> 
            <div class="container">
                <div class="row">
                    <div class="page-head-content">
                        <h1 class="page-title">{this.props.title}</h1>               
                    </div>
                </div>
            </div>
        </div>
    );
  }
}

export default Title;
