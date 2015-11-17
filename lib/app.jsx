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
      <button style={styleBox} onClick={this.handleClick} >{this.state.value}</button>
    );
  }
});

var Row = React.createClass({

	getInitialState: function() {
	    return {value: this.props.initialValue};
	  },

	'render': function onRender () {
		var result = this.props.initialValue;
    	return (
	    	<ly>
          <Box initialValue='+'/>
          <Box initialValue='+'/>
          <Box initialValue='+'/>
	      </ly>
    	);
    }

});

React.render(<Row />, document.body);
