import React, { useState } from 'react';
import { Server, KeyRound, Database, ArrowRight, ShieldCheck, CheckCircle2, Code2 } from 'lucide-react';

export const TransitOpsVisual: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'architecture' | 'auth' | 'contracts'>('architecture');

  return (
    <div className="w-full rounded-xl border border-neutral-800 bg-[#080A0F] p-4 sm:p-5 font-mono text-xs overflow-hidden shadow-xl">
      {/* Visual Header / Mock App Toolbar */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between border-b border-neutral-800/80 pb-3 mb-4 gap-2">
        <div className="flex items-center gap-2">
          <div className="w-2.5 h-2.5 rounded-full bg-rose-500/80" />
          <div className="w-2.5 h-2.5 rounded-full bg-amber-500/80" />
          <div className="w-2.5 h-2.5 rounded-full bg-emerald-500/80" />
          <span className="ml-2 text-neutral-400 text-[11px]">transitops-system.spec.ts</span>
        </div>

        {/* Tab switcher */}
        <div className="flex items-center bg-[#10151C] p-0.5 rounded border border-neutral-800 text-[10px]">
          <button
            onClick={() => setActiveTab('architecture')}
            className={`px-2 py-1 rounded transition-colors ${
              activeTab === 'architecture' ? 'bg-blue-600/30 text-cyan-300 border border-cyan-500/30 font-semibold' : 'text-neutral-400 hover:text-neutral-200'
            }`}
          >
            System Pipeline
          </button>
          <button
            onClick={() => setActiveTab('auth')}
            className={`px-2 py-1 rounded transition-colors ${
              activeTab === 'auth' ? 'bg-blue-600/30 text-cyan-300 border border-cyan-500/30 font-semibold' : 'text-neutral-400 hover:text-neutral-200'
            }`}
          >
            JWT + RBAC Flow
          </button>
          <button
            onClick={() => setActiveTab('contracts')}
            className={`px-2 py-1 rounded transition-colors ${
              activeTab === 'contracts' ? 'bg-blue-600/30 text-cyan-300 border border-cyan-500/30 font-semibold' : 'text-neutral-400 hover:text-neutral-200'
            }`}
          >
            API Contracts
          </button>
        </div>
      </div>

      {activeTab === 'architecture' && (
        <div className="space-y-4">
          <div className="text-[11px] text-neutral-400 font-sans">
            Full-stack system architecture developed for smart transport operations during Odoo Hackathon 2026:
          </div>

          {/* Flow Nodes Diagram */}
          <div className="grid grid-cols-1 sm:grid-cols-5 gap-2 items-center text-center">
            {/* Step 1: Frontend */}
            <div className="bg-[#10151C] border border-blue-900/50 rounded-lg p-3">
              <div className="w-6 h-6 mx-auto rounded bg-blue-950 text-blue-400 flex items-center justify-center mb-1.5">
                <Code2 className="w-3.5 h-3.5" />
              </div>
              <div className="text-white font-bold text-[11px]">FRONTEND</div>
              <div className="text-[9px] text-neutral-400 mt-0.5">Modern UI Client</div>
              <div className="text-[9px] text-cyan-400 mt-1 font-mono">React / Web</div>
            </div>

            <div className="hidden sm:flex justify-center text-neutral-500">
              <ArrowRight className="w-4 h-4 text-cyan-400" />
            </div>

            {/* Step 2: REST API & Express */}
            <div className="bg-[#10151C] border border-cyan-900/50 rounded-lg p-3">
              <div className="w-6 h-6 mx-auto rounded bg-cyan-950 text-cyan-400 flex items-center justify-center mb-1.5">
                <Server className="w-3.5 h-3.5" />
              </div>
              <div className="text-white font-bold text-[11px]">EXPRESS + TS</div>
              <div className="text-[9px] text-neutral-400 mt-0.5">REST API (:3001)</div>
              <div className="text-[9px] text-emerald-400 mt-1 font-mono">Zod + JWT</div>
            </div>

            <div className="hidden sm:flex justify-center text-neutral-500">
              <ArrowRight className="w-4 h-4 text-cyan-400" />
            </div>

            {/* Step 3: Prisma ORM & Postgres */}
            <div className="bg-[#10151C] border border-violet-900/50 rounded-lg p-3">
              <div className="w-6 h-6 mx-auto rounded bg-violet-950 text-violet-400 flex items-center justify-center mb-1.5">
                <Database className="w-3.5 h-3.5" />
              </div>
              <div className="text-white font-bold text-[11px]">POSTGRESQL</div>
              <div className="text-[9px] text-neutral-400 mt-0.5">Relational Store</div>
              <div className="text-[9px] text-violet-400 mt-1 font-mono">Prisma ORM</div>
            </div>
          </div>

          {/* Architecture Details Bar */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 pt-2">
            <div className="bg-[#0B0F14] border border-neutral-800 p-2 rounded">
              <span className="text-[10px] text-neutral-400 block font-mono">BASE SERVICE URL</span>
              <span className="text-xs text-cyan-300 font-mono">http://localhost:3001/api</span>
            </div>
            <div className="bg-[#0B0F14] border border-neutral-800 p-2 rounded">
              <span className="text-[10px] text-neutral-400 block font-mono">VALIDATION ENGINE</span>
              <span className="text-xs text-emerald-300 font-mono">Zod Schema Guardrails</span>
            </div>
            <div className="bg-[#0B0F14] border border-neutral-800 p-2 rounded">
              <span className="text-[10px] text-neutral-400 block font-mono">ACCESS CONTROL</span>
              <span className="text-xs text-violet-300 font-mono">Role-Based (RBAC)</span>
            </div>
          </div>
        </div>
      )}

      {activeTab === 'auth' && (
        <div className="space-y-3">
          <div className="text-[11px] text-neutral-400 font-sans">
            Authentication & Permission Enforcement Protocol:
          </div>

          <div className="space-y-2">
            {[
              { step: '01', title: 'Credential Submission', desc: 'POST /api/auth/login or /api/auth/register with Zod payload validation' },
              { step: '02', title: 'Token Issuance', desc: 'Signed JSON Web Token (JWT) returned containing user identity and role assignment' },
              { step: '03', title: 'Bearer Authentication', desc: 'Client includes Authorization: Bearer <token> on every subsequent REST request' },
              { step: '04', title: 'Role-Based Guard', desc: 'Middleware decodes token and enforces role-level authorization before route handler' },
              { step: '05', title: 'Database Transaction', desc: 'Prisma ORM performs scoped transactional query against PostgreSQL' }
            ].map((item) => (
              <div key={item.step} className="flex items-start gap-3 p-2 bg-[#10151C] border border-neutral-800 rounded">
                <span className="px-1.5 py-0.5 rounded bg-blue-950 text-cyan-400 font-mono text-[10px] font-semibold">
                  {item.step}
                </span>
                <div className="flex-1">
                  <div className="text-white font-medium text-[11px]">{item.title}</div>
                  <div className="text-neutral-400 text-[10px] font-mono mt-0.5">{item.desc}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {activeTab === 'contracts' && (
        <div className="space-y-3">
          <div className="text-[11px] text-neutral-400 font-sans">
            Verified REST Endpoints & Standardized Response Format:
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            {/* Endpoints */}
            <div className="bg-[#0B0F14] border border-neutral-800 rounded p-2.5 space-y-1.5">
              <div className="text-neutral-300 font-semibold text-[10px] uppercase tracking-wider mb-1">
                Verified Endpoints
              </div>
              <div className="flex items-center justify-between text-[10px] p-1 bg-[#10151C] rounded">
                <span className="text-emerald-400 font-bold">GET</span>
                <span className="text-neutral-300 font-mono">/api/health</span>
              </div>
              <div className="flex items-center justify-between text-[10px] p-1 bg-[#10151C] rounded">
                <span className="text-blue-400 font-bold">POST</span>
                <span className="text-neutral-300 font-mono">/api/auth/register</span>
              </div>
              <div className="flex items-center justify-between text-[10px] p-1 bg-[#10151C] rounded">
                <span className="text-blue-400 font-bold">POST</span>
                <span className="text-neutral-300 font-mono">/api/auth/login</span>
              </div>
              <div className="flex items-center justify-between text-[10px] p-1 bg-[#10151C] rounded">
                <span className="text-emerald-400 font-bold">GET</span>
                <span className="text-neutral-300 font-mono">/api/auth/me</span>
              </div>
            </div>

            {/* Standard Response Envelope */}
            <div className="bg-[#0B0F14] border border-neutral-800 rounded p-2.5">
              <div className="text-neutral-300 font-semibold text-[10px] uppercase tracking-wider mb-1">
                Standardized Envelope
              </div>
              <pre className="text-[10px] text-cyan-300 bg-[#050505] p-2 rounded border border-neutral-900 overflow-x-auto leading-relaxed">
{`// Success
{
  "success": true,
  "data": { ... }
}

// Error
{
  "success": false,
  "error": {
    "message": "..."
  }
}`}
              </pre>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
