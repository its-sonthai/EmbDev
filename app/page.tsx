import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Home',
  description:
    'EmbDev - Your gateway to embedded systems knowledge. Explore Linux, RTOS, Android, and AUTOSAR.',
};

export default function Home() {
  const sections = [
    {
      title: 'Embedded Linux',
      href: '/linux',
      description:
        'Deep dive into kernel internals, device drivers, bootloaders, and real-time Linux.',
      icon: '🐧',
    },
    {
      title: 'RTOS',
      href: '/rtos',
      description:
        'Real-time operating systems, scheduling, synchronization, and embedded OS design.',
      icon: '⏱️',
    },
    {
      title: 'Android',
      href: '/android',
      description:
        'AOSP internals, Android framework, drivers, and automotive Android systems.',
      icon: '🤖',
    },
    {
      title: 'AUTOSAR',
      href: '/autosar',
      description:
        'Automotive software architecture, modules, and embedded automotive systems.',
      icon: '🚗',
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-slate-900 via-slate-900 to-slate-950 py-32">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="mb-8">
              <span className="text-7xl">🛠️</span>
            </div>
            <h1 className="text-6xl font-bold text-slate-50 mb-6 tracking-tight">
              EmbDev
            </h1>
            <p className="text-2xl text-slate-300 mb-8 max-w-3xl mx-auto leading-relaxed">
              A comprehensive knowledge base for embedded systems engineers.
              Explore cutting-edge topics in Embedded Linux, RTOS, Android, and
              AUTOSAR.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/linux"
                className="px-8 py-3 bg-blue-600 hover:bg-blue-500 text-white font-semibold rounded-lg transition-colors"
              >
                Start Learning
              </Link>
              <a
                href="#topics"
                className="px-8 py-3 bg-slate-800 hover:bg-slate-700 text-slate-100 font-semibold rounded-lg transition-colors"
              >
                Explore Topics
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Key Features Section */}
      <section className="py-20 border-b border-slate-800">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-slate-50 mb-12 text-center">
            Why EmbDev?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-6 bg-slate-900 rounded-lg border border-slate-800">
              <div className="text-3xl mb-3">📚</div>
              <h3 className="text-xl font-semibold text-slate-100 mb-2">
                Deep Technical Content
              </h3>
              <p className="text-slate-400">
                In-depth articles on kernel internals, hardware interfaces, and
                system architecture.
              </p>
            </div>

            <div className="p-6 bg-slate-900 rounded-lg border border-slate-800">
              <div className="text-3xl mb-3">🎯</div>
              <h3 className="text-xl font-semibold text-slate-100 mb-2">
                Practical Examples
              </h3>
              <p className="text-slate-400">
                Real-world code samples and practical debugging techniques for
                production systems.
              </p>
            </div>

            <div className="p-6 bg-slate-900 rounded-lg border border-slate-800">
              <div className="text-3xl mb-3">🔧</div>
              <h3 className="text-xl font-semibold text-slate-100 mb-2">
                Best Practices
              </h3>
              <p className="text-slate-400">
                Industry best practices, performance optimization, and system
                design patterns.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Topics Section */}
      <section id="topics" className="py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-slate-50 mb-12 text-center">
            Explore Topics
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {sections.map((section) => (
              <Link
                key={section.href}
                href={section.href}
                className="p-8 bg-slate-900 rounded-lg border border-slate-800 hover:border-blue-400 hover:bg-slate-800 transition-all group"
              >
                <div className="text-5xl mb-4">{section.icon}</div>
                <h3 className="text-2xl font-bold text-slate-100 group-hover:text-blue-400 transition-colors mb-3">
                  {section.title}
                </h3>
                <p className="text-slate-400 leading-relaxed">
                  {section.description}
                </p>
                <div className="mt-6 inline-flex items-center text-blue-400 group-hover:translate-x-1 transition-transform">
                  <span className="font-semibold">Explore</span>
                  <span className="ml-2">→</span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 border-t border-slate-800 bg-slate-900">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-slate-50 mb-4">
            Stay Updated
          </h2>
          <p className="text-slate-400 mb-8 max-w-2xl mx-auto">
            New articles and tutorials are added regularly. Bookmark this site
            and check back for the latest embedded systems insights.
          </p>
          <div className="inline-flex gap-4">
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-2 bg-blue-600 hover:bg-blue-500 text-white font-semibold rounded-lg transition-colors"
            >
              Follow on GitHub
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
