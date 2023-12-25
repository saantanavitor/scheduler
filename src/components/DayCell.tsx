import { Event } from "../interfaces";
import { Boxes } from "../interfaces/Boxes";
import { EventCell } from "./EventCell";

interface BodyCellProps {
  onClick?: () => void;
  box: Boxes;
  hour: number;
  events: Event[];
}

export const DayCell = ({ onClick, box, hour, events = [] }: BodyCellProps) => {
  return (
    <td onClick={onClick} className="bg-gray-500 border-r-2 flex flex-1">
      <EventCell hour={hour} box={box} events={events} />
    </td>
  );
};
