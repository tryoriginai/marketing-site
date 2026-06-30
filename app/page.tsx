"use client";

import Link from "next/link";
import { ExplainerMockup } from "@/components/explainer-mockup";
import { VisibilityGraph } from "@/components/visibility-graph";
import { SignalArchitecture } from "@/components/signal-architecture";
import { CtaButton } from "@/components/cta-button";
import { FaqAccordion } from "@/components/faq-accordion";
import { SmoothScroll } from "@/components/smooth-scroll";
import { SurfaceIcon } from "@/components/surface-icon";

export default function Home() {
return (
    <div
      className="min-h-screen flex flex-col relative overflow-x-hidden"
      style={{ background: '#F5F5F4', color: '#0a0a0a' }}
    >
      <SmoothScroll />
      <style dangerouslySetInnerHTML={{ __html: `
        html, body {
          background-color: #F5F5F4 !important;
        }
        .hero-grid-bg {
          position: absolute;
          inset: 0;
          pointer-events: none;
          overflow: hidden;
        }
        .hero-col-line {
          position: absolute;
          bottom: 0;
          width: 1px;
          background: rgba(0,0,0,0.035);
        }
        .hero-col-fill {
          position: absolute;
          background: rgba(255,255,255,0.55);
          transition: transform 0.8s cubic-bezier(0.16, 1, 0.3, 1), background-color 0.8s cubic-bezier(0.16, 1, 0.3, 1);
        }
        .hero-border-t {
          border-top: 1px solid rgba(0,0,0,0.03);
        }
        .hero-border-b {
          border-bottom: 1px solid rgba(0,0,0,0.03);
        }
        /* Background Column hover animation triggers when hero-cta-btn is hovered */
        .hero-outer-container:has(.hero-cta-btn:hover) .hero-col-fill-odd {
          transform: translateY(-16px);
          background: rgba(255, 255, 255, 0.85);
        }
        .hero-outer-container:has(.hero-cta-btn:hover) .hero-col-fill-even {
          transform: translateY(16px);
          background: rgba(255, 255, 255, 0.85);
        }
        .cta-dot {
          transition: box-shadow 0.3s ease, transform 0.3s ease;
        }
        .hero-cta-btn:hover .cta-dot {
          box-shadow: 0 0 3px 0.5px rgba(232, 102, 42, 0.4);
          transform: scale(1.05);
        }
        .system-module-light {
          transition: border-color 0.3s ease, box-shadow 0.3s ease;
        }
        .system-module-light:hover {
          border-color: rgba(0, 0, 0, 0.12) !important;
          box-shadow: 0 10px 30px -10px rgba(0, 0, 0, 0.04) !important;
        }
        .fading-dot-grid {
          position: absolute;
          inset: 0;
          background-image: radial-gradient(circle, rgba(0, 0, 0, 0.02) 1.2px, transparent 1.2px);
          background-size: 24px 24px;
          mask-image: radial-gradient(circle at center, black 40%, transparent 80%);
          -webkit-mask-image: radial-gradient(circle at center, black 40%, transparent 80%);
          pointer-events: none;
          z-index: 0;
        }
      `}} />

      <header className="relative top-0 left-0 right-0 w-full px-8 py-5 flex items-center justify-between z-20"
        style={{ borderBottom: '1px solid rgba(0,0,0,0.03)' }}
      >
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 hover:opacity-70 transition-opacity duration-200">
          <img
            src="/logo.svg"
            alt="Origin Logo"
            className="w-5 h-5 object-contain"
            style={{ filter: 'invert(1)' }}
          />
          <span
            className="font-semibold text-sm tracking-tight"
            style={{ color: '#0a0a0a', fontFamily: 'var(--font-geist-sans), system-ui, sans-serif' }}
          >
            Origin
          </span>
        </Link>

        <nav className="hidden md:flex items-center gap-8 absolute left-1/2 -translate-x-1/2">
          <a
            href="#features"
            className="text-[13px] font-medium transition-colors duration-200"
            style={{ color: 'rgba(0,0,0,0.5)', fontFamily: 'var(--font-geist-sans), system-ui, sans-serif' }}
          >
            About
          </a>
          <a
            href="#pricing"
            className="text-[13px] font-medium transition-colors duration-200"
            style={{ color: 'rgba(0,0,0,0.5)', fontFamily: 'var(--font-geist-sans), system-ui, sans-serif' }}
          >
            Pricing
          </a>
          <a
            href="#workflow"
            className="text-[13px] font-medium transition-colors duration-200"
            style={{ color: 'rgba(0,0,0,0.5)', fontFamily: 'var(--font-geist-sans), system-ui, sans-serif' }}
          >
            Features
          </a>
        </nav>

        {/* Actions */}
        <div className="flex items-center gap-6">
          <Link
            href="/login"
            className="text-[13px] font-medium transition-colors duration-200"
            style={{ color: 'rgba(0,0,0,0.5)', fontFamily: 'var(--font-geist-sans), system-ui, sans-serif' }}
          >
            Login
          </Link>
          <CtaButton size="sm" />
        </div>
      </header>

      <main className="hero-outer-container flex-1 flex flex-col relative z-10">
        <div className="relative flex flex-col items-center justify-center text-center" style={{ minHeight: '82vh', paddingTop: '40px', paddingBottom: '160px' }}>

          {/* Grid column background */}
          <div className="hero-grid-bg">
            {/* Vertical column divider lines */}
            <div className="hero-col-line" style={{ left: '17%', height: '100%' }} />
            <div className="hero-col-line" style={{ left: '34%', height: '100%' }} />
            <div className="hero-col-line" style={{ left: '51%', height: '100%' }} />
            <div className="hero-col-line" style={{ left: '68%', height: '100%' }} />
            <div className="hero-col-line" style={{ left: '85%', height: '100%' }} />

            {/* Column 1 (0% to 17%) - open top-border line at 38% */}
            <div className="hero-col-fill hero-col-fill-odd hero-border-t" style={{ left: '0%', width: '17%', top: '38%', bottom: '0' }} />
            {/* Column 2 (17% to 34%) - closed rectangle from 28% to 78% */}
            <div className="hero-col-fill hero-col-fill-even hero-border-t hero-border-b" style={{ left: '17%', width: '17%', top: '28%', bottom: '22%' }} />
            {/* Column 3 (34% to 50%) - open top-border line at 50% */}
            <div className="hero-col-fill hero-col-fill-odd hero-border-t" style={{ left: '34%', width: '17%', top: '50%', bottom: '0' }} />
            {/* Column 4 (50% to 68%) - closed rectangle from 33% to 63% */}
            <div className="hero-col-fill hero-col-fill-even hero-border-t hero-border-b" style={{ left: '51%', width: '17%', top: '33%', bottom: '37%' }} />
            {/* Column 5 (68% to 85%) - open top-border line at 25% */}
            <div className="hero-col-fill hero-col-fill-odd hero-border-t" style={{ left: '68%', width: '17%', top: '25%', bottom: '0' }} />
            {/* Column 6 (85% to 100%) - open top-border line at 38% */}
            <div className="hero-col-fill hero-col-fill-even hero-border-t" style={{ left: '85%', width: '15%', top: '38%', bottom: '0' }} />
          </div>

          {/* Hero Content */}
          <div className="relative z-10 flex flex-col items-center" style={{ maxWidth: '780px', margin: '0 auto', padding: '0 24px' }}>
            {/* Hero Headline */}
            <h1
              className="landing-fade-in text-[30px] sm:text-[36px] md:text-[48px] lg:text-[62px]"
              style={{
                fontFamily: 'var(--font-schibsted-grotesk), system-ui, sans-serif',
                fontWeight: 400,
                lineHeight: 1.12,
                letterSpacing: '-0.05em',
                color: '#0a0a0a',
                marginBottom: '52px',
              }}
            >
              <span className="block whitespace-normal md:whitespace-nowrap">Become the default tool for</span>
              <span className="block whitespace-normal md:whitespace-nowrap">coding agents &amp; LLMs</span>
            </h1>

            {/* CTA */}
            <div className="landing-fade-in-delay-1">
              <CtaButton size="lg" />
            </div>
          </div>
        </div>

        {/* ═══ Product Explainer Mockup ═══ */}
        <div id="workflow" style={{ marginTop: '-80px', position: 'relative', zIndex: 12 }}>
          <div 
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none z-0" 
            style={{
              width: '80%',
              height: '80%',
              background: 'radial-gradient(circle, rgba(232, 102, 42, 0.02) 0%, transparent 60%)',
              filter: 'blur(80px)',
            }}
          />
          <div className="relative z-10">
            <ExplainerMockup />
          </div>
        </div>

      {/* ═══ Capabilities — System Modules ═══ */}
      <section id="features" className="relative max-w-[1280px] w-full mx-auto px-6 py-28 md:py-36 space-y-20 overflow-hidden">
        <div className="fading-dot-grid" />
        <div className="relative z-10 flex flex-col md:flex-row md:items-end justify-between gap-8">
          <div className="space-y-4">
            <div className="inline-flex items-center gap-1.5 px-2.5 py-1 bg-black/[0.03] border border-black/[0.04] rounded-none select-none">
              <span className="w-1 h-1 rounded-full bg-[#e8662a] shrink-0" />
              <span className="text-[9px] font-semibold font-sans uppercase tracking-[0.08em] text-black/60 leading-none">
                System Modules
              </span>
            </div>
            <h2
              className="text-3xl sm:text-[42px] font-normal tracking-[-0.025em] leading-[1.1]"
              style={{ color: '#0a0a0a', fontFamily: 'var(--font-schibsted-grotesk), system-ui, sans-serif', letterSpacing: '-0.05em' }}
            >
              AI discoverability engine.
            </h2>
          </div>
          <p
            className="text-[15px] max-w-xs leading-relaxed font-sans"
            style={{ color: 'rgba(0,0,0,0.50)' }}
          >
            Everything you need to secure your recommendation share inside modern AI tools.
          </p>
        </div>

        <div className="relative z-10 grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Module SURFACE-01 */}
          <div
            className="group relative overflow-hidden p-7 space-y-6 flex flex-col justify-between min-h-[260px] border transition-all duration-300 hover:border-[#e8662a]/20 hover:bg-[#FDFDFD]"
            style={{
              borderColor: 'rgba(0, 0, 0, 0.05)',
              background: '#ffffff',
              borderRadius: '0px'
            }}
          >
            {/* Top border sweep animation */}
            <div className="absolute top-0 left-0 right-0 h-[2px] bg-transparent group-hover:bg-[#e8662a] transition-all duration-300" />
            
            <div className="space-y-5">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-1.5">
                  <span className="w-1 h-1 rounded-full bg-[#e8662a] opacity-60 group-hover:opacity-100 transition-opacity duration-300" />
                  <span
                    className="text-[9px] font-semibold uppercase tracking-[0.08em] font-mono transition-colors duration-300 text-black/35 group-hover:text-black/50"
                  >
                    SURFACE-01
                  </span>
                </div>
                <div
                  className="w-8 h-8 flex items-center justify-center border transition-all duration-300 bg-black/[0.01] border-black/[0.05] group-hover:bg-[#e8662a]/[0.04] group-hover:border-[#e8662a]/15"
                  style={{ borderRadius: '0px' }}
                >
                  <svg className="w-4 h-4 text-black/50 group-hover:text-[#e8662a] transition-colors duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.637 10.637z" />
                  </svg>
                </div>
              </div>
              <div className="space-y-2.5">
                <h3 
                  className="text-[16px] font-semibold transition-colors duration-300 text-black/85 group-hover:text-black" 
                  style={{ fontFamily: 'var(--font-schibsted-grotesk), system-ui, sans-serif' }}
                >
                  Prompt Probing
                </h3>
                <p className="text-[13px] leading-relaxed font-sans text-black/45 group-hover:text-black/60 transition-colors duration-300">
                  Continuous simulation of developer questions in Cursor, Claude Code, and ChatGPT Search.
                </p>
              </div>
            </div>
            <div
              className="text-[9px] font-mono pt-4 border-t transition-colors duration-300 text-black/35 border-black/[0.04] group-hover:text-black/50"
            >
              // Coding Agents / AI Search / Chat
            </div>
          </div>

          {/* Module SURFACE-02 */}
          <div
            className="group relative overflow-hidden p-7 space-y-6 flex flex-col justify-between min-h-[260px] border transition-all duration-300 hover:border-[#e8662a]/20 hover:bg-[#FDFDFD]"
            style={{
              borderColor: 'rgba(0, 0, 0, 0.05)',
              background: '#ffffff',
              borderRadius: '0px'
            }}
          >
            {/* Top border sweep animation */}
            <div className="absolute top-0 left-0 right-0 h-[2px] bg-transparent group-hover:bg-[#e8662a] transition-all duration-300" />

            <div className="space-y-5">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-1.5">
                  <span className="w-1 h-1 rounded-full bg-[#e8662a] opacity-60 group-hover:opacity-100 transition-opacity duration-300" />
                  <span
                    className="text-[9px] font-semibold uppercase tracking-[0.08em] font-mono transition-colors duration-300 text-black/35 group-hover:text-black/50"
                  >
                    SURFACE-02
                  </span>
                </div>
                <div
                  className="w-8 h-8 flex items-center justify-center border transition-all duration-300 bg-black/[0.01] border-black/[0.05] group-hover:bg-[#e8662a]/[0.04] group-hover:border-[#e8662a]/15"
                  style={{ borderRadius: '0px' }}
                >
                  <svg className="w-4 h-4 text-black/50 group-hover:text-[#e8662a] transition-colors duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <circle cx="12" cy="5" r="2.5" />
                    <circle cx="5" cy="18" r="2.5" />
                    <circle cx="19" cy="18" r="2.5" />
                    <path d="M12 7.5L5.8 15.5M12 7.5l6.2 8M6.5 18h10" stroke="currentColor" strokeWidth={1.5} />
                  </svg>
                </div>
              </div>
              <div className="space-y-2.5">
                <h3 
                  className="text-[16px] font-semibold transition-colors duration-300 text-black/85 group-hover:text-black" 
                  style={{ fontFamily: 'var(--font-schibsted-grotesk), system-ui, sans-serif' }}
                >
                  Ecosystem Mapping
                </h3>
                <p className="text-[13px] leading-relaxed font-sans text-black/45 group-hover:text-black/60 transition-colors duration-300">
                  Crawl registries, packages, and registry directories to track where AI discovers your brand.
                </p>
              </div>
            </div>
            <div
              className="text-[9px] font-mono pt-4 border-t transition-colors duration-300 text-black/35 border-black/[0.04] group-hover:text-black/50"
            >
              // Registries / Packages / Directories
            </div>
          </div>

          {/* Module SURFACE-03 */}
          <div
            className="group relative overflow-hidden p-7 space-y-6 flex flex-col justify-between min-h-[260px] border transition-all duration-300 hover:border-[#e8662a]/20 hover:bg-[#FDFDFD]"
            style={{
              borderColor: 'rgba(0, 0, 0, 0.05)',
              background: '#ffffff',
              borderRadius: '0px'
            }}
          >
            {/* Top border sweep animation */}
            <div className="absolute top-0 left-0 right-0 h-[2px] bg-transparent group-hover:bg-[#e8662a] transition-all duration-300" />

            <div className="space-y-5">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-1.5">
                  <span className="w-1 h-1 rounded-full bg-[#e8662a] opacity-60 group-hover:opacity-100 transition-opacity duration-300" />
                  <span
                    className="text-[9px] font-semibold uppercase tracking-[0.08em] font-mono transition-colors duration-300 text-black/35 group-hover:text-black/50"
                  >
                    SURFACE-03
                  </span>
                </div>
                <div
                  className="w-8 h-8 flex items-center justify-center border transition-all duration-300 bg-black/[0.01] border-black/[0.05] group-hover:bg-[#e8662a]/[0.04] group-hover:border-[#e8662a]/15"
                  style={{ borderRadius: '0px' }}
                >
                  <svg className="w-4 h-4 text-black/50 group-hover:text-[#e8662a] transition-colors duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 6.75L22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3l-4.5 16.5" />
                  </svg>
                </div>
              </div>
              <div className="space-y-2.5">
                <h3 
                  className="text-[16px] font-semibold transition-colors duration-300 text-black/85 group-hover:text-black" 
                  style={{ fontFamily: 'var(--font-schibsted-grotesk), system-ui, sans-serif' }}
                >
                  Auto PR Engine
                </h3>
                <p className="text-[13px] leading-relaxed font-sans text-black/45 group-hover:text-black/60 transition-colors duration-300">
                  Receive automated documentation and llms.txt pull requests to optimize registry indexing.
                </p>
              </div>
            </div>
            <div
              className="text-[9px] font-mono pt-4 border-t transition-colors duration-300 text-black/35 border-black/[0.04] group-hover:text-black/50"
            >
              // GitHub / Documentation / llms.txt
            </div>
          </div>
        </div>
      </section>

      {/* ═══ Supported Surfaces — Platforms Integrations ═══ */}

      <section className="max-w-[1280px] w-full mx-auto px-6 py-28 md:py-36 grid grid-cols-1 lg:grid-cols-2 gap-20 items-stretch">
        <div className="flex flex-col gap-6 lg:gap-0 lg:justify-between lg:h-full lg:py-0 text-left">
          <div className="space-y-5">
            <div className="inline-flex items-center gap-1.5 px-2.5 py-1 bg-black/[0.03] border border-black/[0.04] rounded-none select-none">
              <span className="w-1 h-1 rounded-full bg-[#e8662a] shrink-0" />
              <span className="text-[9px] font-semibold font-sans uppercase tracking-[0.08em] text-black/60 leading-none">
                Generative Engine Optimization
              </span>
            </div>
            <h2
              className="text-3xl sm:text-[42px] font-normal tracking-[-0.025em] leading-[1.1]"
              style={{ color: '#0a0a0a', fontFamily: 'var(--font-schibsted-grotesk), system-ui, sans-serif', letterSpacing: '-0.05em' }}
            >
              Where search clicks end, AI recommendations begin.
            </h2>
          </div>
          <p
            className="text-[14px] leading-relaxed max-w-md font-sans"
            style={{ color: 'rgba(0,0,0,0.50)' }}
          >
            Developers write queries directly in Claude Code or Cursor. If your documentation or MCP endpoints aren&apos;t optimized, you do not exist in the output buffer.
          </p>
        </div>

        {/* Research Report Metrics */}
        <div className="grid grid-cols-2 gap-px" style={{ background: 'rgba(0,0,0,0.06)', overflow: 'hidden' }}>
          <div className="p-7 space-y-1.5" style={{ background: '#ffffff' }}>
            <div className="text-[44px] font-normal tracking-tight" style={{ color: '#e8662a', fontFamily: 'var(--font-schibsted-grotesk), system-ui, sans-serif', letterSpacing: '-0.04em', lineHeight: 1 }}>82%</div>
            <div className="text-[10px] font-semibold uppercase tracking-[0.08em]" style={{ color: 'rgba(0,0,0,0.40)' }}>IDE Agent Share</div>
            <p className="text-[11px] leading-snug font-sans" style={{ color: 'rgba(0,0,0,0.50)' }}>Developers using AI agents inside editors daily.</p>
          </div>
          <div className="p-7 space-y-1.5" style={{ background: '#ffffff' }}>
            <div className="text-[44px] font-normal tracking-tight" style={{ color: '#0a0a0a', fontFamily: 'var(--font-schibsted-grotesk), system-ui, sans-serif', letterSpacing: '-0.04em', lineHeight: 1 }}>3.2x</div>
            <div className="text-[10px] font-semibold uppercase tracking-[0.08em]" style={{ color: 'rgba(0,0,0,0.40)' }}>Discovery Lift</div>
            <p className="text-[11px] leading-snug font-sans" style={{ color: 'rgba(0,0,0,0.50)' }}>Increase in organic mentions when /llms.txt is initialized.</p>
          </div>
          <div className="p-7 space-y-1.5" style={{ background: '#ffffff' }}>
            <div className="text-[44px] font-normal tracking-tight" style={{ color: '#0a0a0a', fontFamily: 'var(--font-schibsted-grotesk), system-ui, sans-serif', letterSpacing: '-0.04em', lineHeight: 1 }}>&lt; 3.0s</div>
            <div className="text-[10px] font-semibold uppercase tracking-[0.08em]" style={{ color: 'rgba(0,0,0,0.40)' }}>Latency Budget</div>
            <p className="text-[11px] leading-snug font-sans" style={{ color: 'rgba(0,0,0,0.50)' }}>Maximum fetch delay before agents ignore repository registry schemas.</p>
          </div>
          <div className="p-7 space-y-1.5" style={{ background: '#ffffff' }}>
            <div className="text-[44px] font-normal tracking-tight" style={{ color: '#0a0a0a', fontFamily: 'var(--font-schibsted-grotesk), system-ui, sans-serif', letterSpacing: '-0.04em', lineHeight: 1 }}>0%</div>
            <div className="text-[10px] font-semibold uppercase tracking-[0.08em]" style={{ color: 'rgba(0,0,0,0.40)' }}>Organic Cookies</div>
            <p className="text-[11px] leading-snug font-sans" style={{ color: 'rgba(0,0,0,0.50)' }}>Mentions determined entirely by documentation context matching.</p>
          </div>
        </div>
      </section>

      {/* ═══ How It Works — Signal Routing Diagram ═══ */}
      <section className="max-w-[1280px] w-full mx-auto px-6 py-28 md:py-36 space-y-16">
        <div className="space-y-4 max-w-lg">
          <div className="inline-flex items-center gap-1.5 px-2.5 py-1 bg-black/[0.03] border border-black/[0.04] rounded-none select-none">
            <span className="w-1 h-1 rounded-full bg-[#e8662a] shrink-0" />
            <span className="text-[9px] font-semibold font-sans uppercase tracking-[0.08em] text-black/60 leading-none">
              Signal Architecture
            </span>
          </div>
          <h2
            className="text-3xl sm:text-[42px] font-normal tracking-[-0.025em] leading-[1.1]"
            style={{ color: '#0a0a0a', fontFamily: 'var(--font-schibsted-grotesk), system-ui, sans-serif', letterSpacing: '-0.05em' }}
          >
            From data to visibility growth.
          </h2>
        </div>

        {/* Routing Diagram */}
        <SignalArchitecture />
      </section>

      <section id="pricing" className="max-w-[1280px] w-full mx-auto px-6 py-28 md:py-36 space-y-16">
        <div className="text-center space-y-4">
          <div className="inline-flex items-center gap-1.5 px-2.5 py-1 bg-black/[0.03] border border-black/[0.04] rounded-none select-none">
            <span className="w-1 h-1 rounded-full bg-[#e8662a] shrink-0" />
            <span className="text-[9px] font-semibold font-sans uppercase tracking-[0.08em] text-black/60 leading-none">
              Pricing Schemas
            </span>
          </div>
          <h2
            className="text-3xl sm:text-[42px] font-normal tracking-[-0.025em]"
            style={{ color: '#0a0a0a', fontFamily: 'var(--font-schibsted-grotesk), system-ui, sans-serif', letterSpacing: '-0.05em' }}
          >
            Simple, transparent pricing.
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
          {/* Starter */}
          <div
            className="p-6 space-y-6 flex flex-col justify-between relative overflow-hidden border"
            style={{ borderColor: 'rgba(0,0,0,0.05)', background: '#ffffff', borderRadius: '0px' }}
          >
            <div className="space-y-5">
              <div className="space-y-2">
                <h3 className="text-lg font-bold" style={{ color: '#0a0a0a', fontFamily: 'var(--font-schibsted-grotesk), system-ui, sans-serif' }}>Starter</h3>
                <p className="text-[12px] min-h-[32px] font-sans" style={{ color: 'rgba(0,0,0,0.50)' }}>See how AI agents recommend your product.</p>
              </div>
              <div className="flex items-baseline gap-1 py-1">
                <span className="text-[38px] font-normal tracking-tight" style={{ color: '#0a0a0a', fontFamily: 'var(--font-schibsted-grotesk), system-ui, sans-serif', letterSpacing: '-0.04em' }}>$99</span>
                <span className="text-[12px]" style={{ color: 'rgba(0,0,0,0.40)' }}>/month</span>
              </div>
              <div className="pt-4 space-y-3 text-[12px] border-t" style={{ borderColor: 'rgba(0,0,0,0.04)' }}>
                <ul className="space-y-2.5 font-sans" style={{ color: 'rgba(0,0,0,0.50)' }}>
                  <li className="flex items-start gap-2">
                    <svg className="w-3.5 h-3.5 flex-shrink-0 mt-0.5" style={{ color: '#e8662a' }} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                    </svg>
                    <span>75 prompts / month</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <svg className="w-3.5 h-3.5 flex-shrink-0 mt-0.5" style={{ color: '#e8662a' }} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                    </svg>
                    <span>Coding Agents included</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <svg className="w-3.5 h-3.5 flex-shrink-0 mt-0.5" style={{ color: '#e8662a' }} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                    </svg>
                    <span>Weekly run frequency</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <svg className="w-3.5 h-3.5 flex-shrink-0 mt-0.5" style={{ color: '#e8662a' }} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                    </svg>
                    <span>AI Judge scoring</span>
                  </li>
                </ul>
              </div>
            </div>
            <div className="pt-4">
              <CtaButton
                href="/checkout?plan=starter"
                variant="secondary"
                showDot={false}
                size="md"
                className="w-full justify-center text-[12px]"
              />
            </div>
          </div>

          {/* Growth (Featured) */}
          <div
            className="p-6 space-y-6 flex flex-col justify-between relative overflow-hidden border"
            style={{ borderColor: 'rgba(0,0,0,0.15)', background: '#ffffff', borderRadius: '0px' }}
          >
            <div
              className="absolute top-3 right-3 inline-block px-2 py-0.5 text-[8px] font-bold uppercase tracking-[0.08em]"
              style={{ background: '#e8662a', color: '#ffffff' }}
            >
              Most Popular
            </div>
            <div className="space-y-5">
              <div className="space-y-2">
                <h3 className="text-lg font-bold" style={{ color: '#0a0a0a', fontFamily: 'var(--font-schibsted-grotesk), system-ui, sans-serif' }}>Growth</h3>
                <p className="text-[12px] min-h-[32px] font-sans" style={{ color: 'rgba(0,0,0,0.50)' }}>Understand why competitors win and generate fixes.</p>
              </div>
              <div className="flex items-baseline gap-1 py-1">
                <span className="text-[38px] font-normal tracking-tight" style={{ color: '#0a0a0a', fontFamily: 'var(--font-schibsted-grotesk), system-ui, sans-serif', letterSpacing: '-0.04em' }}>$299</span>
                <span className="text-[12px]" style={{ color: 'rgba(0,0,0,0.40)' }}>/month</span>
              </div>
              <div className="pt-4 space-y-3 text-[12px] border-t" style={{ borderColor: 'rgba(0,0,0,0.04)' }}>
                <ul className="space-y-2.5 font-sans" style={{ color: 'rgba(0,0,0,0.50)' }}>
                  <li className="flex items-start gap-2">
                    <svg className="w-3.5 h-3.5 flex-shrink-0 mt-0.5" style={{ color: '#e8662a' }} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                    </svg>
                    <span>300 prompts / month</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <svg className="w-3.5 h-3.5 flex-shrink-0 mt-0.5" style={{ color: '#e8662a' }} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                    </svg>
                    <span>Bi-weekly run frequency</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <svg className="w-3.5 h-3.5 flex-shrink-0 mt-0.5" style={{ color: '#e8662a' }} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                    </svg>
                    <span className="font-semibold" style={{ color: '#0a0a0a' }}>Recommendation Replay</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <svg className="w-3.5 h-3.5 flex-shrink-0 mt-0.5" style={{ color: '#e8662a' }} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                    </svg>
                    <span className="font-semibold" style={{ color: '#0a0a0a' }}>Action Engine (GitHub PRs)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <svg className="w-3.5 h-3.5 flex-shrink-0 mt-0.5" style={{ color: '#e8662a' }} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                    </svg>
                    <span>Slack & Discord workflows</span>
                  </li>
                </ul>
              </div>
            </div>
            <div className="pt-4">
              <CtaButton
                href="/checkout?plan=growth"
                variant="primary"
                size="md"
                className="w-full justify-center text-[12px]"
              />
            </div>
          </div>

          {/* Scale */}
          <div
            className="p-6 space-y-6 flex flex-col justify-between relative overflow-hidden border"
            style={{ borderColor: 'rgba(0,0,0,0.05)', background: '#ffffff', borderRadius: '0px' }}
          >
            <div className="space-y-5">
              <div className="space-y-2">
                <h3 className="text-lg font-bold" style={{ color: '#0a0a0a', fontFamily: 'var(--font-schibsted-grotesk), system-ui, sans-serif' }}>Scale</h3>
                <p className="text-[12px] min-h-[32px] font-sans" style={{ color: 'rgba(0,0,0,0.50)' }}>Continuously improve recommendation share.</p>
              </div>
              <div className="flex items-baseline gap-1 py-1">
                <span className="text-[38px] font-normal tracking-tight" style={{ color: '#0a0a0a', fontFamily: 'var(--font-schibsted-grotesk), system-ui, sans-serif', letterSpacing: '-0.04em' }}>$1,499</span>
                <span className="text-[12px]" style={{ color: 'rgba(0,0,0,0.40)' }}>/month</span>
              </div>
              <div className="pt-4 space-y-3 text-[12px] border-t" style={{ borderColor: 'rgba(0,0,0,0.04)' }}>
                <ul className="space-y-2.5 font-sans" style={{ color: 'rgba(0,0,0,0.50)' }}>
                  <li className="flex items-start gap-2">
                    <svg className="w-3.5 h-3.5 flex-shrink-0 mt-0.5" style={{ color: '#e8662a' }} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                    </svg>
                    <span>1,000 prompts / month</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <svg className="w-3.5 h-3.5 flex-shrink-0 mt-0.5" style={{ color: '#e8662a' }} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                    </svg>
                    <span>Daily / On-Demand frequency</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <svg className="w-3.5 h-3.5 flex-shrink-0 mt-0.5" style={{ color: '#e8662a' }} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                    </svg>
                    <span>Unlimited repos & competitors</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <svg className="w-3.5 h-3.5 flex-shrink-0 mt-0.5" style={{ color: '#e8662a' }} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                    </svg>
                    <span>Action Engine autopilot</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <svg className="w-3.5 h-3.5 flex-shrink-0 mt-0.5" style={{ color: '#e8662a' }} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                    </svg>
                    <span>1-on-1 engineer Slack support</span>
                  </li>
                </ul>
              </div>
            </div>
            <div className="pt-4">
              <CtaButton
                href="/checkout?plan=scale"
                variant="secondary"
                showDot={false}
                size="md"
                className="w-full justify-center text-[12px]"
              />
            </div>
          </div>

          {/* Enterprise */}
          <div
            className="p-6 space-y-6 flex flex-col justify-between relative overflow-hidden border"
            style={{ borderColor: 'rgba(0,0,0,0.05)', background: '#ffffff', borderRadius: '0px' }}
          >
            <div className="space-y-5">
              <div className="space-y-2">
                <h3 className="text-lg font-bold" style={{ color: '#0a0a0a', fontFamily: 'var(--font-schibsted-grotesk), system-ui, sans-serif' }}>Enterprise</h3>
                <p className="text-[12px] min-h-[32px] font-sans" style={{ color: 'rgba(0,0,0,0.50)' }}>Custom models, security, and dedicated support.</p>
              </div>
              <div className="flex items-baseline gap-1 py-1">
                <span className="text-[38px] font-normal tracking-tight" style={{ color: '#0a0a0a', fontFamily: 'var(--font-schibsted-grotesk), system-ui, sans-serif', letterSpacing: '-0.04em' }}>Custom</span>
              </div>
              <div className="pt-4 space-y-3 text-[12px] border-t" style={{ borderColor: 'rgba(0,0,0,0.04)' }}>
                <ul className="space-y-2.5 font-sans" style={{ color: 'rgba(0,0,0,0.50)' }}>
                  <li className="flex items-start gap-2">
                    <svg className="w-3.5 h-3.5 flex-shrink-0 mt-0.5" style={{ color: '#e8662a' }} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                    </svg>
                    <span>Custom models & limits</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <svg className="w-3.5 h-3.5 flex-shrink-0 mt-0.5" style={{ color: '#e8662a' }} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                    </svg>
                    <span>Self-hosted sandboxes</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <svg className="w-3.5 h-3.5 flex-shrink-0 mt-0.5" style={{ color: '#e8662a' }} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                    </svg>
                    <span>Continuous Training Loop</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <svg className="w-3.5 h-3.5 flex-shrink-0 mt-0.5" style={{ color: '#e8662a' }} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                    </svg>
                    <span>Jira, Linear & GitLab integrations</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <svg className="w-3.5 h-3.5 flex-shrink-0 mt-0.5" style={{ color: '#e8662a' }} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                    </svg>
                    <span>SLA-backed support team</span>
                  </li>
                </ul>
              </div>
            </div>
            <div className="pt-4">
              <CtaButton
                href="mailto:team@tryorigin.ai"
                variant="secondary"
                showDot={false}
                size="md"
                className="w-full justify-center text-[12px]"
              >
                Contact Us
              </CtaButton>
            </div>
          </div>
        </div>

        <p className="text-[10px] text-center font-sans" style={{ color: 'rgba(0,0,0,0.40)' }}>
          Secured via Dodo Payments. Cancel anytime.
        </p>
      </section>

      {/* ═══ FAQ ═══ */}
      <section id="faq" className="relative max-w-[1280px] w-full mx-auto px-6 py-28 md:py-36 overflow-hidden">
        <div className="fading-dot-grid" />
        <div className="relative z-10 grid grid-cols-1 lg:grid-cols-6 gap-12">
          {/* Left Column - Heading & Technical Inquiry */}
          <div className="lg:col-span-2 flex flex-col justify-between text-left lg:self-stretch">
            <div className="space-y-4">
              <div className="inline-flex items-center gap-1.5 px-2.5 py-1 bg-black/[0.03] border border-black/[0.04] rounded-none select-none">
                <span className="w-1 h-1 rounded-full bg-[#e8662a] shrink-0" />
                <span className="text-[9px] font-semibold font-sans uppercase tracking-[0.08em] text-black/60 leading-none">
                  System FAQ
                </span>
              </div>
              <h2
                className="text-3xl sm:text-[40px] font-normal tracking-[-0.025em] leading-[1.15]"
                style={{ color: '#0a0a0a', fontFamily: 'var(--font-schibsted-grotesk), system-ui, sans-serif', letterSpacing: '-0.05em' }}
              >
                Frequently asked questions.
              </h2>
            </div>
            
            <div className="pt-8 lg:pt-0">
              <p className="text-[13px] text-black/40 font-sans max-w-sm leading-relaxed">
                Have other technical inquiries about AI indexing or sandboxed evaluations? Reach out to our team at{" "}
                <a href="mailto:team@tryorigin.ai" className="text-black/60 hover:text-black font-semibold underline decoration-black/20 underline-offset-4">
                  team@tryorigin.ai
                </a>.
              </p>
            </div>
          </div>

          {/* Right Column - Accordion */}
          <div className="lg:col-span-4 w-full font-sans">
            <FaqAccordion />
          </div>
        </div>
      </section>

      <section className="relative max-w-[1280px] w-full mx-auto px-6 py-28 md:py-36 text-center overflow-hidden">
        {/* Subtle connected graph background */}
        <div className="absolute inset-0 z-0 opacity-10">
          <VisibilityGraph variant="subtle" />
        </div>
        {/* Subtle orange radial glow */}
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none z-0"
          style={{
            width: '600px',
            height: '350px',
            background: 'radial-gradient(ellipse at center, rgba(232, 102, 42, 0.05) 0%, transparent 70%)',
            filter: 'blur(70px)',
          }}
        />
        <div className="relative z-10 space-y-7">
          <h2
            className="text-3xl sm:text-[48px] font-normal tracking-[-0.03em] leading-[1.1]"
            style={{ color: '#0a0a0a', fontFamily: 'var(--font-schibsted-grotesk), system-ui, sans-serif', letterSpacing: '-0.05em' }}
          >
            Start building your AI visibility.
          </h2>
          <p
            className="text-[15px] max-w-md mx-auto leading-relaxed font-sans"
            style={{ color: 'rgba(0,0,0,0.50)' }}
          >
            Join companies securing their recommendation share across AI coding agents and search surfaces.
          </p>
          <div className="flex items-center justify-center gap-4 pt-2">
            <CtaButton
              href="/checkout"
              variant="primary"
              size="lg"
            />
          </div>
        </div>
      </section>

    </main>

    {/* ═══ Footer — System Map ═══ */}
    <footer className="relative z-10 border-t" style={{ borderColor: 'rgba(0,0,0,0.05)' }}>
      {/* Subtle graph background */}
      <div className="absolute inset-0 z-0 opacity-10">
        <VisibilityGraph variant="subtle" />
      </div>

      <div className="relative z-10 max-w-[1280px] w-full mx-auto px-6 py-16 grid grid-cols-2 md:grid-cols-6 gap-8 text-left">
        <div className="col-span-2 space-y-4">
          <Link href="/" className="flex items-center gap-2 hover:opacity-70 transition-opacity duration-200">
            <img
              src="/logo.svg"
              alt="Origin Logo"
              className="w-5 h-5 object-contain"
              style={{ filter: 'invert(1)' }}
            />
            <span className="font-semibold text-sm tracking-tight" style={{ color: '#0a0a0a', fontFamily: 'var(--font-geist-sans), system-ui, sans-serif' }}>origin</span>
          </Link>
          <p className="text-[12px] leading-relaxed max-w-[240px] font-sans" style={{ color: 'rgba(0,0,0,0.40)' }}>
            The AI Discoverability Engine for developer tool companies.
          </p>
        </div>

        <div className="space-y-4">
          <h4 className="text-[11px] font-semibold uppercase tracking-[0.08em]" style={{ color: 'rgba(0,0,0,0.50)' }}>Product</h4>
          <ul className="space-y-2.5 text-[12px] font-sans" style={{ color: 'rgba(0,0,0,0.40)' }}>
            <li><a href="#features" className="hover:text-black transition-colors duration-200">Features</a></li>
            <li><a href="#workflow" className="hover:text-black transition-colors duration-200">Workflow</a></li>
            <li><a href="#pricing" className="hover:text-black transition-colors duration-200">Pricing Plan</a></li>
          </ul>
        </div>

        <div className="space-y-4">
          <h4 className="text-[11px] font-semibold uppercase tracking-[0.08em]" style={{ color: 'rgba(0,0,0,0.50)' }}>Resources</h4>
          <ul className="space-y-2.5 text-[12px] font-sans" style={{ color: 'rgba(0,0,0,0.40)' }}>
            <li><a href="#" className="hover:text-black transition-colors duration-200">Docs</a></li>
            <li><a href="#" className="hover:text-black transition-colors duration-200">llms.txt Spec</a></li>
            <li><a href="#" className="hover:text-black transition-colors duration-200">Status</a></li>
          </ul>
        </div>

        <div className="space-y-4">
          <h4 className="text-[11px] font-semibold uppercase tracking-[0.08em]" style={{ color: 'rgba(0,0,0,0.50)' }}>Company</h4>
          <ul className="space-y-2.5 text-[12px] font-sans" style={{ color: 'rgba(0,0,0,0.40)' }}>
            <li><a href="#" className="hover:text-black transition-colors duration-200">About</a></li>
            <li><a href="#" className="hover:text-black transition-colors duration-200">Blog</a></li>
            <li><a href="mailto:team@tryorigin.ai" className="hover:text-black transition-colors duration-200">Contact</a></li>
          </ul>
        </div>

        <div className="space-y-4 col-span-2 md:col-span-1">
          <h4 className="text-[11px] font-semibold uppercase tracking-[0.08em]" style={{ color: 'rgba(0,0,0,0.50)' }}>Legal</h4>
          <ul className="space-y-2.5 text-[12px] font-sans" style={{ color: 'rgba(0,0,0,0.40)' }}>
            <li><a href="#" className="hover:text-black transition-colors duration-200">Privacy</a></li>
            <li><a href="#" className="hover:text-black transition-colors duration-200">Terms</a></li>
          </ul>
        </div>

        {/* Bottom bar */}
        <div
          className="col-span-2 md:col-span-6 pt-8 border-t text-[10px] text-center leading-relaxed font-sans"
          style={{ borderColor: 'rgba(0,0,0,0.05)', color: 'rgba(0,0,0,0.40)' }}
        >
          Origin &copy; {new Date().getFullYear()} &middot; AI Discoverability OS for Dev Tools. Powered by Dodo Payments.
        </div>
      </div>
    </footer>
    </div>
  );
}
