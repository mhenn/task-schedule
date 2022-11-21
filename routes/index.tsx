import { Head } from "$fresh/runtime.ts";
import Counter from "../islands/Counter.tsx";
import Schedule from "../components/Schedule.tsx";
export default function Home() {
  return (
    <div class="h-screen">
      <Head>
        <title>Fresh App</title>
      </Head>
      <main class="flex w-screen h-5/6">
        <Schedule />
      </main>
      <footer class="bg-green-300 w-screen h-1/6">
        <div class="p-4 w-full  ">
          <img
            src="/logo.svg"
            class="w-32 h-32 ml-auto"
            alt="the fresh logo: a sliced lemon dripping with juice"
          />
        </div>
      </footer>
    </div>
  );
}
