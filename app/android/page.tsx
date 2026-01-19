import type { Metadata } from 'next';
import { SectionLayout } from '@/components/SectionLayout';

export const metadata: Metadata = {
  title: 'Android',
  description:
    'Deep dive into Android: AOSP internals, framework architecture, drivers, HAL, and automotive Android systems.',
};

export default function AndroidPage() {
  return (
    <SectionLayout
      title="Android & AOSP"
      description="Explore the Android Open Source Project (AOSP), framework architecture, HAL (Hardware Abstraction Layer), device-specific customization, and automotive Android systems."
    >
      <div className="space-y-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <article className="p-6 bg-slate-900 rounded-lg border border-slate-800 hover:border-blue-400 transition-colors">
            <h3 className="text-lg font-semibold text-slate-200 mb-2">
              AOSP Architecture
            </h3>
            <p className="text-slate-400 text-sm mb-4">
              Understanding the AOSP stack, kernel customization, and vendor
              integrations. Building and customizing AOSP images.
            </p>
            <time className="text-xs text-slate-500">Coming soon</time>
          </article>

          <article className="p-6 bg-slate-900 rounded-lg border border-slate-800 hover:border-blue-400 transition-colors">
            <h3 className="text-lg font-semibold text-slate-200 mb-2">
              Hardware Abstraction Layer (HAL)
            </h3>
            <p className="text-slate-400 text-sm mb-4">
              HAL design, implementing device-specific HAL modules, and
              communicating with kernel drivers from the framework.
            </p>
            <time className="text-xs text-slate-500">Coming soon</time>
          </article>

          <article className="p-6 bg-slate-900 rounded-lg border border-slate-800 hover:border-blue-400 transition-colors">
            <h3 className="text-lg font-semibold text-slate-200 mb-2">
              Android Framework
            </h3>
            <p className="text-slate-400 text-sm mb-4">
              Activity, Service, Content Provider architecture. Binder IPC and
              system services. Framework customization.
            </p>
            <time className="text-xs text-slate-500">Coming soon</time>
          </article>

          <article className="p-6 bg-slate-900 rounded-lg border border-slate-800 hover:border-blue-400 transition-colors">
            <h3 className="text-lg font-semibold text-slate-200 mb-2">
              Device Driver Development
            </h3>
            <p className="text-slate-400 text-sm mb-4">
              Writing Linux drivers for Android devices. SELinux policies,
              device permissions, and uevent handling.
            </p>
            <time className="text-xs text-slate-500">Coming soon</time>
          </article>

          <article className="p-6 bg-slate-900 rounded-lg border border-slate-800 hover:border-blue-400 transition-colors">
            <h3 className="text-lg font-semibold text-slate-200 mb-2">
              Binder & IPC
            </h3>
            <p className="text-slate-400 text-sm mb-4">
              Understanding Binder, Remote Procedure Calls, and inter-process
              communication in Android. Binder debugging.
            </p>
            <time className="text-xs text-slate-500">Coming soon</time>
          </article>

          <article className="p-6 bg-slate-900 rounded-lg border border-slate-800 hover:border-blue-400 transition-colors">
            <h3 className="text-lg font-semibold text-slate-200 mb-2">
              Automotive Android (AAOS)
            </h3>
            <p className="text-slate-400 text-sm mb-4">
              Android Automotive OS, infotainment systems, and automotive
              framework components. System services for vehicles.
            </p>
            <time className="text-xs text-slate-500">Coming soon</time>
          </article>

          <article className="p-6 bg-slate-900 rounded-lg border border-slate-800 hover:border-blue-400 transition-colors">
            <h3 className="text-lg font-semibold text-slate-200 mb-2">
              System Initialization
            </h3>
            <p className="text-slate-400 text-sm mb-4">
              init process, rc scripts, SELinux initialization, and bootloader
              integration. Customizing boot sequence.
            </p>
            <time className="text-xs text-slate-500">Coming soon</time>
          </article>

          <article className="p-6 bg-slate-900 rounded-lg border border-slate-800 hover:border-blue-400 transition-colors">
            <h3 className="text-lg font-semibold text-slate-200 mb-2">
              Debugging & Tools
            </h3>
            <p className="text-slate-400 text-sm mb-4">
              adb, logcat, systrace, and kernel debugging. Performance
              profiling and system troubleshooting.
            </p>
            <time className="text-xs text-slate-500">Coming soon</time>
          </article>
        </div>

        <div className="mt-12 p-8 bg-slate-900 rounded-lg border border-slate-800">
          <h2 className="text-2xl font-semibold text-slate-100 mb-4">
            Android Versions & Releases
          </h2>
          <p className="text-slate-400 mb-4">
            AOSP is continuously evolving. Stay updated with the latest releases and
            their architecture improvements.
          </p>
          <ul className="space-y-2 text-slate-400">
            <li>• Android 15 (API 35)</li>
            <li>• Android 14 (API 34) - Project Mainline enhancements</li>
            <li>• Android 13 (API 33) - Enhanced privacy controls</li>
            <li>• Android 12 (API 31) - Material You design</li>
          </ul>
        </div>
      </div>
    </SectionLayout>
  );
}
