import { Certification } from "@/types";

// ============================================================================
// DAFTAR SERTIFIKASI & KURSUS (COURSES & CERTIFICATIONS)
// ============================================================================
// CARA MENGISI LINK KREDENSIAL:
// Silakan isi URL sertifikat Anda di dalam properti `credentialUrl`.
// Contoh: credentialUrl: "https://www.credly.com/badges/your-badge-id"
// Jika masih kosong (""), tombol akan menampilkan status "Credential Verified".
// ============================================================================

export const certificationsData: Certification[] = [
  {
    id: "toefl-itp-score-503",
    title: "TOEFL ITP (Score: 503)",
    issuer: "ETS / IIEF",
    category: "General Analytics",
    year: "2026",
    skills: ["English Proficiency", "Listening Comprehension", "Structure & Written Expression", "Reading Comprehension"],
    credentialUrl: "https://drive.google.com/file/d/1UNMaXTrnlC2zc7bTn9IWL1GSmEW9Xbjy/view?usp=sharing",
  },
  {
    id: "bnsp-information-system-analyst",
    title: "Information System Analyst (ACP)",
    issuer: "Badan Nasional Sertifikasi Profesi (BNSP)",
    category: "Data Analytics & BI",
    year: "2025",
    skills: ["System Analysis", "Business Process Modeling", "Data Architecture", "Requirements Engineering"],
    credentialUrl: "https://drive.google.com/file/d/1ncW24ux35PU7zhMXiA1ugdKhU41FPqdu/view?usp=sharing",
  },
  {
    id: "certiport-its-data-analytics",
    title: "Information Technology Specialist in Data Analytics",
    issuer: "Certiport",
    category: "Data Analytics & BI",
    year: "2025",
    skills: ["Data Analysis", "Data Modeling", "Business Intelligence", "SQL"],
    credentialUrl: "https://drive.google.com/file/d/1cHs65yZp6o-M5zzG1knQmGgYHEzwK_6H/view?usp=sharing", // <-- MASUKKAN LINK SERTIFIKAT CERTIPORT DI SINI
  },
  {
    id: "mongodb-relational-to-document",
    title: "From Relational Model (SQL) to MongoDB's Document Model",
    issuer: "MongoDB",
    category: "Databases & Cloud",
    year: "2025",
    skills: ["SQL", "MongoDB", "NoSQL", "Database Design"],
    credentialUrl: "https://www.credly.com/badges/95ecc132-a0c8-4394-bc17-a23cb10f9556/linked_in_profile", // <-- MASUKKAN LINK SERTIFIKAT MONGODB DI SINI
  },
  {
    id: "mongodb-vector-search",
    title: "Building AI-Powered Search with MongoDB Vector Search",
    issuer: "MongoDB",
    category: "Databases & Cloud",
    year: "2025",
    skills: ["Vector Search", "AI Search", "Embeddings", "MongoDB Atlas"],
    credentialUrl: "https://www.credly.com/badges/d14bb8f9-b178-4e13-bea6-b5b1b0c76aa2/linked_in_profile", // <-- MASUKKAN LINK SERTIFIKAT MONGODB DI SINI
  },
  {
    id: "udemy-tableau-python",
    title: "Data Visualization in Tableau & Python",
    issuer: "Udemy",
    category: "Data Analytics & BI",
    year: "2024",
    skills: ["Tableau", "Python", "Data Storytelling", "Dashboards"],
    credentialUrl: "https://www.udemy.com/certificate/UC-b0315008-9af3-4f05-a71b-2dd389121cf9/", // <-- MASUKKAN LINK SERTIFIKAT UDEMY DI SINI
  },
  {
    id: "dqlab-visualization-python",
    title: "Fundamental Visualization with Python",
    issuer: "DQLab",
    category: "Data Analytics & BI",
    year: "2024",
    skills: ["Python", "Matplotlib", "Seaborn", "Exploratory Data Analysis"],
    credentialUrl: "https://academy.dqlab.id/Certificate_check/result/DQLABINTP1JDVIDM#mycertificate", // <-- MASUKKAN LINK SERTIFIKAT DQLAB DI SINI
  },
  {
    id: "dqlab-python-data-science",
    title: "Python Fundamental for Data Science",
    issuer: "DQLab",
    category: "Programming & Data Science",
    year: "2024",
    skills: ["Python", "Pandas", "NumPy", "Data Preprocessing"],
    credentialUrl: "https://academy.dqlab.id/Certificate_check/result/DQLABINTP1GMGDPF#mycertificate", // <-- MASUKKAN LINK SERTIFIKAT DQLAB DI SINI
  },
  {
    id: "dqlab-r-data-science",
    title: "R Fundamental for Data Science",
    issuer: "DQLab",
    category: "Programming & Data Science",
    year: "2024",
    skills: ["R", "Statistical Analysis", "Data Manipulation"],
    credentialUrl: "https://academy.dqlab.id/Certificate_check/result/DQLABINTR1QSQBEH#mycertificate", // <-- MASUKKAN LINK SERTIFIKAT DQLAB DI SINI
  },
  {
    id: "coursera-excel-data-analysis",
    title: "Introduction to Data Analysis using Microsoft Excel",
    issuer: "Coursera",
    category: "General Analytics",
    year: "2024",
    skills: ["Excel", "Pivot Tables", "VLOOKUP", "Business Reporting"],
    credentialUrl: "https://www.coursera.org/account/accomplishments/records/83UJAZZK8I0Y", // <-- MASUKKAN LINK SERTIFIKAT COURSERA DI SINI
  },
  {
    id: "myskill-sql-data-analysis",
    title: "SQL for Data Analysis",
    issuer: "MySkill",
    category: "Data Analytics & BI",
    year: "2024",
    skills: ["SQL", "CTEs", "Window Functions", "Aggregation"],
    credentialUrl: "https://storage.googleapis.com/myskill-v2-certificates/topic-DDujKITvy3VJuXrhC2ou/9n83RiPdXBeddEz5I7DFBHxGDAk1-Rira0j5MHAAH7SNoQW9g.pdf", // <-- MASUKKAN LINK SERTIFIKAT MYSKILL DI SINI
  },
  {
    id: "myskill-data-science-fundamental",
    title: "Data Science Fundamental",
    issuer: "MySkill",
    category: "Programming & Data Science",
    year: "2024",
    skills: ["Machine Learning", "EDA", "Feature Engineering", "Python"],
    credentialUrl: "https://storage.googleapis.com/myskill-v2-certificates/course-EqkLxI5BW4J8Dm2TetDZ/9n83RiPdXBeddEz5I7DFBHxGDAk1-Q28N5ZFDXBT1Lq9eZ4J3.pdf", // <-- MASUKKAN LINK SERTIFIKAT MYSKILL DI SINI
  },
  {
    id: "revou-intro-data-analytics",
    title: "Intro to Data Analytics",
    issuer: "RevoU",
    category: "General Analytics",
    year: "2024",
    skills: ["Business Metrics", "Descriptive Analysis", "Root Cause Analysis"],
    credentialUrl: "https://drive.google.com/file/d/1ibc8DVjMMKrXYfi01jBE5IqMkkBzBgCH/view?usp=sharing", // <-- MASUKKAN LINK SERTIFIKAT REVOU DI SINI
  },
  {
    id: "alibaba-big-data-basic",
    title: "Alibaba Big Data Basic Level",
    issuer: "Alibaba Cloud",
    category: "Databases & Cloud",
    year: "2024",
    skills: ["Big Data", "Cloud Computing", "MaxCompute", "Data Warehousing"],
    credentialUrl: "https://drive.google.com/file/d/1JgN0nO01nX2JZjmBt_Zosb3biVxMEb_Q/view?usp=sharing", // <-- MASUKKAN LINK SERTIFIKAT ALIBABA CLOUD DI SINI
  },
];
