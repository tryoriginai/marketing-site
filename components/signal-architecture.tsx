"use client";

import { useState, useEffect, useRef } from "react";
import { 
  Database, 
  Cpu, 
  Network, 
  Search, 
  Lightbulb, 
  GitPullRequest, 
  TrendingUp,
  Play,
  Pause,
  ChevronRight
} from "lucide-react";

type Step = {
  id: number;
  label: string;
  desc: string;
  icon: React.ComponentType<{ className?: string }>;
  title: string;
};

const STEPS: Step[] = [
  { 
    id: 0, 
    label: 'Ingest Codebase', 
    desc: 'Scan documentation and registries.', 
    icon: Database,
    title: "SOURCE SCANNING"
  },
  { 
    id: 1, 
    label: 'Simulate Prompts', 
    desc: 'Run queries across top coding models.', 
    icon: Cpu,
    title: "PROMPT SIMULATION"
  },
  { 
    id: 2, 
    label: 'Track Rankings', 
    desc: 'Map your recommendation share.', 
    icon: Network,
    title: "VISIBILITY MAPPING"
  },
  { 
    id: 3, 
    label: 'Detect Gaps', 
    desc: 'Pinpoint exactly why competitors win.', 
    icon: Search,
    title: "GAP ANALYSIS"
  },
  { 
    id: 4, 
    label: 'Generate Changes', 
    desc: 'Create missing documentation and schemas.', 
    icon: Lightbulb,
    title: "OPTIMIZATION GENERATION"
  },
  { 
    id: 5, 
    label: 'Review Pull Requests', 
    desc: 'Approve documentation fixes automatically.', 
    icon: GitPullRequest,
    title: "PULL REQUESTS"
  },
  { 
    id: 6, 
    label: 'Grow Recommendations', 
    desc: 'Increase developer recommendation share.', 
    icon: TrendingUp,
    title: "RECOMMENDATION GROWTH"
  },
];

