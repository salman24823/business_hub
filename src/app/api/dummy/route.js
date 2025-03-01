import { NextResponse } from "next/server";
import dbConnection from "@/config/dbConnection";

export async function POST(req, res) {
  await dbConnection();

  try {
    console.log("API started");

    // const { username, password, email, phone } = await req.json();

    // const savedData = await userModel.create({
    //   user: username,
    //   userPassword: password,
    //   userEmail: email,
    //   userPhone: phone,
    // });

    // await userModel.create({ key: value, key: value });

    console.log(savedData, "savedData");

    // const data = await userModel.find()

    //   console.log(data,"data")

    return NextResponse.json({
      statusCode: 200,
      // FinalData: data,
      message: "API Successfully",
    });
  } catch (error) {
    console.log(error, "Error fom GET API ");

    return NextResponse.json({
      statusCode: 500,
      message: "Error fetching data from the database",
    });
  }
}
