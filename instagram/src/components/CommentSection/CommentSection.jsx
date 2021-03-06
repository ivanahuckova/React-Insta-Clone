import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

//components
import ActionItemsContainer from "./CommentSectionComponents/ActionItemsContainer";
import LikesContainer from "./CommentSectionComponents/LikesContainer";
import Comment from "./CommentSectionComponents/Comment";
import NewComment from "./CommentSectionComponents/NewComment";

export default class CommentSection extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			comments: this.props.comments,
			inputCommentValue: "",
			likes: this.props.likes,
			didLike: false
		};
	}

	//Functions addNewComment && handleAddNewInput && clearInput are handling add new comments
	addNewComment = message => {
		this.setState(currState => ({
			comments: currState.comments.concat({ username: this.props.username, text: message })
		}));
	};

	handleAddNewInput = input => {
		this.setState({
			inputCommentValue: input
		});
	};

	clearInput = () => {
		this.setState({
			inputCommentValue: ""
		});
	};

	//Functions toggleLike is handling liking of posts
	toggleLike = () => {
		this.setState(
			currState => ({ didLike: !currState.didLike }),
			() => {
				if (this.state.didLike) {
					this.setState(currState => ({ likes: currState.likes + 1 }));
				} else if (!this.state.didLike) {
					this.setState(currState => ({ likes: currState.likes - 1 }));
				}
			}
		);
	};

	render() {
		return (
			<StyledCommentSectionContainer>
				<ActionItemsContainer didLike={this.state.didLike} toggleLike={this.toggleLike} />
				<LikesContainer likes={this.state.likes} />

				{/* Comment Component: Creating new comment for each comment => mapping through comments array and creatin new Comment component*/}
				{this.state.comments.map((comment, idx) => {
					return <Comment comment={comment} key={idx} />;
				})}

				{/* ANewComment Component: Add new comment section and component*/}

				<NewComment
					addNewComment={this.addNewComment}
					inputCommentValue={this.state.inputCommentValue}
					handleAddNewInput={this.handleAddNewInput}
					clearInput={this.clearInput}
				/>
			</StyledCommentSectionContainer>
		);
	}
}

CommentSection.propTypes = {
	comments: PropTypes.array.isRequired,
	likes: PropTypes.number.isRequired,
	username: PropTypes.string
};

const StyledCommentSectionContainer = styled.div`
	background-color: white;
	padding: 0 10px 5px 10px;
`;
