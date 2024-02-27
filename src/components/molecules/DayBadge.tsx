interface Props {
  date: string;
  day: string;
}

export default function DayBadge({ date, day }: Props) {
  return (
    <div className="flex flex-col items-center justify-center w-120px h-58px bg-white rounded-xl">
      <div className=" text-md font-bold">{date}</div>
      <div className=" text-xs">{day}</div>
    </div>
  );
}
