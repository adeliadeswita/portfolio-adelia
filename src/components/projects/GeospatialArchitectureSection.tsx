"use client";

import { useState } from "react";
import { Database, GitFork, Network, Layers, Table2 } from "lucide-react";

export function GeospatialArchitectureSection() {
  const [activeTab, setActiveTab] = useState<"pipeline" | "starschema" | "erd">("pipeline");

  return (
    <section className="space-y-4 pt-8 border-t border-[#E2E8F0]">
      {/* Section Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
        <div>
          <div className="flex items-center space-x-2 text-[11px] font-bold uppercase tracking-wider text-[#2E6FA0]">
            <Layers className="w-3.5 h-3.5" />
            <span>Technical Schemas &amp; Data Engineering</span>
          </div>
          <h2 className="text-lg sm:text-xl font-bold text-[#18181B] tracking-tight">
            System Architecture &amp; Database Schemas
          </h2>
        </div>

        {/* Tab Switcher */}
        <div className="inline-flex items-center p-1 rounded-xl bg-[#F2F2ED] border border-[#EBE8E1] self-start sm:self-auto shadow-2xs">
          <button
            type="button"
            onClick={() => setActiveTab("pipeline")}
            className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all cursor-pointer flex items-center space-x-1.5 ${
              activeTab === "pipeline"
                ? "bg-white text-[#0F172A] shadow-xs border border-[#E2E8F0]"
                : "text-[#64748B] hover:text-[#0F172A]"
            }`}
          >
            <Network className="w-3.5 h-3.5 text-[#2E6FA0]" />
            <span>ETL Architecture</span>
          </button>
          <button
            type="button"
            onClick={() => setActiveTab("starschema")}
            className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all cursor-pointer flex items-center space-x-1.5 ${
              activeTab === "starschema"
                ? "bg-white text-[#0F172A] shadow-xs border border-[#E2E8F0]"
                : "text-[#64748B] hover:text-[#0F172A]"
            }`}
          >
            <Database className="w-3.5 h-3.5 text-[#CA8A04]" />
            <span>Star Schema (OLAP)</span>
          </button>
          <button
            type="button"
            onClick={() => setActiveTab("erd")}
            className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all cursor-pointer flex items-center space-x-1.5 ${
              activeTab === "erd"
                ? "bg-white text-[#0F172A] shadow-xs border border-[#E2E8F0]"
                : "text-[#64748B] hover:text-[#0F172A]"
            }`}
          >
            <Table2 className="w-3.5 h-3.5 text-[#0F172A]" />
            <span>Physical ERD (OLTP)</span>
          </button>
        </div>
      </div>

      {/* 1. END-TO-END ETL PIPELINE ARCHITECTURE */}
      {activeTab === "pipeline" && (
        <div className="bg-white rounded-3xl border border-[#EBE8E1] p-4 sm:p-6 lg:p-8 editorial-shadow space-y-4 animate-in fade-in duration-200">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-2 border-b border-[#EBE8E1] gap-2">
            <div>
              <span className="text-[10px] font-bold uppercase tracking-wider text-[#2E6FA0]">
                High-Level Pipeline
              </span>
              <h3 className="text-base font-bold text-[#0F172A]">
                End-to-End ETL Pipeline Architecture
              </h3>
            </div>
            <span className="text-xs text-[#64748B] font-mono bg-[#F8FAFC] px-2.5 py-1 rounded-md border border-[#E2E8F0]">
              Operational DB &rarr; ETL Python &rarr; Geospatial Data Mart &rarr; Web GIS
            </span>
          </div>

          {/* Fully Responsive SVG Canvas (Fit-in without horizontal scroll) */}
          <div className="w-full flex items-center justify-center py-2">
            <svg
              viewBox="0 0 960 210"
              className="w-full h-auto max-w-full font-sans select-none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <defs>
                <marker
                  id="etl-arrow-en"
                  viewBox="0 0 10 10"
                  refX="6"
                  refY="5"
                  markerWidth="7"
                  markerHeight="7"
                  orient="auto-start-reverse"
                >
                  <path d="M 0 1.5 L 8 5 L 0 8.5 z" fill="#0F172A" />
                </marker>
              </defs>

              {/* BOX 1: OPERATIONAL DATABASE */}
              <g transform="translate(15, 20)">
                <rect x="0" y="0" width="195" height="165" fill="#FFFFFF" stroke="#0F172A" strokeWidth="1.75" rx="3" />
                <text x="97.5" y="34" textAnchor="middle" fontWeight="bold" fontSize="12" fill="#0F172A" letterSpacing="0.3">
                  OPERATIONAL DATABASE
                </text>
                <line x1="15" y1="46" x2="180" y2="46" stroke="#E2E8F0" strokeWidth="1" />
                <text x="97.5" y="78" textAnchor="middle" fontSize="12" fill="#334155">
                  Customer
                </text>
                <text x="97.5" y="108" textAnchor="middle" fontSize="12" fill="#334155">
                  CustomerContract
                </text>
                <text x="97.5" y="138" textAnchor="middle" fontSize="12" fill="#334155">
                  BillingAddress
                </text>
              </g>

              {/* Arrow 1 -> 2 */}
              <line x1="210" y1="102" x2="252" y2="102" stroke="#0F172A" strokeWidth="1.75" markerEnd="url(#etl-arrow-en)" />

              {/* BOX 2: ETL DATA MART REFRESH */}
              <g transform="translate(255, 35)">
                <rect x="0" y="0" width="195" height="135" fill="#FFFFFF" stroke="#0F172A" strokeWidth="1.75" rx="3" />
                <text x="97.5" y="40" textAnchor="middle" fontWeight="bold" fontSize="12" fill="#0F172A" letterSpacing="0.3">
                  ETL DATA MART REFRESH
                </text>
                <line x1="15" y1="56" x2="180" y2="56" stroke="#E2E8F0" strokeWidth="1" />
                <text x="97.5" y="90" textAnchor="middle" fontSize="11.5" fontFamily="monospace" fontWeight="600" fill="#1E3A8A">
                  etl_refresh_datamart.py
                </text>
              </g>

              {/* Arrow 2 -> 3 */}
              <line x1="450" y1="102" x2="492" y2="102" stroke="#0F172A" strokeWidth="1.75" markerEnd="url(#etl-arrow-en)" />

              {/* BOX 3: GEOSPATIAL DATA MART */}
              <g transform="translate(495, 15)">
                <rect x="0" y="0" width="205" height="175" fill="#FFFFFF" stroke="#0F172A" strokeWidth="1.75" rx="3" />
                <text x="102.5" y="32" textAnchor="middle" fontWeight="bold" fontSize="12" fill="#0F172A" letterSpacing="0.3">
                  GEOSPATIAL DATA MART
                </text>
                <line x1="15" y1="44" x2="190" y2="44" stroke="#E2E8F0" strokeWidth="1" />
                <text x="102.5" y="70" textAnchor="middle" fontSize="11.5" fill="#334155">
                  dim_product
                </text>
                <text x="102.5" y="96" textAnchor="middle" fontSize="11.5" fill="#334155">
                  dim_credit_status
                </text>
                <text x="102.5" y="122" textAnchor="middle" fontSize="11.5" fill="#334155">
                  dim_region
                </text>
                <text x="102.5" y="150" textAnchor="middle" fontSize="11.5" fontWeight="600" fill="#B45309">
                  fact_customer_geospatial
                </text>
              </g>

              {/* Arrow 3 -> 4 */}
              <line x1="700" y1="102" x2="742" y2="102" stroke="#0F172A" strokeWidth="1.75" markerEnd="url(#etl-arrow-en)" />

              {/* BOX 4: VISUALIZATION & WEB GIS */}
              <g transform="translate(745, 10)">
                <rect x="0" y="0" width="200" height="185" fill="#FFFFFF" stroke="#0F172A" strokeWidth="1.75" rx="3" />
                <text x="100" y="30" textAnchor="middle" fontWeight="bold" fontSize="12" fill="#0F172A" letterSpacing="0.3">
                  VISUALIZATION &amp; WEB GIS
                </text>
                <line x1="15" y1="42" x2="185" y2="42" stroke="#E2E8F0" strokeWidth="1" />
                <text x="100" y="66" textAnchor="middle" fontSize="11.5" fill="#334155">
                  Heatmap
                </text>
                <text x="100" y="92" textAnchor="middle" fontSize="11.5" fill="#334155">
                  Cluster
                </text>
                <text x="100" y="118" textAnchor="middle" fontSize="11.5" fill="#334155">
                  Choropleth
                </text>
                <text x="100" y="144" textAnchor="middle" fontSize="11.5" fill="#334155">
                  Donut Chart
                </text>
                <text x="100" y="170" textAnchor="middle" fontSize="11.5" fill="#334155">
                  Bar Chart
                </text>
              </g>
            </svg>
          </div>
        </div>
      )}

      {/* 2. GEOSPATIAL DATA MART STAR SCHEMA */}
      {activeTab === "starschema" && (
        <div className="bg-white rounded-3xl border border-[#EBE8E1] p-4 sm:p-6 lg:p-8 editorial-shadow space-y-4 animate-in fade-in duration-200">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-2 border-b border-[#EBE8E1] gap-2">
            <div>
              <span className="text-[10px] font-bold uppercase tracking-wider text-[#A16207]">
                Dimensional Modeling (OLAP)
              </span>
              <h3 className="text-base font-bold text-[#0F172A]">
                Geospatial Data Mart Star Schema
              </h3>
            </div>
            <span className="text-xs text-[#64748B] font-mono bg-[#F8FAFC] px-2.5 py-1 rounded-md border border-[#E2E8F0]">
              1 Central Fact Table &bull; 3 Dimension Tables &bull; Star Topology
            </span>
          </div>

          {/* Fully Responsive SVG Canvas (Fit-in without horizontal scroll) */}
          <div className="w-full flex items-center justify-center py-2">
            <svg
              viewBox="0 0 860 760"
              className="w-full h-auto max-w-full font-sans select-none"
              xmlns="http://www.w3.org/2000/svg"
            >
              {/* Connector Lines */}
              <line x1="120" y1="135" x2="315" y2="300" stroke="#0F172A" strokeWidth="1.75" />
              <line x1="430" y1="165" x2="430" y2="300" stroke="#0F172A" strokeWidth="1.75" />
              <line x1="720" y1="230" x2="545" y2="300" stroke="#0F172A" strokeWidth="1.75" />

              {/* TABLE 1: dim_product */}
              <g transform="translate(25, 20)">
                <rect x="0" y="0" width="190" height="115" fill="#CFE0F2" stroke="#0F172A" strokeWidth="1.75" rx="3" />
                <text x="95" y="24" textAnchor="middle" fontWeight="bold" fontSize="12" fill="#0F172A">
                  Dim Table
                </text>
                <text x="95" y="42" textAnchor="middle" fontWeight="bold" fontSize="12" fill="#0F172A">
                  dim_product
                </text>
                <text x="95" y="70" textAnchor="middle" fontSize="11" fill="#0F172A">
                  product_key (PK)
                </text>
                <text x="95" y="94" textAnchor="middle" fontSize="11" fill="#0F172A">
                  product_type
                </text>
              </g>

              {/* TABLE 2: dim_credit_status */}
              <g transform="translate(325, 20)">
                <rect x="0" y="0" width="210" height="145" fill="#CFE0F2" stroke="#0F172A" strokeWidth="1.75" rx="3" />
                <text x="105" y="24" textAnchor="middle" fontWeight="bold" fontSize="12" fill="#0F172A">
                  Dim Table
                </text>
                <text x="105" y="42" textAnchor="middle" fontWeight="bold" fontSize="12" fill="#0F172A">
                  dim_credit_status
                </text>
                <text x="105" y="72" textAnchor="middle" fontSize="11" fill="#0F172A">
                  credit_status_key (PK)
                </text>
                <text x="105" y="98" textAnchor="middle" fontSize="11" fill="#0F172A">
                  credit_status
                </text>
                <text x="105" y="124" textAnchor="middle" fontSize="11" fill="#0F172A">
                  is_risk
                </text>
              </g>

              {/* TABLE 3: dim_region */}
              <g transform="translate(615, 10)">
                <rect x="0" y="0" width="220" height="235" fill="#CFE0F2" stroke="#0F172A" strokeWidth="1.75" rx="3" />
                <text x="110" y="24" textAnchor="middle" fontWeight="bold" fontSize="12" fill="#0F172A">
                  Dim Table
                </text>
                <text x="110" y="42" textAnchor="middle" fontWeight="bold" fontSize="12" fill="#0F172A">
                  dim_region
                </text>
                <text x="110" y="68" textAnchor="middle" fontSize="10.5" fill="#0F172A">
                  region_key (PK)
                </text>
                <text x="110" y="89" textAnchor="middle" fontSize="10.5" fill="#0F172A">
                  billing_province
                </text>
                <text x="110" y="110" textAnchor="middle" fontSize="10.5" fill="#0F172A">
                  billing_city
                </text>
                <text x="110" y="131" textAnchor="middle" fontSize="10.5" fill="#0F172A">
                  billing_district
                </text>
                <text x="110" y="152" textAnchor="middle" fontSize="10.5" fill="#0F172A">
                  billing_subdistrict
                </text>
                <text x="110" y="173" textAnchor="middle" fontSize="10.5" fill="#0F172A">
                  billing_postal_code
                </text>
                <text x="110" y="194" textAnchor="middle" fontSize="10.5" fill="#0F172A">
                  bps_province
                </text>
                <text x="110" y="215" textAnchor="middle" fontSize="10.5" fill="#0F172A">
                  bps_city
                </text>
              </g>

              {/* TABLE 4: fact_customer_geospatial */}
              <g transform="translate(295, 300)">
                <rect x="0" y="0" width="270" height="440" fill="#FEE685" stroke="#0F172A" strokeWidth="1.75" rx="3" />
                <text x="135" y="26" textAnchor="middle" fontWeight="bold" fontSize="12" fill="#0F172A">
                  FACT TABLE
                </text>
                <text x="135" y="45" textAnchor="middle" fontWeight="bold" fontSize="12" fill="#0F172A">
                  fact_customer_geospatial
                </text>
                <line x1="15" y1="54" x2="255" y2="54" stroke="#D97706" strokeWidth="0.75" />

                <text x="135" y="72" textAnchor="middle" fontSize="10.5" fill="#0F172A">fact_id (PK)</text>
                <text x="135" y="91" textAnchor="middle" fontSize="10.5" fill="#0F172A">cust_no</text>
                <text x="135" y="110" textAnchor="middle" fontSize="10.5" fill="#0F172A">cust_name</text>
                <text x="135" y="129" textAnchor="middle" fontSize="10.5" fill="#0F172A">cust_type</text>
                <text x="135" y="148" textAnchor="middle" fontSize="10.5" fill="#0F172A">contract_no</text>
                <text x="135" y="167" textAnchor="middle" fontSize="10.5" fill="#0F172A">id_address</text>
                <text x="135" y="186" textAnchor="middle" fontSize="10.5" fontWeight="600" fill="#1E3A8A">product_key (FK)</text>
                <text x="135" y="205" textAnchor="middle" fontSize="10.5" fontWeight="600" fill="#1E3A8A">credit_status_key (FK)</text>
                <text x="135" y="224" textAnchor="middle" fontSize="10.5" fontWeight="600" fill="#1E3A8A">region_key (FK)</text>
                <text x="135" y="243" textAnchor="middle" fontSize="10.5" fill="#0F172A">latitude</text>
                <text x="135" y="262" textAnchor="middle" fontSize="10.5" fill="#0F172A">longitude</text>
                <text x="135" y="281" textAnchor="middle" fontSize="10.5" fill="#0F172A">geocoding_status</text>
                <text x="135" y="300" textAnchor="middle" fontSize="10.5" fill="#0F172A">address_status</text>
                <text x="135" y="319" textAnchor="middle" fontSize="10.5" fill="#0F172A">data_period</text>
                <text x="135" y="338" textAnchor="middle" fontSize="10.5" fill="#0F172A">source_type</text>
                <text x="135" y="357" textAnchor="middle" fontSize="10.5" fill="#0F172A">is_active</text>
                <text x="135" y="376" textAnchor="middle" fontSize="10.5" fontWeight="600" fill="#B91C1C">is_risk</text>
                <text x="135" y="395" textAnchor="middle" fontSize="10.5" fill="#0F172A">created_at</text>
                <text x="135" y="414" textAnchor="middle" fontSize="10.5" fill="#0F172A">updated_at</text>
              </g>
            </svg>
          </div>
        </div>
      )}

      {/* 3. OPERATIONAL RELATIONAL DATABASE SCHEMA (PHYSICAL ERD) */}
      {activeTab === "erd" && (
        <div className="bg-white rounded-3xl border border-[#EBE8E1] p-4 sm:p-6 lg:p-8 editorial-shadow space-y-4 animate-in fade-in duration-200">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-2 border-b border-[#EBE8E1] gap-2">
            <div>
              <span className="text-[10px] font-bold uppercase tracking-wider text-[#0F172A]">
                Relational Physical ERD (OLTP)
              </span>
              <h3 className="text-base font-bold text-[#0F172A]">
                Operational Relational Database Schema
              </h3>
            </div>
            <span className="text-xs text-[#64748B] font-mono bg-[#F8FAFC] px-2.5 py-1 rounded-md border border-[#E2E8F0]">
              7 Physical Tables &bull; Primary &amp; Foreign Key Relationships
            </span>
          </div>

          {/* Fully Responsive SVG Canvas (Fit-in without horizontal scroll) */}
          <div className="w-full flex items-center justify-center py-2">
            <svg
              viewBox="0 0 920 620"
              className="w-full h-auto max-w-full font-sans select-none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <defs>
                <marker
                  id="erd-arrow-en"
                  viewBox="0 0 10 10"
                  refX="6"
                  refY="5"
                  markerWidth="7"
                  markerHeight="7"
                  orient="auto-start-reverse"
                >
                  <path d="M 0 1.5 L 8 5 L 0 8.5 z" fill="#0F172A" />
                </marker>
              </defs>

              {/* RELATIONSHIP ARROWS */}
              {/* LogAktivitas -> User (email) */}
              <line x1="110" y1="165" x2="110" y2="235" stroke="#0F172A" strokeWidth="1.5" markerEnd="url(#erd-arrow-en)" />

              {/* ImportJob -> User (email) */}
              <line x1="110" y1="420" x2="110" y2="365" stroke="#0F172A" strokeWidth="1.5" markerEnd="url(#erd-arrow-en)" />

              {/* CustomerContract -> Customer (cust_no) */}
              <line x1="425" y1="155" x2="425" y2="255" stroke="#0F172A" strokeWidth="1.5" markerEnd="url(#erd-arrow-en)" />

              {/* BillingAddress -> Customer (cust_no) */}
              <line x1="640" y1="290" x2="525" y2="290" stroke="#0F172A" strokeWidth="1.5" markerEnd="url(#erd-arrow-en)" />

              {/* Geocoding -> BillingAddress (id_address) */}
              <line x1="550" y1="460" x2="640" y2="460" stroke="#0F172A" strokeWidth="1.5" markerEnd="url(#erd-arrow-en)" />

              {/* Geocoding -> ImportJob (id_job) */}
              <line x1="300" y1="520" x2="225" y2="520" stroke="#0F172A" strokeWidth="1.5" markerEnd="url(#erd-arrow-en)" />

              {/* TABLE 1: LogAktivitas (Top Left) */}
              <g transform="translate(10, 15)">
                <rect x="0" y="0" width="200" height="150" fill="#FFFFFF" stroke="#0F172A" strokeWidth="1.5" />
                <rect x="0" y="0" width="200" height="22" fill="#FFFFFF" stroke="#0F172A" strokeWidth="1.5" />
                <text x="100" y="15" textAnchor="middle" fontWeight="bold" fontSize="11" fill="#0F172A">LogAktivitas</text>
                <text x="6" y="34" fontSize="9.5" fill="#0F172A">id_log</text>
                <text x="115" y="34" fontSize="9" fill="#334155">varchar(20)</text>
                <text x="175" y="34" fontSize="8.5" fontWeight="bold" fill="#0F172A">&lt;pk&gt;</text>
                <text x="6" y="47" fontSize="9.5" fill="#0F172A">email</text>
                <text x="115" y="47" fontSize="9" fill="#334155">varchar(255)</text>
                <text x="175" y="47" fontSize="8.5" fontWeight="bold" fill="#0F172A">&lt;fk&gt;</text>
                <text x="6" y="60" fontSize="9.5" fill="#0F172A">id_address</text>
                <text x="115" y="60" fontSize="9" fill="#334155">varchar(25)</text>
                <text x="6" y="73" fontSize="9.5" fill="#0F172A">id_job</text>
                <text x="115" y="73" fontSize="9" fill="#334155">varchar(25)</text>
                <text x="6" y="86" fontSize="9.5" fill="#0F172A">activity_type</text>
                <text x="115" y="86" fontSize="9" fill="#334155">varchar(50)</text>
                <text x="6" y="99" fontSize="9.5" fill="#0F172A">description</text>
                <text x="115" y="99" fontSize="9" fill="#334155">long varchar</text>
                <text x="6" y="112" fontSize="9.5" fill="#0F172A">old_value</text>
                <text x="115" y="112" fontSize="9" fill="#334155">long varchar</text>
                <text x="6" y="125" fontSize="9.5" fill="#0F172A">new_value</text>
                <text x="115" y="125" fontSize="9" fill="#334155">long varchar</text>
                <text x="6" y="138" fontSize="9.5" fill="#0F172A">created_at</text>
                <text x="115" y="138" fontSize="9" fill="#334155">timestamp</text>
              </g>

              {/* TABLE 2: User (Middle Left) */}
              <g transform="translate(10, 235)">
                <rect x="0" y="0" width="200" height="125" fill="#FFFFFF" stroke="#0F172A" strokeWidth="1.5" />
                <rect x="0" y="0" width="200" height="22" fill="#FFFFFF" stroke="#0F172A" strokeWidth="1.5" />
                <text x="100" y="15" textAnchor="middle" fontWeight="bold" fontSize="11" fill="#0F172A">User</text>
                <text x="6" y="36" fontSize="9.5" fill="#0F172A">email</text>
                <text x="115" y="36" fontSize="9" fill="#334155">varchar(255)</text>
                <text x="175" y="36" fontSize="8.5" fontWeight="bold" fill="#0F172A">&lt;pk&gt;</text>
                <text x="6" y="50" fontSize="9.5" fill="#0F172A">password_hash</text>
                <text x="115" y="50" fontSize="9" fill="#334155">varchar(30)</text>
                <text x="6" y="64" fontSize="9.5" fill="#0F172A">name</text>
                <text x="115" y="64" fontSize="9" fill="#334155">varchar(255)</text>
                <text x="6" y="78" fontSize="9.5" fill="#0F172A">role</text>
                <text x="115" y="78" fontSize="9" fill="#334155">varchar(20)</text>
                <text x="6" y="92" fontSize="9.5" fill="#0F172A">remember_token</text>
                <text x="115" y="92" fontSize="9" fill="#334155">varchar(100)</text>
                <text x="6" y="106" fontSize="9.5" fill="#0F172A">created_at</text>
                <text x="115" y="106" fontSize="9" fill="#334155">timestamp</text>
                <text x="6" y="119" fontSize="9.5" fill="#0F172A">updated_at</text>
                <text x="115" y="119" fontSize="9" fill="#334155">timestamp</text>
              </g>

              {/* TABLE 3: ImportJob (Bottom Left) */}
              <g transform="translate(10, 420)">
                <rect x="0" y="0" width="215" height="185" fill="#FFFFFF" stroke="#0F172A" strokeWidth="1.5" />
                <rect x="0" y="0" width="215" height="22" fill="#FFFFFF" stroke="#0F172A" strokeWidth="1.5" />
                <text x="107" y="15" textAnchor="middle" fontWeight="bold" fontSize="11" fill="#0F172A">ImportJob</text>
                <text x="6" y="35" fontSize="9.5" fill="#0F172A">id_job</text>
                <text x="120" y="35" fontSize="9" fill="#334155">varchar(25)</text>
                <text x="185" y="35" fontSize="8.5" fontWeight="bold" fill="#0F172A">&lt;pk&gt;</text>
                <text x="6" y="48" fontSize="9.5" fill="#0F172A">email</text>
                <text x="120" y="48" fontSize="9" fill="#334155">varchar(255)</text>
                <text x="185" y="48" fontSize="8.5" fontWeight="bold" fill="#0F172A">&lt;fk&gt;</text>
                <text x="6" y="61" fontSize="9.5" fill="#0F172A">original_name</text>
                <text x="120" y="61" fontSize="9" fill="#334155">varchar(255)</text>
                <text x="6" y="74" fontSize="9.5" fill="#0F172A">file_path</text>
                <text x="120" y="74" fontSize="9" fill="#334155">varchar(255)</text>
                <text x="6" y="87" fontSize="9.5" fill="#0F172A">status</text>
                <text x="120" y="87" fontSize="9" fill="#334155">varchar(255)</text>
                <text x="6" y="100" fontSize="9.5" fill="#0F172A">total_rows</text>
                <text x="120" y="100" fontSize="9" fill="#334155">integer</text>
                <text x="6" y="113" fontSize="9.5" fill="#0F172A">processed_rows</text>
                <text x="120" y="113" fontSize="9" fill="#334155">integer</text>
                <text x="6" y="126" fontSize="9.5" fill="#0F172A">success_rows</text>
                <text x="120" y="126" fontSize="9" fill="#334155">integer</text>
                <text x="6" y="139" fontSize="9.5" fill="#0F172A">failed_rows</text>
                <text x="120" y="139" fontSize="9" fill="#334155">integer</text>
                <text x="6" y="152" fontSize="9.5" fill="#0F172A">started_at</text>
                <text x="120" y="152" fontSize="9" fill="#334155">timestamp</text>
                <text x="6" y="165" fontSize="9.5" fill="#0F172A">finished_at</text>
                <text x="120" y="165" fontSize="9" fill="#334155">timestamp</text>
                <text x="6" y="178" fontSize="9.5" fill="#0F172A">error_message</text>
                <text x="120" y="178" fontSize="9" fill="#334155">text</text>
              </g>

              {/* TABLE 4: CustomerContract (Top Center) */}
              <g transform="translate(325, 20)">
                <rect x="0" y="0" width="200" height="135" fill="#FFFFFF" stroke="#0F172A" strokeWidth="1.5" />
                <rect x="0" y="0" width="200" height="22" fill="#FFFFFF" stroke="#0F172A" strokeWidth="1.5" />
                <text x="100" y="15" textAnchor="middle" fontWeight="bold" fontSize="11" fill="#0F172A">CustomerContract</text>
                <text x="6" y="35" fontSize="9.5" fill="#0F172A">contract_no</text>
                <text x="115" y="35" fontSize="9" fill="#334155">varchar(18)</text>
                <text x="175" y="35" fontSize="8.5" fontWeight="bold" fill="#0F172A">&lt;pk&gt;</text>
                <text x="6" y="51" fontSize="9.5" fill="#0F172A">cust_no</text>
                <text x="115" y="51" fontSize="9" fill="#334155">varchar(18)</text>
                <text x="175" y="51" fontSize="8.5" fontWeight="bold" fill="#0F172A">&lt;fk&gt;</text>
                <text x="6" y="67" fontSize="9.5" fill="#0F172A">product_type</text>
                <text x="115" y="67" fontSize="9" fill="#334155">varchar(18)</text>
                <text x="6" y="83" fontSize="9.5" fill="#0F172A">tenor</text>
                <text x="115" y="83" fontSize="9" fill="#334155">integer</text>
                <text x="6" y="99" fontSize="9.5" fill="#0F172A">branch_code</text>
                <text x="115" y="99" fontSize="9" fill="#334155">varchar(10)</text>
                <text x="6" y="115" fontSize="9.5" fill="#0F172A">credit_status</text>
                <text x="115" y="115" fontSize="9" fill="#334155">varchar(64)</text>
                <text x="6" y="129" fontSize="9.5" fill="#0F172A">is_active</text>
                <text x="115" y="129" fontSize="9" fill="#334155">smallint</text>
              </g>

              {/* TABLE 5: Customer (Middle Center) */}
              <g transform="translate(330, 255)">
                <rect x="0" y="0" width="195" height="85" fill="#FFFFFF" stroke="#0F172A" strokeWidth="1.5" />
                <rect x="0" y="0" width="195" height="22" fill="#FFFFFF" stroke="#0F172A" strokeWidth="1.5" />
                <text x="97" y="15" textAnchor="middle" fontWeight="bold" fontSize="11" fill="#0F172A">Customer</text>
                <text x="6" y="38" fontSize="9.5" fill="#0F172A">cust_no</text>
                <text x="110" y="38" fontSize="9" fill="#334155">varchar(18)</text>
                <text x="170" y="38" fontSize="8.5" fontWeight="bold" fill="#0F172A">&lt;pk&gt;</text>
                <text x="6" y="56" fontSize="9.5" fill="#0F172A">cust_name</text>
                <text x="110" y="56" fontSize="9" fill="#334155">varchar(100)</text>
                <text x="6" y="74" fontSize="9.5" fill="#0F172A">cust_type</text>
                <text x="110" y="74" fontSize="9" fill="#334155">varchar(20)</text>
              </g>

              {/* TABLE 6: Geocoding (Bottom Center) */}
              <g transform="translate(300, 400)">
                <rect x="0" y="0" width="250" height="205" fill="#FFFFFF" stroke="#0F172A" strokeWidth="1.5" />
                <rect x="0" y="0" width="250" height="22" fill="#FFFFFF" stroke="#0F172A" strokeWidth="1.5" />
                <text x="125" y="15" textAnchor="middle" fontWeight="bold" fontSize="11" fill="#0F172A">Geocoding</text>
                <text x="6" y="37" fontSize="9.5" fill="#0F172A">id_geocoding</text>
                <text x="135" y="37" fontSize="9" fill="#334155">varchar(36)</text>
                <text x="215" y="37" fontSize="8.5" fontWeight="bold" fill="#0F172A">&lt;pk&gt;</text>
                <text x="6" y="55" fontSize="9.5" fill="#0F172A">id_address</text>
                <text x="135" y="55" fontSize="9" fill="#334155">varchar(10)</text>
                <text x="215" y="55" fontSize="8.5" fontWeight="bold" fill="#0F172A">&lt;fk1&gt;</text>
                <text x="6" y="73" fontSize="9.5" fill="#0F172A">id_job</text>
                <text x="135" y="73" fontSize="9" fill="#334155">varchar(25)</text>
                <text x="215" y="73" fontSize="8.5" fontWeight="bold" fill="#0F172A">&lt;fk2&gt;</text>
                <text x="6" y="93" fontSize="9.5" fill="#0F172A">geocoding_date</text>
                <text x="135" y="93" fontSize="9" fill="#334155">timestamp</text>
                <text x="6" y="112" fontSize="9.5" fill="#0F172A">geocoding_status</text>
                <text x="135" y="112" fontSize="9" fill="#334155">varchar(30)</text>
                <text x="6" y="131" fontSize="9.5" fill="#0F172A">latitude_result</text>
                <text x="135" y="131" fontSize="9" fill="#334155">numeric(10,6)</text>
                <text x="6" y="150" fontSize="9.5" fill="#0F172A">longitude_result</text>
                <text x="135" y="150" fontSize="9" fill="#334155">numeric(10,6)</text>
                <text x="6" y="169" fontSize="9.5" fill="#0F172A">note</text>
                <text x="135" y="169" fontSize="9" fill="#334155">long varchar</text>
                <text x="6" y="188" fontSize="9.5" fill="#0F172A">created_at</text>
                <text x="135" y="188" fontSize="9" fill="#334155">timestamp</text>
                <text x="6" y="202" fontSize="9.5" fill="#0F172A">updated_at</text>
                <text x="135" y="202" fontSize="9" fill="#334155">timestamp</text>
              </g>

              {/* TABLE 7: BillingAddress (Right) */}
              <g transform="translate(640, 240)">
                <rect x="0" y="0" width="265" height="365" fill="#FFFFFF" stroke="#0F172A" strokeWidth="1.5" />
                <rect x="0" y="0" width="265" height="22" fill="#FFFFFF" stroke="#0F172A" strokeWidth="1.5" />
                <text x="132" y="15" textAnchor="middle" fontWeight="bold" fontSize="11" fill="#0F172A">BillingAddress</text>
                <text x="6" y="37" fontSize="9.5" fill="#0F172A">id_address</text>
                <text x="150" y="37" fontSize="9" fill="#334155">varchar(10)</text>
                <text x="235" y="37" fontSize="8.5" fontWeight="bold" fill="#0F172A">&lt;pk&gt;</text>
                <text x="6" y="55" fontSize="9.5" fill="#0F172A">id_job</text>
                <text x="150" y="55" fontSize="9" fill="#334155">varchar(25)</text>
                <text x="235" y="55" fontSize="8.5" fontWeight="bold" fill="#0F172A">&lt;fk2&gt;</text>
                <text x="6" y="73" fontSize="9.5" fill="#0F172A">cust_no</text>
                <text x="150" y="73" fontSize="9" fill="#334155">varchar(18)</text>
                <text x="235" y="73" fontSize="8.5" fontWeight="bold" fill="#0F172A">&lt;fk1&gt;</text>
                <text x="6" y="93" fontSize="9.5" fill="#0F172A">billing_address</text>
                <text x="150" y="93" fontSize="9" fill="#334155">long varchar</text>
                <text x="6" y="111" fontSize="9.5" fill="#0F172A">billing_subdistrict</text>
                <text x="150" y="111" fontSize="9" fill="#334155">varchar(100)</text>
                <text x="6" y="129" fontSize="9.5" fill="#0F172A">billing_district</text>
                <text x="150" y="129" fontSize="9" fill="#334155">varchar(100)</text>
                <text x="6" y="147" fontSize="9.5" fill="#0F172A">billing_city</text>
                <text x="150" y="147" fontSize="9" fill="#334155">varchar(100)</text>
                <text x="6" y="165" fontSize="9.5" fill="#0F172A">billing_province</text>
                <text x="150" y="165" fontSize="9" fill="#334155">varchar(100)</text>
                <text x="6" y="183" fontSize="9.5" fill="#0F172A">billing_postal_code</text>
                <text x="150" y="183" fontSize="9" fill="#334155">varchar(10)</text>
                <text x="6" y="201" fontSize="9.5" fill="#0F172A">full_address</text>
                <text x="150" y="201" fontSize="9" fill="#334155">varchar(255)</text>
                <text x="6" y="219" fontSize="9.5" fill="#0F172A">latitude</text>
                <text x="150" y="219" fontSize="9" fill="#334155">numeric(10,6)</text>
                <text x="6" y="237" fontSize="9.5" fill="#0F172A">longitude</text>
                <text x="150" y="237" fontSize="9" fill="#334155">numeric(10,6)</text>
                <text x="6" y="255" fontSize="9.5" fill="#0F172A">geocoding_status</text>
                <text x="150" y="255" fontSize="9" fill="#334155">varchar(50)</text>
                <text x="6" y="273" fontSize="9.5" fill="#0F172A">address_status</text>
                <text x="150" y="273" fontSize="9" fill="#334155">varchar(50)</text>
                <text x="6" y="291" fontSize="9.5" fill="#0F172A">data_period</text>
                <text x="150" y="291" fontSize="9" fill="#334155">varchar(20)</text>
                <text x="6" y="309" fontSize="9.5" fill="#0F172A">source_type</text>
                <text x="150" y="309" fontSize="9" fill="#334155">varchar(50)</text>
                <text x="6" y="327" fontSize="9.5" fill="#0F172A">created_by</text>
                <text x="150" y="327" fontSize="9" fill="#334155">varchar(100)</text>
                <text x="6" y="343" fontSize="9.5" fill="#0F172A">created_at / updated_at</text>
                <text x="195" y="343" fontSize="9" fill="#334155">timestamp</text>
              </g>
            </svg>
          </div>
        </div>
      )}
    </section>
  );
}
