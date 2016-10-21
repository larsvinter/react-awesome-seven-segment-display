import React from 'react';

import AwesomeSevenSegmentBase from '../index.js';

const SegmentVertical = (props) => 
{
return <rect {...props} width="1" height="4" />;
}
const SegmentHorisontal = (props) => <rect {...props} width="5" height="1" />;

const segmentOffsetMap = [
  { x: 1, y: 0 },
  { x: 6, y: 1 },
  { x: 6, y: 6 },
  { x: 1, y: 10 },
  { x: 0, y: 6 },
  { x: 0, y: 1 },
  { x: 1, y: 5 }
];

const segmentMap = [ SegmentHorisontal, SegmentVertical, SegmentVertical, SegmentHorisontal, SegmentVertical, SegmentVertical, SegmentHorisontal ];

const SsGuiLed = (props) => <AwesomeSevenSegmentBase digits={props.digits} segmentOffsetMap={segmentOffsetMap} segmentMap={segmentMap} />;

// Below causes a false positive!
// SsGuiLed.propTypes = {
//   digit: React.PropTypes.string,
// };

export default SsGuiLed;
