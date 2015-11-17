'use strict';

var React = require('react');

var styleBox = {
  height : '100px',
  width : '100px'
};

var Box = React.createClass({
  'render': function onRender () {
    return (
      <button style={styleBox}>{this.props.value}</button>
    );
  }
});

React.render(<Box value='X'/>, document.body);
