import React from 'react';

interface SectionLayoutProps {
  title: string;
  description: string;
  children?: React.ReactNode;
}

/**
 * Shared layout component for section pages
 * Provides consistent styling and structure for Linux, RTOS, Android, and AUTOSAR pages
 */
export function SectionLayout({ title, description, children }: SectionLayoutProps) {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-slate-900 to-slate-950 py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-5xl font-bold text-slate-50 mb-6">{title}</h1>
          <p className="text-xl text-slate-300 max-w-2xl leading-relaxed">{description}</p>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          {children ? (
            children
          ) : (
            <div className="space-y-8">
              <div>
                <h2 className="text-2xl font-semibold text-slate-100 mb-4">
                  Coming Soon
                </h2>
                <p className="text-slate-400">
                  Blog posts and detailed articles about {title.toLowerCase()} are coming soon.
                  Check back later for in-depth technical content.
                </p>
              </div>

              {/* Placeholder for future blog posts */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <article className="p-6 bg-slate-900 rounded-lg border border-slate-800 hover:border-blue-400 transition-colors">
                  <h3 className="text-lg font-semibold text-slate-200 mb-2">
                    Article Title 1
                  </h3>
                  <p className="text-slate-400 text-sm mb-4">
                    Placeholder for future blog post. Detailed technical content will be added here.
                  </p>
                  <time className="text-xs text-slate-500">Coming soon</time>
                </article>

                <article className="p-6 bg-slate-900 rounded-lg border border-slate-800 hover:border-blue-400 transition-colors">
                  <h3 className="text-lg font-semibold text-slate-200 mb-2">
                    Article Title 2
                  </h3>
                  <p className="text-slate-400 text-sm mb-4">
                    Placeholder for future blog post. Detailed technical content will be added here.
                  </p>
                  <time className="text-xs text-slate-500">Coming soon</time>
                </article>
              </div>
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
