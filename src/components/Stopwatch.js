import React from 'react';
import ReactStopwatch from "react-stopwatch";
import { connect } from "react-redux";

const setStart = () => ({ type: "SET_START" });
const Stopwatch = ({ time, start, finish, dispatch }) => {
  return (
    <>
      {finish && <p style={{ fontSize: 30 }}>Finish Time: {time}</p>}
      {start && !finish && (
        <ReactStopwatch
          seconds={0}
          minutes={0}
          hours={0}
          onCallback={() => console.log("Finish")}
          render={({ formatted }) => {
            return (
              <div>
                <p style={{ fontSize: 30 }}>Time: {formatted}</p>
              </div>
            );
          }}
        />
      )}
      {!start && !finish && (
        <button
          onClick={() => dispatch(setStart())}
          style={{
            border: "none",
            borderRadius: 5,
            outline: "none",
            background: "green",
            padding: 15,
            color: "white",
            textTransform: "uppercase",
            fontSize: 30,
          }}
        >
          Start
        </button>
      )}
    </>
  );
};

const mapStateToProps = state => ({
  time: state.time,
  finish: state.finish,
  start: state.start,
});

export default connect(mapStateToProps)(Stopwatch);
