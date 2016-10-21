'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

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

var AwesomeSevenSegmentBase = function AwesomeSevenSegmentBase(props) {
  return _react2.default.createElement(
    'svg',
    _extends({}, props, { className: 'led-container' }),
    props.digits.split('').map(function (digit, offset) {
      return _react2.default.createElement(
        'g',
        { transform: 'scale(2) translate(' + (1 + offset * 9) + ', 2)' },
        props.segmentMap.map(function (Segment, i) {
          console.log(digitToSegmentMap[digit][i]);
          return Segment({ key: i, x: props.segmentOffsetMap[i].x, y: props.segmentOffsetMap[i].y, className: digitToSegmentMap[digit][i] ? "led-segment-active" : "led-segment-inactive" });
        })
      );
    })
  );
};

AwesomeSevenSegmentBase.defaultProps = {
  fill: 'red',
  digit: 0,
  digits: '20'
};

exports.default = AwesomeSevenSegmentBase;