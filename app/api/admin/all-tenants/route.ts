import { NextResponse } from "next/server"
import { allUsers } from "@/lib"

export async function GET(req: Request) {
    const data = await allUsers()
    
    return NextResponse.json({data},{status:200})
  }
   