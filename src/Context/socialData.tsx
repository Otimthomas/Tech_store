import React from "react";

import { FaFacebook, FaTwitter, FaLinkedin } from "react-icons/fa";

export type SocialDataProps = {
  id: number;
  icon: React.ReactElement;
  url: string;
}[];

export const socialData: SocialDataProps = [
  {
    id: 1,
    icon: <FaFacebook className="icon" />,
    url: "https://www.facebook.com",
  },
  {
    id: 2,
    icon: <FaTwitter className="icon" />,
    url: "https://www.twitter.com",
  },
  {
    id: 3,
    icon: <FaLinkedin className="icon" />,
    url: "https://www.linkedin.com",
  },
];
