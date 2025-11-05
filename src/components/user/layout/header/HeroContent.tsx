import { Yesteryear } from 'next/font/google';

const yesteryear = Yesteryear({
  subsets: ['latin'],
  weight: '400',
});

interface HeroContentProps {
  subInfo: string;
  mainInfo: string;
}

export default function HeroContent({ subInfo, mainInfo }: HeroContentProps) {
  return (
    <div className="relative z-10 text-center my-auto">
      <p className="uppercase text-sm tracking-widest">{subInfo}</p>
      <h1 className={`text-6xl ${yesteryear.className} text-[157.43px] leading-[223.68px] font-extrabold`}>{mainInfo}</h1>
    </div>
  );
}
