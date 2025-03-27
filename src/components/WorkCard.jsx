import React from "react";
import { useNavigate } from "react-router-dom";
import "./WorkCard.scss";

const WorkCard = ({ work }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/work/${work.id}`);
  };

  return (
    <div className="work-card" onClick={handleClick}>
      <img src={work.img} alt={work.title} className="work-image" />
      <div className="work-content">
        <div className="work-title">{work.title}</div>
        <div className="work-authors">{work.authors.join(", ")}</div>
      </div>
    </div>
  );
};

export default WorkCard;
