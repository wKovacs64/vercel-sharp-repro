import Image from 'next/image';
import { breakpoints } from '../utils/breakpoints';
import { cn } from '../utils/cn';
import Link from './link';

export default function Project({
  title,
  titleUrl,
  sourceUrl,
  imageBlurDataUrl,
  imageUrl,
  imageAlt,
  imageWidth,
  imageHeight,
  imageNeedsFrame,
  description,
  tech,
  reverse = false,
}: {
  title: string;
  titleUrl: string;
  sourceUrl: string;
  imageBlurDataUrl: string;
  imageUrl: string;
  imageAlt: string;
  imageWidth: number;
  imageHeight: number;
  imageNeedsFrame: boolean;
  description: JSX.Element;
  tech?: string[];
  reverse?: boolean;
}) {
  return (
    <article className="grid grid-flow-dense grid-cols-2 items-center rounded-md border-t-4 border-t-[indigo] bg-zinc-100 shadow-[0_8px_16px_0_rgba(0,0,0,0.2)] sm:gap-8 sm:p-8">
      <Image
        src={imageUrl}
        alt={imageAlt}
        width={imageWidth}
        height={imageHeight}
        blurDataURL={imageBlurDataUrl}
        placeholder="blur"
        sizes={`(min-width: ${breakpoints.sm}) 40vw, 90vw`}
        // https://github.com/vercel/next.js/issues/18911#issuecomment-723362202
        className={cn(
          'col-span-2 h-auto max-w-full text-[0] tracking-normal [word-spacing:0] sm:col-span-1 sm:rounded-md',
          { 'sm:col-start-2': reverse },
          { 'sm:shadow-[0_4px_8px_0_rgba(75,0,131,0.2)]': imageNeedsFrame },
        )}
      />
      <section className="col-span-2 space-y-6 px-4 py-6 sm:col-span-1 sm:p-0">
        <h3 className="text-xl font-normal leading-snug lg:text-3xl lg:leading-snug">
          {titleUrl ? (
            <Link href={titleUrl} target="_blank" rel="nofollow noopener noreferrer">
              {title}
            </Link>
          ) : (
            title
          )}
        </h3>
        {/* Keep this a `div`, as description can contain `p` elements which cannot be nested */}
        <div className="leading-snug">{description}</div>
        {tech && (
          <p className="flex flex-wrap gap-2">
            {tech.map((technology) => (
              <span
                key={technology}
                className="rounded-md bg-[indigo] p-2 text-sm font-normal text-white"
              >
                {technology}
              </span>
            ))}
          </p>
        )}
        {sourceUrl && (
          <code className="block font-mono text-[0.8em] leading-snug">
            [
            <Link href={sourceUrl} aria-label={`View the ${title} source code`}>
              source
            </Link>
            ]
          </code>
        )}
      </section>
    </article>
  );
}
