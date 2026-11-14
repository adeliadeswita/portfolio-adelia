"use client";

import { useState, useEffect } from "react";
import {
  ExternalLink,
  Layers,
  Sparkles,
  ArrowRight,
  CheckCircle2,
  FileText,
  Maximize2,
  Workflow,
  Cpu,
  GitMerge,
  Network,
  Eye,
  X,
} from "lucide-react";

interface ProcessStep {
  id: number;
  stepNumber: string;
  title: string;
  originalName: string;
  category: "Data Ingestion & Prep" | "Batch & Processing" | "Aggregation & Output";
  description: string;
  technicalDetails: string[];
  output: string;
}

const PROCESS_STEPS: ProcessStep[] = [
  {
    id: 1,
    stepNumber: "01",
    title: "Split Data Based on Address Type",
    originalName: "Split Data Based on Address Type",
    category: "Data Ingestion & Prep",
    description:
      "Segments the 2,000,000+ raw customer records into distinct address categories (Residential, Office, Legal/Billing) to apply tailored parsing patterns.",
    technicalDetails: [
      "Partitions database queries based on address_type metadata flags",
      "Isolates null and corrupted address payloads into automated audit error logs",
      "Assigns unique batch tracking IDs for end-to-end downstream reconciliation",
    ],
    output: "Partitioned datasets segregated by address usage type",
  },
  {
    id: 2,
    stepNumber: "02",
    title: "Address Preprocessing",
    originalName: "Preprocessing Alamat",
    category: "Data Ingestion & Prep",
    description:
      "Cleans, sanitizes, and standardizes unformatted text strings into structured address elements ready for geocoder ingestion.",
    technicalDetails: [
      "Normalizes abbreviations (Jl., Jln., Gang → Jl.; No., Nmr. → No.)",
      "Regex filtering for illegal characters, punctuation noise, and typographical anomalies",
      "Standardizes postal codes and administrative hierarchy (Kelurahan, Kecamatan, Kota)",
    ],
    output: "Cleaned, standardized address strings ready for geocoding engines",
  },
  {
    id: 3,
    stepNumber: "03",
    title: "Split Data Based on Province",
    originalName: "Split Data Based on Provinsi",
    category: "Data Ingestion & Prep",
    description:
      "Divides standardized address records into 38 provincial partitions to enable distributed parallel processing and regional validation.",
    technicalDetails: [
      "Groups records by BPS (Badan Pusat Statistik) standardized province codes",
      "Ensures balanced partition sizing for worker threads to avoid resource bottlenecks",
      "Applies provincial administrative bounding boxes for subsequent spatial filtering",
    ],
    output: "38 provincial datasets prepared for parallel batch execution",
  },
  {
    id: 4,
    stepNumber: "04",
    title: "Batching Geocoding",
    originalName: "Batching Geocoding",
    category: "Batch & Processing",
    description:
      "Chunks each provincial dataset into micro-batches to respect external geocoding API rate limits and optimize memory consumption.",
    technicalDetails: [
      "Dynamically sizes chunks (250 – 500 records per API payload window)",
      "Maintains request rate limit throttle within vendor API quotas",
      "Handles retry backoff queues with jitter for transient network latency",
    ],
    output: "Queued micro-batches governed by rate-limit throttling rules",
  },
  {
    id: 5,
    stepNumber: "05",
    title: "Parallel Geocoding Execution",
    originalName: "Parallel Geocoding Execution",
    category: "Batch & Processing",
    description:
      "Executes concurrent multi-threaded geocoding across batches, featuring primary engine resolution (Geopy) and automatic failover to secondary engine (ArcGIS).",
    technicalDetails: [
      "Multi-worker asynchronous HTTP pipeline generating latitude and longitude coordinates",
      "Automatic failover to ArcGIS World Geocoding when Geopy yields low match confidence",
      "Point-in-polygon verification via GeoPandas & Shapely against official BPS boundary polygons",
    ],
    output: "Validated geographic coordinates (Lat/Long) with confidence scores & audit flags",
  },
  {
    id: 6,
    stepNumber: "06",
    title: "Stacking All Province",
    originalName: "Stacking All Province",
    category: "Aggregation & Output",
    description:
      "Gathers and unions all geocoded provincial batches into unified provincial summary datasets, verifying complete row counts.",
    technicalDetails: [
      "Vertical concatenation of 38 provincial geocoding results",
      "Reconciliation audit check against initial input row counts (~2M records)",
      "Flagging unmatched or out-of-boundary coordinates for anomaly reporting",
    ],
    output: "Consolidated nationwide dataset for each address type",
  },
  {
    id: 7,
    stepNumber: "07",
    title: "Stacking All Geocoding",
    originalName: "Stacking All Geocoding",
    category: "Aggregation & Output",
    description:
      "Merges all address types into the final enterprise master geospatial data mart, generating complete audit logs and spatial indices.",
    technicalDetails: [
      "Master union of Residential, Office, and Billing address coordinates",
      "Spatial indexing for sub-second query performance in downstream BI & GIS dashboards",
      "Exporting to Dataiku data warehouse & PostgreSQL spatial tables for production operations",
    ],
    output: "Final enterprise-ready geospatial master table & comprehensive audit logs",
  },
];

