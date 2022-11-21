import { DayProps } from "../utils/interfaces.ts";

export default function Day(props: DayProps) {
  return (
    <article class="bg-white h-5/6 w-2/12 rounded-2xl my-auto mx-1">
      <div class="flex justify-center">{props.day}</div>
    </article>
  );
}
