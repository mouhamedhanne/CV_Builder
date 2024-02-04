"use client";
import Homepage from "@/app/Home/page";
import { supabase } from "./lib/supabase";

export default function Home() {
  const setNewView = async () => {
    const { data, error } = await supabase.from("view").insert({
      name: "random name",
    });

    if (data) console.log(data);
    if (error) console.log(error);
  };

  setNewView();

  return (
    <main>
      <Homepage />
      <div className="mt-[7rem]">hello</div>
    </main>
  );
}
