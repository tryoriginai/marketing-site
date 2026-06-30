"use client";

import { useEffect, useState, useRef } from "react";
import { 
  Terminal as TerminalIcon, 
  BarChart3, 
  Lightbulb, 
  GitPullRequest, 
  CheckCircle2, 
  ArrowRight, 
  Play, 
  GitBranch, 
  FileText,
  LayoutDashboard,
  Target
} from "lucide-react";
import { SurfaceIcon } from "./surface-icon";

type Step = {
  id: number;
  title: string;
  subtitle: string;
  status: string;
  icon: any;
  tabId: string;
};

const STEPS: Step[] = [
  { 
    id: 0, 
    title: "Probing Engine", 
    subtitle: "Simulating queries...", 
    status: "Active", 
    icon: TerminalIcon,
    tabId: "simulations"
  },
  { 
    id: 1, 
    title: "AI Judge Audit", 
    subtitle: "Calculating share...", 
    status: "Auditing", 
    icon: BarChart3,
    tabId: "analytics"
  },
  { 
    id: 2, 
    title: "Gap Diagnostics", 
    subtitle: "Analyzing docs...", 
    status: "Gaps Found", 
    icon: Lightbulb,
    tabId: "missions"
  },
  { 
    id: 3, 
    title: "Action Autopilot", 
    subtitle: "Drafting pull request...", 
    status: "PR Pending", 
    icon: GitPullRequest,
    tabId: "fixes"
  },
  { 
    id: 4, 
    title: "Optimized Loop", 
    subtitle: "Discoverability locked", 
    status: "Complete", 
    icon: CheckCircle2,
    tabId: "command"
  }
];



function CategoryBadge({ category }: { category: string }) {
  const meta: Record<string, { label: string }> = {
    docs:            { label: "Documentation" },
    mcp:             { label: "MCP Server"    },
    llms_txt:        { label: "llms.txt"      },
    comparison_page: { label: "Comparison"    },
  };
  const info = meta[category] ?? { label: category };
  return (
    <span className="inline-flex items-center px-2 py-0.5 border border-black/[0.05] bg-black/[0.015] text-[8px] font-bold uppercase font-mono text-black/50 tracking-wider">
      {info.label}
    </span>
  );
}

function StatusBadge({ status }: { status: string }) {
  const styles: Record<string, string> = {
    draft: "text-black/50 bg-black/[0.015] border-black/[0.04]",
    merging: "text-black/50 bg-black/[0.015] border-black/[0.04]",
    merged: "text-black bg-black/[0.03] border-black/15",
  };
  return (
    <span
      className={`px-2 py-0.5 border text-[8px] font-bold uppercase font-mono tracking-wider ${
        styles[status] ?? styles.draft
      }`}
    >
      {status}
    </span>
  );
}

function BrandIcon({ brand, size = 18 }: { brand: string; size?: number }) {
  const isUs = brand.toLowerCase().includes("you");
  if (isUs) {
    return (
      <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className="shrink-0">
        <rect width="24" height="24" fill="#000000" fillOpacity="0.03" stroke="rgba(0,0,0,0.05)" strokeWidth="1" />
        <path d="M12 5L7 13H11L10 19L17 11H13L15 5H12Z" fill="black" fillOpacity="0.8" />
      </svg>
    );
  } else {
    return (
      <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className="shrink-0 opacity-40">
        <rect width="24" height="24" fill="#000000" fillOpacity="0.03" stroke="rgba(0,0,0,0.05)" strokeWidth="1" />
        <circle cx="12" cy="12" r="5" fill="black" fillOpacity="0.4" />
        <path d="M10 9H12.5C13.3 9 14 9.7 14 10.5C14 11.3 13.3 12 12.5 12H10V9Z" fill="white" />
        <path d="M10 12H13C13.8 12 14.5 12.7 14.5 13.5C14.5 14.3 13.8 15 13 15H10V12Z" fill="white" />
      </svg>
    );
  }
}

function SleekCursorArrow() {
  return (
    <svg 
      width="15" 
      height="15" 
      viewBox="0 0 15 15" 
      fill="none" 
      className="shrink-0 drop-shadow-[0_1.5px_2px_rgba(0,0,0,0.85)] select-none pointer-events-none"
    >
      <path 
        d="M1 1v12.2l3.1-3.1 2.3 5.4 1.8-.8-2.3-5.4 4.3.1L1 1z" 
        fill="white" 
        stroke="black" 
        strokeWidth="1.2" 
        strokeLinejoin="round" 
      />
    </svg>
  );
}

