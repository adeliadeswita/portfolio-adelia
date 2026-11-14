"use client";

import Link from "next/link";
import { BarChart3, LineChart, PieChart, ArrowUpRight } from "lucide-react";

export function ExpertiseCards() {
  const cards = [
    {
      title: "Business Intelligence",
      subtitle: "Data Marts & Executive Command Centers",
      description:
        "Kimball star-schema architecture in BigQuery and PostgreSQL with automated reporting pipelines and hourly GMV visibility.",
      icon: <BarChart3 className="w-6 h-6 text-[#0F172A]" />,
      tools: ["Google BigQuery", "Looker Studio", "Data Marts"],
      link: "/projects?category=Business+Intelligence",
      cta: "Explore BI Work",
      color: "hover:border-[#D4D0C8]"
    },
    {
      title: "Data Analytics",
      subtitle: "Financial Economics & Spatial Intelligence",
      description:
        "Unit economics margin decomposition, transaction fee elasticity simulations, customer cohort retention, and PostGIS spatial clustering.",
      icon: <LineChart className="w-6 h-6 text-[#0F172A]" />,
      tools: ["Python (Pandas)", "PostgreSQL", "Cohort Analysis"],
      link: "/projects?category=Data+Analytics",
      cta: "Explore Analytics",
      color: "hover:border-[#D4D0C8]"
    },
    {
      title: "Data Visualization",
      subtitle: "Decision-Grade Dashboards & Scenarios",
      description:
        "Transforming fragmented event tables into intuitive Looker Studio, Tableau, and Metabase suites with actionable operational alerts.",
      icon: <PieChart className="w-6 h-6 text-[#0F172A]" />,
      tools: ["Tableau", "Looker Studio", "Metabase"],
      link: "/projects?category=Data+Visualization",
      cta: "Explore Dashboards",
      color: "hover:border-[#D4D0C8]"
    }
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
      {cards.map((card, idx) => (
        <Link
          key={card.title}
          href={card.link}
          target="_self"
          className={`group bg-white rounded-3xl border border-[#EBE8E1] p-7 sm:p-8 editorial-shadow hover:shadow-xl transition-all duration-300 hover:-translate-y-1.5 flex flex-col justify-between ${card.color}`}
        >
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <div className="w-12 h-12 rounded-2xl bg-[#F8FAFC] border border-[#E2E8F0] flex items-center justify-center group-hover:bg-[#EBF3F8] transition-colors">
                {card.icon}
              </div>
              <span className="text-xs font-bold text-[#64748B] uppercase tracking-wider">
                0{idx + 1}
              </span>
            </div>

            <div>
              <h3 className="font-bold text-xl sm:text-2xl text-[#0F172A] group-hover:text-[#2E6FA0] transition-colors tracking-tight">
                {card.title}
              </h3>
              <p className="text-xs font-semibold text-[#64748B] uppercase tracking-wider mt-0.5">
                {card.subtitle}
              </p>
            </div>

            <p className="text-xs sm:text-sm text-[#64748B] leading-relaxed">
              {card.description}
            </p>
          </div>

          <div className="pt-6 mt-6 border-t border-[#E2E8F0] space-y-4">
            <div className="flex flex-wrap gap-1.5">
              {card.tools.map((t) => (
                <span
                  key={t}
                  className="px-2 py-0.5 rounded-md text-[11px] font-medium bg-[#F8FAFC] text-[#64748B] border border-[#E2E8F0]"
                >
                  {t}
                </span>
              ))}
            </div>

            <div className="flex items-center justify-between text-xs font-bold uppercase tracking-wider text-[#18181B] group-hover:text-[#2E6FA0] transition-colors pt-1">
              <span>{card.cta}</span>
              <div className="w-6 h-6 rounded-md bg-[#F2F2ED] group-hover:bg-[#EBE8E1] flex items-center justify-center transition-transform group-hover:translate-x-1">
                <ArrowUpRight className="w-3.5 h-3.5 text-[#18181B]" />
              </div>
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
}
