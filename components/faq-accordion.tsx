"use client";

import React, { useState } from "react";
import { Plus, Minus } from "lucide-react";

interface FaqItem {
  question: string;
  answer: string;
}

const FAQS: FaqItem[] = [
  {
    question: "How does AI discovery work?",
    answer:
      "AI tools recommend products by parsing registries and documentation. Origin ensures your company's data is formatted so coding agents recommend you first.",
  },
  {
    question: "How does Origin test recommendations?",
    answer:
      "We run automated queries across tools like Cursor and Claude. This measures how often you are recommended and detects why you lost to a competitor.",
  },
  {
    question: "What is an llms.txt file?",
    answer:
      "It is a standard text file that structures your website documentation. This allows LLMs to easily read your capabilities and recommend your tool.",
  },
  {
    question: "How are fixes applied?",
    answer:
      "Origin creates automated pull requests with documentation fixes. Your team can review, edit, and merge them directly in GitHub or Slack.",
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
