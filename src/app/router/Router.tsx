/**
 * Application Router
 */

import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { lazy, Suspense } from 'react';
import { ROUTES } from './routes';

// Lazy load pages
const LandingPage = lazy(() => import('@/pages/Landing'));
const DashboardPage = lazy(() => import('@/pages/Dashboard'));
const TemplatesPage = lazy(() => import('@/pages/Templates'));
const EditorPage = lazy(() => import('@/pages/Editor'));

// Loading fallback
const PageLoader = () => (
  <div className="min-h-screen bg-[var(--paper)] flex items-center justify-center">
    <div className="text-[var(--ink-faint)] font-['JetBrains_Mono'] text-[0.8rem]">
      Loading...
    </div>
  </div>
);

const router = createBrowserRouter([
  {
    path: ROUTES.HOME,
    element: (
      <Suspense fallback={<PageLoader />}>
        <LandingPage />
      </Suspense>
    ),
  },
  {
    path: ROUTES.DASHBOARD,
    element: (
      <Suspense fallback={<PageLoader />}>
        <DashboardPage />
      </Suspense>
    ),
  },
  {
    path: ROUTES.TEMPLATES,
    element: (
      <Suspense fallback={<PageLoader />}>
        <TemplatesPage />
      </Suspense>
    ),
  },
  {
    path: ROUTES.EDITOR,
    element: (
      <Suspense fallback={<PageLoader />}>
        <EditorPage />
      </Suspense>
    ),
  },
]);

export const Router = () => <RouterProvider router={router} />;
