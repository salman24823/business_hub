import blogModel from "@/models/blogModel";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    await dbConnection();
    
  } catch (error) {}
}
export async function POST(req) {
  try {
    await dbConnection();
    const { title, description, avatar } = await req.json();
    if (!title || !description || !avatar) {
      return NextResponse.json(
        { statusCode: 400, message: "All fields are required" },
        { status: 400 }
      );
    }
    const blogs = new blogModel({ title, description, avatar });
    await blogs.save();
    return NextResponse.json(
      { statusCode: 201, message: "Blog added successfully" },
      { status: 201 }
    );
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { statusCode: 500, message: error.message || "Internal Server Error" },
      { status: 500 }
    );
  }
}
