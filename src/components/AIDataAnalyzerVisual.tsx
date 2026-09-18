import React from 'react';
import { Table, Sparkles, BarChart3, Database, Filter } from 'lucide-react';

export const AIDataAnalyzerVisual: React.FC = () => {
  return (
    <div className="w-full rounded-xl border border-neutral-800 bg-[#080A0F] p-4 sm:p-5 font-mono text-xs overflow-hidden shadow-xl">
      {/* Visual Header / Mock App Toolbar */}
      <div className="flex items-center justify-between border-b border-neutral-800/80 pb-3 mb-4">
        <div className="flex items-center gap-2">
          <div className="w-2.5 h-2.5 rounded-full bg-rose-500/80" />
          <div className="w-2.5 h-2.5 rounded-full bg-amber-500/80" />
          <div className="w-2.5 h-2.5 rounded-full bg-emerald-500/80" />
          <span className="ml-2 text-neutral-400 text-[11px]">streamlit_app.py — AI Data Analyzer</span>
        </div>
        <div className="flex items-center gap-2 text-[10px] text-cyan-400 bg-cyan-950/40 border border-cyan-800/50 px-2 py-0.5 rounded">
          <Database className="w-3 h-3" />
          <span>housing_census_sample.csv</span>
        </div>
      </div>

      {/* Top Metric Cards */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 mb-4">
        <div className="bg-[#10151C] border border-neutral-800 rounded p-2.5">
          <div className="text-neutral-400 text-[10px] uppercase">Total Records</div>
          <div className="text-sm font-bold text-white font-sans mt-0.5">1,420</div>
          <div className="text-[9px] text-emerald-400 mt-0.5">100% Ingested</div>
        </div>
        <div className="bg-[#10151C] border border-neutral-800 rounded p-2.5">
          <div className="text-neutral-400 text-[10px] uppercase">Attributes</div>
          <div className="text-sm font-bold text-white font-sans mt-0.5">14 Cols</div>
          <div className="text-[9px] text-neutral-400 mt-0.5">9 Num / 5 Cat</div>
        </div>
        <div className="bg-[#10151C] border border-neutral-800 rounded p-2.5">
          <div className="text-neutral-400 text-[10px] uppercase">Missing Ratio</div>
          <div className="text-sm font-bold text-cyan-400 font-sans mt-0.5">0.42%</div>
          <div className="text-[9px] text-neutral-400 mt-0.5">6 Null Cells</div>
        </div>
        <div className="bg-[#10151C] border border-neutral-800 rounded p-2.5">
          <div className="text-neutral-400 text-[10px] uppercase">Memory Footprint</div>
          <div className="text-sm font-bold text-violet-400 font-sans mt-0.5">158 KB</div>
          <div className="text-[9px] text-neutral-400 mt-0.5">Optimized Dtypes</div>
        </div>
      </div>

      {/* Main Split: Mini Table & Graph + AI Insight */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-3">
        {/* Left: Tabular preview & Chart */}
        <div className="md:col-span-7 space-y-3">
          {/* Mock Tabular Preview */}
          <div className="bg-[#0B0F14] border border-neutral-800/80 rounded p-2.5">
            <div className="flex items-center justify-between mb-2">
              <div className="flex items-center gap-1.5 text-neutral-300 font-medium text-[11px]">
                <Table className="w-3.5 h-3.5 text-cyan-400" />
                <span>Dataframe Head Inspection</span>
              </div>
              <span className="text-[10px] text-neutral-400">df.head(3)</span>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full text-[10px] text-left border-collapse">
                <thead>
                  <tr className="border-b border-neutral-800 text-neutral-400">
                    <th className="py-1 px-1.5 font-normal">#</th>
                    <th className="py-1 px-1.5 font-normal text-cyan-300">median_income</th>
                    <th className="py-1 px-1.5 font-normal text-cyan-300">housing_median_age</th>
                    <th className="py-1 px-1.5 font-normal text-cyan-300">total_rooms</th>
                    <th className="py-1 px-1.5 font-normal">ocean_proximity</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-neutral-900 text-neutral-300">
                  <tr>
                    <td className="py-1 px-1.5 text-neutral-400 font-mono">0</td>
                    <td className="py-1 px-1.5">8.3252</td>
                    <td className="py-1 px-1.5">41.0</td>
                    <td className="py-1 px-1.5">880.0</td>
                    <td className="py-1 px-1.5 text-emerald-400">NEAR BAY</td>
                  </tr>
                  <tr>
                    <td className="py-1 px-1.5 text-neutral-400 font-mono">1</td>
                    <td className="py-1 px-1.5">8.3014</td>
                    <td className="py-1 px-1.5">21.0</td>
                    <td className="py-1 px-1.5">7099.0</td>
                    <td className="py-1 px-1.5 text-emerald-400">NEAR BAY</td>
                  </tr>
                  <tr>
                    <td className="py-1 px-1.5 text-neutral-400 font-mono">2</td>
                    <td className="py-1 px-1.5">7.2574</td>
                    <td className="py-1 px-1.5">52.0</td>
                    <td className="py-1 px-1.5">1467.0</td>
                    <td className="py-1 px-1.5 text-emerald-400">NEAR BAY</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          {/* Mock Distribution Plot */}
          <div className="bg-[#0B0F14] border border-neutral-800/80 rounded p-2.5">
            <div className="flex items-center justify-between mb-2">
              <div className="flex items-center gap-1.5 text-neutral-300 font-medium text-[11px]">
                <BarChart3 className="w-3.5 h-3.5 text-blue-400" />
                <span>Distribution: median_income (Plotly Engine)</span>
              </div>
              <div className="flex items-center gap-1 text-[10px] text-neutral-400">
                <Filter className="w-3 h-3" />
                <span>Bins: 12</span>
              </div>
            </div>
            {/* SVG Histogram */}
            <div className="h-20 w-full flex items-end gap-1 pt-2 px-1 border-b border-neutral-800">
              {[25, 45, 78, 92, 100, 85, 62, 48, 30, 20, 12, 6].map((h, i) => (
                <div key={i} className="flex-1 flex flex-col items-center gap-1 group">
                  <div
                    className="w-full bg-gradient-to-t from-blue-600/60 to-cyan-400/80 rounded-t transition-all hover:brightness-125"
                    style={{ height: `${h}%` }}
                  />
                </div>
              ))}
            </div>
            <div className="flex justify-between text-[9px] text-neutral-400 mt-1">
              <span>0.5</span>
              <span>Income Range Index (x10k)</span>
              <span>15.0</span>
            </div>
          </div>
        </div>

        {/* Right: AI Insight Panel */}
        <div className="md:col-span-5 flex flex-col justify-between bg-[#10151C] border border-cyan-900/40 rounded p-3">
          <div>
            <div className="flex items-center gap-2 text-cyan-400 font-semibold text-[11px] mb-2">
              <Sparkles className="w-3.5 h-3.5" />
              <span>AI Analysis Engine (Groq / LLM)</span>
            </div>
            <div className="space-y-2 text-[11px] text-neutral-300 leading-relaxed font-sans">
              <p className="bg-[#080A0F] border border-neutral-800/70 p-2 rounded text-neutral-300">
                <strong className="text-cyan-300 font-mono text-[10px] block mb-0.5">Key Observation:</strong>
                The target feature exhibits a right-skewed distribution centered at 3.5–4.2. High concentration observed in maritime cluster sub-samples.
              </p>
              <p className="bg-[#080A0F] border border-neutral-800/70 p-2 rounded text-neutral-300">
                <strong className="text-violet-300 font-mono text-[10px] block mb-0.5">Quality Assessment:</strong>
                Minimal sparsity detected across numerical columns. Ready for linear regression or tree-based feature importance modeling without imputation.
              </p>
            </div>
          </div>

          <div className="mt-3 pt-2.5 border-t border-neutral-800 flex items-center justify-between text-[10px]">
            <span className="text-neutral-400 font-mono">Streamlit + Plotly</span>
            <span className="px-2 py-0.5 rounded bg-cyan-950 text-cyan-300 border border-cyan-800/40">
              Interactive Mode
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};
