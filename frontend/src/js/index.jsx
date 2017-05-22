var React = require('react')
var ReactDOM = require('react-dom')
var moment = require('moment');
require('bootstrap-loader');
console.log(moment().format());

var Hello = React.createClass ({
    render: function() {
        return (
            <h1>Hello, React!</h1>
        )
    }
});

ReactDOM.render(<Hello />, document.getElementById('container'));