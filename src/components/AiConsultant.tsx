import React, { useState } from "react";
import { Sparkles, Terminal, ArrowRight, Loader2, PlaySquare, RotateCcw, AlertCircle } from "lucide-react";
import { POS_OPTIONS } from "../data";
import { AdvisorRequest, AdvisorResponse } from "../types";

export default function AiConsultant() {
  const [concept, setConcept] = useState<string>("Upscale Bistro");
  const [locations, setLocations] = useState<number>(2);
  const [bottleneck, setBottleneck] = useState<string>("Severe weeknight labor waste and food prep spoilage");
  const [posSystem, setPosSystem] = useState<string>("Toast POS");
  
  const [loading, setLoading] = useState<boolean>(false);
  const [report, setReport] = useState<string | null>(null);
  const [errorMsg, setErrorMsg] = useState<string | null>(null);
  const [loadingStep, setLoadingStep] = useState<string>("");

  const loadingSteps = [
    "Establishing secure tunnel to POS transaction logs...",
    "Aggregating historical guest coverage metrics...",
    "Ingesting regional weather maps and holiday matrices...",
    "Running neural staffing optimization and labor vectors...",
    "Formulating bespoke Michelin-star operational strategy..."
  ];

  const handleRunAudit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setErrorMsg(null);
    setReport(null);
    
    // Cycle loading instructions for elegant premium feel
    let stepIndex = 0;
    setLoadingStep(loadingSteps[0]);
    const interval = setInterval(() => {
      stepIndex = (stepIndex + 1) % loadingSteps.length;
      setLoadingStep(loadingSteps[stepIndex]);
    }, 1300);

    try {
      const payload: AdvisorRequest = {
        concept,
        locations,
        bottleneck,
        posSystem
      };

      const response = await fetch("/api/ai-advisor", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(payload)
      });

      if (!response.ok) {
        throw new Error(`Failed to generate advisory report. Status: ${response.status}`);
      }

      const data: AdvisorResponse = await response.json();
      setReport(data.advice);
    } catch (error: any) {
      console.error(error);
      setErrorMsg("Our specialized advisory networks are currently experiencing peak demand. Please retry your executive audit shortly.");
    } finally {
      clearInterval(interval);
      setLoading(false);
    }
  };

  const handleReset = () => {
    setReport(null);
    setErrorMsg(null);
  };

  // Safe simple parser for markdown lines to output gorgeous custom premium blocks
  const renderParsedReport = (rawText: string) => {
    const lines = rawText.split("\n");
    return (
      <div className="space-y-6 text-[#f7f3f0]">
        {lines.map((line, idx) => {
          const trimmed = line.trim();
          if (trimmed.startsWith("###")) {
            return (
              <h3 key={idx} className="font-heading text-xl lg:text-2xl font-bold text-[#eb5a3c] border-b border-[#2e2624] pb-2 mt-8 first:mt-0">
                {trimmed.replace(/###\s*/, "")}
              </h3>
            );
          }
          if (trimmed.startsWith("####")) {
            return (
              <h4 key={idx} className="font-heading text-base lg:text-lg font-bold text-[#fdecdb] flex items-center gap-2 mt-6">
                <span className="h-1.5 w-1.5 bg-[#eb5a3c] rounded-full inline-block" />
                {trimmed.replace(/####\s*/, "")}
              </h4>
            );
          }
          if (trimmed.startsWith("-") || trimmed.startsWith("*")) {
            // Unordered list items
            const content = trimmed.replace(/^[-*]\s*/, "");
            return (
              <ul key={idx} className="list-none pl-4 space-y-1">
                <li className="text-sm text-[#bcaea6] flex items-start gap-2">
                  <span className="text-[#eb5a3c] mt-1 shrink-0">•</span>
                  <span>{content}</span>
                </li>
              </ul>
            );
          }
          if (trimmed.match(/^\d+\./)) {
            // Ordered list items
            const content = trimmed.replace(/^\d+\.\s*/, "");
            return (
              <div key={idx} className="pl-4 space-y-1">
                <p className="text-sm text-[#bcaea6] flex items-start gap-3">
                  <span className="font-mono text-xs text-[#eb5a3c] bg-[#eb5a3c]/15 px-1.5 py-0.5 rounded mt-0.5">
                    {trimmed.match(/^\d+/)?.[0]}
                  </span>
                  <span>{content}</span>
                </p>
              </div>
            );
          }
          if (trimmed === "") {
            return null;
          }
          // Normal paragraph text
          return (
            <p key={idx} className="text-sm leading-relaxed text-[#bcaea6]">
              {trimmed}
            </p>
          );
        })}
      </div>
    );
  };

  return (
    <div className="rounded-3xl border border-[#3e322e] bg-[#120f0d] p-6 lg:p-10 shadow-xl overflow-hidden relative" id="ai-advisor-tool">
      {/* Absolute graphic backings */}
      <div className="absolute top-0 right-0 w-80 h-80 bg-[#eb5a3c]/5 rounded-full blur-3xl pointer-events-none" />
      
      <div className="flex items-center gap-2 mb-3">
        <Sparkles className="h-5 w-5 text-[#eb5a3c]" />
        <span className="text-xs font-mono uppercase tracking-[0.2em] text-[#eb5a3c]">Executive Pilot Interface</span>
      </div>
      
      <h3 className="font-heading text-2xl lg:text-3xl font-bold tracking-tight text-[#f7f3f0] mb-3">
        Instantly Audit Your Dining Operations
      </h3>
      <p className="text-sm text-[#bcaea6] max-w-2xl mb-8 leading-relaxed">
        Test our underlying AI models in real-time. Enter your restaurant concept, scale, and operational pressure point to obtain a bespoke, automated strategic plan.
      </p>

      {!report && !loading ? (
        <form onSubmit={handleRunAudit} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            
            {/* Input 1: Dining Style */}
            <div className="flex flex-col gap-2">
              <label className="text-xs font-semibold text-[#fdecdb] uppercase tracking-wider">
                Restaurant Concept / Dining Style
              </label>
              <input
                type="text"
                required
                value={concept}
                onChange={(e) => setConcept(e.target.value)}
                placeholder="e.g. Modern French Bistro, High-Volume Japanese Steakhouse"
                className="w-full bg-[#1c1816]/75 border border-[#38302d] focus:border-[#eb5a3c] rounded-xl px-4 py-3 text-sm text-[#f7f3f0] focus:outline-none transition-all"
              />
            </div>

            {/* Input 2: POS System of choice */}
            <div className="flex flex-col gap-2">
              <label className="text-xs font-semibold text-[#fdecdb] uppercase tracking-wider">
                Primary POS System
              </label>
              <select
                value={posSystem}
                onChange={(e) => setPosSystem(e.target.value)}
                className="w-full bg-[#1c1816]/75 border border-[#38302d] focus:border-[#eb5a3c] rounded-xl px-4 py-3 text-sm text-[#f7f3f0] focus:outline-none transition-all appearance-none cursor-pointer"
              >
                {POS_OPTIONS.map((opt) => (
                  <option key={opt} value={opt} className="bg-[#120f0d] text-[#f7f3f0]">
                    {opt}
                  </option>
                ))}
              </select>
            </div>

            {/* Input 3: Number of locations */}
            <div className="flex flex-col gap-2">
              <label className="text-xs font-semibold text-[#fdecdb] uppercase tracking-wider">
                Number of Active Locations
              </label>
              <div className="grid grid-cols-3 gap-2">
                {[1, 3, 8].map((num) => (
                  <button
                    key={num}
                    type="button"
                    onClick={() => setLocations(num)}
                    className={`cursor-pointer border py-3 rounded-xl text-xs font-medium transition-all ${
                      locations === num
                        ? "bg-[#eb5a3c]/15 border-[#eb5a3c] text-white"
                        : "bg-[#1c1816]/30 border-[#2e2725] text-[#bcaea6] hover:bg-[#1c1816]/70"
                    }`}
                  >
                    {num === 1 ? "1 Location" : num === 3 ? "2 - 5 Group" : "6+ Enterprise"}
                  </button>
                ))}
              </div>
            </div>

            {/* Input 4: Botttleneck selection */}
            <div className="flex flex-col gap-2">
              <label className="text-xs font-semibold text-[#fdecdb] uppercase tracking-wider">
                Major Critical Pain Point
              </label>
              <input
                type="text"
                required
                value={bottleneck}
                onChange={(e) => setBottleneck(e.target.value)}
                placeholder="e.g. Saturday floor staff layout overhead or raw food wastage"
                className="w-full bg-[#1c1816]/75 border border-[#38302d] focus:border-[#eb5a3c] rounded-xl px-4 py-3 text-sm text-[#f7f3f0] focus:outline-none transition-all"
              />
            </div>

          </div>

          <button
            type="submit"
            className="cursor-pointer w-full md:w-auto px-8 py-4 bg-[#eb5a3c] hover:bg-[#f26a4e] text-white font-medium rounded-xl text-sm transition-all flex items-center justify-center gap-2 shadow-md hover:shadow-[#eb5a3c]/20"
          >
            <span>Generate Executive Operations Audit</span>
            <ArrowRight className="h-4 w-4" />
          </button>
        </form>
      ) : null}

      {/* Loading Block */}
      {loading && (
        <div className="py-20 flex flex-col items-center justify-center text-center">
          <Loader2 className="h-10 w-10 text-[#eb5a3c] animate-spin mb-4" />
          <h4 className="font-heading text-lg font-semibold text-[#f7f3f0] animate-pulse">
            Processing Core Operational Model
          </h4>
          <p className="text-xs text-[#bcaea6] font-mono mt-2 bg-[#211a18] px-4 py-2 rounded-lg border border-[#382a27]">
            {loadingStep}
          </p>
        </div>
      )}

      {/* Error state */}
      {errorMsg && !loading && (
        <div className="p-6 rounded-2xl bg-[#2e1c19] border border-[#eb5a3c]/30 flex items-start gap-3 mt-4">
          <AlertCircle className="h-5 w-5 text-[#eb5a3c] shrink-0 mt-0.5" />
          <div>
            <h5 className="text-sm font-semibold text-[#f7f3f0]">Service Friction Detected</h5>
            <p className="text-xs text-[#bcaea6] mt-1 leading-relaxed">{errorMsg}</p>
            <button
              onClick={handleReset}
              className="mt-3 text-xs font-mono text-[#eb5a3c] underline hover:text-[#f87171] inline-flex items-center gap-1.5"
            >
              <RotateCcw className="h-3 w-3" />
              <span>Retry custom audit request</span>
            </button>
          </div>
        </div>
      )}

      {/* Report display area */}
      {report && !loading && (
        <div className="space-y-6 animate-fadeIn">
          <div className="p-6 rounded-2xl bg-[#171413] border border-[#302826] relative">
            <div className="absolute top-4 right-4 flex items-center gap-1.5 text-[10px] font-mono text-[#9c8b82]">
              <span className="h-2 w-2 rounded-full bg-[#10b981] animate-pulse" />
              <span>Audit formulated successfully</span>
            </div>
            
            {/* Display report */}
            <div className="prose prose-invert max-w-none text-left">
              {renderParsedReport(report)}
            </div>

            {/* CTA action footer after audit */}
            <div className="border-t border-[#292422] pt-6 mt-8 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div>
                <span className="text-[11px] font-mono text-[#eb5a3c] block">READY TO INTEGRATE THESE INSIGHTS?</span>
                <span className="text-xs text-[#bcaea6]">Book a private session to connect your actual live POS.</span>
              </div>
              
              <div className="flex gap-3">
                <button
                  onClick={handleReset}
                  className="cursor-pointer px-4 py-2 bg-[#2c2624] text-[#f7f3f0] hover:text-white rounded-lg text-xs font-medium transition-all inline-flex items-center gap-1.5 border border-[#3e3532]"
                >
                  <RotateCcw className="h-3 w-3" />
                  <span>New Audit</span>
                </button>
                <a
                  href="#contact-section"
                  className="px-5 py-2.5 bg-[#eb5a3c] hover:bg-[#f26a4e] text-white font-medium rounded-lg text-xs transition-all inline-flex items-center gap-1.5 shadow"
                >
                  <span>Book VIP System Demo</span>
                  <ArrowRight className="h-3 w-3" />
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
