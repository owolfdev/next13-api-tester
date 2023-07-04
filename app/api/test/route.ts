import { NextResponse, NextRequest } from "next/server";
import { Client } from "@notionhq/client";
const notion = new Client({ auth: process.env.NOTION_API_KEY });

export async function POST(req: NextRequest) {
  try {
    const { email, project } = await req.json();

    console.log("email:", email);
    console.log("project:", project);

    const notionData = await notion.databases.query({
      database_id: project,
    });

    // you can now use the `email` and `project` values from the request body
    const data = {
      name: "John Dolly",
      age: 25,
      email,
      project,
    };

    return NextResponse.json(notionData);
  } catch (error) {
    // handle error
    console.error(error);
    return NextResponse.error();
  }
}
