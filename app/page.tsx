"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { ExplainerMockup } from "@/components/explainer-mockup";
import { VisibilityGraph } from "@/components/visibility-graph";
import { SignalArchitecture } from "@/components/signal-architecture";
import { CtaButton } from "@/components/cta-button";
import { FaqAccordion } from "@/components/faq-accordion";
import { SurfaceIcon } from "@/components/surface-icon";

export default function Home() {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % 6);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div
      className="min-h-screen flex flex-col relative overflow-x-hidden"
      style={{ background: '#F5F5F4', color: '#0a0a0a' }}
    >
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
          background: rgba(0,0,0,0.02);
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
        @keyframes dashFlow {
          to {
            stroke-dashoffset: -40;
          }
        }
        .animate-dash-flow {
          animation: dashFlow 1.2s linear infinite !important;
        }
        .animate-dash-flow-slow {
          animation: dashFlow 2.4s linear infinite !important;
        }
        .dot-grid-light {
          background-image: radial-gradient(circle, rgba(0,0,0,0.02) 1px, transparent 1px);
          background-size: 20px 20px;
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
        <div className="relative flex flex-col items-center justify-center text-center" style={{ minHeight: '82vh', paddingTop: '90px', paddingBottom: '160px' }}>

          {/* Grid column background */}
          <div className="hero-grid-bg">
            {/* Vertical column divider lines */}
            <div className="hero-col-line" style={{ left: '17%', height: '100%' }} />
            <div className="hero-col-line" style={{ left: '34%', height: '100%' }} />
            <div className="hero-col-line" style={{ left: '51%', height: '100%' }} />
            <div className="hero-col-line" style={{ left: '68%', height: '100%' }} />
            <div className="hero-col-line" style={{ left: '85%', height: '100%' }} />

            {/* Column 1 (0% to 17%) - closed rectangle from 48% to 85% */}
            <div className="hero-col-fill hero-col-fill-odd hero-border-t hero-border-b" style={{ left: '0%', width: '17%', top: '48%', bottom: '15%' }} />
            {/* Column 2 (17% to 34%) - closed rectangle brought up to 32% */}
            <div className="hero-col-fill hero-col-fill-even hero-border-t hero-border-b" style={{ left: '17%', width: '17%', top: '32%', bottom: '20%' }} />
            {/* Column 3 (34% to 50%) - closed rectangle shifted up to 40% */}
            <div className="hero-col-fill hero-col-fill-odd hero-border-t hero-border-b" style={{ left: '34%', width: '17%', top: '40%', bottom: '25%' }} />
            {/* Column 4 (50% to 68%) - closed rectangle shifted further down to 60% */}
            <div className="hero-col-fill hero-col-fill-even hero-border-t hero-border-b" style={{ left: '51%', width: '17%', top: '60%', bottom: '10%' }} />
            {/* Column 5 (68% to 85%) - closed rectangle from 25% to 70% */}
            <div className="hero-col-fill hero-col-fill-odd hero-border-t hero-border-b" style={{ left: '68%', width: '17%', top: '25%', bottom: '30%' }} />
            {/* Column 6 (85% to 100%) - closed rectangle from 38% to 88% */}
            <div className="hero-col-fill hero-col-fill-even hero-border-t hero-border-b" style={{ left: '85%', width: '15%', top: '38%', bottom: '12%' }} />
          </div>

          {/* Hero Content */}
          <div className="relative z-10 flex flex-col items-center" style={{ maxWidth: '780px', margin: '0 auto', padding: '0 24px' }}>
            {/* Hero Headline */}
            <h1
              className="landing-fade-in text-[24px] sm:text-[36px] md:text-[48px] lg:text-[62px]"
              style={{
                fontFamily: 'var(--font-schibsted-grotesk), system-ui, sans-serif',
                fontWeight: 400,
                lineHeight: 1.12,
                letterSpacing: '-0.05em',
                color: '#0a0a0a',
                marginBottom: '24px',
              }}
            >
              <span className="block whitespace-normal md:whitespace-nowrap">Win the AI Recommendation</span>
              <span className="block whitespace-normal md:whitespace-nowrap">Ship the fix not a report</span>
            </h1>

            {/* Supporting Copy */}
            <p
              className="landing-fade-in-delay-1 text-[13px] sm:text-[16px] md:text-[18px] max-w-[580px] leading-relaxed font-sans mb-10 px-4 sm:px-0"
              style={{ color: 'rgba(0,0,0,0.50)', fontFamily: 'var(--font-geist-sans), system-ui, sans-serif' }}
            >
              Measure how coding agents and LLMs recommend your product, then automatically ship documentation fixes to win recommendation share.
            </p>

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
      <section id="features" className="relative max-w-[1280px] w-full mx-auto px-6 py-20 md:py-28 space-y-20 overflow-hidden">
        <div className="fading-dot-grid" />
        <div className="relative z-10 flex flex-col md:flex-row md:items-end justify-between gap-8">
          <div className="space-y-4">
            <div className="inline-flex items-center gap-1.5 px-2.5 py-1 bg-black/[0.03] border border-black/[0.04] rounded-none select-none">
              <span className="w-1 h-1 rounded-full bg-[#e8662a] shrink-0" />
              <span className="text-[9px] font-semibold font-sans uppercase tracking-[0.08em] text-black/60 leading-none">
                Visibility engine
              </span>
            </div>
            <h2
              className="text-3xl sm:text-[42px] font-normal tracking-[-0.025em] leading-[1.1]"
              style={{ color: '#0a0a0a', fontFamily: 'var(--font-schibsted-grotesk), system-ui, sans-serif', letterSpacing: '-0.05em' }}
            >
              Track AI recommendations.
            </h2>
          </div>
          <p
            className="text-[15px] max-w-xs leading-relaxed font-sans"
            style={{ color: 'rgba(0,0,0,0.50)' }}
          >
            Monitor how often coding agents recommend your product and pinpoint exactly where you lose developers.
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
                  Developer queries
                </h3>
                <p className="text-[13px] leading-relaxed font-sans text-black/45 group-hover:text-black/60 transition-colors duration-300">
                  Analyze the exact prompts developers write when searching for tools like yours in coding assistants.
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
                  Competitive gaps
                </h3>
                <p className="text-[13px] leading-relaxed font-sans text-black/45 group-hover:text-black/60 transition-colors duration-300">
                  Track where coding models index your competitors and identify exactly why they win recommendations.
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
                  Automated fixes
                </h3>
                <p className="text-[13px] leading-relaxed font-sans text-black/45 group-hover:text-black/60 transition-colors duration-300">
                  Receive pull requests that optimize your documentation and files to win model recommendations.
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

      {/* ═══ Compatible Surfaces — Node network ═══ */}
      <section className="relative max-w-[1280px] w-full mx-auto px-6 py-20 md:py-28 space-y-12 overflow-hidden">
        <div className="space-y-4">
          <div className="inline-flex items-center gap-1.5 px-2.5 py-1 bg-black/[0.03] border border-black/[0.04] rounded-none select-none">
            <span className="w-1 h-1 rounded-full bg-[#e8662a] shrink-0" />
            <span className="text-[9px] font-semibold font-sans uppercase tracking-[0.08em] text-black/60 leading-none">
              Integrations
            </span>
          </div>
          <h2
            className="text-3xl sm:text-[42px] font-normal tracking-[-0.025em] leading-[1.1]"
            style={{ color: '#0a0a0a', fontFamily: 'var(--font-schibsted-grotesk), system-ui, sans-serif', letterSpacing: '-0.05em' }}
          >
            Compatible with coding agents and LLMs.
          </h2>
        </div>

        {/* Integrations Network Diagram */}
        <div 
          className="relative z-10 border border-black/[0.05] bg-white/50 backdrop-blur-md p-8 md:p-10 overflow-hidden" 
          style={{ borderRadius: '0px', containerType: 'inline-size' }}
        >
          {/* Subtle Background Dot Grid */}
          <div className="absolute inset-0 dot-grid-light opacity-50 pointer-events-none" />
          
          {/* Desktop View: Curved Branching Diagram — lg+ only, no horizontal scroll */}
          <div className="scale-diagram-wrapper">
            <div
              style={{ width: '1180px' }}
              className="relative h-[380px] scale-diagram"
            >
              {/* Radial glow cores */}
              <div 
                className="absolute w-64 h-64 rounded-full bg-[#e8662a]/[0.025] blur-3xl pointer-events-none"
                style={{ left: '230px', top: '168px', transform: 'translate(-25%, -25%)' }}
              />
              <div 
                className="absolute w-40 h-40 rounded-full bg-black/[0.015] blur-2xl pointer-events-none"
                style={{ left: '40px', top: '168px', transform: 'translate(-25%, -25%)' }}
              />

              {/* Status & Flow Labels */}
              {/* Above the first connector line */}
              <div 
                className="absolute text-center pointer-events-none z-10"
                style={{ left: '84px', top: '150px', width: '146px' }}
              >
                <span className="text-[8px] font-bold font-mono tracking-[0.08em] text-black/45 uppercase">
                  SOURCE CODE
                </span>
              </div>
              {/* Below the first connector line */}
              <div 
                className="absolute text-center pointer-events-none z-10"
                style={{ left: '84px', top: '210px', width: '146px' }}
              >
                <span className="text-[8px] font-bold font-mono tracking-[0.06em] text-black/40 uppercase">
                  AUTO-SYNC
                </span>
              </div>

              {/* SVG Connector Lines */}
              <svg className="absolute inset-0 w-full h-full" viewBox="0 0 1180 380" fill="none">
                {/* Your Tool (You) to Origin */}
                <path d="M 84 190 L 230 190" stroke="rgba(0,0,0,0.15)" strokeWidth="1.5" strokeDasharray="3 3" />
                
                {/* Origin to Agent Nodes (Curved Paths) */}
                {/* Left curves span exactly 206px: from X=274 (Origin right edge) to X=480 (Agents stack left edge) */}
                {[
                  { y: 40 },
                  { y: 100 },
                  { y: 160 },
                  { y: 220 },
                  { y: 280 },
                  { y: 340 }
                ].map((node, i) => (
                  <path 
                    key={i}
                    d={`M 274 190 Q 377 ${node.y} 480 ${node.y}`} 
                    stroke={activeIndex === i ? "#e8662a" : "rgba(0,0,0,0.15)"} 
                    strokeWidth={activeIndex === i ? "2" : "1.2"} 
                    strokeDasharray={activeIndex === i ? "5 5" : "4 4"} 
                    className={activeIndex === i ? "animate-dash-flow" : "animate-dash-flow-slow"}
                    style={{ transition: 'stroke 0.3s ease, stroke-width 0.3s ease' }}
                  />
                ))}

                {/* Converging from Agent text area to "Found visibility gap" Box */}
                {/* Right curves span exactly 206px: average starting X=634 to X=840 (Detector box left edge) */}
                <path d="M 625 40 Q 732 40 840 190" stroke="rgba(0,0,0,0.15)" strokeWidth="1.2" strokeDasharray="4 4" className="animate-dash-flow-slow" />
                <path d="M 618 100 Q 729 100 840 190" stroke="rgba(0,0,0,0.15)" strokeWidth="1.2" strokeDasharray="4 4" className="animate-dash-flow-slow" />
                <path d="M 638 160 Q 739 160 840 190" stroke="rgba(0,0,0,0.15)" strokeWidth="1.2" strokeDasharray="4 4" className="animate-dash-flow-slow" />
                <path d="M 631 220 Q 735 220 840 190" stroke="rgba(0,0,0,0.15)" strokeWidth="1.2" strokeDasharray="4 4" className="animate-dash-flow-slow" />
                <path d="M 611 280 Q 725 280 840 190" stroke="rgba(0,0,0,0.15)" strokeWidth="1.2" strokeDasharray="4 4" className="animate-dash-flow-slow" />
                <path d="M 625 340 Q 732 340 840 190" stroke="rgba(0,0,0,0.15)" strokeWidth="1.2" strokeDasharray="4 4" className="animate-dash-flow-slow" />

                {/* Found gap to Fixed gap */}
                <path 
                  d="M 970 190 L 1010 190" 
                  stroke="rgba(0,0,0,0.15)" 
                  strokeWidth="1.2" 
                  strokeDasharray="4 4" 
                  className="animate-dash-flow-slow" 
                />
              </svg>

              {/* HTML Nodes */}
              {/* YOU Circle */}
              <div 
                className="absolute w-11 h-11 rounded-full bg-white border-2 border-[#e8662a] flex items-center justify-center shadow-sm z-10 text-center"
                style={{ left: '40px', top: '168px' }}
              >
                <span className="text-[8.5px] font-bold font-mono text-[#e8662a]">YOU</span>
              </div>

              {/* ORIGIN Circle */}
              <div 
                className="absolute w-11 h-11 rounded-full bg-white border border-black flex items-center justify-center shadow-sm z-10"
                style={{ left: '230px', top: '168px' }}
              >
                <img
                  src="/logo.svg"
                  alt="Origin Logo"
                  className="w-6 h-6 object-contain"
                  style={{ filter: 'invert(1)' }}
                />
              </div>

              {/* Agent Node Stack */}
              {[
                { surface: 'cursor' as const, label: 'CURSOR AGENT', top: '18px' },
                { surface: 'claude' as const, label: 'CLAUDE CODE', top: '78px' },
                { surface: 'chatgpt' as const, label: 'CHATGPT SEARCH', top: '138px' },
                { surface: 'perplexity' as const, label: 'PERPLEXITY AI', top: '198px' },
                { surface: 'gemini' as const, label: 'GEMINI PRO', top: '258px' },
              ].map((agent, i) => (
                <div 
                  key={i} 
                  className="absolute flex items-center gap-3 z-10"
                  style={{ left: '480px', top: agent.top }}
                >
                  <div className={`w-11 h-11 rounded-full bg-white border flex items-center justify-center shadow-sm shrink-0 transition-all duration-300 ${
                    activeIndex === i 
                      ? 'border-[#e8662a]/60 shadow-[#e8662a]/5 scale-[1.03]' 
                      : 'border-black/[0.08]'
                  }`}>
                    <SurfaceIcon surface={agent.surface} className={`w-4 h-4 transition-colors duration-300 ${activeIndex === i ? 'text-[#e8662a]' : 'text-black/70'}`} />
                  </div>
                  <span className={`text-[11px] font-bold font-mono tracking-wide transition-colors duration-300 leading-none -translate-y-[1px] ${activeIndex === i ? 'text-[#e8662a]' : 'text-black/75'}`}>
                    {agent.label}
                  </span>
                </div>
              ))}

              {/* MORE ENGINES Node */}
              <div 
                className="absolute flex items-center gap-3 z-10"
                style={{ left: '480px', top: '318px' }}
              >
                <div className={`w-11 h-11 rounded-full bg-white border border-dashed flex items-center justify-center shadow-sm shrink-0 transition-all duration-300 ${
                  activeIndex === 5 
                    ? 'border-[#e8662a]/60 shadow-[#e8662a]/5 scale-[1.03]' 
                    : 'border-black/20'
                }`}>
                  <span className={`text-[13px] font-bold transition-colors duration-300 ${activeIndex === 5 ? 'text-[#e8662a]' : 'text-black/55'}`}>+</span>
                </div>
                <span className={`text-[11px] font-bold font-mono tracking-wide transition-colors duration-300 leading-none -translate-y-[1px] ${activeIndex === 5 ? 'text-[#e8662a]' : 'text-black/60'}`}>MORE ENGINES</span>
              </div>

              {/* Found visibility gap detector box */}
              <div 
                className="absolute flex flex-col items-center justify-center p-3 bg-white border border-[#ff4d4f]/35 shadow-sm text-center z-10 transition-all duration-300"
                style={{ 
                  left: '840px', 
                  top: '150px', 
                  width: '130px', 
                  height: '80px',
                  boxShadow: 'inset 0 1px 1px rgba(0,0,0,0.01), 0 2px 8px rgba(255, 77, 79, 0.04)'
                }}
              >
                <div className="w-1.5 h-1.5 rounded-full bg-[#ff4d4f] animate-pulse mb-2" />
                <span className="text-[9px] font-bold font-sans text-[#ff4d4f] tracking-[0.06em] uppercase leading-tight">
                  Found Visibility Gap
                </span>
                <span className="text-[8px] font-mono text-black/45 mt-1.5 uppercase">
                  Checking docs...
                </span>
              </div>

              {/* Fixed gap by opening PR box */}
              <div 
                className="absolute flex flex-col items-center justify-center p-3 bg-white border border-black/15 shadow-sm text-center z-10"
                style={{ 
                  left: '1010px', 
                  top: '150px', 
                  width: '130px', 
                  height: '80px',
                  boxShadow: 'inset 0 1px 1px rgba(0,0,0,0.01), 0 2px 8px rgba(0, 0, 0, 0.02)'
                }}
              >
                <div className="w-1.5 h-1.5 rounded-full bg-black/80 mb-2" />
                <span className="text-[9px] font-bold font-sans text-black/80 tracking-[0.06em] uppercase leading-tight">
                  PR Merged
                </span>
                <span className="text-[8px] font-mono text-black/45 mt-1.5 uppercase">
                  Resolved
                </span>
              </div>

            </div>
          </div>

          {/* Mobile/Tablet View fallback (Grid list) — shown below lg */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 lg:hidden">
            {[
              { surface: 'cursor' as const, label: 'Cursor Agent' },
              { surface: 'claude' as const, label: 'Claude Code' },
              { surface: 'chatgpt' as const, label: 'ChatGPT Search' },
              { surface: 'perplexity' as const, label: 'Perplexity AI' },
              { surface: 'gemini' as const, label: 'Gemini Pro' },
            ].map((agent, i) => (
              <div key={i} className="p-4 border border-black/[0.05] bg-white flex items-center gap-3">
                <SurfaceIcon surface={agent.surface} className="w-4 h-4 text-black/60" />
                <span className="text-[11px] font-semibold font-mono text-black/70">{agent.label}</span>
              </div>
            ))}
            <div className="p-4 border border-dashed border-black/15 bg-white flex items-center gap-3">
              <span className="text-[12px] font-bold text-black/45">+</span>
              <span className="text-[11px] font-semibold font-mono text-black/50">More engines</span>
            </div>
          </div>
        </div>
      </section>

      {/* ═══ Supported Surfaces — Platforms Integrations ═══ */}

      <section className="max-w-[1280px] w-full mx-auto px-6 py-20 md:py-28 grid grid-cols-1 lg:grid-cols-2 gap-20 items-stretch">
        <div className="flex flex-col lg:h-full lg:justify-between text-left lg:py-0">
          <div className="space-y-4">
            <div className="inline-flex items-center gap-1.5 px-2.5 py-1 bg-black/[0.03] border border-black/[0.04] rounded-none select-none">
              <span className="w-1 h-1 rounded-full bg-[#e8662a] shrink-0" />
              <span className="text-[9px] font-semibold font-sans uppercase tracking-[0.08em] text-black/60 leading-none">
                AI Discovery
              </span>
            </div>
            <h2
              className="text-3xl sm:text-[42px] font-normal tracking-[-0.025em] leading-[1.1]"
              style={{ color: '#0a0a0a', fontFamily: 'var(--font-schibsted-grotesk), system-ui, sans-serif', letterSpacing: '-0.05em' }}
            >
              Where developers search now.
            </h2>
          </div>
          <p
            className="text-[14px] leading-relaxed max-w-md font-sans py-4 lg:py-0"
            style={{ color: 'rgba(0,0,0,0.50)' }}
          >
            Developers find products directly inside AI tools. If your documentation is missing or outdated, models will recommend a competitor instead.
          </p>
          <div className="pt-2 lg:pt-0">
            <CtaButton size="md">Book a demo</CtaButton>
          </div>
        </div>

        {/* Research Report Metrics */}
        <div className="grid grid-cols-2 gap-px" style={{ background: 'rgba(0,0,0,0.06)', overflow: 'hidden' }}>
          <div className="p-7 space-y-1.5" style={{ background: '#ffffff' }}>
            <div className="text-[44px] font-normal tracking-tight" style={{ color: '#e8662a', fontFamily: 'var(--font-schibsted-grotesk), system-ui, sans-serif', letterSpacing: '-0.04em', lineHeight: 1 }}>70%</div>
            <div className="text-[10px] font-semibold uppercase tracking-[0.08em]" style={{ color: 'rgba(0,0,0,0.40)' }}>TRAFFIC SHIFT</div>
            <p className="text-[11px] leading-snug font-sans" style={{ color: 'rgba(0,0,0,0.50)' }}>Of developer search traffic is rapidly shifting away from search engines to AI assistants.</p>
          </div>
          <div className="p-7 space-y-1.5" style={{ background: '#ffffff' }}>
            <div className="text-[44px] font-normal tracking-tight" style={{ color: '#0a0a0a', fontFamily: 'var(--font-schibsted-grotesk), system-ui, sans-serif', letterSpacing: '-0.04em', lineHeight: 1 }}>84%</div>
            <div className="text-[10px] font-semibold uppercase tracking-[0.08em]" style={{ color: 'rgba(0,0,0,0.40)' }}>AGENT DEPENDENCY</div>
            <p className="text-[11px] leading-snug font-sans" style={{ color: 'rgba(0,0,0,0.50)' }}>Of AI coding agents rely exclusively on public documentation and llms.txt to select libraries.</p>
          </div>
          <div className="p-7 space-y-1.5" style={{ background: '#ffffff' }}>
            <div className="text-[44px] font-normal tracking-tight" style={{ color: '#0a0a0a', fontFamily: 'var(--font-schibsted-grotesk), system-ui, sans-serif', letterSpacing: '-0.04em', lineHeight: 1 }}>+120%</div>
            <div className="text-[10px] font-semibold uppercase tracking-[0.08em]" style={{ color: 'rgba(0,0,0,0.40)' }}>RECOMMENDATION LIFT</div>
            <p className="text-[11px] leading-snug font-sans" style={{ color: 'rgba(0,0,0,0.50)' }}>Average increase in organic brand recommendations within AI coding responses after optimization.</p>
          </div>
          <div className="p-7 space-y-1.5" style={{ background: '#ffffff' }}>
            <div className="text-[44px] font-normal tracking-tight" style={{ color: '#0a0a0a', fontFamily: 'var(--font-schibsted-grotesk), system-ui, sans-serif', letterSpacing: '-0.04em', lineHeight: 1 }}>&lt; 60s</div>
            <div className="text-[10px] font-semibold uppercase tracking-[0.08em]" style={{ color: 'rgba(0,0,0,0.40)' }}>DECISION WINDOW</div>
            <p className="text-[11px] leading-snug font-sans" style={{ color: 'rgba(0,0,0,0.50)' }}>Time it takes a developer to adopt a tool when recommended directly inside their IDE assistant.</p>
          </div>
        </div>
      </section>

      {/* ═══ How It Works — Signal Routing Diagram ═══ */}
      <section className="max-w-[1280px] w-full mx-auto px-6 py-20 md:py-28 space-y-16">
        <div className="space-y-4 max-w-lg">
          <div className="inline-flex items-center gap-1.5 px-2.5 py-1 bg-black/[0.03] border border-black/[0.04] rounded-none select-none">
            <span className="w-1 h-1 rounded-full bg-[#e8662a] shrink-0" />
            <span className="text-[9px] font-semibold font-sans uppercase tracking-[0.08em] text-black/60 leading-none">
              How it works
            </span>
          </div>
          <h2
            className="text-3xl sm:text-[42px] font-normal tracking-[-0.025em] leading-[1.1]"
            style={{ color: '#0a0a0a', fontFamily: 'var(--font-schibsted-grotesk), system-ui, sans-serif', letterSpacing: '-0.05em' }}
          >
            Turn insights into recommendations.
          </h2>
        </div>

        {/* Routing Diagram */}
        <SignalArchitecture />
      </section>

      <section id="pricing" className="max-w-[1280px] w-full mx-auto px-6 py-20 md:py-28 space-y-16">
        <div className="space-y-4">
          <div className="inline-flex items-center gap-1.5 px-2.5 py-1 bg-black/[0.03] border border-black/[0.04] rounded-none select-none">
            <span className="w-1 h-1 rounded-full bg-[#e8662a] shrink-0" />
            <span className="text-[9px] font-semibold font-sans uppercase tracking-[0.08em] text-black/60 leading-none">
              Pricing
            </span>
          </div>
          <h2
            className="text-3xl sm:text-[42px] font-normal tracking-[-0.025em]"
            style={{ color: '#0a0a0a', fontFamily: 'var(--font-schibsted-grotesk), system-ui, sans-serif', letterSpacing: '-0.05em' }}
          >
            Scale your recommendations.
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
                <p className="text-[12px] min-h-[32px] font-sans" style={{ color: 'rgba(0,0,0,0.50)' }}>Track your AI recommendations.</p>
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
                    <span>75 simulated prompts</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <svg className="w-3.5 h-3.5 flex-shrink-0 mt-0.5" style={{ color: '#e8662a' }} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                    </svg>
                    <span>Weekly tracking</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <svg className="w-3.5 h-3.5 flex-shrink-0 mt-0.5" style={{ color: '#e8662a' }} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                    </svg>
                    <span>Competitor alerts</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <svg className="w-3.5 h-3.5 flex-shrink-0 mt-0.5" style={{ color: '#e8662a' }} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                    </svg>
                    <span>Scorecard report</span>
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
                <p className="text-[12px] min-h-[32px] font-sans" style={{ color: 'rgba(0,0,0,0.50)' }}>Generate fixes to beat competitors.</p>
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
                    <span>300 simulated prompts</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <svg className="w-3.5 h-3.5 flex-shrink-0 mt-0.5" style={{ color: '#e8662a' }} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                    </svg>
                    <span>Daily tracking</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <svg className="w-3.5 h-3.5 flex-shrink-0 mt-0.5" style={{ color: '#e8662a' }} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                    </svg>
                    <span className="font-semibold" style={{ color: '#0a0a0a' }}>Competitor replays</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <svg className="w-3.5 h-3.5 flex-shrink-0 mt-0.5" style={{ color: '#e8662a' }} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                    </svg>
                    <span className="font-semibold" style={{ color: '#0a0a0a' }}>Automated pull requests</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <svg className="w-3.5 h-3.5 flex-shrink-0 mt-0.5" style={{ color: '#e8662a' }} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                    </svg>
                    <span>Slack notifications</span>
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
                <p className="text-[12px] min-h-[32px] font-sans" style={{ color: 'rgba(0,0,0,0.50)' }}>Automate your visibility growth.</p>
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
                    <span>1,000 simulated prompts</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <svg className="w-3.5 h-3.5 flex-shrink-0 mt-0.5" style={{ color: '#e8662a' }} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                    </svg>
                    <span>On-demand runs</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <svg className="w-3.5 h-3.5 flex-shrink-0 mt-0.5" style={{ color: '#e8662a' }} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                    </svg>
                    <span>Unlimited repositories</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <svg className="w-3.5 h-3.5 flex-shrink-0 mt-0.5" style={{ color: '#e8662a' }} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                    </svg>
                    <span>Autopilot pull requests</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <svg className="w-3.5 h-3.5 flex-shrink-0 mt-0.5" style={{ color: '#e8662a' }} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                    </svg>
                    <span>Dedicated support channel</span>
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
                <p className="text-[12px] min-h-[32px] font-sans" style={{ color: 'rgba(0,0,0,0.50)' }}>Dedicated security and scale.</p>
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
                    <span>Custom model limits</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <svg className="w-3.5 h-3.5 flex-shrink-0 mt-0.5" style={{ color: '#e8662a' }} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                    </svg>
                    <span>Self-hosted environment</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <svg className="w-3.5 h-3.5 flex-shrink-0 mt-0.5" style={{ color: '#e8662a' }} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                    </svg>
                    <span>Continuous model learning</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <svg className="w-3.5 h-3.5 flex-shrink-0 mt-0.5" style={{ color: '#e8662a' }} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                    </svg>
                    <span>Custom integrations</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <svg className="w-3.5 h-3.5 flex-shrink-0 mt-0.5" style={{ color: '#e8662a' }} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                    </svg>
                    <span>Dedicated SLA support</span>
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
          Prompt volumes and run cadence per tier reflect launch packaging.
        </p>
      </section>

      {/* ═══ FAQ ═══ */}
      <section id="faq" className="relative max-w-[1280px] w-full mx-auto px-6 py-20 md:py-28 overflow-hidden">
        <div className="fading-dot-grid" />
        <div className="relative z-10 grid grid-cols-1 lg:grid-cols-6 gap-12">
          {/* Left Column - Heading & Technical Inquiry */}
          <div className="lg:col-span-2 flex flex-col justify-between text-left lg:self-stretch">
            <div className="space-y-4">
              <div className="inline-flex items-center gap-1.5 px-2.5 py-1 bg-black/[0.03] border border-black/[0.04] rounded-none select-none">
                <span className="w-1 h-1 rounded-full bg-[#e8662a] shrink-0" />
                <span className="text-[9px] font-semibold font-sans uppercase tracking-[0.08em] text-black/60 leading-none">
                  FAQ
                </span>
              </div>
              <h2
                className="text-3xl sm:text-[40px] font-normal tracking-[-0.025em] leading-[1.15]"
                style={{ color: '#0a0a0a', fontFamily: 'var(--font-schibsted-grotesk), system-ui, sans-serif', letterSpacing: '-0.05em' }}
              >
                Common questions.
              </h2>
            </div>
            
            <div className="pt-8 lg:pt-0">
              <p className="text-[13px] text-black/40 font-sans max-w-sm leading-relaxed">
                Need custom help optimizing your AI recommendations? Contact us at{" "}
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

      <section className="relative max-w-[1280px] w-full mx-auto px-6 py-20 md:py-28 text-center overflow-hidden">
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
            Start winning recommendations.
          </h2>
          <p
            className="text-[15px] max-w-md mx-auto leading-relaxed font-sans"
            style={{ color: 'rgba(0,0,0,0.50)' }}
          >
            Generate pull requests today to win recommendations across every AI agent.
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

      <div className="relative z-10 max-w-[1280px] w-full mx-auto px-6 pt-28 pb-16 md:pt-36 md:pb-16 grid grid-cols-2 md:grid-cols-6 gap-8 text-left">
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
            Win the AI recommendation.
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
          Origin &copy; {new Date().getFullYear()} &middot; AI Discoverability OS for Dev Tools.
        </div>
      </div>
    </footer>
    </div>
  );
}
