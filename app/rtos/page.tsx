import type { Metadata } from 'next';
import { SectionLayout } from '@/components/SectionLayout';

export const metadata: Metadata = {
  title: 'RTOS',
  description:
    'Explore real-time operating systems: scheduling algorithms, synchronization, task management, and RTOS design patterns.',
};

export default function RTOSPage() {
  return (
    <SectionLayout
      title="Real-Time Operating Systems (RTOS)"
      description="Master RTOS design, scheduling algorithms, inter-process communication, synchronization primitives, and real-time constraints in embedded systems."
    >
      <div className="space-y-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <article className="p-6 bg-slate-900 rounded-lg border border-slate-800 hover:border-blue-400 transition-colors">
            <h3 className="text-lg font-semibold text-slate-200 mb-2">
              Scheduling Algorithms
            </h3>
            <p className="text-slate-400 text-sm mb-4">
              Rate Monotonic, Earliest Deadline First, and other scheduling
              algorithms. Schedulability analysis and priority inheritance.
            </p>
            <time className="text-xs text-slate-500">Coming soon</time>
          </article>

          <article className="p-6 bg-slate-900 rounded-lg border border-slate-800 hover:border-blue-400 transition-colors">
            <h3 className="text-lg font-semibold text-slate-200 mb-2">
              Synchronization Primitives
            </h3>
            <p className="text-slate-400 text-sm mb-4">
              Mutexes, semaphores, condition variables, and deadlock prevention.
              Avoiding race conditions and ensuring data consistency.
            </p>
            <time className="text-xs text-slate-500">Coming soon</time>
          </article>

          <article className="p-6 bg-slate-900 rounded-lg border border-slate-800 hover:border-blue-400 transition-colors">
            <h3 className="text-lg font-semibold text-slate-200 mb-2">
              Inter-Process Communication (IPC)
            </h3>
            <p className="text-slate-400 text-sm mb-4">
              Message queues, pipes, sockets, and shared memory. Choosing the
              right IPC mechanism for your application.
            </p>
            <time className="text-xs text-slate-500">Coming soon</time>
          </article>

          <article className="p-6 bg-slate-900 rounded-lg border border-slate-800 hover:border-blue-400 transition-colors">
            <h3 className="text-lg font-semibold text-slate-200 mb-2">
              Memory Management
            </h3>
            <p className="text-slate-400 text-sm mb-4">
              Fixed partitioning, dynamic allocation, and real-time memory
              management. Avoiding heap fragmentation.
            </p>
            <time className="text-xs text-slate-500">Coming soon</time>
          </article>

          <article className="p-6 bg-slate-900 rounded-lg border border-slate-800 hover:border-blue-400 transition-colors">
            <h3 className="text-lg font-semibold text-slate-200 mb-2">
              Interrupt Handling & ISRs
            </h3>
            <p className="text-slate-400 text-sm mb-4">
              Interrupt service routines, interrupt nesting, and deferred
              processing. Managing hardware interrupts efficiently.
            </p>
            <time className="text-xs text-slate-500">Coming soon</time>
          </article>

          <article className="p-6 bg-slate-900 rounded-lg border border-slate-800 hover:border-blue-400 transition-colors">
            <h3 className="text-lg font-semibold text-slate-200 mb-2">
              Timing & Timeouts
            </h3>
            <p className="text-slate-400 text-sm mb-4">
              Implementing timers, handling timeouts, and meeting deadline
              constraints. Time management in real-time systems.
            </p>
            <time className="text-xs text-slate-500">Coming soon</time>
          </article>
        </div>

        <div className="mt-12 p-8 bg-slate-900 rounded-lg border border-slate-800">
          <h2 className="text-2xl font-semibold text-slate-100 mb-4">
            Popular RTOS & Platforms
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <h3 className="font-semibold text-slate-200 mb-2">Commercial</h3>
              <ul className="space-y-1 text-slate-400 text-sm">
                <li>• VxWorks</li>
                <li>• QNX Neutrino</li>
                <li>• Wind River Workbench</li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold text-slate-200 mb-2">Open Source</h3>
              <ul className="space-y-1 text-slate-400 text-sm">
                <li>• FreeRTOS</li>
                <li>• Zephyr Project</li>
                <li>• RTEMS</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </SectionLayout>
  );
}
