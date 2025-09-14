import Image from "next/image";
import Link from "next/link";

const Logo: React.FC = () => {
  return (
    <Link href="/" className="inline-block">
      {/* Increased width from 170px → 220px */}
      <div className="w-[230px] h-auto">
        <Image
          src="/images/logo/logo skilll-01 (1).png"
          alt="Skill Merge Logo"
          width={230} // updated
          height={80} // updated proportionally
          className="w-full h-auto object-contain"
          priority
        />
      </div>
    </Link>
  );
};

export default Logo;
