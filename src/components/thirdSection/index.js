import { CaretRightOutlined } from "@ant-design/icons";
import React from "react";
import { Collapse, Rate, theme, Flex, Progress } from "antd";
import { Container } from "react-bootstrap";
import "./index.css";
import Reviews from "../reviews";

const getItems = (panelStyle) => [
  {
    key: "1",
    label: <h5>Inclusion</h5>,
    children: (
      <div>
        <h6>Burj Khalifa</h6>
        <ul>
          <li>Free tickets to Burj Khalifa</li>
          <li>Exclusive access to levels 124, 125</li>
        </ul>
      </div>
    ),
    style: panelStyle,
  },
  {
    key: "2",
    label: <h5>Cancellation Policy</h5>,
    children: <p>These tickets can't be cancelled or rescheduled.</p>,
    style: panelStyle,
  },
  {
    key: "3",
    label: <h5>My Tickets</h5>,
    children: (
      <div>
        <h6> Your voucher will be emailed to you shortly.</h6>
        <ul>
          <li>
            Please display the voucher on your mobile phone with a valid photo
            ID at the attraction.
          </li>
        </ul>
        <h6> Ticket Redemption Points</h6>
        <h6> Burj Khalifa</h6>
        <ul>
          <li>
            Redeem your tickets at the will-call ticket counter located at the
            "At The Top" entrance on the lower ground level of the Dubai Mall.
          </li>
        </ul>
        <h6>
          {" "}
          Address: Burj Khalifa - 1 Sheikh Mohammed bin Rashid Blvd - Downtown
          Dubai - Dubai - United Arab Emirates.
        </h6>
        <h6> IMG Worlds of Adventure</h6>
        <ul>
          <li>
            Redeem your tickets at the entrance of IMG Worlds of Adventure.
          </li>
          <li>
            Address: E311 - Sheikh Mohammed Bin Zayed Rd - Dubai - United Arab
            Emirates.{" "}
          </li>
        </ul>
      </div>
    ),
    style: panelStyle,
  },
  {
    key: "4",
    label: <h5>Ratings and Reviews</h5>,
    children: (
      <div  >
      <div className="div-rat">
        <div>
          <h5>Overall Rating</h5>
          <div style={{ display: "flex", gap: "1rem", marginTop: "1rem" }}>
            <h6>5.0</h6>
            <Rate style={{ color: "red" }} />
            <p className="text-from"> 100+ Reviews</p>
          </div>
          <button className="btn-rev">Write a review</button>
        </div>
        <div className="big-div">
          <Flex gap="small" vertical>
            <div style={{ display: "flex" }}>
              <Rate className="rates" />
              <Progress percent={70} />
            </div>
            <div style={{ display: "flex" }}>
              <Rate className="rates" />
              <Progress percent={50} />
            </div>
            <div style={{ display: "flex" }}>
              <Rate className="rates" />
              <Progress percent={40} />
            </div>
            <div style={{ display: "flex" }}>
              <Rate className="rates" />
              <Progress percent={30} />
            </div>
          </Flex>
        </div>
      </div>
      <Reviews/>
      <p>100 + reviews</p>
      <button className="btn-rev">show more</button>

      </div>
    ),
    style: panelStyle,
  },
];
const ThirdSection = () => {
  const { token } = theme.useToken();
  const panelStyle = {
    marginBottom: 24,
    background: token.colorFillAlter,
    borderRadius: token.borderRadiusLG,
    border: "none",
  };
  return (
    <Container>
      <Collapse
        bordered={false}
        defaultActiveKey={["1"]}
        expandIcon={({ isActive }) => (
          <CaretRightOutlined rotate={isActive ? 90 : 0} />
        )}
        style={{
          background: token.colorBgContainer,
        }}
        items={getItems(panelStyle)}
        expandIconPosition="end"
      />
    </Container>
  );
};
export default ThirdSection;
