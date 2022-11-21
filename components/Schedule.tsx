import Day from "./Day.tsx";

const week = [
  "Monday",
  "Tuesday",
  "Wedensday",
  "Thursday",
  "Friday",
  "Saturday",
];

export default function Schedule(props) {
  return (
    <div class="flex bg-green-300 rounded-2xl w-4/6 h-4/6 mx-auto my-auto px-5">
      {week.map((weekday) => <Day day={weekday} />)}
    </div>
  );
}
