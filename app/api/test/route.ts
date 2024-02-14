
import { headers } from "next/headers";
import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest): Promise<NextResponse> {
  const headersList = headers()
  const headerObject: { [key: string]: string } = {}

  // for (const [key, value] of headersList.entries()) {
  //   headerObject[key] = value
  // }
  //

  headersList.forEach((h, v) => {


    headerObject[v] = h
  })


  return new NextResponse(JSON.stringify({
    status: 200,
    headers: headerObject,
    ipAddress: req.ip || 'undefined'
  }), { status: 202 });
}

