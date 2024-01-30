import DashboardCard from "@/components/DashboardCard";
import Skeleton from "@/components/Skeleton";
import twitterIcon from "@/assets/twitterIcon.png";
import instagramIcon from "@/assets/instagramIcon.webp";

import { Suspense } from "react";

const socials = [
  {
    icon: twitterIcon,
    name: "twitter",
  },
  {
    icon: instagramIcon,
    name: "instagram",
  },
];

function App() {
  return (
    <div className="w-full h-screen max-xl mx-auto bg-slate-50  py-8">
      <h1 className="text-3xl text-center font-bold mb-8">Dashboard</h1>
      <div className="flex flex-col items-center gap-4">
        {socials.map((s, i) => (
          <Suspense fallback={<Skeleton />}>
            <DashboardCard key={i} icon={s.icon} name={s.name} />
          </Suspense>
        ))}
      </div>
    </div>
  );
}

export default App;
