import * as React from 'react';
import Image from 'next/image';
import defaultImage from './assets/images/default.jpg';

export default async function IndexRoute() {
  return (
    <Image
      className="m-4 size-32 rounded-full lg:size-48"
      src={defaultImage}
      alt="Avatar"
      width={192}
      height={192}
    />
  );
}
