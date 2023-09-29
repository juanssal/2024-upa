import { NextResponse } from "next/server";

export async function GET() {

    const postsURL = `http://www.radioclasica.com.sv:1337/api/posts/?populate=*`;
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

// THIS IS TRICKY - need to authorize public create on admin panel, and experiment...
export async function POST(request) {
    const event = request.json()
    const res = await fetch('http://www.radioclasica.com.sv:1337/api/posts/', {
        method: "POST",
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify(event)
    })

    const newEvent = await res.json()

    return NextResponse.json(newEvent, {
        status: 201
    })

}