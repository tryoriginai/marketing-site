"use client";

import React, { useState } from "react";
import { Plus, Minus } from "lucide-react";

interface FaqItem {
  question: string;
  answer: string;
}

const FAQS: FaqItem[] = [
  {
    question: "What is generative engine optimization (GEO)?",
    answer:
      "Just like SEO optimized your website for Google search crawlers, GEO optimizes your codebase, registries, and documentation to be parsed, understood, and recommended by AI assistants (like ChatGPT, Claude Code, Cursor, and Perplexity).",
  },
  {
    question: "How do the AI coding agent simulations work?",
    answer:
      "We spin up headless developer sandboxes running Cursor and Claude Code. We simulate developer tasks (e.g. \"set up a headless browser proxy\") and inspect whether the AI agent recommends your SDK or your competitors', diagnosing the root cause in real-time.",
  },
  {
    question: "What is a /llms.txt file?",
    answer:
      "It is a machine-readable documentation index located at your root domain. It summarizes your API features and maps code snippets, making it trivial for LLMs to index your entire tool chain in seconds without consuming token context budgets.",
  },
  {
    question: "Do you automatically open pull requests?",
    answer:
      "Yes. Our Action Engine constructs documentation optimizations and proposes them as ready-to-review GitHub pull requests. You have complete human-in-the-loop control to review, edit, and approve them before they are proposed.",
  },
];

export function FaqAccordion() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="space-y-4">
      {FAQS.map((faq, index) => {
        const isOpen = openIndex === index;
        return (
          <div
            key={index}
            className="border border-black/[0.05] bg-white transition-colors duration-150"
            style={{ borderRadius: "0px" }}
          >
            <button
              onClick={() => toggleFaq(index)}
              className="w-full flex items-center justify-between p-5 text-left select-none cursor-pointer hover:bg-black/[0.01] transition-colors"
            >
              <span className="text-[14px] font-semibold text-black/80 font-sans">
                {faq.question}
              </span>
              <span className="shrink-0 ml-4">
                {isOpen ? (
                  <Minus className="w-3.5 h-3.5 text-black/40" />
                ) : (
                  <Plus className="w-3.5 h-3.5 text-black/40" />
                )}
              </span>
            </button>
            <div
              className={`grid transition-[grid-template-rows] duration-200 ease-in-out ${
                isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
              }`}
            >
              <div className="overflow-hidden">
                <p className="px-5 pb-5 text-[13px] leading-relaxed text-black/50 font-sans border-t border-black/[0.02] pt-4">
                  {faq.answer}
                </p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
