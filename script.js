var Counter = React.createClass({
	getInitialState: function(){
		return{
			counter : 0,
					
		};
	},

	increment: function() {
		this.setState({
			counter: this.state.counter + 1,
			
		});
	},
	
	decrement: function() {
		this.setState({
			counter: this.state.counter - 1,
		});
	},
	
	render: function(){
		return React.createElement('div',{},
			React.createElement('button',{className: "fa fa-arrow-right",onClick: this.increment}),
			React.createElement('span',{},'licznik '+ this.state.counter),
			React.createElement('button',{className: "fa fa-arrow-left",onClick: this.decrement}),
		);
	},

});

var app = React.createElement('div', {},
React.createElement(Counter),
React.createElement(Counter),
React.createElement(Counter),);

ReactDOM.render(app, document.getElementById('app'));
