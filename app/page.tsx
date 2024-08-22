import * as React from 'react';
import Image from 'next/image';
import defaultImage from '../public/static/images/default.jpg';
import { breakpoints } from './utils/breakpoints';

export default async function IndexRoute() {
  return (
    <div className="relative m-4 size-32 max-w-full lg:size-48">
      <Image
        className="rounded-full"
        src={defaultImage}
        alt="Avatar"
        sizes={`(min-width: ${breakpoints.lg}) 192px, 128px`}
        fill
        priority
      />
    </div>
  );
}
