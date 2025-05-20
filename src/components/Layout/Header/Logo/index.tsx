import { getImagePrefix } from "@/utils/util";
import Image from "next/image";
import Link from "next/link";

const Logo: React.FC = () => {
  return (
    <Link href="/" className="inline-block">
      <div className="w-[170px] h-auto">
        {" "}
        {/* Reduced logo width */}
        <Image
          src={`${getImagePrefix()}images/logo/skill_merge.png`}
          alt="Skill Merge Logo"
          width={160} // Still high-res for clarity
          height={50}
          className="w-full h-auto object-contain"
          priority
        />
      </div>
    </Link>
  );
};

export default Logo;
