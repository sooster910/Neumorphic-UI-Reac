/* eslint-disable */


import React, { useEffect, useState } from 'react';
import propTypes from 'prop-types';
import styled, { css, keyframes } from 'styled-components';

const progressAnime = (offset, circumference) => keyframes`
  0% {
    stroke-dashoffset:${circumference};
  }
 
  100% {
    stroke-dashoffset: ${offset};
  }
`;

const CircularBar = styled.circle`
  stroke-linecap: ${({ strokeShape }) => strokeShape};
  stroke-dasharray: ${({ circumference }) => circumference};
  stroke-dashoffset: ${({ offset }) => offset};
  animation: ${props => progressAnime(props.offset, props.circumference)} 2s
    linear forwards;
`;

const types = {
  convex: {
    boxShadow: `inset 2px 2px 5px 1px #b8b9be, inset -3px -3px 7px #fff`,
    padding: '2rem',
    margin: '20px auto',
  },
  concave: {
    boxShadow: `-5px -5px 17px -10px #ffffff, 7px 7px 10px -2px rgba(146, 182, 216, 1)`,
    padding: '2rem',
    margin: '20px auto',
  },
  combo: {
    boxShadow: 'none',
    padding: '0',
    margin: '0',
  },
};

const typeStyles = css`
  ${({ type }) => css`
    box-shadow: ${types[type].boxShadow};
    padding: ${types[type].padding};
  `}
`;

const OuterCircle = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  background: ${props => (props.dark ? '#333333' : '#e4ebf5')};
  width: ${({ size }) => `${size + 20}px`};
  height: ${({ size }) => `${size + 20}px`};
  border-radius: 100%;
  box-shadow: inset -3px -3px 8px 3px #ffffff, inset 4px 4px 8px 3px #bfcfe7;
`;

const SVG = styled.svg`
  transform: rotate(-90deg);
  max-width: 100%;
  box-shadow: inset 2px 2px 5px 1px #b8b9be, inset -3px -3px 7px #fff;
  border-radius: 100%;
  background: ${props => (props.dark ? '#333333' : 'transparent')};

  ${typeStyles}
`;
const SvgTextWrapper = styled.g`
  transform-origin: ${({ center }) => `${center}px ${center}px`};
  transform: rotate(90deg);
  text-anchor: middle;
`;

const SvgText = styled.text`
  letter-spacing: 2px;
  font-size: 4rem;
  text-anchor: middle;
  font-weight: bold;
  z-index: '10000'
    ${({ labelColor }) => css`
      color: ${labelColor};
      fill: ${labelColor};
    `};
`;

const SvgTextInner = styled.text`
  transform: translateY(1.25em);
  font-size: 2em;
  text-transform: uppercase;
`;
const InnerCircle = styled.div`
  width: ${({ size }) => `${size - 90}px`};
  height: ${({ size }) => `${size - 90}px`};
  border-radius: 100%;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  box-shadow: #bfcfe7 5px 5px 8px 8px, -6px -5px 8px 3px #ffffff !important;
`;
const ProgressCircle = ({
  children,
  type,
  labelColor,
  size,
  progress,
  unit,
  strokeWidth,
  strokeShape,
  circleOneStroke,
  circleTwoStroke,
  ...rest
}) => {
  const [offset, setOffset] = useState(null);
  const [circumference, setCircumference] = useState(null);
  const center = size / 2;
  const radius = size / 2 - strokeWidth / 2;

  useEffect(() => {
    const circumference = 2 * Math.PI * radius;
    const progressOffset = circumference - (circumference * progress) / 100;

    setOffset(progressOffset);
    setCircumference(circumference);
  }, [setOffset, circumference, progress, offset]);

  return (
    <OuterCircle {...rest} size={size}>
      <SVG className="svg" type={type} width={size} height={size} {...rest}>
        <circle
          className="ring"
          cx={center}
          cy={center}
          r={radius}
          fill="none"
          stroke={circleOneStroke}
          strokeWidth={strokeWidth}
          strokeShape={strokeShape}
        />
        <CircularBar
          offset={offset}
          className="svg-circle"
          fill="none"
          stroke={circleTwoStroke}
          cx={center}
          cy={center}
          r={radius}
          strokeWidth={strokeWidth}
          strokeShape={strokeShape}
          circumference={circumference}
        />
        <SvgTextWrapper className="circle-label" center={center}>
          <SvgText
            x={center}
            y={center}
            className="circle-percentage"
            labelColor={labelColor}
          >
            {`${progress}${unit}`}
          </SvgText>
          <SvgTextInner x={center} y={center} className="circle-text">
            COMPLETE
          </SvgTextInner>
        </SvgTextWrapper>
      </SVG>
      {type === 'combo' && <InnerCircle size={size} {...rest} />}
    </OuterCircle>
  );
};

ProgressCircle.propTypes = {
  type: propTypes.string,
  size: propTypes.number,
  progress: propTypes.number,
  strokeWidth: propTypes.number,
  circleOneStroke: propTypes.string,
  circleTwoStroke: propTypes.string,
  labelColor: propTypes.string,
  unit: propTypes.string,
  strokeShape: propTypes.string,
};

ProgressCircle.defaultProps = {
  type: 'combo',
  size: 200,
  progress: 100,
  strokeWidth: 2,
  circleOneStroke: '#253243',
  circleTwoStroke: '#7ea9e1',
};
export default ProgressCircle;
