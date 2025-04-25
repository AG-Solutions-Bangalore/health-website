import React, { useState } from "react";
import { useInView } from "react-intersection-observer"; // Using the Intersection Observer Hook
import CountUp from "react-countup";

const Counter = ({ start, end, duration, counterSubText, separator }) => {
  const { ref, inView } = useInView({
    triggerOnce: true, // Trigger the animation only once when the component comes into view
    threshold: 0.5, // Trigger when 50% of the component is in view
  });

  return (
    <div ref={ref}>
      {inView ? (
        <CountUp
          start={start}
          end={end}
          duration={duration}
          separator={separator}
        />
      ) : (
        start
      )}
      {counterSubText}
    </div>
  );
};

export default Counter;
