import dbConnection from "@/config/dbConnection";
import formModel from "@/models/formModel";
import { NextResponse } from "next/server";

export async function POST(req) {
  try {
    await dbConnection();
    const { name, phone, email, message } = await req.json();
    const form = new formModel({ name, phone, email, message });
    await form.save();
    return NextResponse.json({
      statusCode: 201,
      message: "Form submitted successfully",
    });
  } catch (error) {
    console.log(error);
    return NextResponse.json({
      statusCode: 500,
      message: "Error saving form data to the database",
    });
  }
}
