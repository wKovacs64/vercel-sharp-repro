import * as React from 'react';
import Image from 'next/image';
import defaultImage from '../public/static/images/default.jpg';

export default async function IndexRoute() {
  return (
    <Image
      className="m-4 size-32 rounded-full lg:size-48"
      src={defaultImage}
      alt="Avatar"
      width={192}
      height={192}
      sizes={`(min-width: 1024px) 192px, 128px`}
    />
  );
}
