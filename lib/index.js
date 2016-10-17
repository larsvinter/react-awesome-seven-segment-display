"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var SegmentVertical = function SegmentVertical(props) {
  return _react2.default.createElement("rect", _extends({}, props, { width: "1", height: "4" }));
};
var SegmentHorisontal = function SegmentHorisontal(props) {
  return _react2.default.createElement("rect", _extends({}, props, { width: "5", height: "1" }));
};

var segmentOffsetMap = [{ x: 1, y: 0 }, { x: 6, y: 1 }, { x: 6, y: 6 }, { x: 1, y: 10 }, { x: 0, y: 6 }, { x: 0, y: 1 }, { x: 1, y: 5 }];

var segmentMap = [SegmentHorisontal, SegmentVertical, SegmentVertical, SegmentHorisontal, SegmentVertical, SegmentVertical, SegmentHorisontal];

var digitToSegmentMap = {
  0: [1, 1, 1, 1, 1, 1, 0],
  1: [0, 1, 1, 0, 0, 0, 0],
  2: [1, 1, 0, 1, 1, 0, 1],
  3: [1, 1, 1, 1, 0, 0, 1],
  4: [0, 1, 1, 0, 0, 1, 1],
  5: [1, 0, 1, 1, 0, 1, 1],
  6: [1, 0, 1, 1, 1, 1, 1],
  7: [1, 1, 1, 0, 0, 0, 0],
  8: [1, 1, 1, 1, 1, 1, 1],
  9: [1, 1, 1, 1, 0, 1, 1]
};

function SevenSegmentDisplay(props) {
  return _react2.default.createElement(
    "svg",
    _extends({}, props, { className: "led-container" }),
    _react2.default.createElement(
      "g",
      { transform: "translate(2,4) scale(2)" },
      segmentMap.map(function (Segment, i) {
        var myProps = {
          key: i,
          x: segmentOffsetMap[i].x,
          y: segmentOffsetMap[i].y,
          className: digitToSegmentMap[props.digit][i] ? "led-segment-active" : "led-segment-inactive"
        };
        return Segment(myProps);
      })
    )
  );
}

SevenSegmentDisplay.defaultProps = {
  width: 200,
  fill: 'red',
  digit: 0
};

exports.default = SevenSegmentDisplay;