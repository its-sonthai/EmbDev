import type { Metadata } from 'next';
import { SectionLayout } from '@/components/SectionLayout';

export const metadata: Metadata = {
  title: 'AUTOSAR',
  description:
    'Master AUTOSAR: automotive software architecture, layers, modules, standardization, and automotive systems design.',
};

export default function AUTOSARPage() {
  return (
    <SectionLayout
      title="AUTOSAR"
      description="Explore AUTOSAR (AUTomotive Open System ARchitecture), the standardized architecture for automotive software. Learn about layers, modules, RTOS integration, and automotive system design."
    >
      <div className="space-y-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <article className="p-6 bg-slate-900 rounded-lg border border-slate-800 hover:border-blue-400 transition-colors">
            <h3 className="text-lg font-semibold text-slate-200 mb-2">
              AUTOSAR Overview & Standards
            </h3>
            <p className="text-slate-400 text-sm mb-4">
              Understanding AUTOSAR standard, version history, and specifications.
              Classic vs. Adaptive AUTOSAR. Compliance requirements.
            </p>
            <time className="text-xs text-slate-500">Coming soon</time>
          </article>

          <article className="p-6 bg-slate-900 rounded-lg border border-slate-800 hover:border-blue-400 transition-colors">
            <h3 className="text-lg font-semibold text-slate-200 mb-2">
              AUTOSAR Layered Architecture
            </h3>
            <p className="text-slate-400 text-sm mb-4">
              Application Layer, RTE (Runtime Environment), and BSW (Basic
              Software). Layer communication and abstraction.
            </p>
            <time className="text-xs text-slate-500">Coming soon</time>
          </article>

          <article className="p-6 bg-slate-900 rounded-lg border border-slate-800 hover:border-blue-400 transition-colors">
            <h3 className="text-lg font-semibold text-slate-200 mb-2">
              RTE (Runtime Environment)
            </h3>
            <p className="text-slate-400 text-sm mb-4">
              RTE architecture, port communication, runnable management, and
              inter-component communication patterns.
            </p>
            <time className="text-xs text-slate-500">Coming soon</time>
          </article>

          <article className="p-6 bg-slate-900 rounded-lg border border-slate-800 hover:border-blue-400 transition-colors">
            <h3 className="text-lg font-semibold text-slate-200 mb-2">
              BSW (Basic Software) Modules
            </h3>
            <p className="text-slate-400 text-sm mb-4">
              MCAL (Microcontroller Abstraction Layer), drivers, and services.
              ECU abstraction and memory management.
            </p>
            <time className="text-xs text-slate-500">Coming soon</time>
          </article>

          <article className="p-6 bg-slate-900 rounded-lg border border-slate-800 hover:border-blue-400 transition-colors">
            <h3 className="text-lg font-semibold text-slate-200 mb-2">
              COM (Communication Stack)
            </h3>
            <p className="text-slate-400 text-sm mb-4">
              CAN, LIN, FlexRay, and Ethernet communication. PDU routing and
              signal mapping in automotive networks.
            </p>
            <time className="text-xs text-slate-500">Coming soon</time>
          </article>

          <article className="p-6 bg-slate-900 rounded-lg border border-slate-800 hover:border-blue-400 transition-colors">
            <h3 className="text-lg font-semibold text-slate-200 mb-2">
              Diagnostics & OBD
            </h3>
            <p className="text-slate-400 text-sm mb-4">
              UDS protocol, diagnostic services, DTC (Diagnostic Trouble Code)
              handling, and vehicle diagnostics.
            </p>
            <time className="text-xs text-slate-500">Coming soon</time>
          </article>

          <article className="p-6 bg-slate-900 rounded-lg border border-slate-800 hover:border-blue-400 transition-colors">
            <h3 className="text-lg font-semibold text-slate-200 mb-2">
              Adaptive AUTOSAR (AA)
            </h3>
            <p className="text-slate-400 text-sm mb-4">
              AUTOSAR Adaptive Platform, middleware architecture, and service
              communication. Modern automotive software.
            </p>
            <time className="text-xs text-slate-500">Coming soon</time>
          </article>

          <article className="p-6 bg-slate-900 rounded-lg border border-slate-800 hover:border-blue-400 transition-colors">
            <h3 className="text-lg font-semibold text-slate-200 mb-2">
              Development Tools & Workflows
            </h3>
            <p className="text-slate-400 text-sm mb-4">
              AUTOSAR development environments, code generation tools, and
              testing methodologies. Integration and validation.
            </p>
            <time className="text-xs text-slate-500">Coming soon</time>
          </article>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
          <div className="p-8 bg-slate-900 rounded-lg border border-slate-800">
            <h2 className="text-2xl font-semibold text-slate-100 mb-4">
              Classic AUTOSAR (CA)
            </h2>
            <p className="text-slate-400 mb-4">
              Traditional AUTOSAR architecture used in most current vehicles.
            </p>
            <ul className="space-y-2 text-slate-400 text-sm">
              <li>✓ Microcontroller-centric</li>
              <li>✓ Real-time guarantees with RTOS</li>
              <li>✓ Deterministic behavior</li>
              <li>✓ Proven in production systems</li>
            </ul>
          </div>

          <div className="p-8 bg-slate-900 rounded-lg border border-slate-800">
            <h2 className="text-2xl font-semibold text-slate-100 mb-4">
              Adaptive AUTOSAR (AA)
            </h2>
            <p className="text-slate-400 mb-4">
              Next-generation architecture for connected and autonomous vehicles.
            </p>
            <ul className="space-y-2 text-slate-400 text-sm">
              <li>✓ Linux-based systems</li>
              <li>✓ Service-oriented architecture</li>
              <li>✓ Dynamic configuration</li>
              <li>✓ Cloud connectivity</li>
            </ul>
          </div>
        </div>

        <div className="mt-12 p-8 bg-slate-900 rounded-lg border border-slate-800">
          <h2 className="text-2xl font-semibold text-slate-100 mb-4">
            AUTOSAR Partners & Implementations
          </h2>
          <p className="text-slate-400 mb-4">
            AUTOSAR is developed by a consortium of automotive and software companies.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <h3 className="font-semibold text-slate-200 mb-2">Notable Partners</h3>
              <ul className="space-y-1 text-slate-400 text-sm">
                <li>• BMW, Mercedes, Audi (OEMs)</li>
                <li>• Bosch, Continental (Suppliers)</li>
                <li>• Vector Informatik (Tools)</li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold text-slate-200 mb-2">Key Versions</h3>
              <ul className="space-y-1 text-slate-400 text-sm">
                <li>• AUTOSAR 4.4 (Current Classic)</li>
                <li>• AUTOSAR 23-11 (Adaptive)</li>
                <li>• Continuous Evolution</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </SectionLayout>
  );
}
