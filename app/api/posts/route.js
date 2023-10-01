import { NextResponse } from "next/server";
import * as variables from "../../utils/variables"

export async function GET() {
    const postsURL = `${variables.strapiAPI}/api/posts/?populate=*`;
    
    try {
        const posts = await fetch(postsURL, {
            next: {
                revalidate: 60*60
            }
        });
        if (!posts) {
            throw new Error(`Fetch failed with status: ${posts.error}`)
        }

        const postsData = await posts.json();
        const postsItems = await postsData.data
        const postsArray = await postsItems?.map((post, index) => ({
            id: index,
            title: post?.attributes?.title,
            content: post?.attributes?.content,
            radio: post?.attributes?.radio,
            image: post?.attributes?.image?.data?.attributes?.url
        }))

        // return postsArray
        return NextResponse.json(postsArray, {
            status: 200
        })
    } catch (error) {
        console.error('Error', error)
    }
  }
  