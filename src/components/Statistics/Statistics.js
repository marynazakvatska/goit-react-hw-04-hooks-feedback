import React from "react";
import PropTypes from "prop-types";
import s from "./Statistics.module.css";

const Statistics = ({ good, neutral, bad, total, positiveFeedPercentage }) => (
  <ul className={s.list}>
    <li>Good:{good} </li>
    <li>Neutral:{neutral} </li>
    <li>Bad:{bad} </li>
    <li>Total:{total}</li>
    <li>Positive feedback:{positiveFeedPercentage}%</li>
  </ul>
);

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  positivePercentage: PropTypes.number.isRequired,
};

export default Statistics;
