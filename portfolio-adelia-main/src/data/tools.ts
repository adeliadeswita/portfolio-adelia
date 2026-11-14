export interface InteractiveTool {
  id: string;
  name: string;
  category: "Query & Warehouse" | "BI & Reporting" | "Programming & Science" | "Analysis & Spreadsheets";
  shortDesc: string;
  highlight: string;
  projects: { title: string; slug: string }[];
  tag: string;
}

export const interactiveToolsData: InteractiveTool[] = [
  {
    id: "sql",
    name: "SQL",
    category: "Query & Warehouse",
    shortDesc: "Advanced CTEs, window functions (ROW_NUMBER, LEAD/LAG, SUM OVER PARTITION), complex joins, and query optimization.",
    highlight: "Primary analytical language for extracting, aggregating, and modeling multi-million row datasets.",
    projects: [
      { title: "Live Studio Performance Dashboard – Blibli", slug: "live-studio-performance-dashboard-blibli" },
      { title: "Sales Data Analysis", slug: "sales-data-analysis" },
      { title: "Database System for Watsons Indonesia", slug: "database-system-watsons-indonesia" }
    ],
    tag: "Core Querying"
  },
  {
    id: "bigquery",
    name: "Google BigQuery",
    category: "Query & Warehouse",
    shortDesc: "Enterprise cloud data warehousing, partitioned & clustered table schemas, and scheduled transformation pipelines.",
    highlight: "Saved 14 hrs/wk by replacing manual spreadsheet reporting with automated BigQuery live-commerce data marts.",
    projects: [
      { title: "Live Studio Performance Dashboard – Blibli", slug: "live-studio-performance-dashboard-blibli" }
    ],
    tag: "Data Warehouse"
  },
  {
    id: "python",
    name: "Python",
    category: "Programming & Science",
    shortDesc: "Vectorized data wrangling with Pandas/NumPy, statistical EDA, machine learning, and NLP sentiment analysis.",
    highlight: "Built credit risk classification models (Random Forest) and NLP sentiment analysis pipelines across 4,000+ reviews.",
    projects: [
      { title: "Credit Risk Prediction and Optimization: Home Credit Virtual Internship", slug: "credit-risk-prediction" },
      { title: "Customer Review Analysis Dashboard: Ruangguru", slug: "customer-review-analysis-ruangguru" },
      { title: "Movie & TV Show Recommendation System (Content-Based Filtering, Streamlit App)", slug: "movies-tv-shows-recommendation-system" }
    ],
    tag: "Data Science"
  },
  {
    id: "looker-studio",
    name: "Looker Studio",
    category: "BI & Reporting",
    shortDesc: "Executive reporting suites, calculated fields, blended data models, and real-time live commerce monitoring dashboards.",
    highlight: "Deployed multi-page command center dashboards adopted by 40+ priority merchants and business leads.",
    projects: [
      { title: "Live Studio Performance Dashboard – Blibli", slug: "live-studio-performance-dashboard-blibli" },
      { title: "Customer Review Analysis Dashboard: Ruangguru", slug: "customer-review-analysis-ruangguru" },
      { title: "Sales Data Analysis", slug: "sales-data-analysis" }
    ],
    tag: "Executive Dashboards"
  },
  {
    id: "pentaho",
    name: "Pentaho Data Integration",
    category: "Query & Warehouse",
    shortDesc: "ETL transformations, row filtering, missing value imputation, job automation, and multi-database loading.",
    highlight: "Engineered robust ETL workflows integrating transactional datasets into MySQL and MongoDB with logging.",
    projects: [
      { title: "ETL Pipeline for Transaction Data Integration", slug: "etl-pipeline-transaction-data-integration" },
      { title: "ETL Pipeline for Sentiment Analysis on Jakarta Election", slug: "etl-pipeline-jakarta-election-2017" },
      { title: "ETL Pipeline for Sales Dataset", slug: "etl-pipeline-sales-dataset" }
    ],
    tag: "ETL Pipelines"
  },
  {
    id: "hadoop",
    name: "Hadoop",
    category: "Query & Warehouse",
    shortDesc: "Distributed computing using MapReduce architectures in Python for large-scale transaction aggregation.",
    highlight: "Developed 3 Python MapReduce scripts to compute sales velocity and category demand trends.",
    projects: [
      { title: "Sales Data Analysis", slug: "sales-data-analysis" }
    ],
    tag: "Big Data"
  },
  {
    id: "drawio",
    name: "Draw.io",
    category: "Analysis & Spreadsheets",
    shortDesc: "Relational database architecture, Entity-Relationship Diagrams (ERD), and Enhanced EER hierarchy modeling.",
    highlight: "Structured relational enterprise schemas for Watsons Indonesia, Supermarket XYZ, and Nikmat Restaurant.",
    projects: [
      { title: "Database System for Watsons Indonesia", slug: "database-system-watsons-indonesia" },
      { title: "Database System for XYZ Supermarket", slug: "database-system-xyz-supermarket" },
      { title: "Database System for Nikmat Restaurant", slug: "database-system-nikmat-restaurant" }
    ],
    tag: "Database Design"
  },
  {
    id: "excel",
    name: "Microsoft Excel",
    category: "Analysis & Spreadsheets",
    shortDesc: "Advanced analytical reporting, pivot architectures, statistical functions, and tabular data validation.",
    highlight: "Processed and structured datasets for downstream analysis and audit validation scorecards.",
    projects: [
      { title: "Sales Data Analysis", slug: "sales-data-analysis" }
    ],
    tag: "Spreadsheet Analytics"
  },
  {
    id: "streamlit",
    name: "Streamlit",
    category: "BI & Reporting",
    shortDesc: "Interactive web applications for data science model deployment, parameter inputs, and real-time inference.",
    highlight: "Deployed content-based recommendation system web app with TF-IDF and cosine similarity search.",
    projects: [
      { title: "Movies & TV Shows Recommendation System", slug: "movies-tv-shows-recommendation-system" }
    ],
    tag: "App Deployment"
  }
];
