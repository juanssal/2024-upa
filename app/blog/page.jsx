
import * as variables from "../utils/variables"
import * as functions from "../utils/functions"
import Image from "next/image"

export default async function Blog() {
    const posts = await functions.fetchPosts(variables.strapiAPI)
    return (
        <main>
            {console.log(posts.map(post => post.title))}
            {posts.map((post, index) => {
                return (
                    <div key={index}>
                        <h3>{post.title}</h3>
                        <p>{post.content}</p>
                        <img src={`${variables.strapiAPI}${post.image}`} alt={post.title} ></img>
                        {/* <Image src={`${variables.strapiAPI}${post.image}`} width={100} height={100} alt={post.title} /> */}
                    </div>
                )
            })}
        </main>
    )
}
