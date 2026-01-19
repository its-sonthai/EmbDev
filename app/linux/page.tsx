import type { Metadata } from 'next';
import { SectionLayout } from '@/components/SectionLayout';

export const metadata: Metadata = {
  title: 'Embedded Linux',
  description:
    'Dive into Embedded Linux: kernel internals, device drivers, bootloaders, real-time Linux, and system optimization.',
};

export default function LinuxPage() {
  return (
    <SectionLayout
      title="Embedded Linux"
      description="Master the Linux kernel, device driver development, bootloader design, real-time Linux (PREEMPT-RT), and system-level optimization for embedded systems."
    >
      <div className="space-y-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <article className="p-6 bg-slate-900 rounded-lg border border-slate-800 hover:border-blue-400 transition-colors">
            <h3 className="text-lg font-semibold text-slate-200 mb-2">
              Kernel Module Development
            </h3>
            <p className="text-slate-400 text-sm mb-4">
              Learn how to write, compile, and load kernel modules. Understanding
              the kernel module interface and best practices.
            </p>
            <time className="text-xs text-slate-500">Coming soon</time>
          </article>

          <article className="p-6 bg-slate-900 rounded-lg border border-slate-800 hover:border-blue-400 transition-colors">
            <h3 className="text-lg font-semibold text-slate-200 mb-2">
              Device Driver Architecture
            </h3>
            <p className="text-slate-400 text-sm mb-4">
              Deep dive into character, block, and network device drivers.
              Understanding the driver model and hardware interaction.
            </p>
            <time className="text-xs text-slate-500">Coming soon</time>
          </article>

          <article className="p-6 bg-slate-900 rounded-lg border border-slate-800 hover:border-blue-400 transition-colors">
            <h3 className="text-lg font-semibold text-slate-200 mb-2">
              Bootloaders & Boot Process
            </h3>
            <p className="text-slate-400 text-sm mb-4">
              Understanding U-Boot, bootloader customization, and the complete
              boot sequence from hardware reset to kernel execution.
            </p>
            <time className="text-xs text-slate-500">Coming soon</time>
          </article>

          <article className="p-6 bg-slate-900 rounded-lg border border-slate-800 hover:border-blue-400 transition-colors">
            <h3 className="text-lg font-semibold text-slate-200 mb-2">
              Real-Time Linux (PREEMPT-RT)
            </h3>
            <p className="text-slate-400 text-sm mb-4">
              Achieving real-time guarantees with mainline kernel. Latency
              analysis, scheduling, and deterministic behavior.
            </p>
            <time className="text-xs text-slate-500">Coming soon</time>
          </article>

          <article className="p-6 bg-slate-900 rounded-lg border border-slate-800 hover:border-blue-400 transition-colors">
            <h3 className="text-lg font-semibold text-slate-200 mb-2">
              Memory Management
            </h3>
            <p className="text-slate-400 text-sm mb-4">
              Virtual memory, paging, DMA, and memory optimization for embedded
              systems with limited resources.
            </p>
            <time className="text-xs text-slate-500">Coming soon</time>
          </article>

          <article className="p-6 bg-slate-900 rounded-lg border border-slate-800 hover:border-blue-400 transition-colors">
            <h3 className="text-lg font-semibold text-slate-200 mb-2">
              System Performance Tuning
            </h3>
            <p className="text-slate-400 text-sm mb-4">
              Profiling, optimization techniques, and tools for reducing
              latency and maximizing throughput in embedded systems.
            </p>
            <time className="text-xs text-slate-500">Coming soon</time>
          </article>
        </div>

        <div className="mt-12 p-8 bg-slate-900 rounded-lg border border-slate-800">
          <h2 className="text-2xl font-semibold text-slate-100 mb-4">
            Resources & References
          </h2>
          <ul className="space-y-2 text-slate-400">
            <li>• Linux Kernel Documentation</li>
            <li>• Device Drivers, Embedded Systems & the Linux Kernel</li>
            <li>• Understanding the Linux Kernel</li>
            <li>• Real-Time Linux with PREEMPT-RT</li>
          </ul>
        </div>
      </div>
    </SectionLayout>
  );
}
