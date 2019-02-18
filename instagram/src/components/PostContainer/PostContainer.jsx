import React from "react";
import CommentSection from "../CommentSection/CommentSection";

export default function PostContainer(props) {
	const comments = props.post.comments;
	return (
		<div>
			<CommentSection comment={comments} />
		</div>
	);
}