export function SignalArchitecture() {
  const [activeStep, setActiveStep] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    if (isPlaying) {
      timerRef.current = setInterval(() => {
        setActiveStep((prev) => (prev + 1) % STEPS.length);
      }, 5000);
    } else {
      if (timerRef.current) clearInterval(timerRef.current);
    }
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [isPlaying]);

  const handleStepClick = (idx: number) => {
    setActiveStep(idx);
    setIsPlaying(false);
  };

  return (
    <div className="relative w-full overflow-hidden border border-[rgba(0,0,0,0.05)] bg-[#ffffff]/60 backdrop-blur-md">
      {/* Visual background columns matching hero */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <div className="absolute left-[17%] top-0 bottom-0 w-px bg-[rgba(0,0,0,0.02)]" />
        <div className="absolute left-[34%] top-0 bottom-0 w-px bg-[rgba(0,0,0,0.02)]" />
        <div className="absolute left-[51%] top-0 bottom-0 w-px bg-[rgba(0,0,0,0.02)]" />
        <div className="absolute left-[68%] top-0 bottom-0 w-px bg-[rgba(0,0,0,0.02)]" />
        <div className="absolute left-[85%] top-0 bottom-0 w-px bg-[rgba(0,0,0,0.02)]" />
      </div>

      <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-0">
        {/* Left Side - 7 Steps */}
        <div className="lg:col-span-5 p-6 md:p-8 flex flex-col justify-between border-b lg:border-b-0 lg:border-r border-[rgba(0,0,0,0.05)]">
          <div className="space-y-6">
            <div className="flex items-center justify-between">
              <span className="text-[10px] font-semibold uppercase tracking-[0.12em] font-mono text-[rgba(0,0,0,0.35)]">
                {"// ROUTING WORKFLOW"}
              </span>
              <button
                onClick={() => setIsPlaying(!isPlaying)}
                className="flex items-center gap-1.5 px-2.5 py-1 text-[10px] font-mono font-medium border border-[rgba(0,0,0,0.08)] bg-white hover:bg-[rgba(0,0,0,0.02)] transition-colors"
                style={{ borderRadius: '0px' }}
              >
                {isPlaying ? (
                  <>
                    <Pause className="w-2.5 h-2.5" />
                    <span>PAUSE AUTO</span>
                  </>
                ) : (
                  <>
                    <Play className="w-2.5 h-2.5 text-[#e8662a]" />
                    <span>PLAY AUTO</span>
                  </>
                )}
              </button>
            </div>

            <div className="relative pl-4 space-y-2 border-l border-[rgba(0,0,0,0.05)]">
              {STEPS.map((step, idx) => {
                const Icon = step.icon;
                const isActive = activeStep === idx;
                return (
                  <div
                    key={step.id}
                    onClick={() => handleStepClick(idx)}
                    className={`group relative flex items-start gap-4 p-4 border transition-all duration-300 cursor-pointer ${
                      isActive
                        ? "bg-white border-[rgba(0,0,0,0.08)] shadow-[0_8px_20px_-6px_rgba(0,0,0,0.03)]"
                        : "bg-transparent border-transparent hover:bg-white/40"
                    }`}
                    style={{ borderRadius: '0px' }}
                  >
                    {/* Active side indicator */}
                    {isActive && (
                      <div className="absolute left-[-17px] top-1/2 -translate-y-1/2 w-1.5 h-6 bg-[#e8662a]" />
                    )}

                    {/* Step Icon */}
                    <div 
                      className={`flex items-center justify-center w-8 h-8 border transition-all duration-300 ${
                        isActive 
                          ? "bg-[rgba(232,102,42,0.04)] border-[rgba(232,102,42,0.15)] text-[#e8662a]" 
                          : "bg-white border-[rgba(0,0,0,0.05)] text-[rgba(0,0,0,0.4)] group-hover:text-black"
                      }`}
                      style={{ borderRadius: '0px' }}
                    >
                      <Icon className="w-4 h-4" />
                    </div>

                    <div className="flex-1 space-y-0.5 select-none">
                      <div className="flex items-center gap-2">
                        <span className="text-[9px] font-mono text-[rgba(0,0,0,0.3)] tracking-wider">
                          0{idx + 1}
                        </span>
                        <h4 className={`text-[13px] font-bold tracking-tight font-sans transition-colors ${
                          isActive ? "text-black" : "text-[rgba(0,0,0,0.6)] group-hover:text-black"
                        }`}>
                          {step.label}
                        </h4>
                      </div>
                      <p className={`text-[11px] leading-normal font-sans transition-colors ${
                        isActive ? "text-[rgba(0,0,0,0.5)]" : "text-[rgba(0,0,0,0.4)]"
                      }`}>
                        {step.desc}
                      </p>
                    </div>

                    <ChevronRight className={`w-3.5 h-3.5 text-[rgba(0,0,0,0.2)] transition-transform duration-300 shrink-0 self-center ${
                      isActive ? "translate-x-0.5 text-black/60" : "opacity-0 group-hover:opacity-100 group-hover:translate-x-0.5"
                    }`} />
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* Right Side - Interactive Console Visualizer */}
        <div className="lg:col-span-7 flex flex-col bg-[rgba(0,0,0,0.005)]">
          {/* Header */}
          <div className="flex items-center justify-between px-6 py-4 border-b border-[rgba(0,0,0,0.05)] bg-[#ffffff]/80 backdrop-blur-sm">
            <div className="flex items-center gap-2.5">
              <div className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#e8662a] opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-[#e8662a]"></span>
              </div>
              <span className="text-[10px] font-mono font-semibold tracking-[0.08em] text-black">
                {STEPS[activeStep].title}
              </span>
            </div>
            <div className="text-[9px] font-mono font-medium text-[rgba(0,0,0,0.4)] uppercase tracking-wider">
              sys_state: running &middot; {activeStep + 1} of 7
            </div>
          </div>

          {/* Viewport content based on active step */}
          <div className="flex-1 p-6 font-mono text-[12px] leading-relaxed text-[rgba(0,0,0,0.7)] flex flex-col justify-between min-h-[360px] bg-white">
            <div className="space-y-4 flex-1">
              {activeStep === 0 && (
                <div className="space-y-3">
                  <div className="text-[rgba(0,0,0,0.4)]">{'// Scanning codebase, docs directories and package registries'}</div>

                  <div className="border border-[rgba(0,0,0,0.05)] bg-[rgba(0,0,0,0.01)] p-4 space-y-1.5 text-[11px] leading-snug">
                    <div>your-app/</div>
                    <div>├── app/</div>
                    <div className="pl-4 text-[rgba(0,0,0,0.4)]">├── page.tsx <span className="text-[rgba(0,0,0,0.3)]">(1.2kb)</span></div>
                    <div className="pl-4 text-[rgba(0,0,0,0.4)]">└── layout.tsx <span className="text-[rgba(0,0,0,0.3)]">(0.8kb)</span></div>
                    <div>├── components/</div>
                    <div className="pl-4 text-[rgba(0,0,0,0.4)]">└── visibility-graph.tsx <span className="text-[rgba(0,0,0,0.3)]">(2.1kb)</span></div>
                    <div className="text-black font-semibold">├── package.json</div>
                    <div className="text-[#e8662a] font-semibold">└── llms.txt (MISSING)</div>
                  </div>
                  <div className="space-y-1 text-[11px] text-[rgba(0,0,0,0.5)]">
                    <div>[INFO] Repository index completed. 32 assets cataloged.</div>
                    <div className="text-[#e8662a]/90 font-medium">[WARN] Target file &apos;llms.txt&apos; missing from directory root.</div>
                    <div className="text-[#e8662a]/90 font-medium">[WARN] Missing OpenAPI/MCP discovery schemas.</div>
                  </div>
                </div>
              )}

              {activeStep === 1 && (
                <div className="space-y-3">
                  <div className="text-[rgba(0,0,0,0.4)]">{'// Simulating developer queries inside headless editor agents'}</div>

                  <div className="space-y-2.5">
                    <div className="p-3 border border-[rgba(0,0,0,0.05)] bg-[rgba(0,0,0,0.01)] space-y-1">
                      <div className="flex justify-between text-[11px] border-b border-[rgba(0,0,0,0.04)] pb-1 mb-1">
                        <span className="font-bold text-black">PROBE #1</span>
                        <span className="text-[rgba(0,0,0,0.4)]">Claude 3.5 Sonnet</span>
                      </div>
                      <div className="text-[11px] font-sans italic text-black/75">
                        &quot;How do I integrate a headless browser proxy for web scraping in TypeScript?&quot;
                      </div>
                      <div className="text-[11px] text-[rgba(0,0,0,0.5)]">
                        Result: Recommended <span className="text-black font-semibold font-mono">Puppeteer SDK</span> (82% share).
                      </div>
                    </div>

                    <div className="p-3 border border-[rgba(0,0,0,0.05)] bg-[rgba(0,0,0,0.01)] space-y-1">
                      <div className="flex justify-between text-[11px] border-b border-[rgba(0,0,0,0.04)] pb-1 mb-1">
                        <span className="font-bold text-black">PROBE #2</span>
                        <span className="text-[rgba(0,0,0,0.4)]">Cursor Copilot</span>
                      </div>
                      <div className="text-[11px] font-sans italic text-black/75">
                        &quot;Implement discovery mapping using the latest API guidelines.&quot;
                      </div>
                      <div className="text-[11px] text-[rgba(0,0,0,0.5)]">
                        Result: Target library omitted (0% share). Competitor suggested.
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {activeStep === 2 && (
                <div className="space-y-4">
                  <div className="text-[rgba(0,0,0,0.4)]">{'// Mapping recommendations path based on index weight'}</div>
                  
                  {/* Custom Minimalist SVG Graph */}
                  <div className="flex items-center justify-center p-4 border border-[rgba(0,0,0,0.05)] bg-white h-48 relative">
                    <svg className="w-full h-full" viewBox="0 0 400 160">
                      {/* Lines */}
                      <path d="M 50 80 Q 125 40 200 80" stroke="rgba(0,0,0,0.1)" strokeWidth="1.5" strokeDasharray="3 3" fill="none" />
                      <path d="M 50 80 Q 125 120 200 80" stroke="#e8662a" strokeWidth="1.5" strokeDasharray="4 4" className="animate-[dash_8s_linear_infinite]" fill="none" style={{ strokeDashoffset: 100 }} />
                      <path d="M 200 80 L 350 80" stroke="rgba(0,0,0,0.15)" strokeWidth="1.5" fill="none" />
                      
                      {/* Nodes */}
                      <circle cx="50" cy="80" r="18" fill="white" stroke="black" strokeWidth="1.5" />
                      <text x="50" y="84" textAnchor="middle" fontSize="9" fontWeight="bold" fontFamily="monospace">REPO</text>

                      <circle cx="200" cy="80" r="22" fill="white" stroke="#e8662a" strokeWidth="2" />
                      <text x="200" y="84" textAnchor="middle" fontSize="9" fontWeight="bold" fontFamily="monospace" fill="#e8662a">INDEX</text>

                      <circle cx="350" cy="80" r="18" fill="white" stroke="black" strokeWidth="1.5" />
                      <text x="350" y="84" textAnchor="middle" fontSize="9" fontWeight="bold" fontFamily="monospace">AGENT</text>
                      
                      {/* Labels */}
                      <text x="125" y="45" textAnchor="middle" fontSize="8" fill="rgba(0,0,0,0.4)" fontFamily="monospace">Raw Index</text>
                      <text x="125" y="132" textAnchor="middle" fontSize="8" fill="#e8662a" fontWeight="bold" fontFamily="monospace">Optimized Route</text>
                    </svg>

                    <div className="absolute bottom-2 right-3 text-[9px] text-[rgba(0,0,0,0.4)]">
                      Dotted line indicates crawl pathways
                    </div>
                  </div>
                </div>
              )}

              {activeStep === 3 && (
                <div className="space-y-3">
                  <div className="text-[rgba(0,0,0,0.4)]">{'// Analyzing documentation completeness & semantic index matching'}</div>

                  
                  <div className="space-y-2 text-[11px]">
                    <div className="p-3 border border-[rgba(0,0,0,0.05)] bg-[rgba(232,102,42,0.01)] border-l-2 border-l-[#e8662a] space-y-1">
                      <div className="flex justify-between font-bold text-black">
                        <span>GAP #1: NO ROOT SPECIFICATION</span>
                        <span className="text-[#e8662a]">CRITICAL</span>
                      </div>
                      <div className="text-[rgba(0,0,0,0.5)]">
                        No /llms.txt configuration found at root domain. AI crawlers cannot index features dynamically.
                      </div>
                    </div>

                    <div className="p-3 border border-[rgba(0,0,0,0.05)] bg-[rgba(0,0,0,0.01)] border-l-2 border-l-black/30 space-y-1">
                      <div className="flex justify-between font-bold text-black">
                        <span>GAP #2: SCHEMA DRIFT</span>
                        <span className="text-black/50">HIGH</span>
                      </div>
                      <div className="text-[rgba(0,0,0,0.5)]">
                        Export schemas do not match latest Cursor agent protocol standards (v2.1).
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {activeStep === 4 && (
                <div className="space-y-3">
                  <div className="text-[rgba(0,0,0,0.4)]">{'// Generating optimization directives'}</div>
                  
                  <div className="space-y-2">
                    <div className="flex items-start gap-2.5 p-2 border border-[rgba(0,0,0,0.05)] bg-white text-[11px]">
                      <span className="px-1.5 py-0.5 text-[9px] font-bold bg-[#e8662a] text-white shrink-0">TODO-01</span>
                      <div className="space-y-0.5">
                        <div className="font-bold text-black">Initialize llms.txt at root directory</div>
                        <div className="text-[rgba(0,0,0,0.5)]">Expose core API functions, usage instructions, and quickstart guidelines.</div>
                      </div>
                    </div>

                    <div className="flex items-start gap-2.5 p-2 border border-[rgba(0,0,0,0.05)] bg-white text-[11px]">
                      <span className="px-1.5 py-0.5 text-[9px] font-bold bg-black text-white shrink-0">TODO-02</span>
                      <div className="space-y-0.5">
                        <div className="font-bold text-black">Export OpenAPI MCP endpoints</div>
                        <div className="text-[rgba(0,0,0,0.5)]">Place schema documents under the .well-known/ directories.</div>
                      </div>
                    </div>

                    <div className="flex items-start gap-2.5 p-2 border border-[rgba(0,0,0,0.05)] bg-white text-[11px]">
                      <span className="px-1.5 py-0.5 text-[9px] font-bold bg-black/40 text-white shrink-0">TODO-03</span>
                      <div className="space-y-0.5">
                        <div className="font-bold text-black">Add Inline TS Examples</div>
                        <div className="text-[rgba(0,0,0,0.5)]">Replace code placeholders with real examples in README documentation.</div>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {activeStep === 5 && (
                <div className="space-y-3">
                  <div className="text-[rgba(0,0,0,0.4)]">{'// Autopilot Action Engine: drafting repository updates'}</div>
                  
                  <div className="border border-[rgba(0,0,0,0.05)] bg-[rgba(0,0,0,0.01)] rounded-none overflow-hidden">
                    <div className="bg-white border-b border-[rgba(0,0,0,0.05)] px-3 py-2 flex items-center justify-between text-[11px]">
                      <div className="flex items-center gap-2">
                        <GitPullRequest className="w-3.5 h-3.5 text-[#e8662a]" />
                        <span className="font-bold text-black">PR #12: Initialize llms.txt and export schemas</span>
                      </div>
                      <span className="px-1.5 py-0.2 text-[8px] font-bold uppercase border border-[rgba(0,0,0,0.1)] text-black bg-white">
                        DRAFT
                      </span>
                    </div>

                    {/* Code Diff representation */}
                    <div className="p-3 text-[10px] space-y-1 font-mono">
                      <div className="text-emerald-600 bg-emerald-50 px-1 py-0.5">+ # Origin Discovery Spec</div>
                      <div className="text-emerald-600 bg-emerald-50 px-1 py-0.5">+ This index serves to guide AI coding assistants to leverage the SDK effectively.</div>
                      <div className="text-emerald-600 bg-emerald-50 px-1 py-0.5">+</div>
                      <div className="text-emerald-600 bg-emerald-50 px-1 py-0.5">+ ## Core APIs</div>
                      <div className="text-emerald-600 bg-emerald-50 px-1 py-0.5">+ - GET /api/v1/visibility: Retrieve current visibility rating</div>
                      <div className="text-emerald-600 bg-emerald-50 px-1 py-0.5">+ - POST /api/v1/probe: Initiate interactive user query probe</div>
                    </div>
                  </div>
                  <div className="text-[11px] text-[rgba(0,0,0,0.5)]">
                    [SYSTEM] Pull Request generated successfully on GitHub: origin-org/sdk.
                  </div>
                </div>
              )}

              {activeStep === 6 && (
                <div className="space-y-3">
                  <div className="text-[rgba(0,0,0,0.4)]">{'// Verified index updates and discovery lift'}</div>
                  
                  <div className="grid grid-cols-2 gap-3">
                    <div className="p-4 border border-[rgba(0,0,0,0.05)] bg-white space-y-1">
                      <div className="text-[10px] text-[rgba(0,0,0,0.4)] uppercase font-bold tracking-wider">VISIBILITY SHARE</div>
                      <div className="text-[28px] font-bold text-black leading-none">88%</div>
                      <div className="text-[10px] text-emerald-600 font-bold font-sans flex items-center gap-0.5">
                        <span>↑ +64%</span>
                        <span className="text-[rgba(0,0,0,0.4)] font-normal font-mono ml-1">last 30d</span>
                      </div>
                    </div>

                    <div className="p-4 border border-[rgba(0,0,0,0.05)] bg-white space-y-1">
                      <div className="text-[10px] text-[rgba(0,0,0,0.4)] uppercase font-bold tracking-wider">RECOMMENDATIONS</div>
                      <div className="text-[28px] font-bold text-black leading-none">Synced</div>
                      <div className="text-[10px] text-[rgba(0,0,0,0.5)] font-sans">
                        Indexed in 5 of 5 core models
                      </div>
                    </div>
                  </div>

                  <div className="p-3 border border-[rgba(0,0,0,0.05)] bg-[rgba(0,0,0,0.015)] space-y-1.5 text-[11px]">
                    <div className="font-bold text-black uppercase text-[10px] tracking-wide">ACTIVE AI ASSISTANTS:</div>
                    <div className="flex flex-wrap gap-2 pt-1 font-sans text-xs">
                      {['Cursor', 'Claude Code', 'ChatGPT Search', 'Perplexity'].map((agent) => (
                        <span key={agent} className="px-2 py-0.5 border border-black/5 bg-white font-medium text-black">
                          {agent}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Bottom Progress Bar */}
            <div className="mt-4 pt-3 border-t border-[rgba(0,0,0,0.04)] flex items-center justify-between">
              <span className="text-[9px] font-mono text-[rgba(0,0,0,0.35)]">
                PROCESS_INDEX: PROBE_0x0{activeStep + 1}
              </span>
              
              {/* Animated Progress bar */}
              <div className="w-32 h-1 bg-[rgba(0,0,0,0.05)] relative overflow-hidden" style={{ borderRadius: '0px' }}>
                {isPlaying && (
                  <div 
                    key={activeStep} 
                    className="absolute top-0 left-0 bottom-0 bg-[#e8662a] animate-[loading_5s_linear_infinite]"
                    style={{ width: '100%' }}
                  />
                )}
              </div>
            </div>
          </div>
        </div>
      </div>

      <style dangerouslySetInnerHTML={{ __html: `
        @keyframes loading {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(0%); }
        }
        @keyframes dash {
          to {
            stroke-dashoffset: 0;
          }
        }
      `}} />
    </div>
  );
}
