'use strict';

var React = require('react');

var styleBox = {
  height : '100px',
  width : '100px',
  'font-size' : '30px'
};

var Box = React.createClass({

  getInitialState: function() {
    return {value: this.props.initialValue};
  },

  'render': function onRender () {
    return (
      <button style={styleBox}>{this.state.value}</button>
    );
  }
});

React.render(<Box initialValue='X'/>, document.body);
