import {useEffect, useState, useRef} from 'react';

export default function OfferTimer() {
  let [hours, setHours] = useState('00');
  let [minutes, setMinutes] = useState('00');
  let [seconds, setSeconds] = useState('00');
  let interval = useRef();

  function startTimer() {
    const countDownTimer = new Date('Sep 29 2021  00:00:00').getTime();

    interval = setInterval(() => {
      const now = new Date().getTime();
      const distance = countDownTimer - now;
      const hours = Math.floor( distance % (1000 * 60 * 60 * 24) / (1000 * 60 * 60));
      const minutes = Math.floor( distance % (1000 * 60 * 60) / (1000 * 60));
      const seconds = Math.floor( distance % (1000 * 60) / (1000));

      if( distance < 0) {
        clearInterval(interval.current);
      } else {
        setHours(hours);
        setMinutes(minutes);
        setSeconds(seconds);
      }
    }, 1000);
  }
  // For Adding "0" to timer
  if( hours < 10) {
    hours = "0" + hours;
  }
  if( minutes < 10) {
    minutes = "0" + minutes;
  }
  if( seconds < 10) {
    seconds = "0" + seconds;
  }


  useEffect(() => {
    startTimer();
    return () => clearInterval(interval.current);
  }, [])

    return { hours, minutes, seconds}
}
