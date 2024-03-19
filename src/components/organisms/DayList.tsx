import Molecule from "../molecules";

import ArrowLeft from "../../../public/assets/svgs/ArrowLeft.svg";
import ArrowRight from "../../../public/assets/svgs/ArrowRight.svg";

import { useState } from "react";
import { convertDateFormat, getDayOfWeek } from "@/utils/helpers/date";

export default function DayList() {
  const [activeDate, setActiveDate] = useState({
    date: convertDateFormat(new Date()),
    day: getDayOfWeek(new Date()),
  });

  return (
    <div className="flex items-center justify-center gap-14">
      <ArrowLeft className=" cursor-pointer" onClick={() => {}} />
      <Molecule.DayBadge date={activeDate.date} day={activeDate.day} />
      <ArrowRight className=" cursor-pointer" onClick={() => {}} />
    </div>
  );
}
