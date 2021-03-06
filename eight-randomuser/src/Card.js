import React from "react";
import { Card, CardBody, CardTitle, CardText } from "reactstrap";
import { FaEnvelope, FaMapMarkedAlt, FaPhone } from "react-icons/fa";

const MyCard = ({ details }) => {
  return (
    <Card>
      <CardBody className="text-center">
        <img
          height="150"
          width="150"
          className="rounded-circle img-thumbnail border-danger"
          src={details.picture?.large}
        />
        s
        <CardTitle className="text-primary">
          <h1>
            <span className="pr-2">{details.name?.title}</span>
            <span>{details.name?.first}</span>
            <span>{details.name?.last}</span>
          </h1>
        </CardTitle>
        <CardText>
          <span className="pr-2">
            <FaMapMarkedAlt />
            {details.location?.city}
          </span>
          <span className="pr-2">
            <FaPhone />
            {details.phone}
          </span>
          <span className="pr-2">
            <FaEnvelope />
            {details.email}
          </span>
        </CardText>
      </CardBody>
    </Card>
  );
};
export default MyCard;
