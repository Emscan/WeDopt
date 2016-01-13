// commentTutorial.js

var CommentBox = React.createClass({
	render: function () {
		return (
			<div className="commentBox">
			<h2>Comments</h2>
			<commentList />
			<commentForm />
			</div>
			);
	}
});

var CommentList = React.createClass({
	render: function () {
		return (
			<div className="commentList">
				<Comment author="Author1">Comment1</Comment>
				<Comment author="Author2">Comment2</Comment>
			</div>
			);
	}
});

var CommentForm = React.createClass({
	render: function () {
		return (
			<div className="commentForm">
			Hello World, I am a comment form.
			</div>
			);
	}
});

var Comment =React.createClass({
	render: function () {
		return (
			<div className="comment">
				<h2 className="commentAuthor">
					{this.props.author}
				</h2>
				{marked(this.props.children.toString())}
			</div>
			);
	}
});

