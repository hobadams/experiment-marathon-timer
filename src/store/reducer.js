const initialState = {
  lap: 0,
  total: 1440,
  time: null,
  finish: false,
  start: false
};

const reducer = (state = initialState, action) => {
  const newState = { ...state };

  if (action.type === "ADD_LAP") {
    newState.lap = state.lap + 1;

    if (newState.lap === state.total) {
      const d = new Date();
      newState.finish = d.getTime();
      newState.time = timeDifference(state.start, newState.finish);
    }
  }

  if (action.type === "SET_TIME") {
    newState.time = action.time;
  }

  if (action.type === "SET_START") {
    const d = new Date();
    newState.start = d.getTime();
  }

  return newState;
};

const timeDifference = (date1, date2) => {
    let diff = (date2 - date1)/1000;
    diff = Math.abs(Math.floor(diff));

    const days = Math.floor(diff/(24*60*60));
    let leftSec = diff - days * 24*60*60;

    const hrs = Math.floor(leftSec/(60*60));
    leftSec = leftSec - hrs * 60*60;

    const min = Math.floor(leftSec/(60));
    leftSec = leftSec - min * 60;

    return `${formatNumber(hrs)}:${formatNumber(min)}:${formatNumber(leftSec)}`;
}

const formatNumber = number => {
  return number > 9 ? "" + number : "0" + number;
}

export default reducer;
