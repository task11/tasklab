import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";

import ConfirmIcon from "../../../public/assets/svgs/ConfirmIcon.svg";

export default function RoutineCalendar() {
  const handleClickDay = (day: Date) => {
    console.log(day);
  };

  return (
    <section className="flex flex-col w-full h-full [&>.react-calendar]:w-full [&>.react-calendar]:border-none [&_.react-calendar\_\_tile]:h-16 [&_.react-calendar\_\_tile]:flex-col [&_.react-calendar\_\_tile]:items-center [&_.react-calendar\_\_tile]:rounded-lg">
      <Calendar
        className="[&>.react-calendar\_\_navigation]:text-primary_100"
        locale="ko"
        calendarType="gregory"
        formatDay={(_, date) => date.getDate().toString()}
        onClickDay={handleClickDay}
        tileContent={({ date, view }) => {
          if (view !== "month") {
            return;
          }

          return (
            <div className="flex flex-col items-center justify-end gap-1">
              <ConfirmIcon />
            </div>
          );
        }}
      />
    </section>
  );
}
