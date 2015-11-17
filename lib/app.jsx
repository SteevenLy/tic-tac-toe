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
      //setInterval(this.loopValue, 300);
    },

    loopValue: function() {
      this.setState({value: this.state.value == 'X' ? 'O' : 'X'});
    },

    handleClick: function() {
		this.setState({value: this.state.value == 'X' ? 'O' : 'X'});
  },

  'render': function onRender () {
    return (
    <ly>
      <button style={styleBox} onClick={this.handleClick} >{this.state.value}</button>
      <button style={styleBox} onClick={this.handleClick} >{this.state.value}</button>
      <button style={styleBox} onClick={this.handleClick} >{this.state.value}</button>
    </ly>
    );
  }
});


React.render(<Box initialValue='X'/>, document.body);
