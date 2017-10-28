import React from 'react';
import ReactDOM from 'react-dom';


// var HelloBox = React.createClass({
//
//   render: function() {
//     return (
//       <div className="helloTag">
//       Hello world from ReactJS
//       </div>
//     );
//   }
// });
//
// ReactDOM.render (
//   <HelloBox/>,
//   document.getElementById('helloTag')
// );

class HelloBox extends React.Component {
  render() {
    return (
      <div className="helloTag">
      Hello World from ReactJS
      </div>
    );
  }
};

ReactDOM.render(
  <HelloBox />,
  document.getElementById('helloTag')
);
