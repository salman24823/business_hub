import React from "react";
import Form from "../../Sections/Form/page";

const Content = ({ data }) => {
  if (data.length === 0) return <p>No data found.</p>;

  return (
    <>
      {data.map((item) => (
        <main
          key={item.id}
          className=" overflow-hidden flex flex-col items-center"
        >
          <div className="w-[150%] h-[80vh] gap-6 px-[5%] flex flex-col justify-center items-center lightblue_bg bottom_style">
            <h2 className="sub_heading text-white">{item.dataTitle}</h2>
            {item.description && (
              <span className="text-white text-center w-[50%]">
                {item.description}
              </span>
            )}
          </div>
          <div className="services_include p-[5%] flex flex-col w-full gap-6">
            {item.subTitle2 && (
              <h2 className="text-3xl font-bold">{item.subTitle2}</h2>
            )}

            {item.points &&
              item.points.map((point, index) => (
                <p key={index} className="text-gray-700">
                  • {point}
                </p>
              ))}
            <div>
              {item.subTitle3 && (
                <h3 className="text-3xl font-bold">{item.subTitle3}</h3>
              )}
              {item.technologies &&
                item.technologies.map((point, index) => (
                  <p key={index} className="my-2 text-gray-700">
                    • {point}
                  </p>
                ))}
            </div>
            <div>
              {item.subTitle4 && (
                <h3 className="text-3xl font-bold">{item.subTitle4}</h3>
              )}
              {item.whyChooseUs && (
                <p className="">{item.whyChooseUs}</p> 
              )}
            </div>
          </div>
        
        </main>
      ))}
      <Form />
    </>
  );
};

export default Content;
