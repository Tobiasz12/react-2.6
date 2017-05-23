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
			React.createElement('button',{className: "fa fa-arrow-left",onClick: this.increment}),
			React.createElement('span',{},'licznik '+ this.state.counter),
			React.createElement('button',{className: "fa fa-arrow-right",onClick: this.decrement}),
		);
	},

});

var Timer = React.createClass({
	getInitialState: function() {
		return {
			timer : 0
		};
	},

	increment: function() {
		this.setState ({
			timer: this.state.timer + 1
		});
	},
	decrement: function() {
		this.setState({
			timer: this.state.timer - 1
		});
	},
	render: function(){
		return React.createElement('div',{},
			React.createElement('button',{className: "fa fa-arrow-left",onClick: this.increment}),
			React.createElement('span',{},'licznik '+ this.state.timer),
			React.createElement('button',{className: "fa fa-arrow-right",onClick: this.decrement}),
		);
	}

});

var App = React.createClass({ 
	render: function() {
		return ( 
			React.createElement('div', {}, 
			React.createElement(Counter), 
			React.createElement(Timer) ) 
 		); 
 	} 
});


var app = React.createElement(App);
ReactDOM.render(app, document.getElementById('app'));
