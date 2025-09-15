import React from "react";
import "./button.css";

const Button = ({
    content,
    onClick,
    icon,
    backgroundColor,
    color,
    fontSize,
}) => {
    return (
        <button
            style={{ backgroundColor, color, fontSize }}
            onClick={onClick}
            className="main-butt"
        >
            {icon && <img src={icon} alt="Icon" />}
            {content}
        </button>
    );
};

export default Button;