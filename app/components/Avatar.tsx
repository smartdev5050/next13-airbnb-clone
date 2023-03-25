'use client';

import Image from "next/image";

import ClientOnly from "./ClientOnly";

interface AvatarProps {
  src: string | null | undefined;
}

const Avatar: React.FC<AvatarProps> = ({ src }) => {
  return ( 
    <ClientOnly>
      <Image 
        className="rounded-full" 
        height="30" 
        width="30" 
        alt="Avatar" 
        src={src || '/images/placeholder.jpg'}
      />
    </ClientOnly>
   );
}
 
export default Avatar;