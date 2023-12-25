import { Event } from "../interfaces";
import { Boxes } from "../interfaces/Boxes";

interface SubCellProps {
  box: Boxes;
  events: Event[];
  hour: number;
}

export default function boxHours(item: Event, boxId: number, hour: number) {
  return item.box === boxId && item.date.getHours() === hour;
}

export const EventCell = ({ box, events, hour }: SubCellProps) => {
  const boxEvents = events.filter((item) => boxHours(item, box.id, hour));
  const sortHours = boxEvents.sort((a, b) => {
    const timeA = new Date(a.date).toLocaleTimeString();
    const timeB = new Date(b.date).toLocaleTimeString();

    return timeA.localeCompare(timeB);
  });

  const renderHours = (event: Event, index: number) => {
    const borderTop = index ? "border-t-2" : "";
    const backgroundColor =
      event.kindOfEvent === "ENTRADA" ? "bg-red-500" : "bg-green-500";

    return (
      <div className={`${backgroundColor} ${borderTop}`}>
        {event.label} {event.date.toString()}
      </div>
    );
  };

  return (
    <div className="flex flex-col w-full">{sortHours.map(renderHours)}</div>
  );
};
