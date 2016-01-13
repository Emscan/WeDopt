var Label = React.createClass({
  propTypes: {
    label: React.PropTypes.string
  },

  render: function() {
    return (
      <div>
        <div>Label: {this.props.label}</div>
      </div>
    );
  }
});
