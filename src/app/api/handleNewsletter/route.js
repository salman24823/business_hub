import dbConnection from "@/config/dbConnection";
import newsletterModel from "@/models/newsletterModel";
import { NextResponse } from "next/server";

export async function POST(req) {
  try {
    dbConnection();
    const { email } = await req.json();
    if (!email) {
      return NextResponse.json(
        { statusCode: 400, message: "Email are Required" },
        { status: 400 }
      );
    }
    const newsletter = new newsletterModel({ email });
    await newsletter.save();
    return NextResponse.json(
      { statusCode: 201, message: "Email saved successfully" },
      { status: 201 }
    );
  } catch (error) {
    console.log(error);
    return NextResponse.json({
      message: "Server Error",
      status: 500,
    });
  }
}
