import Image from 'next/image';

export default function LogoSquare() {
  return <Image alt="Logo" width={100} height={100} src="/logo.png" className="h-10 w-auto" />;
}