import Image from "next/image";
import { cn } from "@/lib/utils";

const AppStoreBadges = ({ dark = false }: { dark?: boolean }) => {
  const base = dark
    ? "bg-white/5 border border-white/15 text-white hover:bg-white/10"
    : "bg-[#1c160c] border border-transparent text-white hover:bg-[#2e261a]";

  const sub = dark ? "text-white/40" : "text-white/60";

  return (
    <div className="grid grid-cols-2 gap-3 w-full">
      <a href="#" className={cn("flex items-center gap-2.5 px-4 py-2.5 rounded-xl transition-all duration-200 cursor-pointer w-full", base)}>
        <Image src="/apple.png" alt="Apple" width={20} height={20} className="shrink-0" />
        <div className="leading-tight">
          <p className={cn("text-[10px]", sub)}>Download on the</p>
          <p className="text-sm font-semibold">App Store</p>
        </div>
      </a>

      <a href="#" className={cn("flex items-center gap-2.5 px-4 py-2.5 rounded-xl transition-all duration-200 cursor-pointer w-full", base)}>
        <Image src="/playstore.png" alt="Google Play" width={20} height={20} className="shrink-0" />
        <div className="leading-tight">
          <p className={cn("text-[10px]", sub)}>Get it on</p>
          <p className="text-sm font-semibold">Google Play</p>
        </div>
      </a>
    </div>
  );
};

export default AppStoreBadges;
