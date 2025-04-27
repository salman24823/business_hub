import dbConnection from "@/app/config/dbConnection";
import formModel from "@/app/models/formModel"; // Ensure correct import
import { NextResponse } from "next/server";

// GET request - Retrieve all form submissions
export async function GET(request) {
  try {
    await dbConnection();
    const forms = await formModel.find({});

    if (!forms || forms.length === 0) {
      return NextResponse.json(
        { statusCode: 404, message: "No form submissions found" },
        { status: 404 }
      );
    }

    return NextResponse.json({ statusCode: 200, data: forms }, { status: 200 });
  } catch (error) {
    console.error("Form Retrieval Error:", error);
    return NextResponse.json(
      { statusCode: 500, message: "Error retrieving form data" },
      { status: 500 }
    );
  }
}

// POST request - Submit a new form
export async function POST(request) {
  try {
    await dbConnection();

    const { name, phone, email, message } = await request.json();

    if (!name || !phone || !email || !message) {
      return NextResponse.json(
        { statusCode: 400, message: "All fields are required" },
        { status: 400 }
      );
    }

    const form = new formModel({ name, phone, email, message });
    await form.save();

    return NextResponse.json(
      { statusCode: 201, message: "Form submitted successfully" },
      { status: 201 }
    );
  } catch (error) {
    console.error("Form Submission Error:", error);
    return NextResponse.json(
      { statusCode: 500, message: error.message || "Internal Server Error" },
      { status: 500 }
    );
  }
}
export async function DELETE(req) {
  try {
    await dbConnection();
    const { id } = req.params;
    const form = await formModel.findByIdAndDelete(id);
    if (!form) {
      return NextResponse.json(
        { statusCode: 404, message: "Form not found" },
        { status: 404 }
      );
    }
    return NextResponse.json(
      { statusCode: 200, message: "Form deleted successfully" },
      { status: 200 }
    );
  } catch (error) {
    console.log(error);
    return NextResponse.json({
      statusCode: 500,
      message: "Error deleting form data from the database",
    });
  }
}
