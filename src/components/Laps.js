import React from 'react';
import { connect } from "react-redux";

const addLap = () => ({ type: "ADD_LAP" });

let timeout;

const metresPerLap = 32;

const Laps = ({ lap, total, start, dispatch }) => {
  document.body.onkeyup = function (e) {
    if (start) {
      e.preventDefault();
      clearTimeout(timeout);
      timeout = setTimeout(() => {
        dispatch(addLap());
      }, 200);
    }
  };

  return (
    <>
      <p style={{ fontSize: 120, margin: 30 }}>
        {lap} / {total}
      </p>
      <p>
        {parseFloat(42 - (metresPerLap * lap) / 1000).toFixed(2)} KM remaining
      </p>
    </>
  );
};

const mapStateToProps = state => ({
  lap: state.lap,
  total: state.total,
  start: state.start
});

export default connect(mapStateToProps)(Laps);