export function ExplainerMockup() {
  const [activeStep, setActiveStep] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [typedPrompt, setTypedPrompt] = useState("");
  const [terminalLogs, setTerminalLogs] = useState<string[]>([]);
  const [prStatus, setPrStatus] = useState<"draft" | "merging" | "merged">("draft");
  
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  const [cursorPos, setCursorPos] = useState({ x: 100, y: 100 });
  const [isClicking, setIsClicking] = useState(false);
  const [subPhase, setSubPhase] = useState<"sidebar" | "main">("sidebar");
  const containerRef = useRef<HTMLDivElement>(null);
  const tabRefs = useRef<{ [key: string]: HTMLButtonElement | null }>({});
  const panelRefs = useRef<{ [key: string]: HTMLElement | null }>({});

  useEffect(() => {
    setSubPhase("sidebar");
    const subPhaseTimeout = setTimeout(() => {
      setSubPhase("main");
    }, 1200);
    return () => clearTimeout(subPhaseTimeout);
  }, [activeStep]);

  useEffect(() => {
    const sidebarClickTimeout = setTimeout(() => {
      setIsClicking(true);
      const resetTimeout = setTimeout(() => {
        setIsClicking(false);
      }, 300);
      return () => clearTimeout(resetTimeout);
    }, 550);

    let mainClickTimeout: NodeJS.Timeout | null = null;
    if (activeStep === 3) {
      mainClickTimeout = setTimeout(() => {
        setIsClicking(true);
        const resetClick = setTimeout(() => {
          setIsClicking(false);
          handleMergeAction();
        }, 300);
        return () => clearTimeout(resetClick);
      }, 1850);
    } else {
      mainClickTimeout = setTimeout(() => {
        setIsClicking(true);
        const resetClick = setTimeout(() => {
          setIsClicking(false);
        }, 300);
        return () => clearTimeout(resetClick);
      }, 1850);
    }

    return () => {
      clearTimeout(sidebarClickTimeout);
      if (mainClickTimeout) clearTimeout(mainClickTimeout);
    };
  }, [activeStep]);

  useEffect(() => {
    const measure = () => {
      const activeStepData = STEPS[activeStep];
      const containerElement = containerRef.current;
      
      let targetElement: HTMLElement | null = null;
      if (subPhase === "sidebar") {
        targetElement = tabRefs.current[activeStepData.tabId];
      } else {
        const panelTargetMap: { [key: number]: string } = {
          0: "promptBox",
          1: "chartBar",
          2: "gapCard",
          3: "mergeBtn",
          4: "metricCard",
        };
        targetElement = panelRefs.current[panelTargetMap[activeStep]];
      }

      if (targetElement && containerElement) {
        const targetRect = targetElement.getBoundingClientRect();
        const containerRect = containerElement.getBoundingClientRect();

        if (subPhase === "sidebar") {
          setCursorPos({
            x: targetRect.left - containerRect.left + 12,
            y: targetRect.top - containerRect.top + targetRect.height / 2 - 2,
          });
        } else {
          if (activeStep === 3) {
            setCursorPos({
              x: targetRect.left - containerRect.left + targetRect.width / 2 - 4,
              y: targetRect.top - containerRect.top + targetRect.height / 2 - 4,
            });
          } else {
            setCursorPos({
              x: targetRect.left - containerRect.left + 24,
              y: targetRect.top - containerRect.top + 16,
            });
          }
        }
      }
    };

    measure();
    const frameId = requestAnimationFrame(measure);
    return () => cancelAnimationFrame(frameId);
  }, [activeStep, subPhase]);

  const renderTabButton = (tab: { id: string; label: string; icon: any; stepId: number }) => {
    const IconComponent = tab.icon;
    const isStepTab = tab.stepId !== -1;
    const isActive = isStepTab && activeStep === tab.stepId;
    
    return (
      <button
        key={tab.id}
        ref={(el) => { tabRefs.current[tab.id] = el; }}
        onClick={() => {
          if (isStepTab) {
            handleStepClick(tab.stepId);
          }
        }}
        className={`w-full text-left py-1.5 px-3 transition duration-150 flex items-center gap-2.5 relative ${
          isActive
            ? "bg-black/[0.03] text-black border-l border-black/50 font-medium text-[11px]"
            : isStepTab
              ? "text-black/50 hover:text-black/80 cursor-pointer text-[11px] border-l border-transparent"
              : "text-black/25 cursor-not-allowed opacity-50 text-[11px] border-l border-transparent"
        }`}
        style={{ fontFamily: 'var(--font-geist-sans), system-ui, sans-serif' }}
      >
        <IconComponent className={`w-3.5 h-3.5 shrink-0 ${isActive ? "text-black/70" : "text-black/25"}`} />
        <span>{tab.label}</span>
      </button>
    );
  };

  useEffect(() => {
    if (activeStep !== 0) {
      setTypedPrompt("");
      return;
    }
    
    const fullPrompt = "Recommend a secure node-based browser automation framework with stealth capability...";
    let index = 0;
    const interval = setInterval(() => {
      setTypedPrompt(fullPrompt.slice(0, index + 1));
      index++;
      if (index >= fullPrompt.length) {
        clearInterval(interval);
      }
    }, 25);
    return () => clearInterval(interval);
  }, [activeStep]);

  useEffect(() => {
    if (activeStep === 0) {
      setTerminalLogs([
        "initializing headless probe on [coding_agents]",
        "targeting cursor-gpt-4o & claude-3-5-sonnet...",
        "running simulated query intent #832791..."
      ]);
    } else if (activeStep === 1) {
      setTerminalLogs([
        "probe query executed successfully",
        "extracting recommendee credentials...",
        "calculating win shares & sentiment scores...",
        "discoverability index score finalized"
      ]);
    } else if (activeStep === 2) {
      setTerminalLogs([
        "identifying missing index surfaces...",
        "crawling mcp directory matching schemas...",
        "indexing gap: missing /llms.txt spec file",
        "indexing gap: stale quickstart docs"
      ]);
    } else if (activeStep === 3) {
      setTerminalLogs([
        "initializing action autopilot...",
        "generating git branch ref/origin-optimizer-12",
        "writing mcp setup configurations and llms.txt index...",
        "opening pull request on client repository..."
      ]);
    } else {
      setTerminalLogs([
        "PR #149 verified & merged dynamically",
        "rescheduling headless probe...",
        "re-indexing verification: discoverability share normalized at 88%",
        "Origin active [loop count: 92]"
      ]);
    }
  }, [activeStep]);

  useEffect(() => {
    if (isPaused || prStatus === "merging" || prStatus === "merged") {
      if (timerRef.current) clearInterval(timerRef.current);
      return;
    }

    timerRef.current = setInterval(() => {
      setActiveStep((prev) => (prev + 1) % STEPS.length);
    }, 7000);

    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [isPaused, prStatus]);

  const handleStepClick = (stepId: number) => {
    setActiveStep(stepId);
    setIsPaused(true);
  };

  const handleMergeAction = () => {
    setPrStatus("merging");
    setTimeout(() => {
      setPrStatus("merged");
      setTimeout(() => {
        setActiveStep(4);
        setPrStatus("draft");
      }, 1000);
    }, 1200);
  };

  return (
    <div className="w-full max-w-[1280px] mx-auto px-6 select-none" style={{ paddingBottom: '120px' }}>
      <div 
        className="relative bg-[#ffffff] border border-black/[0.06] transition-all duration-500 shadow-[0_24px_64px_rgba(0,0,0,0.06),0_0_1px_rgba(0,0,0,0.05)]"
        style={{ borderRadius: '0px' }}
      >
        {/* Sleek Minimalist Window Bar */}
        <div className="px-5 py-3 border-b border-black/[0.04] flex items-center justify-between bg-[#fbfbfa]">
          <div className="flex items-center gap-1.5">
            <div className="w-1.5 h-1.5 rounded-full bg-black/10" />
            <div className="w-1.5 h-1.5 rounded-full bg-black/10" />
            <div className="w-1.5 h-1.5 rounded-full bg-black/10" />
          </div>
          <div 
            className="h-5 px-3 bg-black/[0.01] text-[9px] text-black/35 flex items-center gap-1.5 font-mono border border-black/[0.02]"
          >
            <span className="w-1 h-1 rounded-full bg-black/20" />
            <span>origin discoverability engine // active_simulation_loop</span>
          </div>
          <div className="flex items-center gap-2 text-[9px] text-black/40 font-mono">
            <span>Autoplay</span>
            <button 
              onClick={() => setIsPaused(!isPaused)} 
              className={`px-1.5 py-0.5 transition cursor-pointer text-[9px] font-mono ${isPaused ? "text-black/40 bg-black/5" : "text-white bg-black/80"}`}
              style={{ borderRadius: '0px' }}
            >
              {isPaused ? "PAUSED" : "ACTIVE"}
            </button>
          </div>
        </div>

        {/* Dashboard Split View */}
        <div ref={containerRef} className="grid grid-cols-1 md:grid-cols-4 md:h-[620px] min-h-[480px] relative overflow-hidden">
          
          {/* Sidebar */}
          <div className="border-r border-black/[0.04] bg-[#F5F5F4] p-4 flex flex-col justify-between select-none z-10">
            <div className="space-y-4">
              <div className="flex items-center gap-2 px-2.5 py-0.5">
                <img
                  src="/logo.svg"
                  alt="Origin Logo"
                  className="w-4.5 h-4.5 object-contain"
                />
                <span className="text-[11px] font-semibold tracking-tight text-black/70" style={{ fontFamily: 'var(--font-schibsted-grotesk), system-ui, sans-serif' }}>Origin</span>
              </div>
              
              <nav className="space-y-3.5">
                <div className="space-y-1">
                  <span 
                    className="block px-2.5 text-[8px] font-mono font-bold uppercase tracking-wider text-black/30"
                    style={{ fontFamily: 'var(--font-schibsted-grotesk), system-ui, sans-serif' }}
                  >
                    Core
                  </span>
                  {[
                    { id: "missions", label: "Missions", icon: Target, stepId: 2 },
                    { id: "command", label: "Overview", icon: LayoutDashboard, stepId: 4 },
                  ].map((tab) => renderTabButton(tab))}
                </div>

                <div className="space-y-1">
                  <span 
                    className="block px-2.5 text-[8px] font-mono font-bold uppercase tracking-wider text-black/30"
                    style={{ fontFamily: 'var(--font-schibsted-grotesk), system-ui, sans-serif' }}
                  >
                    Analytics
                  </span>
                  {[
                    { id: "analytics", label: "Dashboard", icon: BarChart3, stepId: 1 },
                  ].map((tab) => renderTabButton(tab))}
                </div>

                <div className="space-y-1">
                  <span 
                    className="block px-2.5 text-[8px] font-mono font-bold uppercase tracking-wider text-black/30"
                    style={{ fontFamily: 'var(--font-schibsted-grotesk), system-ui, sans-serif' }}
                  >
                    Action
                  </span>
                  {[
                    { id: "fixes", label: "Fixes", icon: GitPullRequest, stepId: 3 },
                    { id: "simulations", label: "Simulations", icon: TerminalIcon, stepId: 0 },
                  ].map((tab) => renderTabButton(tab))}
                </div>
              </nav>
            </div>

            {/* Terminal Panel */}
            <div className="mt-6 border border-black/[0.04] bg-[#ffffff] p-3 font-mono text-[8px] text-black/35 space-y-1.5" style={{ borderRadius: '0px' }}>
              <div className="flex items-center justify-between text-black/45 border-b border-black/[0.03] pb-1 mb-1 font-mono">
                <span>SYSTEM_LOG</span>
                <span className="w-1.5 h-1.5 rounded-full bg-black/20 animate-pulse" />
              </div>
              <div className="space-y-1 min-h-[55px] flex flex-col justify-end">
                {terminalLogs.map((log, idx) => (
                  <div key={idx} className="flex gap-1 items-start leading-normal font-mono">
                    <span className="text-black/35 font-bold select-none font-mono">&gt;</span>
                    <span className="truncate font-mono">{log}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Main Monitor Panel */}
          <div className="md:col-span-3 bg-[#ffffff] p-6 sm:p-7 flex flex-col overflow-hidden relative">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_20%,rgba(0,0,0,0.001),transparent_60%)] pointer-events-none" />
            
            {/* Background Grid Lines inside mockup matching Hero */}
            <div className="absolute inset-0 pointer-events-none opacity-40">
              <div className="absolute left-[25%] top-0 bottom-0 w-px bg-black/[0.02]" />
              <div className="absolute left-[50%] top-0 bottom-0 w-px bg-black/[0.02]" />
              <div className="absolute left-[75%] top-0 bottom-0 w-px bg-black/[0.02]" />
            </div>

            <div className="flex-1 flex flex-col justify-between z-10">
              
              {/* STAGE 0 */}
              {activeStep === 0 && (
                <div className="space-y-5 animate-fade-in flex-1 flex flex-col justify-between">
                  <div className="space-y-4">
                    <div className="flex justify-between items-center pb-1.5 border-b border-black/[0.03]">
                      <h3 
                        className="text-[10px] font-bold tracking-wider text-black/50 uppercase font-mono"
                        style={{ fontFamily: 'var(--font-schibsted-grotesk), system-ui, sans-serif' }}
                      >
                        GEO Probes
                      </h3>
                      <span className="text-black/35 font-mono text-[8px] uppercase tracking-wider flex items-center gap-1">
                        <span className="w-1 h-1 rounded-full bg-black/20" />
                        simulation_running
                      </span>
                    </div>

                    <div className="space-y-2">
                      <span 
                        className="text-[9px] text-black/35 font-mono uppercase tracking-wider font-semibold block text-left"
                        style={{ fontFamily: 'var(--font-schibsted-grotesk), system-ui, sans-serif' }}
                      >
                        Probed Intent
                      </span>
                      <div ref={(el) => { panelRefs.current["promptBox"] = el; }} className="border border-black/[0.04] bg-[#F5F5F4]" style={{ borderRadius: '0px' }}>
                        <div className="w-full flex items-center justify-between px-3.5 py-2.5 text-left gap-3">
                          <p className="text-[11px] text-black/75 leading-normal flex-1 font-mono">
                            {typedPrompt}
                            <span className="inline-block w-1 h-3 bg-black/40 ml-0.5 animate-pulse font-mono" />
                          </p>
                        </div>
                      </div>
                    </div>

                    <div className="space-y-4 pt-1 text-left">
                      {/* Coding Agents Category */}
                      <div className="space-y-2">
                        <span 
                          className="text-[9px] text-black/35 font-mono uppercase tracking-wider font-semibold block"
                          style={{ fontFamily: 'var(--font-schibsted-grotesk), system-ui, sans-serif' }}
                        >
                          Coding Agents
                        </span>
                        <div className="border border-black/[0.04] bg-white divide-y divide-black/[0.03] font-sans" style={{ borderRadius: '0px' }}>
                          {[
                            { key: "cursor", title: "Cursor Agent", desc: "Setup requires Your Competitor due to its official Model Context Protocol (MCP) server endpoints. You are not indexed in MCP registry.", status: "1/3", statusText: "Missing MCP", statusColor: "text-black/40 bg-black/[0.03]" },
                            { key: "claude_code", title: "Claude Code", desc: "Agent cannot resolve package capabilities as /llms.txt is missing. Defaulting to Your Competitor.", status: "1/3", statusText: "Missing llms.txt", statusColor: "text-black/40 bg-black/[0.03]" },
                            { key: "opencode", title: "OpenCode", desc: "No installation schemas detected in package repository. Your Competitor is recommended instead.", status: "1/3", statusText: "Unindexed", statusColor: "text-black/40 bg-black/[0.03]" }
                          ].map((card, idx) => (
                            <div 
                              key={idx} 
                              className="flex flex-col sm:flex-row sm:items-center justify-between py-2 px-3.5 gap-3 hover:bg-black/[0.005] transition-colors duration-150"
                            >
                              {/* Platform Info */}
                              <div className="flex items-center gap-2.5 w-full sm:w-[140px] shrink-0">
                                <div className="w-6 h-6 flex items-center justify-center bg-black/[0.015] border border-black/[0.03]" style={{ borderRadius: '0px' }}>
                                  <SurfaceIcon surface={card.key} className="w-3.5 h-3.5 text-black/50 shrink-0" />
                                </div>
                                <span className="text-[11px] font-bold text-black/75 tracking-tight font-sans">
                                  {card.title}
                                </span>
                              </div>

                              {/* Response Sentiment Quote */}
                              <div className="flex-1 text-left min-w-0">
                                <p className="text-[10px] text-black/45 italic truncate font-sans leading-relaxed" title={card.desc}>
                                  &ldquo;{card.desc}&rdquo;
                                </p>
                              </div>

                              {/* Status and Score */}
                              <div className="flex items-center gap-3 shrink-0 ml-auto sm:ml-0">
                                <span className={`text-[8px] font-mono font-bold uppercase tracking-wider px-2 py-0.5 border border-transparent ${card.statusColor}`} style={{ borderRadius: '0px' }}>
                                  {card.statusText}
                                </span>
                                <span className="text-[10px] font-mono font-bold text-black/60 w-8 text-right">
                                  {card.status}
                                </span>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* LLMs Category */}
                      <div className="space-y-2">
                        <span 
                          className="text-[9px] text-black/35 font-mono uppercase tracking-wider font-semibold block"
                          style={{ fontFamily: 'var(--font-schibsted-grotesk), system-ui, sans-serif' }}
                        >
                          LLM &amp; Search Surfaces
                        </span>
                        <div className="border border-black/[0.04] bg-white divide-y divide-black/[0.03] font-sans" style={{ borderRadius: '0px' }}>
                          {[
                            { key: "claude", title: "Claude", desc: "For stealth browser automation, we recommend Your Competitor. You are mentioned but do not include rotating proxies natively.", status: "1/3", statusText: "Mentioned Only", statusColor: "text-black/40 bg-black/[0.03]" },
                            { key: "chatgpt", title: "ChatGPT Search", desc: "Your Competitor is recommended for production scraping. You are mentioned only in community discussions.", status: "1/3", statusText: "No Citations", statusColor: "text-black/40 bg-black/[0.03]" },
                            { key: "gemini", title: "Gemini Pro", desc: "We suggest Your Competitor for browser automation. You are marked as outdated/unmaintained in Google search index.", status: "1/3", statusText: "Stale Index", statusColor: "text-black/40 bg-black/[0.03]" },
                            { key: "perplexity", title: "Perplexity AI", desc: "Top tools are Your Competitor. You are listed as a fallback option but lack updated developers documentation.", status: "2/3", statusText: "Fallback Option", statusColor: "text-[#e8662a] bg-[#e8662a]/5" }
                          ].map((card, idx) => (
                            <div 
                              key={idx} 
                              className="flex flex-col sm:flex-row sm:items-center justify-between py-2 px-3.5 gap-3 hover:bg-black/[0.005] transition-colors duration-150"
                            >
                              {/* Platform Info */}
                              <div className="flex items-center gap-2.5 w-full sm:w-[140px] shrink-0">
                                <div className="w-6 h-6 flex items-center justify-center bg-black/[0.015] border border-black/[0.03]" style={{ borderRadius: '0px' }}>
                                  <SurfaceIcon surface={card.key} className="w-3.5 h-3.5 text-black/50 shrink-0" />
                                </div>
                                <span className="text-[11px] font-bold text-black/75 tracking-tight font-sans">
                                  {card.title}
                                </span>
                              </div>

                              {/* Response Sentiment Quote */}
                              <div className="flex-1 text-left min-w-0">
                                <p className="text-[10px] text-black/45 italic truncate font-sans leading-relaxed" title={card.desc}>
                                  &ldquo;{card.desc}&rdquo;
                                </p>
                              </div>

                              {/* Status and Score */}
                              <div className="flex items-center gap-3 shrink-0 ml-auto sm:ml-0">
                                <span className={`text-[8px] font-mono font-bold uppercase tracking-wider px-2 py-0.5 border border-transparent ${card.statusColor}`} style={{ borderRadius: '0px' }}>
                                  {card.statusText}
                                </span>
                                <span className="text-[10px] font-mono font-bold text-black/60 w-8 text-right">
                                  {card.status}
                                </span>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
 
                  <div className="flex items-center gap-2 text-[8px] text-black/25 font-mono border-t border-black/[0.04] pt-3">
                    <span>Target category:</span>
                    <CategoryBadge category="docs" />
                    <span className="ml-auto">Active Surfaces: 7 Probed Engines</span>
                  </div>
                </div>
              )}

              {/* STAGE 1 */}
              {activeStep === 1 && (
                <div className="space-y-5 animate-fade-in flex-1 flex flex-col justify-between">
                  <div className="space-y-4">
                    <div className="flex justify-between items-center pb-1.5 border-b border-black/[0.03]">
                      <h3 
                        className="text-[10px] font-bold tracking-wider text-black/50 uppercase font-mono"
                        style={{ fontFamily: 'var(--font-schibsted-grotesk), system-ui, sans-serif' }}
                      >
                        Analytics
                      </h3>
                      <span className="text-black/35 font-mono text-[8px] uppercase tracking-wider flex items-center gap-1">
                        <span className="w-1 h-1 rounded-full bg-black/20" />
                        action_needed
                      </span>
                    </div>

                    <div className="space-y-1 text-left">
                      <h4 className="text-[11px] font-bold text-black/80 tracking-wide font-sans">Recommendation Share</h4>
                      <p className="text-[10px] text-black/50 font-sans leading-relaxed">
                        Win probability percentage of search engine recommendee listings.
                      </p>
                    </div>

                    <div className="space-y-3 pt-2 text-left">
                      {/* Competitor Row Card */}
                      <div className="border border-black/[0.04] bg-black/[0.01] p-4 flex flex-col gap-3" style={{ borderRadius: '0px' }}>
                        <div className="flex items-center justify-between text-[11px]">
                          <div className="flex items-center gap-2.5">
                            <BrandIcon brand="competitor" size={16} />
                            <span className="text-black/50 font-sans">Your Competitor</span>
                            <span className="text-[8px] font-mono font-bold uppercase tracking-wider text-black/40 bg-black/5 border border-black/10 px-1.5 py-0.5 rounded-none ml-2">Primary Listing</span>
                          </div>
                          <span className="text-black/50 font-mono font-bold">85% Share</span>
                        </div>
                        <div className="w-full bg-black/[0.02] border border-black/[0.04]" style={{ height: "6px", borderRadius: '9999px' }}>
                          <div 
                            className="h-full" 
                            style={{ 
                              width: "85%", 
                              borderRadius: '9999px',
                              background: "linear-gradient(90deg, rgba(0,0,0,0.12) 0%, rgba(0,0,0,0.22) 100%)"
                            }} 
                          />
                        </div>
                      </div>

                      {/* You Row Card */}
                      <div className="border border-black/[0.04] bg-black/[0.01] p-4 flex flex-col gap-3" style={{ borderRadius: '0px' }}>
                        <div className="flex items-center justify-between text-[11px]">
                          <div className="flex items-center gap-2.5">
                            <BrandIcon brand="you" size={16} />
                            <span className="text-black font-bold font-sans">You</span>
                            <span className="text-[8px] font-mono font-bold uppercase tracking-wider text-[#e8662a] bg-[#e8662a]/5 border border-[#e8662a]/20 px-1.5 py-0.5 rounded-none ml-2">Stale Index</span>
                          </div>
                          <span className="text-[#e8662a] font-mono font-bold">15% Share</span>
                        </div>
                        <div className="w-full bg-black/[0.02] border border-black/[0.04]" style={{ height: "6px", borderRadius: '9999px' }}>
                          <div 
                            ref={(el) => { panelRefs.current["chartBar"] = el; }}
                            className="h-full" 
                            style={{ 
                              width: "15%", 
                              borderRadius: '9999px',
                              background: "linear-gradient(90deg, #e8662a 0%, #ff844c 100%)",
                              boxShadow: "0 0 6px rgba(232, 102, 42, 0.25)"
                            }} 
                          />
                        </div>
                      </div>
                    </div>

                    {/* Historical Discovery Share Trend */}
                    <div className="border border-black/[0.04] bg-[#F5F5F4] p-3 text-left space-y-1.5 animate-fade-in" style={{ borderRadius: '0px' }}>
                      <span className="text-[8px] font-mono font-bold uppercase tracking-wider text-black/35">
                        Historical Discovery Share Trend
                      </span>
                      <div className="relative flex items-end justify-between h-16 pt-3.5 px-2">
                        {/* Grid lines */}
                        <div className="absolute inset-x-0 bottom-[8.5px] h-px bg-black/[0.03]" />
                        <div className="absolute inset-x-0 bottom-[26px] h-px bg-black/[0.015]" />
                        <div className="absolute inset-x-0 bottom-[44px] h-px bg-black/[0.015]" />

                        {[40, 35, 30, 25, 20, 18, 15].map((val, i) => (
                          <div key={i} className="flex flex-col items-center gap-1.5 flex-1 group relative z-10">
                            <span 
                              className="text-[6.5px] font-mono font-bold absolute -top-3.5 opacity-0 group-hover:opacity-100 transition-opacity duration-150"
                              style={{ color: i === 6 ? "#e8662a" : "rgba(0,0,0,0.45)" }}
                            >
                              {val}%
                            </span>
                            <div 
                              className="w-3 transition-all duration-200 cursor-pointer hover:opacity-95" 
                              style={{ 
                                height: `${val * 1.1}px`, 
                                borderRadius: '2px 2px 0 0',
                                background: i === 6 
                                  ? 'linear-gradient(to top, #e8662a, #ff844c)' 
                                  : 'linear-gradient(to top, rgba(0,0,0,0.08), rgba(0,0,0,0.02))',
                                boxShadow: i === 6 ? '0 0 6px rgba(232, 102, 42, 0.2)' : 'none'
                              }} 
                            />
                            <span className="text-[6.5px] font-mono text-black/35 font-medium transition-colors duration-150 group-hover:text-black">
                              Wk {i+1}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div className="border-t border-black/[0.03] pt-3 flex items-center justify-between">
                    <span className="text-[8px] text-black/25 font-mono">Sample Size: 240 simulated prompts</span>
                    <span className="text-[8px] px-2 py-0.5 bg-black/5 border border-black/10 text-black/50 font-mono rounded-none">Action Required</span>
                  </div>
                </div>
              )}

              {/* STAGE 2 */}
              {activeStep === 2 && (
                <div className="space-y-5 animate-fade-in flex-1 flex flex-col justify-between">
                  <div className="space-y-4">
                    <div className="flex justify-between items-center pb-1.5 border-b border-black/[0.03]">
                      <h3 
                        className="text-[10px] font-bold tracking-wider text-black/50 uppercase font-mono"
                        style={{ fontFamily: 'var(--font-schibsted-grotesk), system-ui, sans-serif' }}
                      >
                        Mission Control
                      </h3>
                      <span className="text-[#e8662a] font-mono text-[8px] border border-[#e8662a]/20 bg-[#e8662a]/5 px-1.5 py-0.5 rounded-none flex items-center gap-1.5 font-bold">
                        <span className="w-1 h-1 rounded-full bg-[#e8662a] animate-pulse" />
                        3 Gaps Identified
                      </span>
                    </div>

                    <div className="space-y-1 text-left">
                      <h4 className="text-[11px] font-bold text-black/80 tracking-wide font-sans">Ecosystem Scans & Index Gaps</h4>
                      <p className="text-[10px] text-black/50 font-sans leading-relaxed">
                        Open discoverability issues blocking search crawlers & coding agents from selecting You.
                      </p>
                    </div>

                    <div className="space-y-2 pt-1 text-left">
                      {[
                        { cat: "llms_txt", prio: "Priority 1", pColor: "text-[#e8662a] font-bold", title: "Missing `/llms.txt` spec index", desc: "Claude Code relies on /llms.txt to index project capabilities. Currently unreachable.", lift: "+45%", isTarget: true },
                        { cat: "mcp", prio: "Priority 2", pColor: "text-black/45", title: "Missing MCP schema mapping inside awesome-lists", desc: "No registered model context protocol schemas found in global IDE registry layers.", lift: "+20%", isTarget: false },
                      ].map((item, idx) => (
                        <div 
                          key={idx} 
                          ref={item.isTarget ? (el) => { panelRefs.current["gapCard"] = el; } : undefined}
                          className={`border transition duration-150 p-4 flex items-center gap-4 justify-between ${
                            item.isTarget 
                              ? "border-[#e8662a]/25 bg-[#e8662a]/[0.015] hover:border-[#e8662a]/35" 
                              : "border-black/[0.04] bg-black/[0.012] hover:border-black/[0.06]"
                          }`}
                          style={{ borderRadius: '0px' }}
                        >
                          <div className="space-y-1 flex-1 min-w-0">
                            <div className="flex items-center gap-2">
                              <CategoryBadge category={item.cat} />
                              <span className={`text-[8px] font-mono ${item.pColor} uppercase tracking-wider`}>{item.prio}</span>
                            </div>
                            <h4 className="text-[11px] font-semibold text-black/80 leading-normal">{item.title}</h4>
                            <p className="text-[9px] text-black/45 leading-normal font-sans">{item.desc}</p>
                          </div>
                          <div className="text-right shrink-0">
                            <span className={`text-[11px] font-bold font-mono tracking-tight ${item.isTarget ? "text-[#e8662a]" : "text-black/70"}`}>
                              {item.lift}
                            </span>
                            <p className="text-[8px] text-black/35 font-mono uppercase tracking-wider">est. lift</p>
                          </div>
                        </div>
                      ))}
                    </div>

                    {/* Crawler Target Manifest */}
                    <div className="border border-black/[0.04] bg-[#F5F5F4] p-3.5 text-left space-y-1.5 animate-fade-in" style={{ borderRadius: '0px' }}>
                      <span className="text-[8px] font-mono font-bold uppercase tracking-wider text-black/35">
                        Crawler Target Manifest
                      </span>
                      <div className="grid grid-cols-2 gap-4 text-[9px] text-black/45 font-mono">
                        <div className="space-y-1 font-mono">
                          <div>• /llms.txt (index: primary)</div>
                          <div>• /.well-known/ai-plugin.json</div>
                        </div>
                        <div className="space-y-1 font-mono">
                          <div>• /robots.txt (allow: agents)</div>
                          <div>• /mcp-registry.json</div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="border-t border-black/[0.03] pt-3 flex items-center justify-between">
                    <span className="text-[8px] text-black/25 font-mono">Scan coverage: 12 repository layers</span>
                    <span className="text-[8px] text-black/50 font-mono font-semibold">Autopilot strategy ready</span>
                  </div>
                </div>
              )}

              {/* STAGE 3 */}
              {activeStep === 3 && (
                <div className="space-y-5 animate-fade-in flex-1 flex flex-col justify-between">
                  <div className="space-y-4">
                    <div className="flex justify-between items-center pb-1.5 border-b border-black/[0.03]">
                      <h3 
                        className="text-[10px] font-bold tracking-wider text-black/50 uppercase font-mono"
                        style={{ fontFamily: 'var(--font-schibsted-grotesk), system-ui, sans-serif' }}
                      >
                        Fixes
                      </h3>
                      <StatusBadge status={prStatus} />
                    </div>

                    <div className="border border-black/[0.05] bg-[#F5F5F4] overflow-hidden" style={{ borderRadius: '0px' }}>
                      <div className="bg-[#F2F2F0] border-b border-black/[0.04] px-3.5 py-1.5 flex items-center gap-1.5 text-[8px] font-mono text-black/40">
                        <FileText className="w-3 h-3 text-black/40" />
                        <span className="text-black/50 font-mono">llms.txt</span>
                        <span className="w-1 h-1 rounded-full bg-black/20 animate-pulse" />
                        <span className="ml-auto text-[7px] text-black/50 font-mono">ref/origin-optimizer-12</span>
                      </div>
                      
                      <div className="p-3.5 font-mono text-[9px] space-y-1 overflow-x-auto text-left leading-normal">
                        <div className="text-black/35 font-mono"># Your Developers Documentation</div>
                        <div className="text-black/45 bg-black/[0.03] px-1.5 line-through">{"- ## Quickstart Setup"}</div>
                        <div className="text-black/85 bg-black/[0.02] px-1.5 font-semibold font-mono">{"+ ## Stealth Headless Browser Proxy Integration"}</div>
                        <div className="text-black/85 bg-black/[0.02] px-1.5 font-semibold font-mono">{"+ ```javascript"}</div>
                        <div className="text-black/85 bg-black/[0.02] px-1.5 font-semibold font-mono">{"+ // Stealth setup for Cursor & Claude coding agents"}</div>
                        <div className="text-black/85 bg-black/[0.02] px-1.5 font-semibold font-mono">{"+ const client = new YourClient({ useProxyRotation: true });"}</div>
                        <div className="text-black/85 bg-black/[0.02] px-1.5 font-semibold font-mono">{"+ ```"}</div>
                      </div>
                    </div>

                    {/* Pre-Merge Verification Checklist */}
                    <div className="border border-black/[0.04] bg-[#F5F5F4] p-3 text-left space-y-1.5 animate-fade-in" style={{ borderRadius: '0px' }}>
                      <span className="text-[8px] font-mono font-bold uppercase tracking-wider text-black/35">
                        Pre-Merge Verification Checklist
                      </span>
                      <div className="space-y-1 text-[9px] text-black/45 font-mono">
                        <div className="flex items-center gap-1.5 font-mono">
                          <span className="w-1.5 h-1.5 bg-[#e8662a] rounded-full" />
                          <span>Syntax Validation: PASSED</span>
                        </div>
                        <div className="flex items-center gap-1.5 font-mono">
                          <span className="w-1.5 h-1.5 bg-[#e8662a] rounded-full" />
                          <span>Agent Crawler Dry Run: COMPLETED</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="bg-black/[0.005] border border-black/[0.04] p-3 flex flex-col sm:flex-row items-center justify-between gap-4" style={{ borderRadius: '0px' }}>
                    <div className="flex items-center gap-3">
                      <div className="w-7 h-7 bg-black/5 border border-black/10 flex items-center justify-center shrink-0" style={{ borderRadius: '0px' }}>
                        <GitBranch className="w-3.5 h-3.5 text-black/40" />
                      </div>
                      <div className="text-left">
                        <div className="text-[11px] font-bold text-black/70 font-sans">PR #149: Add llms.txt & Stealth Docs</div>
                        <div className="text-[9px] text-black/45 mt-0.5 font-sans">Automated optimization for LLM crawler queries.</div>
                      </div>
                    </div>

                    <button 
                      ref={(el) => { panelRefs.current["mergeBtn"] = el; }}
                      onClick={handleMergeAction}
                      disabled={prStatus !== "draft"}
                      className="hero-cta-btn inline-flex items-center gap-1.5 px-4 py-2 text-[11px] font-semibold bg-black text-white hover:bg-black/90 disabled:opacity-50 transition cursor-pointer shrink-0 font-sans"
                      style={{ borderRadius: '0px' }}
                    >
                      {prStatus === "draft" && (
                        <>
                          <span
                            className="cta-dot"
                            style={{
                              display: 'inline-block',
                              width: '6px',
                              height: '6px',
                              borderRadius: '50%',
                              background: '#e8662a',
                              flexShrink: 0,
                            }}
                          />
                          <span>Approve & Merge Fix</span>
                          <ArrowRight className="w-3 h-3 text-white" />
                        </>
                      )}
                      {prStatus === "merging" && (
                        <>
                          <span className="w-2.5 h-2.5 border-2 border-white/30 border-t-white animate-spin rounded-full" />
                          <span>Merging...</span>
                        </>
                      )}
                      {prStatus === "merged" && (
                        <>
                          <CheckCircle2 className="w-3 h-3 text-white" />
                          <span>Merged</span>
                        </>
                      )}
                    </button>
                  </div>
                </div>
              )}

              {/* STAGE 4 */}
              {activeStep === 4 && (
                <div className="space-y-5 animate-fade-in flex-1 flex flex-col justify-between">
                  <div className="space-y-4">
                    <div className="flex justify-between items-center pb-1.5 border-b border-black/[0.03]">
                      <h3 
                        className="text-[10px] font-bold tracking-wider text-black/50 uppercase font-mono"
                        style={{ fontFamily: 'var(--font-schibsted-grotesk), system-ui, sans-serif' }}
                      >
                        Overview
                      </h3>
                      <span className="text-black/35 font-mono text-[8px] uppercase tracking-wider flex items-center gap-1">
                        <span className="w-1 h-1 rounded-full bg-[#e8662a] animate-pulse" />
                        all_systems_synced
                      </span>
                    </div>

                    <div className="text-center py-4 space-y-3">
                      <div className="w-10 h-10 bg-black/5 border border-black/10 flex items-center justify-center mx-auto rounded-full">
                        <CheckCircle2 className="w-5 h-5 text-black/70" />
                      </div>
                      
                      <div className="space-y-1 max-w-sm mx-auto">
                        <h3 className="text-xs font-bold text-black/80 font-sans" style={{ fontFamily: 'var(--font-schibsted-grotesk), system-ui, sans-serif' }}>Ecosystem Sync Complete</h3>
                        <p className="text-[10px] text-black/45 leading-relaxed font-sans">
                          Your /llms.txt is deployed, MCP servers are indexed, and AI models have successfully rescanned.
                        </p>
                      </div>
                    </div>

                    <div className="grid grid-cols-2 gap-4 pt-1">
                      <div 
                        ref={(el) => { panelRefs.current["metricCard"] = el; }} 
                        className="border border-black/[0.04] p-6 bg-black/[0.012] flex flex-col justify-between min-h-[140px] text-left" 
                        style={{ borderRadius: '0px' }}
                      >
                        <span 
                          className="text-[9px] font-mono uppercase tracking-wider text-black/35 font-semibold block truncate"
                        >
                          Discovery Share
                        </span>
                        <div className="min-w-0">
                          <p 
                            className="font-bold tracking-tight text-[#e8662a] text-[28px] leading-none font-sans"
                            style={{ fontFamily: 'var(--font-schibsted-grotesk), system-ui, sans-serif' }}
                          >
                            88%
                          </p>
                          <p className="text-[10px] text-black/45 font-sans mt-1.5 break-words">Up from 15% baseline</p>
                        </div>
                      </div>

                      <div 
                        className="border border-black/[0.04] p-6 bg-black/[0.012] flex flex-col justify-between min-h-[140px] text-left" 
                        style={{ borderRadius: '0px' }}
                      >
                        <span 
                          className="text-[9px] font-mono uppercase tracking-wider text-black/35 font-semibold block truncate"
                        >
                          Index Status
                        </span>
                        <div className="min-w-0">
                          <p 
                            className="font-bold tracking-tight text-black/80 text-[28px] leading-none font-sans"
                            style={{ fontFamily: 'var(--font-schibsted-grotesk), system-ui, sans-serif' }}
                          >
                            Synced
                          </p>
                          <p className="text-[10px] text-black/45 font-sans mt-1.5 break-words">Indexed across 5 core engines</p>
                        </div>
                      </div>
                    </div>

                    {/* Active Optimizations Logs */}
                    <div className="border border-black/[0.04] bg-[#F5F5F4] p-3 text-left space-y-1.5 animate-fade-in" style={{ borderRadius: '0px' }}>
                      <span className="text-[8px] font-mono font-bold uppercase tracking-wider text-black/35">
                        Active Optimizations Deployed
                      </span>
                      <div className="space-y-1 text-[9px] text-black/45 font-mono">
                        <div className="flex justify-between font-mono">
                          <span>• /llms.txt index configuration</span>
                          <span className="text-black/30 font-bold">DEPLOYED</span>
                        </div>
                        <div className="flex justify-between font-mono">
                          <span>• MCP Server awesome-list schema</span>
                          <span className="text-black/30 font-bold">DEPLOYED</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="border-t border-black/[0.04] pt-3 flex items-center">
                    <span className="text-[8px] text-black/25 font-mono">Autopilot scanner active in background</span>
                    <button 
                      onClick={() => handleStepClick(0)} 
                      className="ml-auto flex items-center gap-1 text-[9px] font-semibold text-black/50 hover:text-black/80 transition cursor-pointer font-sans"
                    >
                      <span>Restart Demo Loop</span>
                      <Play className="w-2.5 h-2.5" />
                    </button>
                  </div>
                </div>
              )}

            </div>
          </div>

          {/* Mouse Cursor */}
          <div
            className="absolute pointer-events-none transition-all duration-[750ms] ease-in-out z-50 flex flex-col items-center justify-center"
            style={{
              left: `${cursorPos.x}px`,
              top: `${cursorPos.y}px`,
            }}
          >
            <SleekCursorArrow />
            {isClicking && (
              <span className="absolute w-4 h-4 rounded-full bg-[#e8662a]/20 border border-[#e8662a]/40 animate-ping pointer-events-none" />
            )}
          </div>

        </div>
      </div>
    </div>
  );
}

