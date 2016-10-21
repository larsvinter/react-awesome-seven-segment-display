import React from 'react';

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

const AwesomeSevenSegmentBase = (props) => 
  <svg {...props} className="led-container" >
    { props.digits.split('').map((digit, offset) => {
      return (<g transform={`scale(2) translate(${1 + (offset * 9)}, 2)`}>
        { props.segmentMap.map((Segment, i) => {
            console.log(digitToSegmentMap[digit][i]);
            return Segment({ key: i, x: props.segmentOffsetMap[i].x, y: props.segmentOffsetMap[i].y, className: digitToSegmentMap[digit][i] ? "led-segment-active" : "led-segment-inactive"}); 
          })
        }
      </g>)
    })}

  </svg>;

AwesomeSevenSegmentBase.defaultProps = { 
  fill: 'red',
  digit: 0,
  digits: '20',
};

export default AwesomeSevenSegmentBase;
