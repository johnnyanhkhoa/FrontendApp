import React, { useState, useEffect } from 'react';

const Clock = () => {
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    return () => clearInterval(timer); // Dọn dẹp timer
  }, []);

  return <p>Current Time: {currentTime.toLocaleTimeString()}</p>;
};

export default Clock;
