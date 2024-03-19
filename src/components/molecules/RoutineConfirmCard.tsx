import Atom from "@/components/atoms";

import ConfirmButton from "../../../public/assets/svgs/ConfirmButton.svg";
import Alarm from "../../../public/assets/svgs/Alarm.svg";

export default function RoutineConfirmCard() {
  return (
    <Atom.Card variant="default">
      <div className="flex p-5 items-center justify-between">
        <div className="flex flex-col gap-1">
          <div className=" text-md font-bold">매일 일찍 일어나기</div>
          <div className=" flex gap-2 items-center text-xs font-bold text-g500">
            <Alarm />
            <span>오전 6 : 30</span>
          </div>
        </div>
        <div>
          <ConfirmButton />
        </div>
      </div>
    </Atom.Card>
  );
}
