import type { Metadata } from "next";

import ScheduleList from "@/components/schedule/ScheduleList";
import ScheduleCTA from "@/components/schedule/ScheduleCTA";

export const metadata: Metadata = {
  title: "My Schedule",
};

export default function SchedulePage() {
  return (
    <main className="bg-white min-h-screen">
      <section className="mx-auto max-w-[1320px] px-5 sm:px-8 lg:px-10 pt-28 pb-32">
        <div className="max-w-[780px] mx-auto">
          <h1 className="text-[32px] font-extrabold text-[var(--primary)]">
            My Schedule
          </h1>

          <p className="mt-2 text-[#5e7a6c] text-[15px]">
            Manage your service appointments
          </p>

          <ScheduleList />

          <ScheduleCTA />
        </div>
      </section>
    </main>
  );
}
