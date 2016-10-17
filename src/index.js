import React from 'react';

const SegmentVertical = (props) => <rect {...props} width="1" height="4" />;
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

const digitToSegmentMap = {
  0: [1, 1, 1, 1, 1, 1, 0],
  1: [0, 1, 1, 0, 0, 0, 0],
  2: [1, 1, 0, 1, 1, 0, 1],
  3: [1, 1, 1, 1, 0, 0, 1],
  4: [0, 1, 1, 0, 0, 1, 1],
  5: [1, 0, 1, 1, 0, 1, 1],
  6: [1, 0, 1, 1, 1, 1, 1],
  7: [1, 1, 1, 0, 0, 0, 0],
  8: [1, 1, 1, 1, 1, 1, 1],
  9: [1, 1, 1, 1, 0, 1, 1],
};

function SevenSegmentDisplay(props) {
  return (
    <svg {...props} className="led-container" >
      <g transform="translate(2,4) scale(2)">
        {
          segmentMap.map((Segment, i) => {
            const myProps = {
              key: i,
              x: segmentOffsetMap[i].x,
              y: segmentOffsetMap[i].y,
              className: digitToSegmentMap[props.digit][i] ? "led-segment-active" : "led-segment-inactive"
            }
            return Segment(myProps);
          })
        }
      </g>
    </svg>
  );
}

SevenSegmentDisplay.defaultProps = { 
  width: 200,
  fill: 'red',
  digit: 0,
};

export default SevenSegmentDisplay;
