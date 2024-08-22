import * as React from 'react';
import Image from 'next/image';
import defaultImage from '../public/static/images/default.jpg';
import { breakpoints } from './utils/breakpoints';

export default async function IndexRoute() {
  return (
    <div className="flex min-h-screen flex-col items-center bg-gray-300 p-4">
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
