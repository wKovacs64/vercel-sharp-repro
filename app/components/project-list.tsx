import * as React from 'react';
import { useRemarkSync as remarkSync } from 'react-remark';
import type { Project } from '../lib/projects';
import ProjectListItem from './project-list-item';
import Link from './link';

export default function ProjectList({ projects }: { projects: Project[] }) {
  return (
    <section className="max-w-[60rem]">
      {projects.map(
        ({ frontmatter, markdownBody, imageBlurDataUrl, imageWidth, imageHeight }, index) => {
          const description = remarkSync(markdownBody, {
            rehypeReactOptions: {
              components: {
                a: MarkdownLink,
              },
            },
          });
          return (
            <React.Fragment key={frontmatter.title}>
              <ProjectListItem
                title={frontmatter.title}
                titleUrl={frontmatter.titleUrl}
                sourceUrl={frontmatter.sourceUrl}
                imageBlurDataUrl={imageBlurDataUrl}
                imageUrl={frontmatter.imageUrl}
                imageAlt={frontmatter.imageAlt}
                imageWidth={imageWidth}
                imageHeight={imageHeight}
                imageNeedsFrame={frontmatter.imageNeedsFrame}
                description={description}
                tech={frontmatter.tech}
                reverse={Boolean(index % 2)}
              />
              {index < projects.length - 1 && <ProjectDivider />}
            </React.Fragment>
          );
        },
      )}
    </section>
  );
}

function MarkdownLink(props: React.ComponentPropsWithoutRef<typeof Link>) {
  return (
    <Link className="pb-[2px]" target="_blank" rel="nofollow noopener noreferrer" {...props} />
  );
}

function ProjectDivider() {
  return <VerticalLine className="mx-auto block h-16 text-[indigo] lg:h-32" />;
}

function VerticalLine(props: React.ComponentPropsWithoutRef<'svg'>) {
  return (
    <svg width="1" height="1" viewBox="0 0 1 100" preserveAspectRatio="none" {...props}>
      <path d="M0, 0, 0, 100" stroke="currentColor" strokeWidth="1" strokeDasharray="4" />
    </svg>
  );
}
