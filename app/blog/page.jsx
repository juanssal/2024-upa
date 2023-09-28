import * as variables from "../utils/variables"
import * as functions from "../utils/functions"

export default async function Blog() {
    const posts = await functions.fetchPosts(variables.strapiAPI)
    return (
        <div>
            {console.log("me posts mate -----------------------------", posts.data[0].attributes.image)}
        </div>
    )
}
