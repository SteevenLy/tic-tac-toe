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

    componentWillMount: function() {
      setInterval(this.loopValue, 300);
    },

    loopValue: function() {
      if(this.state.value == 'X')
      {
        return this.setState({value : 'O'});
      }
      else
      {
        return this.setState({value : 'X'});
      }
    },

  'render': function onRender () {
    return (
      <button style={styleBox}>{this.state.value}</button>
    );
  }
});


React.render(<Box initialValue='X'/>, document.body);
