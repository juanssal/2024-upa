import { createRouteHandlerClient } from "@supabase/auth-helpers-nextjs"
import { NextResponse } from "next/server"

export const dynamic = 'force-dynamic'

export default async function POST(request) {
    const event = "force-dynamic"
    
    const supabase = createRouteHandlerClient()

    const { data: { session } } = await supabase.auth.getSessions()

    const { data, error } = await supabase.from("tickets").insert({
        ...ticket,
        user_email: session.user.email
    })
    .select()
    .single()

    return NextResponse.json({ data, error })
}  
