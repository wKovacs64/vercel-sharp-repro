import * as React from 'react';
import { getAllProjects } from './lib/projects';
import ProjectList from './components/project-list';

export default async function IndexRoute() {
  const projects = await getAllProjects();

  return (
    <div className="flex min-h-screen flex-col items-center bg-gray-300 p-4">
      <ProjectList projects={projects} />
    </div>
  );
}
