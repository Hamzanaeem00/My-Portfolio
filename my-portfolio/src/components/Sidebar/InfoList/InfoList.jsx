import React from "react";
import InfoIcon from "@mui/icons-material/Info";
import FileOpenIcon from "@mui/icons-material/FileOpen";
import AssistantIcon from "@mui/icons-material/Assistant";
import EngineeringIcon from "@mui/icons-material/Engineering";
import EmailIcon from "@mui/icons-material/Email";
import BungalowIcon from "@mui/icons-material/Bungalow";
import { Link, useLocation } from "react-router-dom";
import "./InfoList.css";

const list = [
  {
    id: 6,
    url: "/",
    icon: <BungalowIcon />,
    text: "Home",
  },

  {
    id: 1,
    url: "/about",
    icon: <InfoIcon />,
    text: "About",
  },
  {
    id: 4,
    url: "/experience",
    icon: <EngineeringIcon />,
    text: "Experience",
  },
  {
    id: 2,
    url: "/skills",
    icon: <AssistantIcon />,
    text: "Skills",
  },
  {
    id: 3,
    url: "/projects",
    icon: <FileOpenIcon />,
    text: "Projects",
  },
  {
    id: 5,
    url: "/contact",
    icon: <EmailIcon />,
    text: "Contact",
  },
];
const InfoList = () => {
  const location = useLocation();
  var display = {
    backgroundColor: "#19AA80",
    color: "#19AA80",
    height: "45px",
    borderRadius: "4px",
    padding: "8px",
  };

  return (
    <div>
      {list?.map((item, i) => {
        return (
          <div
            key={item.id}
            className="my-4"
            style={location.pathname === item.url ? display : {}}
          >
            <Link to={item.url}>
              <button className="list-btn">
                <i className="mx-3 icon"> {item.icon}</i>
                {item.text}
              </button>
            </Link>
          </div>
        );
      })}
    </div>
  );
};

export default InfoList;
