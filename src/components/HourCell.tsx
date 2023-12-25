interface HourCellProps {
  label: string;
}

export const HourCell = ({ label }: HourCellProps) => {
  return <td className="bg-gray-500 border-r-2 w-16">{label}</td>;
};
