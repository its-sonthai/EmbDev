'use client';

import Link from 'next/link';

interface SocialLink {
  label: string;
  href: string;
  icon: string;
}

export function Footer() {
  const socialLinks: SocialLink[] = [
    {
      label: 'LinkedIn',
      href: 'https://www.linkedin.com/in/yourprofile',
      icon: '🔗',
    },
    {
      label: 'GitHub',
      href: 'https://github.com/yourprofile',
      icon: '🐙',
    },
    {
      label: 'Facebook',
      href: 'https://www.facebook.com/yourprofile',
      icon: '👤',
    },
  ];

  return (
    <footer className="bg-slate-900 border-t border-slate-800 mt-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* About Section */}
          <div>
            <h3 className="text-lg font-semibold text-slate-100 mb-4">EmbDev</h3>
            <p className="text-slate-400 text-sm leading-relaxed">
              A knowledge base for embedded systems engineers. Exploring Linux,
              RTOS, Android, and AUTOSAR.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold text-slate-100 mb-4">Topics</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/linux"
                  className="text-slate-400 hover:text-blue-400 transition-colors text-sm"
                >
                  Embedded Linux
                </Link>
              </li>
              <li>
                <Link
                  href="/rtos"
                  className="text-slate-400 hover:text-blue-400 transition-colors text-sm"
                >
                  RTOS
                </Link>
              </li>
              <li>
                <Link
                  href="/android"
                  className="text-slate-400 hover:text-blue-400 transition-colors text-sm"
                >
                  Android
                </Link>
              </li>
              <li>
                <Link
                  href="/autosar"
                  className="text-slate-400 hover:text-blue-400 transition-colors text-sm"
                >
                  AUTOSAR
                </Link>
              </li>
            </ul>
          </div>

          {/* Social Links */}
          <div>
            <h3 className="text-lg font-semibold text-slate-100 mb-4">Connect</h3>
            <div className="flex gap-4">
              {socialLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-lg bg-slate-800 hover:bg-slate-700 flex items-center justify-center transition-colors"
                  aria-label={link.label}
                  title={link.label}
                >
                  <span className="text-lg">{link.icon}</span>
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-slate-800 pt-8">
          {/* Bottom text */}
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-slate-500 text-sm">
              © {new Date().getFullYear()} EmbDev. All rights reserved.
            </p>
            <p className="text-slate-500 text-sm">
              Built with Next.js & Tailwind CSS
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
