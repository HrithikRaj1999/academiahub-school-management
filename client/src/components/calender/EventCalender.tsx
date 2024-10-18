"use client";

import Image from "next/image";
import { useState, useEffect } from "react";
import Calendar, { OnArgs } from "react-calendar";
import "react-calendar/dist/Calendar.css";
import Holidays from "date-holidays"; // Import the Holidays package

type ValuePiece = Date | null;
type Value = ValuePiece | [ValuePiece, ValuePiece];

// TEMPORARY EVENTS
const events = [
  {
    id: 1,
    title: "Lorem ipsum dolor",
    time: "12:00 PM - 2:00 PM",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
  {
    id: 2,
    title: "Lorem ipsum dolor",
    time: "12:00 PM - 2:00 PM",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
  {
    id: 3,
    title: "Lorem ipsum dolor",
    time: "12:00 PM - 2:00 PM",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
];

const EventCalendar = () => {
  const [value, setValue] = useState<Value>(new Date());
  const [holidays, setHolidays] = useState<any[]>([]);
  const [filteredHolidays, setFilteredHolidays] = useState<any[]>([]);
  const [activeStartDate, setActiveStartDate] = useState(new Date());
  const onChange = (e: Value) => {
    setValue(e);
  };

  useEffect(() => {
    // Fetch all holidays for the current year
    const hd = new Holidays("US"); 
    const year = new Date().getFullYear();
    const holidayData = hd.getHolidays(year);
    setHolidays(holidayData);
  }, [activeStartDate, value]);

  useEffect(() => {
    if (value && holidays.length > 0) {
      // Get the selected month
      const selectedMonth = new Date(activeStartDate as Date).getMonth() as number;
      // Filter holidays for the selected month
      const filtered = holidays.filter(
        (holiday) => new Date(holiday.date).getMonth() === selectedMonth
      );
      setFilteredHolidays(filtered);
    }
  }, [activeStartDate, value, holidays]);

  const handleActiveStartDateChange = ({
    action,
    activeStartDate,
    value,
    view,
  }: OnArgs) => {
    setActiveStartDate(activeStartDate!);
  };
  return (
    <div className="bg-white p-4 rounded-md">
      <Calendar
        onChange={onChange}
        onActiveStartDateChange={handleActiveStartDateChange}
        value={value}
      />

      <div className="flex flex-col gap-4">
        {/* Display Holidays for the selected month */}
        <h2 className="text-xl font-semibold mt-8">
          Holidays for{" "}
          {new Date(activeStartDate as Date).toLocaleString("default", {
            month: "long",
          })}
        </h2>
        {filteredHolidays.length > 0 ? (
          filteredHolidays.map((holiday) => (
            <div
              className="p-5 rounded-md border-2 border-gray-100 border-t-4 border-t-lamaGreen"
              key={holiday.date}
            >
              <div className="flex items-center justify-between">
                <h1 className="font-semibold text-gray-600">{holiday.name}</h1>
                <span className="text-gray-300 text-xs">
                  {new Date(holiday.date).toDateString()}
                </span>
              </div>
            </div>
          ))
        ) : (
          <p className="text-gray-400 text-sm">No holidays this month.</p>
        )}
        <div className="flex items-center justify-between">
          <h1 className="text-xl font-semibold my-4">Events</h1>
          <Image src="/moreDark.png" alt="" width={20} height={20} />
        </div>
        {/* Display Events */}
        {events.map((event) => (
          <div
            className="p-5 rounded-md border-2 border-gray-100 border-t-4 odd:border-t-lamaSky even:border-t-lamaPurple"
            key={event.id}
          >
            <div className="flex items-center justify-between">
              <h1 className="font-semibold text-gray-600">{event.title}</h1>
              <span className="text-gray-300 text-xs">{event.time}</span>
            </div>
            <p className="mt-2 text-gray-400 text-sm">{event.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default EventCalendar;
