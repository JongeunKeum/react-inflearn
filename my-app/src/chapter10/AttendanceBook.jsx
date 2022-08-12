import React from "react";

const students = [
	{
		id: 1,
		name: "jkeum",
	},
	{
		id: 2,
		name: "inyang",
	},
	{
		id: 3,
		name: "mseo",
	},
	{
		id: 4,
		name: "ylee",
	},
];

function AttendanceBook(props) {
	return (
		<ul>
			{students.map((student) => {
				return <li key={student.id}>{student.name}</li>;
			})}
		</ul>
	);
}

export default AttendanceBook;
