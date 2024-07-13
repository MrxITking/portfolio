

import React from 'react'
import Image from "next/image"


// export default function HeroImage({containerStyle, imgSrc, bgImgSrc}) {
//   return (
//     <div className={`$`} >
//       <Image src={bgImgSrc} width={270} height={270} />
//       <Image src={imgSrc} width={270} height={270}
//         className={`${containerStyle}`} />
//     </div>
//   )
// }


export default function HeroImage({ bgImgSrc, imgSrc }) {
  return (
    <div className="relative -mt-4">
      {/* Background Image */}
      <div className="absolute inset-0 ">
        <Image
          src={bgImgSrc}
          alt="Background Shape"
          layout="fill"
          objectFit="cover"
          className="w-full h-full"
        />
      </div>

      {/* Foreground Image */}
      <div className="relative flex justify-center items-center h-full">
        <Image
          src={imgSrc}
          alt="Developer"
          width={300}
          height={400}
          className="w-[300px] -mt-0"
        />
      </div>
    </div>
  );
};

