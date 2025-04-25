// components/AnimatedOnScroll.jsx
import React from "react";
import { useInView } from "react-intersection-observer";
import "animate.css";

const AnimatedOnScroll = ({ children, animation = "fadeInUp", delay = 0 }) => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.4,
  });

  const animationClass = inView
    ? `animate__animated animate__${animation}`
    : "";

  return (
    <div
      ref={ref}
      style={{ animationDelay: `${delay}ms` }}
      className={animationClass}
    >
      {children}
    </div>
  );
};

export default AnimatedOnScroll;
