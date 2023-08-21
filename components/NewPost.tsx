"use client";
import React, { FormEvent } from "react";

interface Iprops { }

const PostCreate = ({ }: Iprops) => {
	const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
		event.preventDefault();

		const response = await fetch("https://jsonplaceholder.typicode.com/posts", {
			method: "POST",
			body: JSON.stringify({
				title: "postnew",
				body: "postnew",
				userId: 1,
			}),
			headers: {
				"Content-type": "application/json; charset=UTF-8",
			},
		})
			.then((response) => response.json())
			.then((json) => console.log(json));

		// if (!response.ok) throw new Error("Failed to create post");
		// return response.json();

	};
	return (
		<form onSubmit={handleSubmit}>
			<input type="text" placeholder="New post" />
			<button type="submit">Add</button>
		</form>
	);
};

export { PostCreate };
