import { SkillGroup } from "@/types";

export interface TechnicalCompetencies {
  programmingLanguages: string[];
  technicalSkills: string[];
  frameworks: string[];
  tools: string[];
  softSkills: string[];
  spokenLanguages: { language: string; proficiency: string }[];
}

export const technicalCompetenciesData: TechnicalCompetencies = {
  programmingLanguages: ["Python", "SQL", "R"],
  technicalSkills: [
    "Data Analysis",
    "Business Intelligence",
    "Statistical Analysis",
    "Data Visualization",
    "Descriptive Analysis",
    "Data Mining",
    "Predictive Modeling",
    "Machine Learning",
    "Data Preprocessing",
    "Exploratory Data Analysis (EDA)",
    "Data Warehouse",
    "Database Management",
    "ETL/ELT Processes",
    "Dashboarding",
    "Reporting",
  ],
  frameworks: [
    "Scikit-learn",
    "Pandas",
    "NumPy",
    "SciPy",
    "Seaborn",
    "Geopy",
    "Matplotlib",
    "NLTK",
  ],
  tools: [
    "Google BigQuery",
    "Looker Studio",
    "Tableau",
    "Power BI",
    "Superset",
    "Excel",
    "Airflow",
    "MySQL",
    "Google Colab",
    "Jupyter Notebook",
    "Visual Studio Code",
    "Power Automate",
    "GitHub",
    "Microsoft Office",
    "Google Workspace",
  ],
  softSkills: [
    "Analytical Thinking",
    "Attention to Detail",
    "Problem Solving",
    "Collaboration",
    "Time Management",
    "Communication",
  ],
  spokenLanguages: [
    { language: "Indonesian", proficiency: "Native" },
    { language: "English", proficiency: "Professional" },
  ],
};

export interface PythonFramework {
  name: string;
  role: string;
  level: string;
  projectsUsed: string[];
}

export const pythonFrameworksData: PythonFramework[] = [
  {
    name: "Scikit-learn",
    role: "Machine Learning, Classification & Predictive Modeling",
    level: "Proficient",
    projectsUsed: ["credit-risk-prediction", "movies-tv-shows-recommendation-system"],
  },
  {
    name: "Pandas",
    role: "Data Wrangling, Vectorized Transformations & Preprocessing",
    level: "Advanced",
    projectsUsed: ["web-based-geospatial-visualization-pt-xyz", "customer-address-geocoding-adira-finance", "credit-risk-prediction"],
  },
  {
    name: "NumPy",
    role: "Numerical Operations, Matrix Calculations & Array Manipulation",
    level: "Proficient",
    projectsUsed: ["credit-risk-prediction", "web-based-geospatial-visualization-pt-xyz"],
  },
  {
    name: "SciPy",
    role: "Scientific Computing, Statistical Distributions & Hypothesis Testing",
    level: "Proficient",
    projectsUsed: ["credit-risk-prediction"],
  },
  {
    name: "Seaborn",
    role: "Statistical Data Visualization, Heatmaps & Distribution Plots",
    level: "Proficient",
    projectsUsed: ["credit-risk-prediction", "customer-review-analysis-ruangguru"],
  },
  {
    name: "Geopy",
    role: "Geospatial Geocoding, Address Parsing & Coordinate Validation",
    level: "Proficient",
    projectsUsed: ["web-based-geospatial-visualization-pt-xyz", "customer-address-geocoding-adira-finance"],
  },
  {
    name: "Matplotlib",
    role: "Custom Figures, Multi-Panel Subplots & Analytical Visuals",
    level: "Proficient",
    projectsUsed: ["credit-risk-prediction", "sales-data-analysis"],
  },
  {
    name: "NLTK",
    role: "Natural Language Processing, Text Tokenization & Sentiment Scoring",
    level: "Proficient",
    projectsUsed: ["customer-review-analysis-ruangguru", "sentiment-analysis-boycott-opinion"],
  },
];

