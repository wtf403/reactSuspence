import DashboardCard from "@/components/DashboardCard";
import Skeleton from "@/components/Skeleton";
import { motion } from "framer-motion";

import twitterIcon from "@/assets/twitterIcon.png";
import instagramIcon from "@/assets/instagramIcon.webp";
import telegramIcon from "@/assets/telegramIcon.webp";
import vkIcon from "@/assets/vkIcon.png";

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
  {
    icon: telegramIcon,
    name: "telegram",
  },
  {
    icon: vkIcon,
    name: "vk",
  },
];

function App() {
  return (
    <div className="w-full h-screen max-xl mx-auto bg-slate-50  py-8">
      <h1 className="text-3xl text-center font-bold mb-8">Dashboard</h1>
      <div className="flex flex-col items-center gap-4">
        {socials.map((s, i) => (
          <Suspense key={i} fallback={<Skeleton />}>
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0, rotate: 0 }}
            >
              <DashboardCard icon={s.icon} name={s.name} />
            </motion.div>
          </Suspense>
        ))}
      </div>
    </div>
  );
}

export default App;
