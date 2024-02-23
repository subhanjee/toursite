import React from "react";
// import logo from "../../images/Ellipse 24.png"
// import logo1 from "../../images/div.style__StyledImage-sc-1gqvryv-2.png"
import "./index.css";
import { Rate } from "antd";
const data = [
  {
    id: 1,
    logo: "../images/Ellipse 24.png",
    name: "Colin mattew",
    subName: "3 Jul, 2023",
    para: "Awesome adventure place is very pleasant, the people working always with a smile. Definitely will make a come back in the future They have a very clean area  the sun umbrellas were available almost all over.",
    img: "../images/div.style__StyledImage-sc-1gqvryv-2.png",
  },
  {
    id: 2,
    logo: "../images/Ellipse 25.png",
    name: "Sara mattew",
    subName: "3 Jul, 2023",
    para: "Awesome adventure place is very pleasant, the people working always with a smile. Definitely will make a come back in the future They have a very clean area  the sun umbrellas were available almost all over.",
    img: "../images/div.style__StyledImage-sc-1gqvryv-2.png",
  },
  {
    id: 3,
    logo: "../images/Ellipse 26.png",
    name: "Eduardo",
    subName: "3 Jul, 2023",
    para: "Awesome adventure place is very pleasant, the people working always with a smile. Definitely will make a come back in the future They have a very clean area  the sun umbrellas were available almost all over.",
    img: "../images/Example.png",
  },
  {
    id: 4, 
    logo: "../images/Ellipse 24.png",
    name: "Colin mattew",
    subName: "3 Jul, 2023",
    para: "Awesome adventure place is very pleasant, the people working always with a smile. Definitely will make a come back in the future They have a very clean area  the sun umbrellas were available almost all over.",
    img: "../images/Example.png",
  },
];
function Reviews() {
  return (
    <>
      {data.map((item, index) => (
        <div className="div-revie" key={index}>
          <div className="div-flex">
            <img src={item.logo} alt="" />
            <div>
              <h6 style={{ marginTop: ".5rem" }}>{item.name}</h6>
              <p style={{ marginTop: "-.5rem" }}>{item.subName}</p>
            </div>
          </div>
          <Rate style={{ color: "red" }} />
          <p>
            Awesome adventure place is very pleasant, the people working always
            with a smile. Definitely will make a come back in the future They
            have a very clean area the sun umbrellas were available almost all
            over.
          </p>
          <img src={item.img} alt="" />
        </div>
      ))}
    </>
  );
}

export default Reviews;
