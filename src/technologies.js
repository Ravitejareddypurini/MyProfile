import React from "react";

import html from "./assets/html.png"
import css from "./assets/css.png";
import javascript from "./assets/javascript.png";
import reactImage from "./assets/react.png";
import mongo from './assets/mongo.png';
import sql from './assets/sql.png';
import spring from './assets/spring.png'
import github from "./assets/github.png";
import tailwind from "./assets/tailwind.png";
import java from './assets/java.png';
import material from './assets/material.png'
import python from './assets/python.webp'
import docker from './assets/docker.png'
import fast from './assets/fast.png'
const Technologies = () => {
  const techs = [
    {
      id: 1,
      src: html,
      title: "HTML",
      style: "shadow-orange-500",
    },
    {
      id: 2,
      src: css,
      title: "CSS",
      style: "shadow-blue-500",
    },
    {
      id: 3,
      src: javascript,
      title: "JavaScript",
      style: "shadow-yellow-500",
    },
    {
      id: 4,
      src: reactImage,
      title: "React",
      style: "shadow-blue-600",
    },
    {
      id: 5,
      src: tailwind,
      title: "Tailwind",
      style: "shadow-sky-400",
    },
    {
      id: 6,
      src: material,
      title: "Material UI",
      style: "shadow-sky-400",
    },
    {
      id: 7,
      src: java,
      title: "Java",
      style: "shadow-red-400",
    },
    {
      id: 8,
      src: spring,
      title: "Spring",
      style: "shadow-green-400",
    },
    {
      id: 9,
      src: sql,
      title: "SQL",
      style: "shadow-sky-400",
    },
    {
      id: 10,
      src: mongo,
      title: "Mongo DB",
      style: "shadow-green-400",
    },
    {
      id: 11,
      src: github,
      title: "GitHub",
      style: "shadow-gray-400",
    },
    {
      id: 12,
      src: docker,
      title: "Docker",
      style: "shadow-blue-400",
    },
    {
      id: 13,
      src: python,
      title: "Python",
      style: "shadow-blue-400",
    },
    {
      id: 14,
      src: fast,
      title: "Fast API",
      style: "shadow-green-400",
    },
  ];

  return (
    <div
      name="experience"
     
    >
      <div className="max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full h-full text-white">

        <div className="w-full grid grid-cols-3 sm:grid-cols-3 gap-8 text-center py-18 px-1 sm:px-0">
          {techs.map(({ id, src, title, style }) => (
            <div
              key={id}
              className={`shadow-md hover:scale-105 duration-500 py-2 rounded-lg ${style}`}
            >
              <img src={src} alt="" className="w-6 mx-auto" />
              <p className="mt-1 text-center text-xs">{title}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Technologies;
