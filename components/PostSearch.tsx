"use client";

import { usePosts } from "@/store";
import { FormEventHandler, useState } from "react";

const PostSearch = () => {
	const [search, setSearch] = useState('')
	const getPostsBySearch = usePosts(state => state.getPostsBySearch)

	const handleSubmit: FormEventHandler<HTMLFormElement> = async (event) => {
		event.preventDefault();
		await getPostsBySearch(search);
	}
	return (
		<form onSubmit={handleSubmit}>
			<input
				type="search"
				placeholder="Search"
				value={search}
				onChange={event => setSearch(event.target.value)} />
			<button type="submit">Search</button>
		</form>
	)
}
export { PostSearch }