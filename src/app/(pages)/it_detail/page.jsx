"use client";
import React from "react";
import { useSearchParams } from "next/navigation";
import Content from "./Content"; // remove curly braces if it's a default export

const Detail = () => {
  const searchParams = useSearchParams();
  const param = searchParams.get("params"); // 🔧 fixed this line

  const data = [
    {
      id: 1,
      dataTitle: "Web Development",
      description: "lorem100",
      subTitle2: "sadsasd",
      points: "dasdasdasd",
    },
    { id: 2, dataTitle: "SEO" },
    { id: 3, dataTitle: "Social Media" },
    { id: 4, dataTitle: "Graphic Design" },
  ];

  const filteredData = data.filter((item) => item.id === Number(param));

  return (
    <div>
      <Content data={filteredData} />
    </div>
  );
};

export default Detail;
