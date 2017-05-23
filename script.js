var Counter = React.createClass({
	getInitialState: function(){
		return{
			counter : 0,
			timer : 0,		
		};
	},

	increment: function() {
		this.setState({
			counter: this.state.counter + 1,
			
		});
	},
	
	incrementTimer: function() {
		this.setState({
			timer: this.state.timer + 1,
			
		});
	},

	decrement: function() {
		this.setState({
			counter: this.state.counter - 1,
		});
	},
	
	decrementTimer: function() {
		this.setState({
			timer: this.state.timer - 1,
		});
	},	

	render: function(){
		return React.createElement('div',{},
			React.createElement('button',{className: "fa fa-arrow-right",onClick: this.increment}),
			React.createElement('span',{},'licznik '+ this.state.counter),
			React.createElement('button',{className: "fa fa-arrow-left",onClick: this.decrement}),
			React.createElement('button',{className: "fa fa-arrow-right",onClick: this.incrementTimer}),
			React.createElement('span',{},'licznik '+ this.state.timer),
			React.createElement('button',{className: "fa fa-arrow-left",onClick: this.decrementTimer}),
		);
	},

});


var app = React.createElement(Counter);
ReactDOM.render(app, document.getElementById('app'));
