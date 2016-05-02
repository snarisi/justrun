const State = function (data) {
  data = data || {};
  this.currPos = data.currPos;
  this.lastPos = data.lastPos;
  this.distance = data.distance;
};

let state = new State();
let track = false;
let watchID;

export const get = function (prop) {
  if (!prop) return state;
  return state[prop];
};

export const set = function (prop, val) {
  state[prop] = val;
};

export const startWatch = function () {
  if (!state.currentPosition) {
    navigator.geolocation.getCurrentPosition(
      pos => {
        state = new State({
          currPos: pos,
          lastPos: pos,
          distance: 0
        });
      },
      err => alert(err),
		  {enableHighAccuracy: true, maximumAge: 1000, timeout: 20000}
    );
  }

  watchID = navigator.geolocation.watchPosition(
    pos => {
      state = new State({
        currPos: pos,
        lastPos: state.currPos,
        distance: track ? getDistance : state.distance
      });
    },
    err => alert(err),
		{enableHighAccuracy: true, maximumAge: 1000, timeout: 20000}
  );
};

export const toggleWatch = function () {

};

export const endWatch = function () {

};
