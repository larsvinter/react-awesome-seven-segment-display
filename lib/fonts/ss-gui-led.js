'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _index = require('../index.js');

var _index2 = _interopRequireDefault(_index);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var SegmentVertical = function SegmentVertical(props) {
  return _react2.default.createElement('rect', _extends({}, props, { width: '1', height: '4' }));
};
var SegmentHorisontal = function SegmentHorisontal(props) {
  return _react2.default.createElement('rect', _extends({}, props, { width: '5', height: '1' }));
};

var segmentOffsetMap = [{ x: 1, y: 0 }, { x: 6, y: 1 }, { x: 6, y: 6 }, { x: 1, y: 10 }, { x: 0, y: 6 }, { x: 0, y: 1 }, { x: 1, y: 5 }];

var segmentMap = [SegmentHorisontal, SegmentVertical, SegmentVertical, SegmentHorisontal, SegmentVertical, SegmentVertical, SegmentHorisontal];

var SsGuiLed = function SsGuiLed(props) {
  return _react2.default.createElement(_index2.default, { digits: props.digits, segmentOffsetMap: segmentOffsetMap, segmentMap: segmentMap });
};

// Below causes a false positive!
// SsGuiLed.propTypes = {
//   digit: React.PropTypes.string,
// };

exports.default = SsGuiLed;