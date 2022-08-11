import React from "react";
import Comment from "./Comment";

const comments = [
	{
		name: "금종은",
		comment: "안녕하세요, jkeum입니다.",
	},
	{
		name: "이형래",
		comment: "안녕하세요, hyunlee입니다.",
	},
	{
		name: "우영우",
		comment: "안녕하세요, woo입니다.",
	},
];

function CommentList(props) {
	return (
		<div>
			{comments.map((comment) => {
				return (
					<Comment name={comment.name} comment={comment.comment} />
				);
			})}
		</div>
	);
}

export default CommentList;
