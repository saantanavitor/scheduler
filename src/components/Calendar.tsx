"use client";
import { range } from "../utils";
import { Hour } from "./Hour";
import { Event } from "../interfaces";
import { Header } from "./Header";
import { Boxes } from "../interfaces/Boxes";

interface CalendarProps {
  date: Date;
}

const HOURS = range(18, 8);

const BOXES: Boxes[] = [
  {
    id: 1,
    boxLabel: "Box 01",
  },
  {
    id: 2,
    boxLabel: "Box 02",
  },
  {
    id: 3,
    boxLabel: "Box 03",
  },
  {
    id: 4,
    boxLabel: "Box 04",
  },
  {
    id: 5,
    boxLabel: "Box 05",
  },
  {
    id: 6,
    boxLabel: "Box 06",
  },
];

const EVENTS: Event[] = [
  {
    date: new Date("2023-12-24T08:00:00"),
    label: "Evento 1",
    kindOfEvent: "ENTRADA",
    box: 2,
  },
  {
    date: new Date("2023-12-25T15:13:00"),
    label: "Evento 4",
    kindOfEvent: "SAIDA",
    box: 6,
  },
  {
    date: new Date("2023-12-25T08:20:00"),
    label: "Evento 5",
    kindOfEvent: "ENTRADA",
    box: 5,
  },
  {
    date: new Date("2023-12-25T15:20:00"),
    label: "Evento 2",
    kindOfEvent: "SAIDA",
    box: 1,
  },
  {
    date: new Date("2023-12-19T08:15:00"),
    label: "Evento 3",
    kindOfEvent: "ENTRADA",
    box: 2,
  },
  {
    date: new Date("2023-12-17T08:00:00"),
    label: "Evento 3",
    kindOfEvent: "ENTRADA",
    box: 4,
  },
];

export const Calendar = ({ date }: CalendarProps) => {
  return (
    <div className="w-full">
      <table className="border-2 bg-gray-800 w-full">
        <thead>
          <Header boxes={BOXES} />
          {/* <th className="flex justify-center">{HEADER.map(renderHeader)}</th> */}
        </thead>
        <tbody className="border-2">
          {HOURS.map((hour, index) => (
            <tr key={index}>
              <Hour hour={hour} events={EVENTS} boxes={BOXES} />
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