export const skillGroupsData: SkillGroup[] = [
  {
    group: "Programming, BI & Data Warehouse",
    summary:
      "Core query languages, machine learning pipelines, cloud data warehousing, executive dashboards, and ETL automation.",
    iconName: "Database",
    skills: [
      {
        name: "Python",
        level: "Proficient",
        applicationSummary:
          "Full Python data science stack with specialized libraries for exploratory data analysis (EDA), automated geocoding pipelines, customer segmentation, and predictive risk modeling.",
        projectsUsed: ["web-based-geospatial-visualization-pt-xyz", "customer-address-geocoding-adira-finance", "credit-risk-prediction"],
      },
      {
        name: "SQL",
        level: "Advanced",
        applicationSummary:
          "Advanced CTEs, window functions (ROW_NUMBER, LEAD/LAG, SUM OVER PARTITION), complex joins, aggregations, and query optimization for BigQuery, PostgreSQL, and MySQL data marts.",
        projectsUsed: ["live-studio-performance-dashboard-blibli", "sales-data-analysis", "database-system-watsons-indonesia"],
      },
      {
        name: "R",
        level: "Working Knowledge",
        applicationSummary:
          "Statistical analysis, hypothesis testing, linear modeling, and exploratory data distribution summaries.",
        projectsUsed: ["weather-prediction-model"],
      },
      {
        name: "Google BigQuery",
        level: "Advanced",
        applicationSummary:
          "Partitioned and clustered table modeling, multi-dataset transformations, scheduled queries, and cost-efficient dimensional data marts.",
        projectsUsed: ["live-studio-performance-dashboard-blibli"],
      },
      {
        name: "Looker Studio",
        level: "Advanced",
        applicationSummary:
          "Multi-page interactive dashboards, calculated fields, blended data sources, and custom date-range comparisons for commerce, LIVE shopping, and review metrics.",
        projectsUsed: ["live-studio-performance-dashboard-blibli", "customer-review-analysis-ruangguru", "sales-data-analysis"],
      },
      {
        name: "Tableau",
        level: "Proficient",
        applicationSummary:
          "Level of Detail (LOD) calculations, parameters, multi-axis charts, and interactive dashboards.",
        projectsUsed: ["live-studio-performance-dashboard-blibli", "sales-data-analysis"],
      },
      {
        name: "Power BI",
        level: "Proficient",
        applicationSummary:
          "DAX metrics modeling, star-schema data ingestion, interactive drill-downs, and commercial KPI scorecards.",
        projectsUsed: ["live-studio-performance-dashboard-blibli"],
      },
      {
        name: "Superset",
        level: "Proficient",
        applicationSummary:
          "Apache Superset SQL Lab exploration, sliced metric dashboards, and high-velocity transactional monitoring.",
        projectsUsed: ["live-studio-performance-dashboard-blibli"],
      },
      {
        name: "Apache Airflow",
        level: "Proficient",
        applicationSummary:
          "DAG workflow orchestration, automated ETL pipeline scheduling, upstream/downstream dependency tracking, and data freshness monitoring.",
        projectsUsed: ["live-studio-performance-dashboard-blibli"],
      },
      {
        name: "MySQL",
        level: "Proficient",
        applicationSummary:
          "Relational schema indexing, transaction staging tables, data validation queries, and normalized relational modeling.",
        projectsUsed: ["database-system-watsons-indonesia", "etl-pipeline-transaction-data-integration"],
      },
    ],
  },
  {
    group: "Other Tools",
    summary:
      "Integrated development environments, interactive notebooks, automated workflows, and enterprise productivity suites.",
    iconName: "Wrench",
    skills: [
      {
        name: "Visual Studio Code",
        level: "Advanced",
        applicationSummary:
          "Primary IDE for full-stack data workflows, SQL query authoring, Python script execution, and Git version management.",
        projectsUsed: ["web-based-geospatial-visualization-pt-xyz"],
      },
      {
        name: "Jupyter Notebook",
        level: "Advanced",
        applicationSummary:
          "Interactive exploratory data analysis (EDA), data cleaning prototypes, and statistical notebook documentation.",
        projectsUsed: ["customer-address-geocoding-adira-finance", "credit-risk-prediction"],
      },
      {
        name: "Google Colab",
        level: "Proficient",
        applicationSummary:
          "Cloud-hosted GPU/CPU environments for machine learning experiments and collaborative code execution.",
        projectsUsed: ["movies-tv-shows-recommendation-system"],
      },
      {
        name: "Excel",
        level: "Advanced",
        applicationSummary:
          "XLOOKUP, INDEX/MATCH, Pivot Tables, dynamic arrays, scenario managers, and financial margin sensitivity models.",
        projectsUsed: ["sales-data-analysis"],
      },
      {
        name: "Power Automate",
        level: "Working Knowledge",
        applicationSummary:
          "Automated daily digest distributions, data trigger notifications, and spreadsheet synchronization flows.",
        projectsUsed: ["live-studio-performance-dashboard-blibli"],
      },
      {
        name: "GitHub",
        level: "Proficient",
        applicationSummary:
          "Version control, branch management, CI/CD code reviews, and SQL/Python script repository management.",
        projectsUsed: ["credit-risk-prediction", "movies-tv-shows-recommendation-system", "sentiment-analysis-boycott-opinion"],
      },
      {
        name: "Microsoft Office",
        level: "Advanced",
        applicationSummary:
          "Executive deck presentation design, documentation, spreadsheets, and business communication workflows.",
        projectsUsed: ["sales-data-analysis", "live-studio-performance-dashboard-blibli"],
      },
      {
        name: "Google Workspace",
        level: "Advanced",
        applicationSummary:
          "Collaborative Sheets data tracking, Docs documentation, Drive asset centralization, and shared team workflows.",
        projectsUsed: ["live-studio-performance-dashboard-blibli"],
      },
    ],
  },
];
