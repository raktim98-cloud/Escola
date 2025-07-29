import DevonDP from "../image/Devon.png"
import DareelDP from "../image/dareel.png"
import Copper_1_DP from "../image/copper.png"
import {FaInstagram } from "react-icons/fa6";
import { FaFacebookF,FaTwitter } from "react-icons/fa";


const ptData = [
  {
    id: 1,
    name: "Devon Lane",
    department: "Marketing Department",
    image:DevonDP ,
    socialLinks: {
      facebook: <FaFacebookF/>,
      twitter: <FaTwitter/>,
      linkedin: <FaInstagram/>
    }
  },
  {
    id: 2,
    name: "Darrell Steward",
    department: "It Department",
    image:DareelDP,
   socialLinks: {
      facebook: <FaFacebookF/>,
      twitter: <FaTwitter/>,
      linkedin: <FaInstagram/>
    }
  },
  {
    id: 3,
    name: "Bessie Cooper",
    department: "Software Department",
    image: Copper_1_DP,
    socialLinks: {
      facebook: <FaFacebookF/>,
      twitter: <FaTwitter/>,
      linkedin: <FaInstagram/>
    }
  },
  {
    id: 4,
    name: "Bessie Cooper",
    department: "Software Department",
    image: DareelDP,
    socialLinks: {
      facebook: <FaFacebookF/>,
      twitter: <FaTwitter/>,
      linkedin: <FaInstagram/>
    }
  }
];

export default ptData;