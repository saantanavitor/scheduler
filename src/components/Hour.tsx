import { Event } from "../interfaces";
import { Boxes } from "../interfaces/Boxes";
import { DayCell } from "./DayCell";
import { HourCell } from "./HourCell";

interface HourProps {
  hour: number;
  events: Event[];
  boxes: Boxes[];
}

export const Hour = ({ hour, events, boxes }: HourProps) => {
  const hourStr = `${`${hour}`.padStart(2, "0")}:00`;
  return (
    <td className="bg-slate-800 flex flex-row border-b-2">
      <HourCell label={hourStr} />
      {boxes.map((box) => {
        return (
          <DayCell
            hour={hour}
            box={box}
            // onClick={() => console.log(box.toISOString())}
            events={events}
          />
        );
      })}
    </td>
  );
};
