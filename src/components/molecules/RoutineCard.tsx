import Atom from "../atoms";

import Check from "../../../public/assets/svgs/Check.svg";
import Alarm from "../../../public/assets/svgs/Alarm.svg";
import Count from "../../../public/assets/svgs/Count.svg";

interface Props {
  title: string;
  subTitle: string;
  category: "TIME_ROUTINE" | "COUNT_ROUTINE";
  isEnded: boolean;
}

const CATEGORY_ICONS = {
  TIME_ROUTINE: <Alarm />,
  COUNT_ROUTINE: <Count />,
};

export default function RoutineCard({
  title,
  subTitle,
  category,
  isEnded,
}: Props) {
  return (
    <Atom.Card variant={`${isEnded ? "disabled" : "default"}`}>
      <div className="flex justify-between items-center  px-4">
        <span
          className={`${
            isEnded ? "text-primary_100" : "text-black"
          } text-md font-bold`}
        >
          {title}
        </span>
        <div>
          <Check
            className={`${
              isEnded
                ? "[&>g>path:first-child]:fill-primary_100"
                : "[&>g>path:first-child]:fill-black"
            }`}
          />
        </div>
      </div>
      <Atom.HorizontalLine
        size="lg"
        variant={`${isEnded ? "disabled" : "default"}`}
      />
      <div className="flex justify-between items-center  px-4">
        <div className="flex gap-2 items-center">
          {CATEGORY_ICONS[category]}
          <span className=" text-sm text-g500 font-bold ">{subTitle}</span>
        </div>
        <div>
          <Atom.Button size="sm" variant={`${isEnded ? "accent" : "default"}`}>
            완료
          </Atom.Button>
        </div>
      </div>
    </Atom.Card>
  );
}
