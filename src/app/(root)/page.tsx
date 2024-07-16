import { redirect } from "next/navigation";

export default function Home() {
  redirect("/sign-in");
  // return (
  //   <main>
  //     <h1>Home page</h1>
  //   </main>
  // );
}
