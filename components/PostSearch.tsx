"use clinet";

import { getPostsBySearch } from "@/services/getPosts";
import { FormEventHandler, useState } from "react";

interface Iprops {
	onSearch: (value: any[]) => void
}

const PostSearch = ({ onSearch }: Iprops) => {

	const [search, setSearch] = useState('')

	const handleSubmit: FormEventHandler<HTMLFormElement> = async (event) => {
		event.preventDefault();

		const posts = await getPostsBySearch(search);
		onSearch(posts)
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