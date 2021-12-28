import React from "react";
import { FaDollarSign, FaDolly, FaRedo } from "react-icons/fa";

export type ServicesDataProps = {
  id: number;
  icon: React.ReactElement;
  title: string;
  text: string;
}[];

export const ServicesData: ServicesDataProps = [
  {
    id: 1,
    icon: <FaDolly className="service-icon" />,
    title: "freeshipping",
    text: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nesciunt, tempora?",
  },
  {
    id: 2,
    icon: <FaRedo className="service-icon" />,
    title: "30 days return policy",
    text: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nesciunt, tempora?",
  },
  {
    id: 3,
    icon: <FaDollarSign className="service-icon" />,
    title: "secured payment",
    text: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nesciunt, tempora?",
  },
];
