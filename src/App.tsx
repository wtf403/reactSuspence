import { Suspense } from "react";
import ErrorBoundary from "@/ErrorBoundary";
import Dashboard from "@/components/Dashboard";
import Skeleton from "@/components/Skeleton";
import Error from "@/components/Error";
import { motion } from "framer-motion";

import twitterIcon from "@/assets/twitterIcon.png";
import instagramIcon from "@/assets/instagramIcon.webp";
import telegramIcon from "@/assets/telegramIcon.webp";
import vkIcon from "@/assets/vkIcon.png";

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
          <ErrorBoundary
            key={i}
            fallback={<Error message={`Error loading ${s.name} statics`} />}
          >
            {/* TODO: stop loading when an error occurs */}
            <Suspense fallback={<Skeleton />}>
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0, rotate: 0 }}
              >
                <Dashboard icon={s.icon} name={s.name} />
              </motion.div>
            </Suspense>
          </ErrorBoundary>
        ))}
      </div>
    </div>
  );
}

export default App;
