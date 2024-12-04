import React, { act, useState } from "react";
import { useDispatch } from "react-redux";
import { setCategory } from "../utils/appSlice";

const buttonItemList = [
  "All",
  "Javascript",
  "React",
  "Python",
  "Django",
  "Node",
  "Express",
  "MongoDB",
  "PostgreSQL",
  "GraphQL",
  "Apollo",
  "Prisma",
  "TypeORM",
  "Sequelize",
  "Docker",
  "Next",
  "Nest",
  "Java",
  
];

const ButtonList = () => {
  const [active, setActive] = useState("All");
  const dispatch = useDispatch();

  const videoByTag = (tag) => {
    if(active !== tag) {
      dispatch(setCategory(tag));
      // setActive(tag);
    }
  };
  console.log(active);
  return (
    <div className="py-4 ">
      {buttonItemList.map((buttonName, index) => {
        return (
          <button
            onClick={() => {
              videoByTag(buttonName);
            }}
            key={index}
            className={`${active === buttonName ? "bg-slate-900 text-white" : "bg-gray-200"} py-1 px-4 rounded-lg mx-2 font-medium mt-3`}
          >
            {buttonName}
          </button>
        );
      })}
    </div>
  );
};

export default ButtonList;
