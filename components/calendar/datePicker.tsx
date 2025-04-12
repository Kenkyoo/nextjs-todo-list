"use client";

import { useEffect, useRef } from "react";
import Pikaday from "pikaday";

const DatePicker = () => {
  const myDatepicker = useRef(null);
  useEffect(() => {
    const picker = new Pikaday({
      field: myDatepicker.current,
      defaultDate: new Date(), // Establece la fecha actual
      setDefaultDate: true,
    });
    return () => picker.destroy();
  }, []);

  return (
    <>
      <input type="text" className="input pika-single" ref={myDatepicker} />
    </>
  );
};

export default DatePicker;
