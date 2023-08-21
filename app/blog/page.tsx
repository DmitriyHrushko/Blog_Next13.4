import { PostCreate } from "@/components/NewPost";
import { PostSearch } from "@/components/PostSearch";
import { Posts } from "@/components/Posts";
import { Metadata } from "next"

export const metadata: Metadata = {
	title: "Blog | Recruitment Platform",
}

export default function Blog() {

	return (
		<>
			<h1>Blog</h1>
			<PostCreate />
			<PostSearch />
			<Posts />
		</>
	)
}