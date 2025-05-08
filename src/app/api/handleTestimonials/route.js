import dbConnection from "@/app/config/dbConnection";
import testimonialModel from "@/app/models/testimonialsModel";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    await dbConnection();
    const testimonials = await testimonialModel.find({});

    if (!testimonials.length) {
      return NextResponse.json(
        { statusCode: 404, message: "No testimonials found" },
        { status: 404 }
      );
    }

    return NextResponse.json({ status: 200, data: testimonials });
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { statusCode: 500, message: "Internal Server Error" },
      { status: 500 }
    );
  }
}

export async function POST(req) {
  try {
    await dbConnection();
    const { name, role, message, image } = await req.json();

    if (!name || !role || !message || !image) {
      return NextResponse.json(
        { statusCode: 400, message: "All fields are required" },
        { status: 400 }
      );
    }

    const testimonials = new testimonialModel({
      name,
      role,
      message,
      image,
    });

    await testimonials.save();

    return NextResponse.json(
      { statusCode: 201, message: "Testimonials added successfully" },
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

export async function DELETE(req) {
  try {
    await dbConnection();
    const { id } = await req.json();
    console.log("id", id);
    await testimonialModel.findByIdAndDelete(id);
    return new NextResponse(JSON.stringify({ success: true }), { status: 200 });
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { statusCode: 500, message: error.message || "Internal Server Error" },
      { status: 500 }
    );
  }
}

