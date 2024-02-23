import { Col, Row, Rate } from "antd";
import React from "react";
import imageOne from "../../images/image 4.png";
import imageTwo from "../../images/image 5.png";
import imageThree from "../../images/image 6.png";
import "./index.css";
import { Container } from "react-bootstrap";
export default function HeroSection() {
  return (
    <div>
      <Row justify="center" style={{ gap: ".5rem", marginTop: "1rem" }}>
        <Col>
          <div className="center-img">
            <img src={imageOne} alt="" className="size-img"/>
          </div>
        </Col>
        <Col>
          <div className="center-img">
            <img src={imageTwo} alt="" className="size-img1"/>
            <img src={imageThree} alt="" className="size-img1"/>
          </div>
        </Col>
      </Row>
      <Container>
      <div className="center-img">
        <div className="div-box">
          <div className="text-div">
            <div>
              <h1 className="combo-color">Combo Deals: </h1>
              <p className="text-from1">
                IMG Worlds of Adventure + Free Burj Khalifa At the Top
              </p>
              <div style={{display:"flex" , gap:"1rem"}}>
              <Rate  style={{color:"red"}}/>
              <p className="text-from"> 100+ Reviews</p>
              </div>
            </div>
            <div>
              <p className="text-from">From PKR</p>
              <p className="text-from1">18,930.00</p>
              <button className="btn-book">Book now </button>
            </div>
          </div>
         </div>
        </div>
      </Container>
    </div>
  );
}
