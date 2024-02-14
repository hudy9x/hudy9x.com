
import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest): Promise<NextResponse> {


  return new NextResponse(JSON.stringify({
    status: 200,
    headers: req.headers.get('x-forwarded-for'),
    ipAddress: req.ip || 'undefined'
  }), { status: 202 });
}

