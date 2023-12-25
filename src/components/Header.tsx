import { Boxes } from "../interfaces/Boxes";

interface HeaderProps {
  boxes: Boxes[];
}

export const Header = ({ boxes }: HeaderProps) => {
  const renderHeader = ({ id, boxLabel }: Boxes) => {
    // const borderRight = id !== boxes.length - 0 ? "border-r-2" : ""
    const width = !id ? "w-16" : "flex flex-1";

    // const date = `${`${dates[index - 1]?.getDate()}`.padStart(2, "0")}`
    // const month = `${`${dates[index - 1]?.getMonth() + 1}`.padStart(2, "0")}`

    // const dayStr = `${date}/${month}`

    return (
      <th
        key={id}
        className={`${width} h-10 justify-center items-center border-r-2`}
      >
        {boxLabel}
      </th>
    );
  };

  return (
    <tr className="flex justify-center">
      <th className="h-10 justify-center items-center w-16 border-r-2"></th>
      {boxes.map(renderHeader)}
    </tr>
  );
};