export function AdiraGeocodingSection() {
  const [activeTab, setActiveTab] = useState<"process" | "stacking">("process");
  const [activeStepId, setActiveStepId] = useState<number>(1);
  const [isDocModalOpen, setIsDocModalOpen] = useState<boolean>(false);
  const activeStep = PROCESS_STEPS.find((s) => s.id === activeStepId) || PROCESS_STEPS[0];

  const driveEmbedUrl =
    "https://drive.google.com/file/d/1YuzCh5PoxPUFlEkseRLRBh1vV7_ON8hu/preview";
  const driveViewUrl =
    "https://drive.google.com/file/d/1YuzCh5PoxPUFlEkseRLRBh1vV7_ON8hu/view";

  // Prevent background scroll when modal is open
  useEffect(() => {
    if (isDocModalOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isDocModalOpen]);

  // Close modal on Escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setIsDocModalOpen(false);
    };
    if (isDocModalOpen) {
      window.addEventListener("keydown", handleKeyDown);
    }
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isDocModalOpen]);

  return (
    <div className="space-y-8 pt-6 border-t border-[#E2E8F0]">
      {/* SECTION 1: ARCHITECTURE & WORKFLOW DIAGRAMS */}
      <section className="space-y-4">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
          <div>
            <div className="inline-flex items-center space-x-1.5 px-2.5 py-0.5 rounded-full text-[11px] font-bold uppercase tracking-wider bg-[#F2F2ED] text-[#2E6FA0] border border-[#EBE8E1] mb-1">
              <Workflow className="w-3.5 h-3.5" />
              <span>Pipeline Architecture &amp; Data Hierarchy</span>
            </div>
            <h2 className="text-base sm:text-lg font-bold text-[#18181B]">
              Geospatial ETL &amp; Aggregation Architecture
            </h2>
            <p className="text-xs text-[#64748B]">
              Explore the end-to-end 7-stage batch geocoding pipeline and the multi-level hierarchical tree merge strategy.
            </p>
          </div>

          {/* TAB SWITCHER */}
          <div className="flex items-center space-x-1 p-1 rounded-xl bg-[#F2F2ED] border border-[#E5E5DF] self-start sm:self-auto">
            <button
              type="button"
              onClick={() => setActiveTab("process")}
              className={`inline-flex items-center space-x-1.5 px-3 py-1.5 rounded-lg text-xs font-bold transition-all cursor-pointer ${
                activeTab === "process"
                  ? "bg-[#18181B] text-white shadow-xs"
                  : "text-[#52525B] hover:text-[#18181B]"
              }`}
            >
              <Workflow className="w-3.5 h-3.5" />
              <span>Execution Pipeline</span>
            </button>
            <button
              type="button"
              onClick={() => setActiveTab("stacking")}
              className={`inline-flex items-center space-x-1.5 px-3 py-1.5 rounded-lg text-xs font-bold transition-all cursor-pointer ${
                activeTab === "stacking"
                  ? "bg-[#18181B] text-white shadow-xs"
                  : "text-[#52525B] hover:text-[#18181B]"
              }`}
            >
              <GitMerge className="w-3.5 h-3.5" />
              <span>Data Stacking Tree</span>
            </button>
          </div>
        </div>

        {/* TAB 1: 7-STAGE PIPELINE EXECUTION FLOW ("THE PROCESS") */}
        {activeTab === "process" && (
          <div className="space-y-4">
            <div className="rounded-2xl border border-[#E2E8F0] bg-[#FAF9F5] p-3 sm:p-5 shadow-xs overflow-hidden">
              <svg
                viewBox="0 0 940 360"
                className="w-full h-auto max-w-full select-none block"
                xmlns="http://www.w3.org/2000/svg"
              >
                  <defs>
                    <marker
                      id="process-arrowhead"
                      markerWidth="8"
                      markerHeight="8"
                      refX="6"
                      refY="4"
                      orient="auto"
                    >
                      <polygon points="0 1, 8 4, 0 7" fill="#18181B" />
                    </marker>
                  </defs>

                  {/* LEFT HEADER: "THE PROCESS" */}
                  <text
                    x="40"
                    y="145"
                    fill="#18181B"
                    fontSize="36"
                    fontWeight="900"
                    fontFamily="system-ui, -apple-system, sans-serif"
                    letterSpacing="-1.5"
                  >
                    THE
                  </text>
                  <text
                    x="40"
                    y="185"
                    fill="#18181B"
                    fontSize="36"
                    fontWeight="900"
                    fontFamily="system-ui, -apple-system, sans-serif"
                    letterSpacing="-1.5"
                  >
                    PROCESS
                  </text>

                  {/* TOP DIRECTIONAL ARROW */}
                  <line
                    x1="210"
                    y1="46"
                    x2="880"
                    y2="46"
                    stroke="#18181B"
                    strokeWidth="2.2"
                    markerEnd="url(#process-arrowhead)"
                  />

                  {/* CONNECTING LINES */}
                  <line x1="410" y1="106" x2="450" y2="106" stroke="#18181B" strokeWidth="2.2" />
                  <line x1="620" y1="106" x2="660" y2="106" stroke="#18181B" strokeWidth="2.2" />

                  {/* Right turn down from Step 3 to Step 4 */}
                  <path
                    d="M 850 106 L 888 106 Q 904 106 904 122 L 904 184 Q 904 200 888 200 L 865 200"
                    fill="none"
                    stroke="#18181B"
                    strokeWidth="2.2"
                  />

                  {/* Turn down from Step 4 to Step 5 */}
                  <path
                    d="M 865 200 L 888 200 Q 904 200 904 216 L 904 278 Q 904 294 888 294 L 855 294"
                    fill="none"
                    stroke="#18181B"
                    strokeWidth="2.2"
                  />

                  {/* Bottom row connectors (flowing right to left) */}
                  <line x1="645" y1="294" x2="595" y2="294" stroke="#18181B" strokeWidth="2.2" />
                  <line x1="425" y1="294" x2="375" y2="294" stroke="#18181B" strokeWidth="2.2" />

                  {/* STEP 1 */}
                  <g
                    className="cursor-pointer transition-transform duration-150 hover:opacity-95"
                    onClick={() => setActiveStepId(1)}
                  >
                    <rect
                      x="210"
                      y="82"
                      width="200"
                      height="48"
                      rx="3"
                      fill="#FFD600"
                      stroke={activeStepId === 1 ? "#18181B" : "none"}
                      strokeWidth="2.5"
                    />
                    <text
                      x="310"
                      y="104"
                      textAnchor="middle"
                      fill="#18181B"
                      fontSize="12"
                      fontWeight="700"
                      fontFamily="system-ui, sans-serif"
                    >
                      Split Data Based on
                    </text>
                    <text
                      x="310"
                      y="120"
                      textAnchor="middle"
                      fill="#18181B"
                      fontSize="12"
                      fontWeight="700"
                      fontFamily="system-ui, sans-serif"
                    >
                      Address Type
                    </text>
                  </g>

                  {/* STEP 2 */}
                  <g
                    className="cursor-pointer transition-transform duration-150 hover:opacity-95"
                    onClick={() => setActiveStepId(2)}
                  >
                    <rect
                      x="450"
                      y="82"
                      width="170"
                      height="48"
                      rx="3"
                      fill="#FFD600"
                      stroke={activeStepId === 2 ? "#18181B" : "none"}
                      strokeWidth="2.5"
                    />
                    <text
                      x="535"
                      y="104"
                      textAnchor="middle"
                      fill="#18181B"
                      fontSize="12.5"
                      fontWeight="700"
                      fontFamily="system-ui, sans-serif"
                    >
                      Preprocessing
                    </text>
                    <text
                      x="535"
                      y="120"
                      textAnchor="middle"
                      fill="#18181B"
                      fontSize="12.5"
                      fontWeight="700"
                      fontFamily="system-ui, sans-serif"
                    >
                      Alamat
                    </text>
                  </g>

                  {/* STEP 3 */}
                  <g
                    className="cursor-pointer transition-transform duration-150 hover:opacity-95"
                    onClick={() => setActiveStepId(3)}
                  >
                    <rect
                      x="660"
                      y="82"
                      width="190"
                      height="48"
                      rx="3"
                      fill="#FFD600"
                      stroke={activeStepId === 3 ? "#18181B" : "none"}
                      strokeWidth="2.5"
                    />
                    <text
                      x="755"
                      y="104"
                      textAnchor="middle"
                      fill="#18181B"
                      fontSize="12"
                      fontWeight="700"
                      fontFamily="system-ui, sans-serif"
                    >
                      Split Data Based
                    </text>
                    <text
                      x="755"
                      y="120"
                      textAnchor="middle"
                      fill="#18181B"
                      fontSize="12"
                      fontWeight="700"
                      fontFamily="system-ui, sans-serif"
                    >
                      on Provinsi
                    </text>
                  </g>

                  {/* STEP 4 */}
                  <g
                    className="cursor-pointer transition-transform duration-150 hover:opacity-95"
                    onClick={() => setActiveStepId(4)}
                  >
                    <rect
                      x="685"
                      y="176"
                      width="180"
                      height="48"
                      rx="3"
                      fill="#FFD600"
                      stroke={activeStepId === 4 ? "#18181B" : "none"}
                      strokeWidth="2.5"
                    />
                    <text
                      x="775"
                      y="205"
                      textAnchor="middle"
                      fill="#18181B"
                      fontSize="13"
                      fontWeight="700"
                      fontFamily="system-ui, sans-serif"
                    >
                      Batching Geocoding
                    </text>
                  </g>

                  {/* STEP 5 */}
                  <g
                    className="cursor-pointer transition-transform duration-150 hover:opacity-95"
                    onClick={() => setActiveStepId(5)}
                  >
                    <rect
                      x="645"
                      y="270"
                      width="210"
                      height="48"
                      rx="3"
                      fill="#FFD600"
                      stroke={activeStepId === 5 ? "#18181B" : "none"}
                      strokeWidth="2.5"
                    />
                    <text
                      x="750"
                      y="299"
                      textAnchor="middle"
                      fill="#18181B"
                      fontSize="12.5"
                      fontWeight="700"
                      fontFamily="system-ui, sans-serif"
                    >
                      Parallel Geocoding Execution
                    </text>
                  </g>

                  {/* STEP 6 */}
                  <g
                    className="cursor-pointer transition-transform duration-150 hover:opacity-95"
                    onClick={() => setActiveStepId(6)}
                  >
                    <rect
                      x="425"
                      y="270"
                      width="170"
                      height="48"
                      rx="3"
                      fill="#FFD600"
                      stroke={activeStepId === 6 ? "#18181B" : "none"}
                      strokeWidth="2.5"
                    />
                    <text
                      x="510"
                      y="299"
                      textAnchor="middle"
                      fill="#18181B"
                      fontSize="12.5"
                      fontWeight="700"
                      fontFamily="system-ui, sans-serif"
                    >
                      Stacking All Province
                    </text>
                  </g>

                  {/* STEP 7 */}
                  <g
                    className="cursor-pointer transition-transform duration-150 hover:opacity-95"
                    onClick={() => setActiveStepId(7)}
                  >
                    <rect
                      x="185"
                      y="270"
                      width="190"
                      height="48"
                      rx="3"
                      fill="#FFD600"
                      stroke={activeStepId === 7 ? "#18181B" : "none"}
                      strokeWidth="2.5"
                    />
                    <text
                      x="280"
                      y="299"
                      textAnchor="middle"
                      fill="#18181B"
                      fontSize="12.5"
                      fontWeight="700"
                      fontFamily="system-ui, sans-serif"
                    >
                      Stacking All Geocoding
                    </text>
                  </g>
                </svg>
            </div>

            {/* STEP QUICK TABS */}
            <div className="flex items-center space-x-1.5 overflow-x-auto pb-1 scrollbar-none">
              {PROCESS_STEPS.map((s) => (
                <button
                  key={s.id}
                  type="button"
                  onClick={() => setActiveStepId(s.id)}
                  className={`shrink-0 px-3 py-1.5 rounded-lg text-xs font-semibold transition-all cursor-pointer ${
                    activeStepId === s.id
                      ? "bg-[#18181B] text-white shadow-xs"
                      : "bg-[#F2F2ED] text-[#52525B] hover:text-[#18181B] hover:bg-[#EBE8E1] border border-[#E5E5DF]"
                  }`}
                >
                  <span>{s.stepNumber}. {s.title}</span>
                </button>
              ))}
            </div>

            {/* ACTIVE STEP INSPECTOR CARD */}
            <div className="rounded-2xl border border-[#E2E8F0] bg-white p-5 sm:p-6 shadow-sm space-y-4">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-[#F2F2ED] pb-3">
                <div className="flex items-center space-x-3">
                  <span className="w-8 h-8 rounded-lg bg-[#FFD600] text-[#18181B] font-black text-sm flex items-center justify-center font-mono">
                    {activeStep.stepNumber}
                  </span>
                  <div>
                    <h3 className="font-bold text-sm sm:text-base text-[#18181B]">
                      {activeStep.title}
                    </h3>
                    {activeStep.originalName !== activeStep.title && (
                      <p className="text-[11px] text-[#71717A] italic">
                        Original diagram label: &quot;{activeStep.originalName}&quot;
                      </p>
                    )}
                  </div>
                </div>

                <span className="px-2.5 py-1 rounded-full text-[10.5px] font-semibold bg-[#F2F2ED] text-[#2E6FA0] border border-[#EBE8E1] self-start sm:self-auto">
                  {activeStep.category}
                </span>
              </div>

              <p className="text-xs sm:text-sm text-[#475569] leading-relaxed">
                {activeStep.description}
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-1">
                <div className="rounded-xl p-3.5 bg-[#FAF9F5] border border-[#EAE8E0] space-y-2">
                  <span className="text-[11px] font-bold uppercase tracking-wider text-[#18181B] flex items-center space-x-1.5">
                    <Cpu className="w-3.5 h-3.5 text-[#2E6FA0]" />
                    <span>Technical Implementation Logic</span>
                  </span>
                  <ul className="space-y-1.5 text-xs text-[#52525B]">
                    {activeStep.technicalDetails.map((td, i) => (
                      <li key={i} className="flex items-start space-x-2">
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#10B981] shrink-0 mt-0.5" />
                        <span>{td}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="rounded-xl p-3.5 bg-[#FAF9F5] border border-[#EAE8E0] space-y-2 flex flex-col justify-between">
                  <div className="space-y-1.5">
                    <span className="text-[11px] font-bold uppercase tracking-wider text-[#18181B] flex items-center space-x-1.5">
                      <Layers className="w-3.5 h-3.5 text-[#2E6FA0]" />
                      <span>Stage Output Artifact</span>
                    </span>
                    <p className="text-xs text-[#52525B] leading-relaxed">
                      {activeStep.output}
                    </p>
                  </div>

                  <div className="pt-2 border-t border-[#EAE8E0] flex items-center justify-between text-[11px] text-[#71717A]">
                    <span>Pipeline Stage: {activeStep.stepNumber} of 07</span>
                    <button
                      type="button"
                      onClick={() =>
                        setActiveStepId((prev) => (prev < 7 ? prev + 1 : 1))
                      }
                      className="inline-flex items-center space-x-1 font-semibold text-[#2E6FA0] hover:text-[#1D4E75] cursor-pointer"
                    >
                      <span>Next Stage</span>
                      <ArrowRight className="w-3 h-3" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* TAB 2: HIERARCHICAL DATA STACKING & MERGE ARCHITECTURE (TREE MERGE) */}
        {activeTab === "stacking" && (
          <div className="space-y-4">
            <div className="rounded-2xl border border-[#E2E8F0] bg-white p-3 sm:p-5 shadow-xs overflow-hidden">
              <svg
                viewBox="0 0 1060 580"
                className="w-full h-auto max-w-full select-none block"
                xmlns="http://www.w3.org/2000/svg"
              >
                <defs>
                  <marker
                    id="stacking-arrow"
                    markerWidth="6"
                    markerHeight="6"
                    refX="5"
                    refY="3"
                    orient="auto"
                  >
                    <polygon points="0 0.5, 6 3, 0 5.5" fill="#18181B" />
                  </marker>
                  {/* Subtle card drop shadow */}
                  <filter id="card-shadow" x="-3%" y="-5%" width="108%" height="116%">
                    <feDropShadow dx="1.5" dy="1.5" stdDeviation="1.5" floodColor="#000000" floodOpacity="0.08" />
                  </filter>
                </defs>

                {/* ================= CONNECTORS / BRACKETS ================= */}

                {/* 1. Connectors from Col 1 (Provinsi) to Col 2 (Pulau) */}
                {/* Pair 1 -> Col 2 Box 1 */}
                <path
                  d="M 250 44 L 278 44 L 278 99 L 250 99 M 278 71.5 L 308 71.5"
                  fill="none"
                  stroke="#18181B"
                  strokeWidth="1.8"
                  markerEnd="url(#stacking-arrow)"
                />

                {/* Pair 2 -> Col 2 Box 2 */}
                <path
                  d="M 250 179 L 278 179 L 278 234 L 250 234 M 278 206.5 L 308 206.5"
                  fill="none"
                  stroke="#18181B"
                  strokeWidth="1.8"
                  markerEnd="url(#stacking-arrow)"
                />

                {/* Pair 3 -> Col 2 Box 3 */}
                <path
                  d="M 250 349 L 278 349 L 278 404 L 250 404 M 278 376.5 L 308 376.5"
                  fill="none"
                  stroke="#18181B"
                  strokeWidth="1.8"
                  markerEnd="url(#stacking-arrow)"
                />

                {/* Pair 4 -> Col 2 Box 4 */}
                <path
                  d="M 250 484 L 278 484 L 278 539 L 250 539 M 278 511.5 L 308 511.5"
                  fill="none"
                  stroke="#18181B"
                  strokeWidth="1.8"
                  markerEnd="url(#stacking-arrow)"
                />

                {/* 2. Connectors from Col 2 (Pulau) to Col 3 (Jenis Alamat) */}
                {/* Col 2 Box 1 & 2 -> Col 3 Box 1 */}
                <path
                  d="M 540 71.5 L 568 71.5 L 568 206.5 L 540 206.5 M 568 139 L 598 139"
                  fill="none"
                  stroke="#18181B"
                  strokeWidth="1.8"
                  markerEnd="url(#stacking-arrow)"
                />

                {/* Col 2 Box 3 & 4 -> Col 3 Box 2 */}
                <path
                  d="M 540 376.5 L 568 376.5 L 568 511.5 L 540 511.5 M 568 444 L 598 444"
                  fill="none"
                  stroke="#18181B"
                  strokeWidth="1.8"
                  markerEnd="url(#stacking-arrow)"
                />

                {/* 3. Connectors from Col 3 (Jenis Alamat) to Col 4 (All Customer) */}
                {/* Col 3 Box 1 & 2 -> Yellow Master Box */}
                <path
                  d="M 805 139 L 834 139 L 834 444 L 805 444 M 834 291.5 L 863 291.5"
                  fill="none"
                  stroke="#18181B"
                  strokeWidth="2"
                  markerEnd="url(#stacking-arrow)"
                />

                {/* ================= COLUMN 1: PROVINSI (8 BOXES) ================= */}
                {/* Pair 1 */}
                <g filter="url(#card-shadow)">
                  <rect x="20" y="25" width="230" height="38" rx="3" fill="#FFFFFF" stroke="#18181B" strokeWidth="1.6" />
                  <text x="135" y="49" textAnchor="middle" fill="#18181B" fontSize="9.8" fontWeight="600" fontFamily="monospace">
                    GEOCODING_{"{JENIS_ALAMAT}"}_{"{NAMA_PROVINSI}"}
                  </text>
                </g>
                <g filter="url(#card-shadow)">
                  <rect x="20" y="80" width="230" height="38" rx="3" fill="#FFFFFF" stroke="#18181B" strokeWidth="1.6" />
                  <text x="135" y="104" textAnchor="middle" fill="#18181B" fontSize="9.8" fontWeight="600" fontFamily="monospace">
                    GEOCODING_{"{JENIS_ALAMAT}"}_{"{NAMA_PROVINSI}"}
                  </text>
                </g>

                {/* Pair 2 */}
                <g filter="url(#card-shadow)">
                  <rect x="20" y="160" width="230" height="38" rx="3" fill="#FFFFFF" stroke="#18181B" strokeWidth="1.6" />
                  <text x="135" y="184" textAnchor="middle" fill="#18181B" fontSize="9.8" fontWeight="600" fontFamily="monospace">
                    GEOCODING_{"{JENIS_ALAMAT}"}_{"{NAMA_PROVINSI}"}
                  </text>
                </g>
                <g filter="url(#card-shadow)">
                  <rect x="20" y="215" width="230" height="38" rx="3" fill="#FFFFFF" stroke="#18181B" strokeWidth="1.6" />
                  <text x="135" y="239" textAnchor="middle" fill="#18181B" fontSize="9.8" fontWeight="600" fontFamily="monospace">
                    GEOCODING_{"{JENIS_ALAMAT}"}_{"{NAMA_PROVINSI}"}
                  </text>
                </g>

                {/* Pair 3 */}
                <g filter="url(#card-shadow)">
                  <rect x="20" y="330" width="230" height="38" rx="3" fill="#FFFFFF" stroke="#18181B" strokeWidth="1.6" />
                  <text x="135" y="354" textAnchor="middle" fill="#18181B" fontSize="9.8" fontWeight="600" fontFamily="monospace">
                    GEOCODING_{"{JENIS_ALAMAT}"}_{"{NAMA_PROVINSI}"}
                  </text>
                </g>
                <g filter="url(#card-shadow)">
                  <rect x="20" y="385" width="230" height="38" rx="3" fill="#FFFFFF" stroke="#18181B" strokeWidth="1.6" />
                  <text x="135" y="409" textAnchor="middle" fill="#18181B" fontSize="9.8" fontWeight="600" fontFamily="monospace">
                    GEOCODING_{"{JENIS_ALAMAT}"}_{"{NAMA_PROVINSI}"}
                  </text>
                </g>

                {/* Pair 4 */}
                <g filter="url(#card-shadow)">
                  <rect x="20" y="465" width="230" height="38" rx="3" fill="#FFFFFF" stroke="#18181B" strokeWidth="1.6" />
                  <text x="135" y="489" textAnchor="middle" fill="#18181B" fontSize="9.8" fontWeight="600" fontFamily="monospace">
                    GEOCODING_{"{JENIS_ALAMAT}"}_{"{NAMA_PROVINSI}"}
                  </text>
                </g>
                <g filter="url(#card-shadow)">
                  <rect x="20" y="520" width="230" height="38" rx="3" fill="#FFFFFF" stroke="#18181B" strokeWidth="1.6" />
                  <text x="135" y="544" textAnchor="middle" fill="#18181B" fontSize="9.8" fontWeight="600" fontFamily="monospace">
                    GEOCODING_{"{JENIS_ALAMAT}"}_{"{NAMA_PROVINSI}"}
                  </text>
                </g>

                {/* ================= COLUMN 2: PULAU (4 BOXES) ================= */}
                <g filter="url(#card-shadow)">
                  <rect x="310" y="52.5" width="230" height="38" rx="3" fill="#FFFFFF" stroke="#18181B" strokeWidth="1.6" />
                  <text x="425" y="76.5" textAnchor="middle" fill="#18181B" fontSize="9.8" fontWeight="600" fontFamily="monospace">
                    GEOCODING_{"{JENIS_ALAMAT}"}_{"{NAMA_PULAU}"}
                  </text>
                </g>
                <g filter="url(#card-shadow)">
                  <rect x="310" y="187.5" width="230" height="38" rx="3" fill="#FFFFFF" stroke="#18181B" strokeWidth="1.6" />
                  <text x="425" y="211.5" textAnchor="middle" fill="#18181B" fontSize="9.8" fontWeight="600" fontFamily="monospace">
                    GEOCODING_{"{JENIS_ALAMAT}"}_{"{NAMA_PULAU}"}
                  </text>
                </g>
                <g filter="url(#card-shadow)">
                  <rect x="310" y="357.5" width="230" height="38" rx="3" fill="#FFFFFF" stroke="#18181B" strokeWidth="1.6" />
                  <text x="425" y="381.5" textAnchor="middle" fill="#18181B" fontSize="9.8" fontWeight="600" fontFamily="monospace">
                    GEOCODING_{"{JENIS_ALAMAT}"}_{"{NAMA_PULAU}"}
                  </text>
                </g>
                <g filter="url(#card-shadow)">
                  <rect x="310" y="492.5" width="230" height="38" rx="3" fill="#FFFFFF" stroke="#18181B" strokeWidth="1.6" />
                  <text x="425" y="516.5" textAnchor="middle" fill="#18181B" fontSize="9.8" fontWeight="600" fontFamily="monospace">
                    GEOCODING_{"{JENIS_ALAMAT}"}_{"{NAMA_PULAU}"}
                  </text>
                </g>

                {/* ================= COLUMN 3: JENIS ALAMAT (2 BOXES) ================= */}
                <g filter="url(#card-shadow)">
                  <rect x="600" y="119" width="205" height="40" rx="3" fill="#FFFFFF" stroke="#18181B" strokeWidth="1.6" />
                  <text x="702.5" y="144" textAnchor="middle" fill="#18181B" fontSize="10.5" fontWeight="600" fontFamily="monospace">
                    GEOCODING_ALL_{"{JENIS_ALAMAT}"}
                  </text>
                </g>
                <g filter="url(#card-shadow)">
                  <rect x="600" y="424" width="205" height="40" rx="3" fill="#FFFFFF" stroke="#18181B" strokeWidth="1.6" />
                  <text x="702.5" y="449" textAnchor="middle" fill="#18181B" fontSize="10.5" fontWeight="600" fontFamily="monospace">
                    GEOCODING_ALL_{"{JENIS_ALAMAT}"}
                  </text>
                </g>

                {/* ================= COLUMN 4: ALL CUSTOMER (YELLOW MASTER BOX) ================= */}
                <g filter="url(#card-shadow)">
                  <rect x="865" y="267.5" width="175" height="48" rx="3" fill="#FFEB3B" stroke="#18181B" strokeWidth="2" />
                  <text x="952.5" y="297" textAnchor="middle" fill="#18181B" fontSize="10.8" fontWeight="800" fontFamily="monospace">
                    GEOCODING_ALL_CUSTOMER
                  </text>
                </g>
              </svg>
            </div>

            {/* HIERARCHY EXPLANATION CARDS */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
              <div className="rounded-xl p-3.5 bg-white border border-[#E2E8F0] shadow-2xs space-y-1.5">
                <div className="flex items-center space-x-2">
                  <span className="w-5 h-5 rounded-full bg-[#18181B] text-white text-[10px] font-bold flex items-center justify-center font-mono">
                    1
                  </span>
                  <span className="text-xs font-bold text-[#18181B]">Provincial Micro-Batches</span>
                </div>
                <p className="text-[11px] text-[#64748B] leading-relaxed">
                  Raw geocoded outputs partitioned by province and address type (e.g. Tagih, Domisili) to ensure parallel API execution without worker collisions.
                </p>
              </div>

              <div className="rounded-xl p-3.5 bg-white border border-[#E2E8F0] shadow-2xs space-y-1.5">
                <div className="flex items-center space-x-2">
                  <span className="w-5 h-5 rounded-full bg-[#18181B] text-white text-[10px] font-bold flex items-center justify-center font-mono">
                    2
                  </span>
                  <span className="text-xs font-bold text-[#18181B]">Island Cluster Aggregation</span>
                </div>
                <p className="text-[11px] text-[#64748B] leading-relaxed">
                  Provincial files consolidated into major geographic island groups (Jawa, Sumatera, Kalimantan, Sulawesi, Bali/Nusa, Papua) for boundary bounding-box validation.
                </p>
              </div>

              <div className="rounded-xl p-3.5 bg-white border border-[#E2E8F0] shadow-2xs space-y-1.5">
                <div className="flex items-center space-x-2">
                  <span className="w-5 h-5 rounded-full bg-[#18181B] text-white text-[10px] font-bold flex items-center justify-center font-mono">
                    3
                  </span>
                  <span className="text-xs font-bold text-[#18181B]">Address Category Union</span>
                </div>
                <p className="text-[11px] text-[#64748B] leading-relaxed">
                  Island-level datasets vertically stacked into master address tables (<code className="text-[10px] bg-[#F2F2ED] px-1 py-0.5 rounded text-[#18181B]">GEOCODING_ALL_TAGIH</code>) with automated row count audit reconciliation.
                </p>
              </div>

              <div className="rounded-xl p-3.5 bg-[#FFFDE7] border border-[#FDE047] shadow-2xs space-y-1.5">
                <div className="flex items-center space-x-2">
                  <span className="w-5 h-5 rounded-full bg-[#FFD600] text-[#18181B] text-[10px] font-bold flex items-center justify-center font-mono">
                    4
                  </span>
                  <span className="text-xs font-bold text-[#18181B]">Enterprise Customer Mart</span>
                </div>
                <p className="text-[11px] text-[#713F12] leading-relaxed">
                  Final master table (<code className="text-[10px] bg-[#FEF08A] px-1 py-0.5 rounded text-[#713F12] font-bold">GEOCODING_ALL_CUSTOMER</code>) integrating 2M+ validated coordinates ready for production operations and spatial queries.
                </p>
              </div>
            </div>
          </div>
        )}
      </section>

      {/* SECTION 2: VIEW DOCUMENTATION BANNER & MODAL DIALOG */}
      <section className="pt-4 border-t border-[#E2E8F0]">
        <div className="rounded-2xl border border-[#E2E8F0] bg-gradient-to-br from-[#FAF9F5] to-[#F2F2ED] p-5 sm:p-6 shadow-xs flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div className="space-y-1.5 max-w-xl">
            <div className="inline-flex items-center space-x-1.5 px-2.5 py-0.5 rounded-full text-[10.5px] font-bold uppercase tracking-wider bg-white text-[#2E6FA0] border border-[#EBE8E1]">
              <FileText className="w-3.5 h-3.5" />
              <span>Project Documentation &amp; Slides</span>
            </div>
            <h3 className="text-base sm:text-lg font-bold text-[#18181B]">
              Customer Address Geocoding Workflow: Presentation Deck
            </h3>
            <p className="text-xs text-[#64748B] leading-relaxed">
              Explore the complete project slide deck, API specifications, and geospatial validation architecture directly in an interactive document popup.
            </p>
          </div>

          <div className="flex items-center space-x-2 shrink-0">
            <button
              type="button"
              onClick={() => setIsDocModalOpen(true)}
              className="inline-flex items-center space-x-2 px-5 py-2.5 rounded-xl text-xs font-bold text-white bg-[#18181B] hover:bg-[#27272A] transition-all cursor-pointer shadow-sm hover:shadow-md hover:scale-[1.02] active:scale-[0.98]"
            >
              <Eye className="w-4 h-4 text-[#FACC15]" />
              <span>View Documentation</span>
            </button>
            <a
              href={driveViewUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Open documentation in external Google Drive tab"
              className="p-2.5 rounded-xl text-[#64748B] hover:text-[#18181B] bg-white hover:bg-[#EBE8E1] border border-[#E2E8F0] transition-colors shadow-2xs"
            >
              <ExternalLink className="w-4 h-4" />
            </a>
          </div>
        </div>
      </section>

      {/* INTERACTIVE DOCUMENTATION MODAL POPUP */}
      {isDocModalOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/80 backdrop-blur-sm animate-in fade-in duration-200"
          onClick={() => setIsDocModalOpen(false)}
        >
          <div
            className="relative w-full max-w-5xl h-[88vh] bg-[#0F172A] rounded-2xl overflow-hidden shadow-2xl flex flex-col border border-white/10 animate-in zoom-in-95 duration-200"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Top Modal Chrome Bar */}
            <div className="px-4 sm:px-6 py-3 bg-[#1E293B] border-b border-[#334155] flex items-center justify-between text-white shrink-0">
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 rounded-lg bg-[#2E6FA0]/30 border border-[#38BDF8]/40 flex items-center justify-center text-[#38BDF8]">
                  <FileText className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="text-xs sm:text-sm font-bold text-[#F8FAFC]">
                    Customer Address Geocoding Workflow: Presentation Deck
                  </h4>
                  <p className="text-[11px] text-[#94A3B8]">
                    PT Adira Dinamika Multi Finance, Tbk. · Interactive Google Drive Preview
                  </p>
                </div>
              </div>

              <div className="flex items-center space-x-2">
                <a
                  href={driveViewUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hidden sm:inline-flex items-center space-x-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold text-[#CBD5E1] hover:text-white bg-[#334155] hover:bg-[#475569] transition-colors"
                >
                  <span>Open in New Tab</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
                <button
                  type="button"
                  onClick={() => setIsDocModalOpen(false)}
                  className="p-1.5 rounded-lg text-[#94A3B8] hover:text-white hover:bg-[#334155] transition-colors cursor-pointer"
                  aria-label="Close modal"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
            </div>

            {/* Iframe Viewport */}
            <div className="relative flex-1 w-full h-full bg-white">
              <iframe
                src={driveEmbedUrl}
                width="100%"
                height="100%"
                className="w-full h-full border-0"
                allow="autoplay; fullscreen"
                loading="lazy"
                title="Customer Address Geocoding Workflow: Presentation Deck"
              />
            </div>

            {/* Bottom Modal Helper Bar */}
            <div className="px-4 py-2 bg-[#0F172A] border-t border-[#334155] flex items-center justify-between text-[11px] text-[#94A3B8] shrink-0">
              <span>Press Escape or click outside to close</span>
              <a
                href={driveViewUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white transition-colors underline underline-offset-2 flex items-center space-x-1"
              >
                <span>Direct Google Drive Link</span>
                <ExternalLink className="w-3 h-3" />
              </a>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
