import { Experience } from "@/types";

export const experiencesData: Experience[] = [
  {
    id: "blibli-bi",
    company: "PT Global Digital Niaga Tbk (Blibli)",
    position: "Business Intelligence Intern",
    employmentType: "Internship",
    period: "May 2026 - Present",
    location: "Jakarta, Indonesia",
    badge: "E-Commerce & Marketplace Analytics",
    description:
      "Analyzed business data across 7+ marketplaces and 30+ brands, built 5+ Looker Studio dashboards, and engineered BigQuery data marts from 5+ data warehouse tables.",
    responsibilities: [
      "Analyzed business data across 7+ marketplaces and commerce channels and 30+ brands, covering GMV, NMV, orders, AOV, traffic, conversion, advertising, affiliate, and livestream metrics to monitor performance and identify trends.",
      "Conducted ad-hoc analysis across marketplace and Live Studio, analyzing livestream, traffic, transaction, and advertising data and preparing stakeholder reports covering 20+ key metrics.",
      "Built and maintained 5+ Looker Studio dashboards to monitor marketplace and Live Studio performance and support data-driven decision-making.",
      "Utilized SQL and BigQuery to transform and aggregate data from 5+ data warehouse tables, developing 10+ data mart datasets for dashboard reporting, recurring analyses, and ad-hoc requests.",
      "Conducted marketplace and Live Studio analysis across TikTok and Shopee, covering Shop Tab, Search, Livestream, Short Video, and Affiliate, and prepared datasets and metrics to support A/B testing initiatives."
    ],
    achievements: [
      "Engineered automated Live Studio BigQuery data marts and Looker Studio dashboards that eliminated manual report compilation.",
      "Supported 30+ enterprise brand partners with comprehensive GMV, affiliate, and multi-channel traffic benchmarks.",
      "Standardized 20+ core commercial metrics across marketplace and live commerce reporting streams."
    ],
    tools: [
      "SQL",
      "Google BigQuery",
      "Looker Studio",
      "Apache Airflow",
      "Tableau",
      "Excel",
      "Power Automate",
      "Microsoft Power Point"
    ],
    relatedProjectSlug: "live-studio-performance-dashboard-blibli",
    relatedProjectTitle: "Live Studio Performance Dashboard – Blibli"
  },
  {
    id: "amartha-payment",
    company: "Amartha Financial",
    position: "Growth Data Analyst - Payment Business Intern",
    employmentType: "Internship",
    period: "Feb 2026 - May 2026",
    location: "Jakarta, Indonesia",
    badge: "Fintech & Payment Business Analytics",
    description:
      "Analyzed PPOB transaction data across 20+ product categories and 100K+ active agents, supported pricing strategy, and built 10+ dashboards across Looker Studio, Superset, and Power BI.",
    responsibilities: [
      "Analyzed PPOB transaction data across 20+ product categories and 100K+ active agents, monitoring GMV, transaction volume, revenue, margin, product mix, and WoW growth to evaluate product performance and identify growth opportunities.",
      "Set and adjusted PPOB product pricing based on transaction trends, product performance, customer purchasing behavior, and margin considerations, supported by pricing analysis and ad-hoc reporting.",
      "Designed promotional scenarios and A/B testing frameworks based on transaction behavior, including customer segmentation, incentive thresholds, and scenario performance analysis to support promotional strategy evaluation.",
      "Built and maintained 10+ dashboards using Looker Studio, Superset, and Power BI to monitor payment business performance and support data-driven decision-making.",
      "Used SQL to extract, join, and transform data from multiple data warehouse tables for transaction analysis, pricing analysis, business reporting, and ad-hoc requests."
    ],
    achievements: [
      "Formulated pricing and promotional scenarios across 20+ digital biller categories that optimized payment unit margins.",
      "Established centralized multi-platform dashboard monitoring (Looker Studio, Superset, Power BI) across 100K+ active agents.",
      "Delivered weekly WoW growth and transaction volume analysis directly to commercial leadership."
    ],
    tools: ["SQL", "Looker Studio", "Superset", "Power BI", "Excel", "Python"],
    relatedProjectSlug: "sales-data-analysis",
    relatedProjectTitle: "Sales Data Analysis"
  },
  {
    id: "adira-finance",
    company: "PT Adira Dinamika Multi Finance, Tbk.",
    position: "IT Data Science Intern",
    employmentType: "Internship",
    period: "Apr 2025 - Sept 2025",
    location: "Jakarta, Indonesia",
    badge: "ETL & Data Quality Engineering",
    description:
      "Processed and validated 2M+ customer records through automated ETL workflows, reducing manual preparation time by ~40% with comprehensive data quality checks.",
    responsibilities: [
      "Processed and validated 2M+ customer records through ETL workflows, ensuring high data accuracy and consistency for reporting and analytical use cases.",
      "Performed comprehensive data quality checks across ETL outputs, including completeness, duplication, and logical validation, to support reliable business reporting.",
      "Developed automated ETL and data processing workflows that reduced manual data preparation time by ~40%, improving efficiency for analysts and stakeholders.",
      "Prepared structured datasets and documentation to support standardized reporting, cross-team data usage, and downstream analytical processes."
    ],
    achievements: [
      "Automated critical data preparation pipelines for 2,000,000+ customer records, reducing manual processing time by ~40%.",
      "Established rigorous data quality check frameworks ensuring 99%+ completeness and consistency across enterprise databases.",
      "Created standardized data dictionary documentation to support downstream risk and business intelligence analysts."
    ],
    tools: ["SQL", "Dataiku", "Python", "Excel", "Google Collab"],
    relatedProjectSlug: "customer-address-geocoding-workflow-adira-finance",
    relatedProjectTitle: "Customer Address Geocoding Workflow"
  },
  {
    id: "ivosights",
    company: "PT Ivonesia Solusi Data (Ivosights)",
    position: "Data Cleansing Analyst Intern",
    employmentType: "Internship",
    period: "Feb 2025 - Mar 2025",
    location: "Jakarta, Indonesia",
    badge: "Digital Performance & Sentiment Analysis",
    description:
      "Monitored and validated incoming digital performance data for 40+ clients, processing 10,000+ data points weekly for sentiment analysis and daily/weekly dashboards.",
    responsibilities: [
      "Monitored and validated incoming social media and digital performance data for 40+ clients, ensuring reliable inputs for dashboards and reports.",
      "Processed and organized 10,000+ data points per week, improving data usability for sentiment analysis and performance monitoring.",
      "Analyzed engagement and sentiment trends to support brand performance evaluation and client reporting needs.",
      "Prepared daily and weekly performance reports that supported internal monitoring and client-facing dashboards."
    ],
    achievements: [
      "Maintained 99%+ on-schedule delivery for recurring daily and weekly client sentiment dashboards.",
      "Streamlined cleansing validation routines across 10,000+ weekly unstructured feedback records.",
      "Supported 40+ corporate clients with reliable brand sentiment data feeds."
    ],
    tools: ["Excel", "Microsoft Power Point"],
    relatedProjectSlug: "e-commerce-data-quality-analysis",
    relatedProjectTitle: "E-commerce Data Quality Improvement: SQL Cleaning Pipeline in BigQuery"
  },
  {
    id: "home-credit",
    company: "Home Credit Indonesia",
    position: "Project-Based Virtual Intern : Data Scientist",
    employmentType: "Virtual Internship",
    period: "Jan 2025 - Feb 2025",
    location: "Remote",
    badge: "Risk Modeling & Exploratory Data Analysis",
    description:
      "Exploratory data analysis on 307,511 loan applications with 122 features, addressing 69.87% missing data and identifying risk segments indicating potential 15% default reduction.",
    responsibilities: [
      "Conducted comprehensive exploratory data analysis (EDA) on a loan application dataset containing 307,511 records and 122 features to identify key patterns and risk indicators.",
      "Effectively handled missing data (69.87% of total), applied advanced encoding techniques for 10+ categorical features, and scaled numerical variables to ensure data readiness for analysis.",
      "Generated actionable insights for loan structuring optimization, with analysis indicating a potential default rate reduction of up to 15% based on identified risk segments and data-driven recommendations."
    ],
    achievements: [
      "Constructed a high-performing default risk segmentation model on 307,511 loan applications.",
      "Identified critical debt-to-income and demographic thresholds with a projected 15% decrease in credit default incidence.",
      "Delivered comprehensive data presentation and technical documentation for credit risk committees."
    ],
    tools: ["Python", "Google Collab"],
    relatedProjectSlug: "credit-risk-prediction",
    relatedProjectTitle: "Credit Risk Prediction and Optimization: Home Credit Virtual Internship"
  }
];
