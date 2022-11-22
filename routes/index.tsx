import { Head } from "$fresh/runtime.ts";
import Counter from "../islands/Counter.tsx";
import Schedule from "../components/Schedule.tsx";
export default function Home() {
  return (
    <div class="flex flex-col h-screen">
      <Head>
        <title>Fresh App</title>
      </Head>
      <main class="flex w-screen h-full ">
        <Schedule />
      </main>
      <footer class="bg-green-300 w-screen h-24 mt-auto">
        <div class="p-4 w-full h-full">
          <img
            src="/logo.svg"
            class="ml-auto my-auto w-20 h-20 "
            alt="the fresh logo: a sliced lemon dripping with juice"
          />
        </div>
      </footer>
    </div>
  );
}
