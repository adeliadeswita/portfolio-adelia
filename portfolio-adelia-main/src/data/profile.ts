import { Profile } from "@/types";

export const profileData: Profile = {
  name: "Adelia Deswita",
  title: "Data Analytics & Business Intelligence",
  tagline: "Information Systems Graduate",
  headline: "Curious about data, driven by business insights.",
  location: "Jakarta, Indonesia",
  availability: "Available for work",
  email: "adeliasdeswita@gmail.com",
  linkedin: "https://linkedin.com/in/adeliadeswita",
  github: "https://github.com/adeliadeswita",
  cvUrl: "/cv/Adelia-Deswita-CV.pdf",
  bioShort:
    "I'm an Information Systems graduate who enjoys working with data and understanding how businesses work.",
  bioFull: [
    "I'm an Information Systems graduate from Universitas Pembangunan Nasional \"Veteran\" Jakarta with a background in Data Analytics and Business Intelligence. My experience spans marketplace and fintech industries, where I've worked with business, transaction, customer, and performance data.",
    "I enjoy exploring data, identifying trends, and understanding what the numbers say about business performance. Through exploratory and ad-hoc analysis using SQL and BigQuery, I've worked on evaluating business metrics, monitoring performance, and providing insights to support business decisions.",
    "I've also worked on building data marts, dashboards, and analytical reports using SQL, BigQuery, Excel, Python, Looker Studio, Tableau, Power BI, and Superset. Alongside analytics, I have experience supporting pricing analysis and promotional simulations in a fintech environment.",
    "I'm interested in opportunities where I can combine analytical thinking and business understanding to help teams make better decisions, identify opportunities, and improve business performance."
  ],
  academicBackground: [
    {
      degree: "Bachelor's Degree in Information Systems",
      institution: "Universitas Pembangunan Nasional \"Veteran\" Jakarta",
      period: "Aug 2022 – Sep 2026",
      focus: "Data Mining, Big Data, Database Systems & Data Visualization",
      gpa: "3.91 / 4.00 (Cum Laude)",
      relevantCourses: [
        "Data Mining and Data Warehousing",
        "Data Engineering",
        "Big Data",
        "Database Systems",
        "Data Visualization",
        "Statistics",
        "Programming Fundamentals",
        "Computer Networks"
      ],
      highlights: [
        "Graduated with Cum Laude honors, achieving a GPA of 3.91 / 4.00.",
        "Actively participated in student study groups, contributing as a speaker, committee member, and mentor.",
        "Built a strong academic foundation in data mining, data warehousing, big data, and database management.",
        "Applied analytical methods and data processing techniques through academic projects and real-world business case studies."
      ]
    }
  ],
  philosophies: [
    {
      title: "Context Before Queries",
      description:
        "Every analytical query must start with a thorough understanding of the commercial lever it impacts, not just the schema structure."
    },
    {
      title: "Reliability & Single Source of Truth",
      description:
        "Well-modeled data marts and documented metric definitions prevent fragmented reporting and cultivate organizational trust in data."
    },
    {
      title: "Actionable over Decorative",
      description:
        "A dashboard should not be a graveyard of vanity charts; it must prompt a clear operational or strategic decision within seconds."
    }
  ],
  expertiseAreas: [
    {
      title: "Business Intelligence & Reporting",
      description:
        "Building production Looker Studio, Superset, and Power BI dashboards with automated KPI tracking.",
      tools: ["Looker Studio", "Tableau", "Power BI", "Superset"]
    },
    {
      title: "Data Processing & SQL Modeling",
      description:
        "Authoring complex queries, dimensional data marts, and BigQuery aggregations across large transaction tables.",
      tools: ["SQL", "Google BigQuery", "PostgreSQL", "MySQL"]
    },
    {
      title: "Data Analysis & Business Performance",
      description:
        "Decomposing marketplace metrics, pricing elasticity, customer segmentation, and loan default indicators.",
      tools: ["Python", "Excel", "Data Cleansing", "A/B Testing"]
    }
  ]
};
