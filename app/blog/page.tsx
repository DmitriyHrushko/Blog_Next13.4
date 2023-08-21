'use client';
import { PostCreate } from "@/components/NewPost";
import { PostSearch } from "@/components/PostSearch";
import { Posts } from "@/components/Posts";
import { getAllPosts } from "@/services/getPosts";
import { Metadata } from "next"
import { useEffect, useState } from "react";

export const metadata: Metadata = {
	title: "Blog | Recruitment Platform",
}

export default function Blog() {
	const [posts, setPosts] = useState<any[]>([])
	const [loading, setLoading] = useState(true)

	useEffect(() => {
		getAllPosts()
			.then(setPosts)
			.finally(() => setLoading(false))
	}, [])
	return (
		<>
			<h1>Blog</h1>
			<PostCreate />
			<PostSearch onSearch={setPosts} />
			{loading ? (
				<h3> Loading... </h3>
			) : (
				<Posts posts={posts} />

			)}

		</>
	)
}