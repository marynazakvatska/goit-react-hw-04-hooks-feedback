import React from "react";
import s from "./FeedBackOptions.module.css";
import PropTypes from "prop-types";

const FeedbackOptions = ({ btns, onLeaveFeedback }) => {
 /*  const btns = Object.keys(options); */
  return (
    <div>
      {btns.map((btn, index) => (
        <button
          className={s.btn}
          key={index}
          type="button"
          onClick={() => onLeaveFeedback(btn)}
        >
          {btn}
        </button>
      ))}
    </div>
  );
};

FeedbackOptions.propTypes = {
  options: PropTypes.string.isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
  btn: PropTypes.node.isRequired,
  index: PropTypes.node.isRequired,
};

export default FeedbackOptions;
