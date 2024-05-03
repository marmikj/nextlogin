import { NextResponse } from "next/server"

export async function POST(request){
    const result = await request.json();
    const data = await fetch('/login/tokenusingconfiguration.json')
    return NextResponse.json(data)
}