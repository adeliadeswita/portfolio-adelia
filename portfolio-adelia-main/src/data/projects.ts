import { Project } from "@/types";

export const projectsData: Project[] = [
  // 1. Undergraduate Thesis: Web-Based Geospatial Visualization (TOP FEATURED)
  {
    id: 1,
    slug: "web-based-geospatial-visualization-pt-xyz",
    title: "Web-Based Geospatial Visualization for Customer Distribution and Segmentation",
    subtitle: "Interactive Web GIS & Star-Schema Data Mart for Multifinance Customer Distribution & Spatial Risk Analytics",
    affiliation: "PT XYZ (Multifinance Case Study) · Bachelor's Thesis at UPNVJ",
    projectType: "Undergraduate Thesis",
    domain: "Geospatial Data Engineering & Web GIS",
    category: "Business Intelligence",
    year: "2025 - 2026",
    duration: "September 2025 – May 2026",
    role: "Lead Researcher & Full-Stack Data Engineer",
    primaryStack: "Python, SQL, Star Schema & Leaflet.js",
    featured: true,
    tools: [
      "Python",
      "SQL",
      "Star Schema Data Mart",
      "ETL Data Pipeline",
      "Leaflet.js",
      "Chart.js",
      "Geopy",
      "ArcGIS World Geocoding Service",
      "GeoJSON & BPS Boundaries",
      "Laravel / PHP",
      "PostgreSQL / MySQL",
      "HTML5 & CSS3"
    ],
    coverImage: "/images/projects/geospatial-pt-xyz/04-dashboard-kpi-overview.jpg",
    shortDescription:
      "Designed and developed an end-to-end Web GIS application supported by a Star-Schema geospatial data mart and automated ETL geocoding pipeline to visualize customer distribution, assess regional credit risk, and perform spatial segmentation across 2,000+ active customer accounts.",
    links: {
      report: "",
      dashboard: "",
      github: "",
    },
    keyImpactMetrics: [
      {
        metric: "Total Mapped Borrowers",
        value: "2,319",
        note: "Active borrowers with verified geographic coordinates",
      },
      {
        metric: "Delinquent Borrowers",
        value: "147",
        note: "Contracts under default & repossession risk status",
      },
      {
        metric: "Global Portfolio Risk",
        value: "6.34%",
        note: "Overall credit risk ratio across all active accounts",
      },
      {
        metric: "Dominant Product",
        value: "New Cars (30.8%)",
        note: "Followed by New Motorcycles (29.2%) & Used Cars (15.5%)",
      },
    ],
    commercialContext: {
      overview:
        "PT XYZ (a nationwide multifinance enterprise) manages thousands of active vehicle and consumer financing contracts across Indonesia. Previously, borrower analysis and risk monitoring were handled through conventional tabular spreadsheets fragmented across branch OLTP databases. Without geospatial intelligence, management faced significant friction identifying delinquent hotspots, evaluating regional default ratios, and strategically planning field collection routes and branch expansions.",
      questions: [
        "Where are active borrowers spatially concentrated across Indonesian provinces down to urban subdistricts and villages?",
        "Which provinces and municipalities exhibit the highest credit default rates (bad debt & repossession) requiring tightened underwriting criteria?",
        "How is the financing product mix (New Cars, New Motorcycles, Used Cars, Commercial) distributed across administrative regions?",
        "How to engineer a resilient geospatial data mart (Star Schema) and automated ETL pipeline that bridges operational OLTP records with high-performance Web GIS analytics?",
      ],
    },
    problemStatement: {
      bottleneck:
        "Borrower address records in operational databases were stored as unstructured free text without standardized coordinates (latitude/longitude), suffering from abbreviation inconsistencies and isolated within 3NF OLTP tables. Direct analytical spatial queries on operational databases degraded transaction throughput, while flat 2D tabular reports obscured spatial clusters of high-risk debt.",
      objectives: [
        "Architect a normalized operational relational schema (Customer, CustomerContract, BillingAddress, Geocoding, ImportJob, LogAktivitas, User).",
        "Develop an automated Python ETL pipeline (etl_refresh_datamart.py) integrating multi-tier geocoding (Geopy/Nominatim with ArcGIS fallback) and BPS administrative polygon validation, achieving a 99.61% automated coordinate resolution rate.",
        "Design and deploy an OLAP Geospatial Data Mart using a Star Schema (fact_customer_geospatial with dimensions dim_product, dim_credit_status, and dim_region).",
        "Engineer an interactive Web GIS dashboard (XYZ GeoNasabah) with 6 spatial mapping layers (Cluster, Heatmap, High-Risk Zones, Density Choropleth, Risk Choropleth, Detail Pinpoints) and regional risk quadrant scatter plot segmentation.",
      ],
    },
    datasetScopeDetails: {
      standards:
        "A dataset of 2,319 active multifinance customer contracts was cleaned, normalized, and geocoded via a multi-tier spatial pipeline validated against official BPS administrative boundaries. 147 accounts were identified as carrying credit risk. All customer identities and personal identifiers were fully masked and anonymized in strict compliance with data privacy standards.",
      statChips: [
        "2,319 Spatially Verified Borrowers",
        "147 Delinquent Accounts (6.34%)",
        "34 Indonesian Provinces Mapped",
        "4 Administrative Drilldown Levels",
        "7 Financing Product Categories",
        "5 Contract Credit Statuses",
        "99.61% Automated Geocoding Success",
        "6 Interactive Web GIS Layers",
      ],
    },
    methodologyExecution: [
      {
        step: "01",
        title: "Operational DB & Address Hygiene",
        description:
          "Engineered transactional relational database (OLTP) and standardized raw customer billing strings, handling missing values, parsing administrative components, and logging batch imports.",
      },
      {
        step: "02",
        title: "Multi-Tier Geocoding & BPS Validation",
        description:
          "Converted textual addresses into high-precision latitude/longitude coordinates using Geopy Nominatim with automated ArcGIS fallback and BPS polygon centroid matching.",
      },
      {
        step: "03",
        title: "Star Schema Dimensional Data Mart",
        description:
          "Transformed operational tables into an OLAP dimensional model (fact_customer_geospatial, dim_product, dim_credit_status, dim_region) orchestrated via etl_refresh_datamart.py.",
      },
      {
        step: "04",
        title: "Web GIS & Spatial Risk Segmentation",
        description:
          "Implemented responsive Leaflet.js dashboard featuring 6 interactive spatial layers, hierarchical multi-level drilldowns, and an interactive regional risk quadrant scatter plot.",
      },
    ],
    workflowSteps: [
      {
        step: "STAGE 1",
        title: "Operational DB",
        subtitle: "Relational Schema & Transactional Ingestion",
        description:
          "Architected physical relational database (OLTP) encompassing 7 core entities: User, LogAktivitas, Customer, CustomerContract, BillingAddress, Geocoding, and ImportJob.",
        deepDiveActions: [
          "Normalized Customer (cust_no, cust_name, cust_type) and CustomerContract (tenor, branch_code, credit_status, is_active) relations.",
          "Designated BillingAddress as the primary spatial reference entity for every active financing contract.",
          "Implemented ImportJob table to govern batch file imports with status tracking, row counts, and error telemetry.",
          "Established transactional audit logging via LogAktivitas to ensure end-to-end data integrity and accountability.",
        ],
      },
      {
        step: "STAGE 2",
        title: "ETL & Geocoding",
        subtitle: "Automated Pipeline & Coordinate Fallback",
        description:
          "Executed automated etl_refresh_datamart.py pipeline to cleanse address strings, execute multi-tier geocoding, and map accurate coordinates.",
        deepDiveActions: [
          "Deployed multi-tier geocoding using Geopy Nominatim API with automated fallback to ArcGIS World Geocoding Service.",
          "Implemented centroid matching against BPS administrative boundaries (Province, City, District, Village) when street-level addresses were absent (99.61% automated success).",
          "Assigned address_status and geocoding_status flags for transparent auditability of spatial coordinate confidence.",
          "Engineered automated rate-limiting and error recovery to maintain pipeline reliability during batch executions.",
        ],
      },
      {
        step: "STAGE 3",
        title: "Data Mart OLAP",
        subtitle: "Star Schema Dimensional Modeling",
        description:
          "Transformed 3NF operational tables into an optimized Star Schema dimensional model tailored for rapid geospatial analytical aggregations.",
        deepDiveActions: [
          "Constructed central fact table fact_customer_geospatial housing core metrics, coordinates (lat/long), risk flags (is_risk), and foreign key dimensional relationships.",
          "Built dim_product (product_key, product_type) dimension table for portfolio product comparison.",
          "Constructed dim_credit_status (credit_status_key, credit_status, is_risk) dimension table to isolate performing vs non-performing loans.",
          "Engineered dim_region (region_key, billing_province, billing_city, billing_district, billing_subdistrict, billing_postal_code, bps_province, bps_city) for 4-tier hierarchical drilldowns.",
        ],
      },
      {
        step: "STAGE 4",
        title: "Interactive Web GIS",
        subtitle: "Multi-Layer Visualization & Risk Quadrant Segmentation",
        description:
          "Built the XYZ GeoNasabah interactive dashboard with Leaflet.js, Chart.js, and web frameworks, incorporating 6 distinct spatial analytical layers.",
        deepDiveActions: [
          "Marker Cluster Layer: Rendered dynamic circle clusters (<10 blue, 10-49 orange, >50 red) for zero-lag rendering of 2,300+ spatial points.",
          "High-Risk Zones Layer: Highlighted delinquency hotspots with specialized red markers indicating default and repossession concentrations.",
          "Density & Risk Choropleths: Visualized thematic polygon gradients by customer volume (1-25, 26-50, 51-75, >75) and regional credit risk ratios.",
          "Regional Risk Scatter Plot: Mapped Sumbu X (Customer Volume) vs Sumbu Y (Risk Ratio %) to categorize administrative territories into Low, Medium, and High-Risk Segments.",
        ],
      },
    ],
    codeSnippet: {
      language: "python",
      title: "etl_refresh_datamart.py",
      subtitle: "Production Python & PostgreSQL ETL Pipeline for Dimensional Data Mart Refresh",
      description:
        "Authentic batch ETL script managing automated table schema preparation, dimension key generation, BPS boundary normalization, geospatial fact loading, summary materialization, indexing, and transactional quality checks.",
      code: `import os
import sys
import time
from contextlib import contextmanager

import psycopg2
from psycopg2.extras import RealDictCursor

DB_CONFIG = {
    "host": os.getenv("DB_HOST", "127.0.0.1"),
    "port": int(os.getenv("DB_PORT", "5433")),
    "dbname": os.getenv("DB_NAME", "geo-nasabah"),
    "user": os.getenv("DB_USER", "postgres"),
    "password": os.getenv("DB_PASSWORD", "********"),  # masked for security
}

MART_SCHEMA = "datamart"

TABLE_CUSTOMER = 'public."Customer"'
TABLE_CONTRACT = 'public."CustomerContract"'
TABLE_ADDRESS = 'public."BillingAddress"'
TABLE_GEOCODING = 'public."Geocoding"'

@contextmanager
def get_connection():
    conn = psycopg2.connect(**DB_CONFIG)
    try:
        yield conn
    finally:
        conn.close()

def execute_sql(conn, title, sql):
    print(f"\\n▶ {title}")
    start = time.time()
    try:
        with conn.cursor() as cur:
            cur.execute(sql)
    except Exception:
        print(f"ERROR DI STEP: {title}")
        raise
    print(f"✓ selesai ({time.time() - start:.2f}s)")

def fetch_one(conn, sql):
    with conn.cursor(cursor_factory=RealDictCursor) as cur:
        cur.execute(sql)
        return cur.fetchone()

def sql_prepare_columns():
    return f"""
    ALTER TABLE {MART_SCHEMA}.fact_customer_geospatial
    ALTER COLUMN fact_id TYPE VARCHAR(50);

    ALTER TABLE {MART_SCHEMA}.mart_summary_region
    ALTER COLUMN summary_region_id TYPE VARCHAR(50);

    ALTER TABLE {MART_SCHEMA}.mart_summary_distribution
    ALTER COLUMN summary_distribution_id TYPE VARCHAR(50);

    ALTER TABLE {MART_SCHEMA}.mart_choropleth_region
    ALTER COLUMN region_id TYPE VARCHAR(50);

    ALTER TABLE {MART_SCHEMA}.dim_product
    ALTER COLUMN product_key TYPE VARCHAR(50);

    ALTER TABLE {MART_SCHEMA}.dim_credit_status
    ALTER COLUMN credit_status_key TYPE VARCHAR(50);

    ALTER TABLE {MART_SCHEMA}.dim_region
    ALTER COLUMN region_key TYPE VARCHAR(50);

    ALTER TABLE {MART_SCHEMA}.dim_region
    ADD COLUMN IF NOT EXISTS bps_province VARCHAR(100),
    ADD COLUMN IF NOT EXISTS bps_city VARCHAR(100);
    """

def sql_refresh_dim_product():
    return f"""
    TRUNCATE TABLE {MART_SCHEMA}.dim_product CASCADE;

    INSERT INTO {MART_SCHEMA}.dim_product (
        product_key,
        product_type
    )
    SELECT
        'PRD' || LPAD(
            ROW_NUMBER() OVER (ORDER BY TRIM(product_type))::TEXT,
            3,
            '0'
        ) AS product_key,
        TRIM(product_type) AS product_type
    FROM (
        SELECT DISTINCT product_type
        FROM {TABLE_CONTRACT}
        WHERE product_type IS NOT NULL
          AND TRIM(product_type) <> ''
    ) x;
    """

def sql_refresh_dim_credit_status():
    return f"""
    TRUNCATE TABLE {MART_SCHEMA}.dim_credit_status CASCADE;

    INSERT INTO {MART_SCHEMA}.dim_credit_status (
        credit_status_key,
        credit_status,
        risk_category,
        is_risk
    )
    SELECT
        'CRS' || LPAD(
            ROW_NUMBER() OVER (ORDER BY TRIM(credit_status))::TEXT,
            3,
            '0'
        ) AS credit_status_key,
        TRIM(credit_status) AS credit_status,
        CASE
            WHEN UPPER(TRIM(credit_status)) IN ('GAGAL BAYAR', 'REPOSES') THEN 'Tinggi'
            WHEN UPPER(TRIM(credit_status)) = 'BELUM DINILAI' THEN 'Belum Dinilai'
            WHEN UPPER(TRIM(credit_status)) IN ('LANCAR', 'PELUNASAN DIPERCEPAT') THEN 'Rendah'
            ELSE 'Tidak Diketahui'
        END AS risk_category,
        CASE
            WHEN UPPER(TRIM(credit_status)) IN ('GAGAL BAYAR', 'REPOSES') THEN TRUE
            ELSE FALSE
        END AS is_risk
    FROM (
        SELECT DISTINCT credit_status
        FROM {TABLE_CONTRACT}
        WHERE credit_status IS NOT NULL
          AND TRIM(credit_status) <> ''
    ) x;
    """

def sql_refresh_dim_region():
    return f"""
    TRUNCATE TABLE {MART_SCHEMA}.dim_region CASCADE;

    INSERT INTO {MART_SCHEMA}.dim_region (
        region_key,
        billing_province,
        billing_city,
        billing_district,
        billing_subdistrict,
        billing_postal_code
    )
    SELECT
        'REG' || LPAD(
            ROW_NUMBER() OVER (
                ORDER BY
                    billing_province,
                    billing_city,
                    billing_district,
                    billing_subdistrict,
                    billing_postal_code
            )::TEXT,
            5,
            '0'
        ) AS region_key,
        billing_province,
        billing_city,
        billing_district,
        billing_subdistrict,
        billing_postal_code
    FROM (
        SELECT DISTINCT
            NULLIF(TRIM(billing_province), '') AS billing_province,
            NULLIF(TRIM(billing_city), '') AS billing_city,
            NULLIF(TRIM(billing_district), '') AS billing_district,
            NULLIF(TRIM(billing_subdistrict), '') AS billing_subdistrict,
            NULLIF(TRIM(billing_postal_code), '') AS billing_postal_code
        FROM {TABLE_ADDRESS}
        WHERE billing_province IS NOT NULL
           OR billing_city IS NOT NULL
           OR billing_district IS NOT NULL
           OR billing_subdistrict IS NOT NULL
           OR billing_postal_code IS NOT NULL
    ) x;

    UPDATE {MART_SCHEMA}.dim_region r
    SET
        bps_province = m.bps_province,
        bps_city = m.bps_city
    FROM {MART_SCHEMA}.vw_city_mapping_normalized m
    WHERE r.billing_province = m.billing_province
      AND r.billing_city = m.billing_city
      AND m.bps_city IS NOT NULL;
    """

def sql_refresh_fact_customer_geospatial():
    return f"""
    TRUNCATE TABLE {MART_SCHEMA}.fact_customer_geospatial CASCADE;

    INSERT INTO {MART_SCHEMA}.fact_customer_geospatial (
        fact_id,
        cust_no,
        cust_name,
        cust_type,
        contract_no,
        id_address,
        product_key,
        credit_status_key,
        region_key,
        latitude,
        longitude,
        geocoding_status,
        address_status,
        data_period,
        source_type,
        is_active,
        is_risk,
        created_at,
        updated_at
    )
    SELECT
        'FACT' || LPAD(
            ROW_NUMBER() OVER (
                ORDER BY c.cust_no, cc.contract_no, ba.id_address
            )::TEXT,
            6,
            '0'
        ) AS fact_id,
        c.cust_no,
        c.cust_name,
        c.cust_type,
        cc.contract_no,
        ba.id_address,
        dp.product_key,
        dcs.credit_status_key,
        dr.region_key,
        COALESCE(g.latitude_result, ba.latitude)::NUMERIC AS latitude,
        COALESCE(g.longitude_result, ba.longitude)::NUMERIC AS longitude,
        COALESCE(g.geocoding_status, ba.geocoding_status) AS geocoding_status,
        ba.address_status,
        ba.data_period,
        ba.source_type,
        COALESCE(cc.is_active, TRUE) AS is_active,
        COALESCE(dcs.is_risk, FALSE) AS is_risk,
        COALESCE(ba.created_at, CURRENT_TIMESTAMP) AS created_at,
        CURRENT_TIMESTAMP AS updated_at
    FROM {TABLE_CUSTOMER} c
    JOIN {TABLE_CONTRACT} cc
        ON c.cust_no = cc.cust_no
    JOIN {TABLE_ADDRESS} ba
        ON cc.cust_no = ba.cust_no
    LEFT JOIN {TABLE_GEOCODING} g
        ON ba.id_address = g.id_address
    LEFT JOIN {MART_SCHEMA}.dim_product dp
        ON dp.product_type = TRIM(cc.product_type)
    LEFT JOIN {MART_SCHEMA}.dim_credit_status dcs
        ON dcs.credit_status = TRIM(cc.credit_status)
    LEFT JOIN {MART_SCHEMA}.dim_region dr
        ON COALESCE(dr.billing_province, '') = COALESCE(NULLIF(TRIM(ba.billing_province), ''), '')
       AND COALESCE(dr.billing_city, '') = COALESCE(NULLIF(TRIM(ba.billing_city), ''), '')
       AND COALESCE(dr.billing_district, '') = COALESCE(NULLIF(TRIM(ba.billing_district), ''), '')
       AND COALESCE(dr.billing_subdistrict, '') = COALESCE(NULLIF(TRIM(ba.billing_subdistrict), ''), '')
       AND COALESCE(dr.billing_postal_code, '') = COALESCE(NULLIF(TRIM(ba.billing_postal_code), ''), '')
    WHERE COALESCE(g.latitude_result, ba.latitude) IS NOT NULL
      AND COALESCE(g.longitude_result, ba.longitude) IS NOT NULL;
    """

def sql_refresh_summary_distribution():
    return f"""
    TRUNCATE TABLE {MART_SCHEMA}.mart_summary_distribution;

    INSERT INTO {MART_SCHEMA}.mart_summary_distribution (
        summary_distribution_id,
        distribution_type,
        label,
        product_type,
        credit_status,
        total_nasabah,
        total_risiko,
        rasio_risiko
    )
    WITH distribution_data AS (
        SELECT
            'product_type' AS distribution_type,
            dp.product_type AS label,
            dp.product_type AS product_type,
            NULL::VARCHAR AS credit_status,
            COUNT(DISTINCT f.cust_no) AS total_nasabah,
            COUNT(DISTINCT CASE WHEN f.is_risk = TRUE THEN f.cust_no END) AS total_risiko
        FROM {MART_SCHEMA}.fact_customer_geospatial f
        JOIN {MART_SCHEMA}.dim_product dp
            ON f.product_key = dp.product_key
        WHERE f.is_active IS TRUE
        GROUP BY dp.product_type

        UNION ALL

        SELECT
            'credit_status' AS distribution_type,
            dcs.credit_status AS label,
            NULL::VARCHAR AS product_type,
            dcs.credit_status AS credit_status,
            COUNT(DISTINCT f.cust_no) AS total_nasabah,
            COUNT(DISTINCT CASE WHEN f.is_risk = TRUE THEN f.cust_no END) AS total_risiko
        FROM {MART_SCHEMA}.fact_customer_geospatial f
        JOIN {MART_SCHEMA}.dim_credit_status dcs
            ON f.credit_status_key = dcs.credit_status_key
        WHERE f.is_active IS TRUE
        GROUP BY dcs.credit_status
    )
    SELECT
        'DIST' || LPAD(
            ROW_NUMBER() OVER (
                ORDER BY distribution_type, label
            )::TEXT,
            6,
            '0'
        ) AS summary_distribution_id,
        distribution_type,
        label,
        product_type,
        credit_status,
        total_nasabah,
        total_risiko,
        ROUND(total_risiko * 100.0 / NULLIF(total_nasabah, 0), 2) AS rasio_risiko
    FROM distribution_data;
    """

def sql_refresh_summary_region():
    return f"""
    TRUNCATE TABLE {MART_SCHEMA}.mart_summary_region;

    INSERT INTO {MART_SCHEMA}.mart_summary_region (
        summary_region_id,
        level_wilayah,
        billing_province,
        billing_city,
        billing_district,
        billing_subdistrict,
        nama_wilayah,
        total_nasabah,
        total_risiko,
        rasio_risiko
    )
    WITH base AS (
        SELECT
            r.billing_province,
            r.billing_city,
            r.billing_district,
            r.billing_subdistrict,
            f.cust_no,
            f.is_risk
        FROM {MART_SCHEMA}.fact_customer_geospatial f
        JOIN {MART_SCHEMA}.dim_region r
            ON f.region_key = r.region_key
    ),
    unioned AS (
        SELECT
            'province' AS level_wilayah,
            billing_province,
            NULL::VARCHAR AS billing_city,
            NULL::VARCHAR AS billing_district,
            NULL::VARCHAR AS billing_subdistrict,
            billing_province AS nama_wilayah,
            COUNT(DISTINCT cust_no) AS total_nasabah,
            COUNT(DISTINCT CASE WHEN is_risk = TRUE THEN cust_no END) AS total_risiko
        FROM base
        WHERE billing_province IS NOT NULL
        GROUP BY billing_province

        UNION ALL

        SELECT
            'city',
            billing_province,
            billing_city,
            NULL::VARCHAR,
            NULL::VARCHAR,
            billing_city,
            COUNT(DISTINCT cust_no),
            COUNT(DISTINCT CASE WHEN is_risk = TRUE THEN cust_no END)
        FROM base
        WHERE billing_city IS NOT NULL
        GROUP BY billing_province, billing_city

        UNION ALL

        SELECT
            'district',
            billing_province,
            billing_city,
            billing_district,
            NULL::VARCHAR,
            billing_district,
            COUNT(DISTINCT cust_no),
            COUNT(DISTINCT CASE WHEN is_risk = TRUE THEN cust_no END)
        FROM base
        WHERE billing_district IS NOT NULL
        GROUP BY billing_province, billing_city, billing_district

        UNION ALL

        SELECT
            'subdistrict',
            billing_province,
            billing_city,
            billing_district,
            billing_subdistrict,
            billing_subdistrict,
            COUNT(DISTINCT cust_no),
            COUNT(DISTINCT CASE WHEN is_risk = TRUE THEN cust_no END)
        FROM base
        WHERE billing_subdistrict IS NOT NULL
        GROUP BY billing_province, billing_city, billing_district, billing_subdistrict
    )
    SELECT
        'SUMR' || LPAD(
            ROW_NUMBER() OVER (
                ORDER BY
                    level_wilayah,
                    billing_province,
                    billing_city,
                    billing_district,
                    billing_subdistrict
            )::TEXT,
            6,
            '0'
        ) AS summary_region_id,
        level_wilayah,
        billing_province,
        billing_city,
        billing_district,
        billing_subdistrict,
        nama_wilayah,
        total_nasabah,
        total_risiko,
        ROUND(total_risiko * 100.0 / NULLIF(total_nasabah, 0), 2) AS rasio_risiko
    FROM unioned;
    """

def sql_refresh_choropleth_numbers_only():
    return f"""
    UPDATE {MART_SCHEMA}.mart_choropleth_region
    SET
        total_nasabah = 0,
        total_risiko = 0,
        rasio_risiko = 0;

    WITH agg_province AS (
        SELECT
            r.bps_province AS province_name,
            COUNT(DISTINCT f.cust_no) AS total_nasabah,
            COUNT(DISTINCT CASE WHEN f.is_risk = TRUE THEN f.cust_no END) AS total_risiko,
            ROUND(
                COUNT(DISTINCT CASE WHEN f.is_risk = TRUE THEN f.cust_no END) * 100.0
                / NULLIF(COUNT(DISTINCT f.cust_no), 0),
                2
            ) AS rasio_risiko
        FROM {MART_SCHEMA}.fact_customer_geospatial f
        JOIN {MART_SCHEMA}.dim_region r
            ON f.region_key = r.region_key
        WHERE r.bps_province IS NOT NULL
        GROUP BY r.bps_province
    )
    UPDATE {MART_SCHEMA}.mart_choropleth_region m
    SET
        total_nasabah = a.total_nasabah,
        total_risiko = a.total_risiko,
        rasio_risiko = a.rasio_risiko
    FROM agg_province a
    WHERE m.level_wilayah = 'province'
      AND m.province_name = a.province_name;

    WITH agg_city AS (
        SELECT
            r.bps_province AS province_name,
            r.bps_city AS city_name,
            COUNT(DISTINCT f.cust_no) AS total_nasabah,
            COUNT(DISTINCT CASE WHEN f.is_risk = TRUE THEN f.cust_no END) AS total_risiko,
            ROUND(
                COUNT(DISTINCT CASE WHEN f.is_risk = TRUE THEN f.cust_no END) * 100.0
                / NULLIF(COUNT(DISTINCT f.cust_no), 0),
                2
            ) AS rasio_risiko
        FROM {MART_SCHEMA}.fact_customer_geospatial f
        JOIN {MART_SCHEMA}.dim_region r
            ON f.region_key = r.region_key
        WHERE r.bps_province IS NOT NULL
          AND r.bps_city IS NOT NULL
        GROUP BY r.bps_province, r.bps_city
    )
    UPDATE {MART_SCHEMA}.mart_choropleth_region m
    SET
        total_nasabah = a.total_nasabah,
        total_risiko = a.total_risiko,
        rasio_risiko = a.rasio_risiko
    FROM agg_city a
    WHERE m.level_wilayah = 'city'
      AND m.province_name = a.province_name
      AND m.city_name = a.city_name;
    """

def sql_create_indexes():
    return f"""
    CREATE INDEX IF NOT EXISTS idx_fact_geo_cust
    ON {MART_SCHEMA}.fact_customer_geospatial(cust_no);

    CREATE INDEX IF NOT EXISTS idx_fact_geo_contract
    ON {MART_SCHEMA}.fact_customer_geospatial(contract_no);

    CREATE INDEX IF NOT EXISTS idx_fact_geo_region
    ON {MART_SCHEMA}.fact_customer_geospatial(region_key);

    CREATE INDEX IF NOT EXISTS idx_fact_geo_latlng
    ON {MART_SCHEMA}.fact_customer_geospatial(latitude, longitude);

    CREATE INDEX IF NOT EXISTS idx_fact_geo_risk
    ON {MART_SCHEMA}.fact_customer_geospatial(is_risk);

    CREATE INDEX IF NOT EXISTS idx_dim_region_bps
    ON {MART_SCHEMA}.dim_region(bps_province, bps_city);

    CREATE INDEX IF NOT EXISTS idx_choropleth_level
    ON {MART_SCHEMA}.mart_choropleth_region(level_wilayah);

    CREATE INDEX IF NOT EXISTS idx_choropleth_area
    ON {MART_SCHEMA}.mart_choropleth_region(province_name, city_name);
    """

def sql_quality_check():
    return f"""
    SELECT
        (SELECT COUNT(*) FROM {MART_SCHEMA}.dim_product) AS dim_product_rows,
        (SELECT COUNT(*) FROM {MART_SCHEMA}.dim_credit_status) AS dim_credit_status_rows,
        (SELECT COUNT(*) FROM {MART_SCHEMA}.dim_region) AS dim_region_rows,
        (SELECT COUNT(*) FROM {MART_SCHEMA}.fact_customer_geospatial) AS fact_rows,
        (SELECT COUNT(*) FROM {MART_SCHEMA}.mart_summary_region) AS mart_summary_region_rows,
        (SELECT COUNT(*) FROM {MART_SCHEMA}.mart_summary_distribution) AS mart_distribution_rows,
        (SELECT COUNT(*) FROM {MART_SCHEMA}.mart_choropleth_region) AS mart_choropleth_rows,
        (SELECT COUNT(*) FROM {MART_SCHEMA}.mart_choropleth_region WHERE total_nasabah > 0) AS choropleth_with_data_rows;
    """

def main():
    print("=== ETL Refresh Data Mart Geospasial ===")
    print("Mode: final fixed ID + koordinat dari Geocoding/BillingAddress + tanpa regenerate geometry_json")

    steps = [
        ("prepare ID columns", sql_prepare_columns()),
        ("refresh dim_product", sql_refresh_dim_product()),
        ("refresh dim_credit_status", sql_refresh_dim_credit_status()),
        ("refresh dim_region + BPS mapping", sql_refresh_dim_region()),
        ("refresh fact_customer_geospatial", sql_refresh_fact_customer_geospatial()),
        ("refresh mart_summary_distribution", sql_refresh_summary_distribution()),
        ("refresh mart_summary_region", sql_refresh_summary_region()),
        ("update angka mart_choropleth_region", sql_refresh_choropleth_numbers_only()),
        ("create indexes", sql_create_indexes()),
    ]

    started = time.time()

    try:
        with get_connection() as conn:
            conn.autocommit = False

            for title, sql in steps:
                execute_sql(conn, title, sql)

            print("\\n▶ quality check")
            qc = fetch_one(conn, sql_quality_check())
            for k, v in qc.items():
                print(f"  {k}: {v}")

            conn.commit()

        print(f"\\nETL berhasil. Total waktu: {time.time() - started:.2f}s")

    except Exception as exc:
        print("\\nETL gagal. Semua perubahan di-rollback.")
        print(f"Error: {exc}")
        sys.exit(1)

if __name__ == "__main__":
    main()`,
    },
    overview:
      "This undergraduate thesis focuses on the design and implementation of an integrated geospatial analytics and data engineering solution for PT XYZ, a nationwide multifinance enterprise, to improve visibility into customer geographic distribution and facilitate proactive credit risk mitigation across Indonesia.\n\nPreviously, customer records were stored across fragmented branch-level transactional databases (OLTP) and analyzed exclusively through flat two-dimensional spreadsheets lacking spatial coordinates. Inconsistent address formats and the absence of geographic standardization prevented risk teams and executives from identifying spatial clusters of delinquent borrowers.\n\nTo address this challenge, I architected a centralized Geospatial Data Mart structured in an OLAP Star Schema that integrates customer profiles, financing contracts, and billing addresses. Supported by an automated Python ETL pipeline with multi-tier geocoding, the system transforms raw transactional records into an interactive Web GIS dashboard (XYZ GeoNasabah) featuring 6 spatial map layers, 4-level administrative drilldowns, and regional risk quadrant segmentation.",
    keyNumbers: [
      "2,000+ customer records processed for coordinates",
      "99%+ automated geocoding success rate",
      "~6% regional credit risk ratio identified",
      "4-level administrative drilldown (Province, City, District, Village)",
      "6 interactive Web GIS spatial analytical map layers",
    ],
    workDone: [
      "Designed and implemented a normalized operational relational database (OLTP) comprising 7 integrated tables.",
      "Developed an automated Python ETL pipeline (etl_refresh_datamart.py) integrating Geopy Nominatim and ArcGIS World Geocoding fallback.",
      "Integrated official BPS polygon boundaries with centroid fallback handling, achieving a 99%+ automated geocoding success rate across 2,000+ customer accounts.",
      "Engineered an OLAP Geospatial Data Mart using a Star Schema (fact_customer_geospatial and dimensions dim_product, dim_credit_status, dim_region), reducing analytical query latency by 85%.",
      "Built the XYZ GeoNasabah interactive Web GIS dashboard with Leaflet.js, Chart.js, and web frameworks featuring 6 specialized spatial layers.",
      "Delivered advanced spatial analytics: multi-level administrative drilldowns (Province -> City -> District -> Subdistrict), Top 10 regional risk rankings, and an interactive Risk Quadrant Scatter Plot.",
    ],
    keyFindings: {
      quantitative: [
        {
          title: "National Borrower Concentration",
          desc: "West Java represents the highest borrower volume in Java (151 borrowers). Outside Java, Merauke Regency (92) and Ambon City (61) host the largest concentrations, followed by South Jakarta (31) and Tangerang Regency (29).",
        },
        {
          title: "Credit Delinquency Hotspots (NPL Mapping)",
          desc: "The highest credit risk ratios were identified in West Sulawesi (14.75%) and Pidie Jaya (Aceh). In absolute volume, Bogor Regency recorded the highest count of delinquent borrowers (5), followed by Tangerang, Bulungan, and Makassar (4 each).",
        },
        {
          title: "Financing Portfolio Breakdown",
          desc: "New Cars dominate 30.8% of the overall portfolio, followed by New Motorcycles (29.2%), Used Cars (15.5%), Commercial Motorcycles (11.6%), and Commercial Cars (7.2%). Contract statuses are 85.8% Current, 7.2% Early Settlement, 4.4% Default, and 1.8% Repossessed.",
        },
        {
          title: "ETL Accuracy & Query Performance",
          desc: "A total of 2,319 borrower records were geocoded with a 99.61% automated success rate. The Star Schema Data Mart reduced analytical query load times by 85% compared to direct querying of normalized operational tables.",
        },
      ],
      recommendations: [
        "Implement tightened credit scoring approval thresholds and evaluate down payment requirements in high-risk regional clusters (West Sulawesi, Pidie Jaya, Bogor Regency) to curtail bad debt.",
        "Optimize field collection team routes and resource allocation using the High-Risk Zones map layer for proactive handling of delinquent accounts.",
        "Leverage high customer concentration hubs (Merauke, Ambon, Greater Jakarta) to guide new branch office or Point of Sales (POS) network expansion.",
        "Schedule automated recurring runs of etl_refresh_datamart.py to ensure the data mart and Web GIS dashboards continuously reflect real-time contract statuses.",
      ],
    },
    challengesLearnings: [
      {
        title: "Standardizing Free-Text Address Inconsistencies",
        desc: "Branch address entries contained non-standard local abbreviations and typographical errors. Resolved by developing a regex parsing preprocessor, postal code normalizer, and BPS boundary matcher.",
      },
      {
        title: "Optimizing 2,300+ Point Map Rendering (Leaflet)",
        desc: "Rendering thousands of individual coordinate markers simultaneously caused browser rendering lag. Resolved by integrating Leaflet MarkerCluster with dynamic thresholds (<10 blue, 10-49 orange, >50 red).",
      },
      {
        title: "Decoupling OLTP from OLAP via Dimensional Data Mart",
        desc: "Running heavy spatial analytical aggregations directly on operational tables impeded transaction processing. The Star Schema fact_customer_geospatial cleanly decoupled analytical workloads and accelerated dashboard responsiveness.",
      },
      {
        title: "Harmonizing Operational Data with Official BPS Boundaries",
        desc: "Aligning borrower billing coordinates with standardized BPS administrative codes enabled seamless, multi-level choropleth aggregations from province down to subdistrict.",
      },
    ],
    confidentialityNote:
      "All customer records, personal identifying information (names, contact numbers, contract IDs), and transaction figures from PT XYZ featured in this case study and portfolio have been anonymized, masked, and altered for academic and professional portfolio display in strict compliance with data privacy standards.",
    keyLearnings:
      "This undergraduate thesis project cemented my end-to-end data engineering and analytics capabilities: from relational database architecture (OLTP) and dimensional data mart modeling (OLAP/Star Schema) to automated Python ETL development with multi-tier spatial geocoding and responsive Web GIS visualization.\n\nIt demonstrated how fragmented, unstructured multifinance records can be engineered into actionable spatial intelligence that empowers leadership to mitigate credit delinquency and make data-driven decisions on market penetration and regional expansion.",
    gallery: [
      {
        title: "Executive Geospatial Dashboard (XYZ GeoNasabah)",
        caption: "Executive KPI dashboard overview highlighting 2,319 Total Borrowers, 147 Delinquent Accounts (6.3%), New Cars as Dominant Product, and Nationwide Distribution Choropleth.",
        image: "/images/projects/geospatial-pt-xyz/04-dashboard-kpi-overview.jpg",
        badge: "Executive KPI Dashboard",
      },
      {
        title: "Dynamic Marker Clustering Map across Indonesia",
        caption: "Interactive dynamic marker clustering with visual thresholds (<10 blue, 10-49 orange, >50 red) for high-performance spatial rendering.",
        image: "/images/projects/geospatial-pt-xyz/08-cluster-layer-map.jpg",
        badge: "Leaflet Marker Cluster",
      },
      {
        title: "Choropleth Distribution & Risk Segmentation Map",
        caption: "Thematic provincial polygon map segmented by customer volume tiers (1-25, 26-50, 51-75, >75) for rapid portfolio density identification.",
        image: "/images/projects/geospatial-pt-xyz/05-choropleth-risk-segmentation.jpg",
        badge: "Choropleth Map",
      },
      {
        title: "High-Risk Delinquency Hotspots (Zona Risiko Tinggi)",
        caption: "Specialized red marker spatial layer isolating geographic concentrations of non-performing loans, defaults, and repossessions.",
        image: "/images/projects/geospatial-pt-xyz/10-high-risk-zones-layer.jpg",
        badge: "High Risk Zones",
      },
      {
        title: "Spatial Risk Segmentation Scatter Plot & Regional Rankings",
        caption: "Interactive risk quadrant scatter plot (Borrower Volume vs Risk Ratio %) paired with Top 10 Regional Risk bar charts.",
        image: "/images/projects/geospatial-pt-xyz/07-scatter-segmentation-ranking.png",
        badge: "Risk Segmentation & Top 10",
      },
      {
        title: "Multi-Level Administrative Drilldown & Product Breakdown",
        caption: "Hierarchical administrative breakdown tables (Regency, District, Village) integrated with Financing Product & Credit Status distribution charts.",
        image: "/images/projects/geospatial-pt-xyz/06-drilldown-tables-and-charts.jpg",
        badge: "Drilldown & Portfolio Breakdown",
      },
      {
        title: "Regional Customer Density Choropleth",
        caption: "Regional borrower density gradient map across Indonesian islands with multi-criteria filtering controls.",
        image: "/images/projects/geospatial-pt-xyz/11-density-choropleth-map.jpg",
        badge: "Density Choropleth",
      },
      {
        title: "Detailed Cluster & Map Filtering Interface",
        caption: "Comprehensive map filtering interface supporting cross-filtering by Credit Status, Product Category, and Administrative Choropleth Level.",
        image: "/images/projects/geospatial-pt-xyz/09-cluster-layer-detail.jpg",
        badge: "Map Filtering Interface",
      },
    ],
  },
  // 2. Live Studio Performance & Operations Dashboard Suite (FEATURED)
  {
    id: 2,
    slug: "live-studio-performance-dashboard-blibli",
    title: "Live Studio Performance & Operations Dashboard Suite",
    subtitle:
      "Interactive executive and operational dashboards for live commerce performance, studio utilization, and playbook analysis",
    affiliation: "Live Commerce Operations · Business Intelligence & Studio Analytics",
    projectType: "Work Project",
    domain: "Live Commerce & Operations Analytics",
    category: ["Work Projects", "Business Intelligence"],
    year: "2026",
    duration: "Jan 2026 – Nov 2026",
    role: "Business Intelligence Analyst",
    primaryStack: "Looker Studio, BigQuery & SQL",
    tools: ["Looker Studio", "Google BigQuery", "SQL", "Google Sheets"],
    featured: true,
    coverImage: "/images/projects/fas-studio/01-overview-livestreaming.svg",
    shortDescription:
      "Interactive Looker Studio dashboard suite and BigQuery pipeline tracking live commerce performance, studio utilization across 10+ studios, and conversion playbooks across 10+ brand clients on TikTok and Shopee.",
    links: {
      report: "",
      dashboard: "",
      streamlit: "",
      github: "",
    },
    overview:
      "Our live commerce studio operates livestream selling operations for leading brand clients on TikTok and Shopee. Performance data covered GMV, orders, viewers, studio schedules, hosts, and playbook usage, and stakeholders needed one place to answer:\n• Which brands and playbooks drive the most live GMV?\n• How well are studios and hosts utilized?\n• When do viewers buy?\n\nI built a set of interconnected Looker Studio dashboards powered by BigQuery and SQL for management, account managers, and studio operations, with dynamic filters for marketplace, brand, category, date, and playbook.",
    keyNumbers: [
      "1,500+ Live Broadcast Sessions tracked (Jan–Nov 2026)",
      "80K+ Orders / 100K+ Items sold",
      "600K+ Livestream Viewers (3M+ total impressions)",
      "10+ Brand Clients across TikTok & Shopee",
      "10+ Live Studios & 30+ Active Hosts",
      "7%+ Live Store Attribution (peaked ~20% in Oct 2026)",
    ],
    commercialContext: {
      overview:
        "The live commerce studio operates multi-brand live commerce streaming across TikTok and Shopee. Live performance data encompasses revenue transactions, viewer engagement, studio schedules, host shifts, and conversion playbooks. Management and account managers required a centralized, unified reporting suite to answer critical commercial questions:\n\n• How much does live commerce contribute to each brand's total GMV?\n• Which playbook structures (VPR sequence, gimmick, host delivery) generate the highest average GMV?\n• Are studios and hosts used efficiently, and in which time slots?",
      questions: [
        "How much does live commerce contribute to each brand's total GMV?",
        "Which playbook structures (VPR sequence, gimmick, host delivery) generate the highest average GMV?",
        "Are studios and hosts used efficiently, and in which time slots?",
      ],
    },
    problemStatement: {
      bottleneck:
        "Previously, live session performance, studio scheduling, and playbook logs were managed and reported manually across disconnected spreadsheets and individual Seller Center exports. This caused heavy reporting lag, conflicting metric calculations between client account managers, and an inability to dynamically reassign underutilized studio hours or identify winning playbook mechanics during high-velocity campaign windows.",
      objectives: [
        "Standardize live commerce KPIs across all brand accounts (orders, items sold, AOV, viewers, GPM, live CTR, live CTOR, tap-through rate).",
        "Build interconnected dashboards at three operational levels: executive overview, client performance, and operational drill-down (studio/host/playbook).",
        "Measure and attribute livestream contribution against total store GMV to evaluate live selling incremental lift.",
        "Quantify studio utilization with a standardized mathematical formula: Total Live Hours / (16 operating hours × days × studios).",
        "Compare playbooks to produce empirical recommendations for hosts and brand managers.",
      ],
    },
    datasetScopeDetails: {
      standards:
        "Operational and commercial performance data spanning January to November 2026 across 10+ enterprise FMCG, Health, and Personal Care clients on TikTok and Shopee.\n\nStrict data hygiene rules implemented in SQL/BigQuery: excluded out-of-stock (OOS) and platform policy violation sessions, included paid ad traffic and giveaways, and separated promotional vs. non-promotional campaign days.",
      statChips: [
        "80K+ Live Orders",
        "100K+ Items Sold",
        "600K+ Viewers",
        "10+ Brand Clients",
        "10+ Studios & 30+ Hosts",
        "Jan–Nov 2026",
      ],
    },
    methodologyExecution: [
      {
        step: "01",
        title: "KPI Definition & Standardization",
        description:
          "Formulated standardized metric definitions for AOV, GPM, Live CTR, Live CTOR, Tap-Through Rate, % Live Attribution, and Studio Utilization.",
      },
      {
        step: "02",
        title: "Data Preparation & Transformation",
        description:
          "Consolidated multi-source streaming logs, Seller Center transaction exports, and studio shift rosters in Google BigQuery and SQL; cleaned data noise, resolved WIB timezones, and created joined analytical views.",
      },
      {
        step: "03",
        title: "Multi-Tier Dashboard Architecture",
        description:
          "Engineered an interconnected 8-view Looker Studio dashboard hierarchy structured from Overview → Client Performance → Studio Utilization → High-Level / Playbook drill-downs with a unified navy visual theme.",
      },
      {
        step: "04",
        title: "Playbook Attribute Comparison",
        description:
          "Classified broadcast playbooks by duration, VPR element sequence (Visual-Price-Reason), product interval, product count, promo gimmick, and host delivery style to identify empirical conversion drivers.",
      },
    ],
    workflowSteps: [
      {
        step: "Stage 01",
        title: "Data Ingestion & Hygiene",
        subtitle: "TikTok & Shopee Seller Center",
        isDeepDive: true,
        details: [
          "Ingesting daily live streaming telemetry and sales transactions across 14 brand client accounts.",
          "Excluding out-of-stock (OOS) and platform policy violation sessions to ensure fair comparison.",
          "Including paid ads and giveaway session data while tagging promotional vs non-promotional days.",
          "Timezone normalization to WIB (Western Indonesia Time) for accurate hourly scheduling.",
        ],
        deepDiveActions: [
          "Ingesting daily live streaming telemetry and sales transactions across 14 brand client accounts.",
          "Excluding out-of-stock (OOS) and platform policy violation sessions to ensure fair comparison.",
          "Including paid ads and giveaway session data while tagging promotional vs non-promotional days.",
        ],
      },
      {
        step: "Stage 02",
        title: "Data Transformation",
        subtitle: "Google BigQuery & SQL Views",
        details: [
          "Modeling session-grain and hourly-grain analytical marts with aggregated KPIs.",
          "Implementing studio utilization formula: Total Live Hours / (16 × Total Days × Total Studios).",
          "Joining total store GMV against live GMV to calculate monthly attribution percentage.",
        ],
      },
      {
        step: "Stage 03",
        title: "Executive & Client Suite",
        subtitle: "Looker Studio Dashboards",
        details: [
          "Building executive overview showing orders, items sold, live conversion rates, and brand breakdowns.",
          "Creating client-level performance dashboards with MoM comparison and daily pacing.",
          "Developing store contribution tracking to monitor live GMV share over time.",
        ],
      },
      {
        step: "Stage 04",
        title: "Operations & Playbook",
        subtitle: "Studio & Playbook Analytics",
        details: [
          "Constructing studio occupancy heatmaps and host GMV/hour efficiency rankings.",
          "Analyzing playbook structures (VPR sequences, intervals, gimmicks) across categories.",
          "Delivering data-backed scheduling and co-hosting recommendations to management.",
        ],
      },
    ],
        codeSnippets: [
      {
        language: "sql",
        title: "fas_livestudio_utilization.sql",
        subtitle: "LIVE STUDIO UTILIZATION · Schedule vs Broadcast Report Mart",
        description:
          "Production BigQuery SQL query joining studio schedules with broadcast reports, computing midnight-crossing duration logic, 16-hour operating window capacity, and monthly studio partitions.",
        code: `select

    s.scheduleid,
    s.campaignname,
    s.date,

    format_date('%Y-%m', s.date) as month,

    extract(year from s.date) as year,

    format_date('%A', s.date) as day_name,

    case
        when extract(dayofweek from s.date) in (1,7)
            then 'Weekend'
        else 'Weekday'
    end as week_type,

    s.status,
    s.brandid,
    s.studioid,
    s.hostid,
    s.position,
    s.platform,

    s.starttime,
    s.endtime,

    extract(hour from s.starttime) as start_hour,
    extract(hour from s.endtime) as end_hour,

    concat(
        format_time('%H:%M', s.starttime),
        ' - ',
        format_time('%H:%M', s.endtime)
    ) as schedule_slot,

    s.account,
    s.totalaccount,
    s.shift,
    s.jamlive,
    s.totallivetime,
    s.id,
    s.created,
    s.livebreak,

    r.reportid,
    r.attachment,
    r.tanggalrevisi,
    r.liveid,
    r.approvalcomment,
    r.approvalstatus,
    r.match,
    r.hostname,
    r.accountid,

    r.durasi_min_,

    coalesce(
        safe_cast(r.durasi_min_ as int64),
        case
            when s.endtime >= s.starttime then
                time_diff(s.endtime, s.starttime, minute)
            else
                time_diff(s.endtime, s.starttime, minute) + 1440
        end
    ) as duration_min,

    round(

        coalesce(
            safe_cast(r.durasi_min_ as int64),
            case
                when s.endtime >= s.starttime then
                    time_diff(s.endtime, s.starttime, minute)
                else
                    time_diff(s.endtime, s.starttime, minute) + 1440
            end
        ) / 60.0

    ,2) as duration_hours,

    16 as operating_capacity_hours,

    r.addtocart,
    r.pesanan,
    r.penjualan,
    r.produkterjual,
    r.jumlahpembeli,
    r.ctr,
    r.peakviewer,
    r.ctor,
    r.comment,
    r.share,
    r.edited,
    r.absid,
    r.keterangan,
    r.createddate,
    r.approver,
    r.approveremail,
  count(distinct studioid) over (partition by extract(year from date)) as total_studio_month

from fas_L2.fas_livestudio_schedule s

left join fas_L2.fas_livestudio_report r
    on s.scheduleid = r.scheduleid
    and s.brandid = r.brandid
    and s.date = r.livedate;`,
      },
      {
        language: "sql",
        title: "fas_livestudio_remarks.sql",
        subtitle: "LIVE STUDIO REMARKS · Playbook Schema & Host Parameters Enrichment",
        description:
          "Production BigQuery SQL query enriching livestream sessions with operational remarks, VPR playbook schemas, promotional calendar flags, and host performance attributes.",
        code: `with remarks as (
  select
    date(parse_datetime('%Y-%m-%d %H:%M:%S', live_date)) as live_date,
    marketplace,
    brand,
    brand_category,
    live_time,
    playbook_used,
    products_highlighted,
    host_gender,
    host_delivery,
    background,
    host_age,
    gimmick,
    interactions,
    script_format,
    format_vpr,
    live_account,
    ads_status,
    remarks
  from \`dept-bi-operations.fas_L1.liveshopping_studio_remarks\`
),

skema as (
  select
    playbook,
    durasi,
    urutan_elemen_vpr,
    elemen_pembeda,
    interval_waktu_per_sku,
    jumlah_produk,
    gimmick,
    host_appearance,
    host_gender,
    host_delivery,
    background,
    host_age,
    durasi_per_elemen_vpr
  from \`fas_L2.fas_skema_playbook_vpr\`
)

select
  a.source_file,
  a.marketplace,
  a.brand,
  a.brand_category,
  a.live_time,
  a.time,
  a.month_id,
  a.date_id,
    case
      when extract(day from a.date_id) = extract(month from a.date_id)
        or extract(day from a.date_id) = extract(month from a.date_id) + 1
        or extract(day from a.date_id) = extract(month from a.date_id) - 1
        or extract(day from a.date_id) between 25 and 27
      then 'Yes'
      else 'No'
    end as is_promo_day,
  a.user_id,
  a.livestream_name,
  a.start_time,
  a.duration,
  a.engaged_viewers,
  a.viewers,
  a.comments,
  a.atc,
  a.avg_viewing_duration,
  a.orders,
  a.items_sold,
  a.gmv,
  a.customers,
  a.sku_orders,
  a.views,
  a.product_impressions,
  a.live_ctr,
  a.tap_through_rate,
  a.product_clicks,
  a.impressions,
  a.new_followers,
  a.shares,
  a.likes,
  a.comment_rate,
  a.follow_rate,
  a.aov,
  a.ctor_sku_orders,
  a.watch_gpm,
  a.payment_rate,
  a.ctor,
  a.show_gpm,
  a.order_rate_sku_orders,

  -- PLAYBOOK
  coalesce(a.playbook_used, b.playbook_used, c.playbook) as playbook_used,

  -- REMARKS-SPECIFIC
  b.products_highlighted,
  b.interactions,
  b.script_format,
  b.format_vpr,
  b.live_account,
  b.ads_status,
  b.remarks,

  case
    when a.date_id <= date '2026-08-23'
      then b.gimmick
    else c.gimmick
  end as gimmick,

  case
    when a.date_id <= date '2026-08-23'
      then b.host_gender
    else c.host_gender
  end as host_gender,

  case
    when a.date_id <= date '2026-08-23'
      then b.host_delivery
    else c.host_delivery
  end as host_delivery,

  case
    when a.date_id <= date '2026-08-23'
      then b.background
    else c.background
  end as background,

  case
    when a.date_id <= date '2026-08-23'
      then b.host_age
    else c.host_age
  end as host_age,

  -- SKEMA
  c.durasi,
  c.urutan_elemen_vpr,
  c.elemen_pembeda,
  c.interval_waktu_per_sku,
  c.jumlah_produk,
  c.host_appearance,
  c.durasi_per_elemen_vpr

from \`fas_L2.fas_livestudio_mp\` a

left join remarks b
  on a.date_id = b.live_date
  and lower(a.marketplace) = lower(b.marketplace)
  and lower(a.brand) = lower(b.brand)
  and a.live_time = b.live_time

left join skema c
  on lower(coalesce(a.playbook_used, b.playbook_used))
     = lower(c.playbook);`,
      },
    ],
    codeSnippet: {
      language: "sql",
      title: "fas_livestudio_utilization.sql",
      subtitle: "LIVE STUDIO UTILIZATION · Schedule vs Broadcast Report Mart",
      description:
        "Production BigQuery SQL query joining studio schedules with broadcast reports, computing midnight-crossing duration logic, 16-hour operating window capacity, and monthly studio partitions.",
      code: `select

    s.scheduleid,
    s.campaignname,
    s.date,

    format_date('%Y-%m', s.date) as month,

    extract(year from s.date) as year,

    format_date('%A', s.date) as day_name,

    case
        when extract(dayofweek from s.date) in (1,7)
            then 'Weekend'
        else 'Weekday'
    end as week_type,

    s.status,
    s.brandid,
    s.studioid,
    s.hostid,
    s.position,
    s.platform,

    s.starttime,
    s.endtime,

    extract(hour from s.starttime) as start_hour,
    extract(hour from s.endtime) as end_hour,

    concat(
        format_time('%H:%M', s.starttime),
        ' - ',
        format_time('%H:%M', s.endtime)
    ) as schedule_slot,

    s.account,
    s.totalaccount,
    s.shift,
    s.jamlive,
    s.totallivetime,
    s.id,
    s.created,
    s.livebreak,

    r.reportid,
    r.attachment,
    r.tanggalrevisi,
    r.liveid,
    r.approvalcomment,
    r.approvalstatus,
    r.match,
    r.hostname,
    r.accountid,

    r.durasi_min_,

    coalesce(
        safe_cast(r.durasi_min_ as int64),
        case
            when s.endtime >= s.starttime then
                time_diff(s.endtime, s.starttime, minute)
            else
                time_diff(s.endtime, s.starttime, minute) + 1440
        end
    ) as duration_min,

    round(

        coalesce(
            safe_cast(r.durasi_min_ as int64),
            case
                when s.endtime >= s.starttime then
                    time_diff(s.endtime, s.starttime, minute)
                else
                    time_diff(s.endtime, s.starttime, minute) + 1440
            end
        ) / 60.0

    ,2) as duration_hours,

    16 as operating_capacity_hours,

    r.addtocart,
    r.pesanan,
    r.penjualan,
    r.produkterjual,
    r.jumlahpembeli,
    r.ctr,
    r.peakviewer,
    r.ctor,
    r.comment,
    r.share,
    r.edited,
    r.absid,
    r.keterangan,
    r.createddate,
    r.approver,
    r.approveremail,
  count(distinct studioid) over (partition by extract(year from date)) as total_studio_month

from fas_L2.fas_livestudio_schedule s

left join fas_L2.fas_livestudio_report r
    on s.scheduleid = r.scheduleid
    and s.brandid = r.brandid
    and s.date = r.livedate;`,
    },
    gallery: [
      {
        title: "Overview Livestreaming & Studio Operations",
        caption:
          "Total GMV per client, GMV breakdown by brand × marketplace × month, and key KPIs (GMV, orders, AOV, viewers).",
        badge: "Executive Overview",
        image: "/images/projects/fas-studio/01-overview-livestreaming.svg",
      },
      {
        title: "Client Level Performance Summary",
        caption:
          "Daily GMV and viewers compared month-over-month with period-over-period deltas.",
        badge: "Client Analytics",
        image: "/images/projects/fas-studio/02-client-level-performance.svg",
      },
      {
        title: "Live Studio Contribution & Store Attribution",
        caption:
          "Live GMV vs total store GMV, with monthly % contribution.",
        badge: "Store Attribution",
        image: "/images/projects/fas-studio/03-fas-studio-contribution.svg",
      },
      {
        title: "Studio Utilization Summary",
        caption:
          "Utilization %, live hours, active hosts, planned vs completed lives, and GMV/orders by hour of day.",
        badge: "Operations & Capacity",
        image: "/images/projects/fas-studio/04-studio-utilization-summary.svg",
      },
      {
        title: "Studio, Brand & Host Efficiency",
        caption:
          "Utilization by studio, GMV by brand, GMV/hour per host, and an hourly studio occupancy heatmap.",
        badge: "Efficiency & Heatmap",
        image: "/images/projects/fas-studio/05-studio-brand-host-efficiency.svg",
      },
      {
        title: "High Level Studio Performance",
        caption:
          "Daily trend and 30-minute live detail (GMV, items sold, views), with High Level / VPR Level / Playbook Level views.",
        badge: "Granular Pacing",
        image: "/images/projects/fas-studio/06-high-level-studio-performance.svg",
      },
      {
        title: "Playbook Analysis",
        caption:
          "GMV trend and comparison of playbooks by structure, product count, gimmick, and host delivery style.",
        badge: "Playbook Strategy",
        image: "/images/projects/fas-studio/07-playbook-analysis.svg",
      },
      {
        title: "Category Playbook Comparison",
        caption:
          "Live CTR, live CTOR, and tap-through rate per playbook for the Personal Care and Health categories, with promo/non-promo splits.",
        badge: "Category Benchmarking",
        image: "/images/projects/fas-studio/08-category-playbook-comparison.svg",
      },
    ],
    keyFindings: {
      quantitative: [
        {
          title: "Live Commerce is Accelerating in Importance",
          desc: "Live's share of total store volume rose from ~7% in June to ~20% in October 2026, demonstrating substantial growth in live channel adoption.",
        },
        {
          title: "Evening Hours are Prime Commercial Time",
          desc: "Order volume climbs steadily through the day and consistently peaks between 20:00–22:00 WIB (peaking at 9K+ orders in the 21:00 slot).",
        },
        {
          title: "Playbook Structure Drives ~2.4x Performance Divergence",
          desc: "For one brand, Playbook 21 achieved a ~2.4x conversion uplift over Playbook 15. Testing fairness across active days confirmed structured VPR elements drove higher basket conversion.",
        },
        {
          title: "Studio Utilization is Uneven (40% to 150%+)",
          desc: "Utilization ranged from ~40% to ~150%+ across studios, demonstrating that certain high-demand studios are overloaded while others experience idle capacity.",
        },
        {
          title: "Host Productivity Varies Widely",
          desc: "Top-performing hosts generated ~3x higher order velocity per hour compared to peer averages, highlighting substantial peer-coaching upside.",
        },
        {
          title: "Brand Concentration & Campaign Sensitivity",
          desc: "The anchor enterprise client account contributed ~25% of overall portfolio orders with massive campaign day surges.",
        },
      ],
      recommendations: [
        "Schedule high-value brands and hero products strictly in the prime 20:00–22:00 evening time slots.",
        "Move broadcast sessions from overloaded studios (>100% utilization) to underused studios to balance equipment and crew load.",
        "Pair lower-performing hosts with top-performing hosts for coaching and co-hosting sprints.",
        "Standardize the best-performing playbook per category as the baseline standard operational procedure, while continuing structured A/B tests.",
        "Track monthly % live contribution per brand to identify clients with high untapped livestream expansion potential.",
      ],
    },
    challengesLearnings: [
      {
        title: "Extended Operating Hours in Utilization Formulas",
        desc: "Defining and standardizing studio utilization metrics when live broadcasts extend beyond standard 16-hour daily operating windows required custom shift threshold logic.",
      },
      {
        title: "Cross-Marketplace Store GMV Reconciliation",
        desc: "Reconciling live-attributed revenue against total store GMV across both TikTok and Shopee required harmonizing disparate attribution windows and promotional discount deductions.",
      },
      {
        title: "Uniform Filter Architecture in Looker Studio",
        desc: "Designing persistent report-level parameters so date filters, brand selectors, and marketplace toggles synchronized seamlessly across all 8 dashboard pages.",
      },
      {
        title: "Fair Playbook Comparisons under Stock & Promo Variances",
        desc: "Handling out-of-stock (OOS) conditions, platform violations, and promo versus non-promo days to ensure empirical comparisons isolated genuine playbook efficacy.",
      },
    ],
    confidentialityNote:
      "Confidentiality & Demonstration Data Notice: In compliance with non-disclosure agreements (NDA) and commercial data governance, proprietary brand names, revenue amounts, and host identities shown across these dashboards have been sanitized, indexed, or presented with demonstration/dummy values. The dashboard architectures, analytical frameworks, and operational methodologies reflect true production implementations.",
  },

  // 3. Brand Growth Data Mart & Looker Studio Dashboard: TikTok Shop Live & Video Performance
  {
    id: 3,
    slug: "tiktok-shop-live-video-performance-dashboard",
    title: "Brand Growth Data Mart & Looker Studio Dashboard: TikTok Shop Live & Video Performance",
    subtitle: "API data mart (BigQuery) and multi-page Looker Studio dashboard tracking LIVE, video, and product-card performance across 22 brands",
    affiliation: "Brand Growth Team · E-Commerce Operations",
    projectType: "Business Intelligence",
    domain: "Business Intelligence & Data Mart",
    category: ["Work Projects", "Business Intelligence"],
    year: "2026",
    role: "Business Intelligence Analyst",
    duration: "2026",
    primaryStack: "Looker Studio, BigQuery & SQL",
    featured: true,
    tools: [
      "Looker Studio",
      "Google BigQuery",
      "TikTok Shop Seller Center API",
      "SQL",
      "Python",
      "Calculated Fields & Cross-Filtering"
    ],
    coverImage: "/images/projects/tiktok-shop/01-general-overview.svg",
    shortDescription:
      "A Looker Studio dashboard on top of a TikTok Shop data mart that shows LIVE, video, and product-card performance for 20+ brands, with drill-downs from brand, to account type, to session minute-by-minute, to individual video. It replaces manual Seller Center exports.",
    links: {
      report: "",
      dashboard: "",
      github: "",
    },
    overview:
      "The Brand Growth team used to build TikTok Shop performance views by hand, one account at a time, from Seller Center exports. That made it slow to compare brands, diagnose weak spots, or see how much of a store’s GMV comes from content.\n\nI built a data mart fed by the TikTok Shop API, plus a Looker Studio dashboard that answers the team’s questions top-down:\n\n• General Overview: Portfolio-level health across all active brands (GMV, orders, visitors, AOV, conversion), and GMV contribution by channel (LIVE, Video, Product Card) over time.\n• GMV Breakdown by Brand: A monthly pivot of GMV by channel for every brand, for fast ranking and comparison.\n• Brand Page (e.g. KAO Indonesia): Content GMV, content share of shop GMV, daily GMV trend, and sales-channel share split by account type (Official, Marketing, Affiliate).\n• Funnel and Efficiency: LIVE vs Video comparison on Product CTR, click-to-order, AOV, and GPM, plus a \"top contributors\" table showing what moved GMV.\n• LIVE Deep-Dive: Session-level and daily stats for official accounts, creator-level LIVE performance, and a minute-by-minute view of a single session (viewers vs GMV).\n• Video Deep-Dive: Video performance by account type, a \"scale, fix or stop\" bubble chart (views vs click-through rate), GMV decay by days since posting, and top videos.\n\nThe dashboard supports two plays: finding the weakest GMV driver for brands where our studio runs the content, and building upsell cases for brands where our studio runs the store, including a view of how many of the 5 allowed accounts a brand already uses.",
    commercialContext: {
      overview:
        "The Brand Growth team needed automated, granular visibility into how brand accounts perform on TikTok Shop LIVE and video, and how they stack up against peer benchmarks. Operating without an automated pipeline meant relying on manual spreadsheet exports that created heavy reporting lag and obscured channel attribution.",
      questions: [
        "How much of each store's total GMV is driven by content (LIVE + Video) versus organic product-card browsing?",
        "How does content performance compare across Official, Marketing, and Affiliate accounts?",
        "Between LIVE and Video, which format converts views to product clicks and orders more efficiently?",
        "Which individual videos and formats should the creative team scale, fix, or stop?",
        "How can account managers identify upsell opportunities for brands with unused marketing account slots (up to 5 allowed)?",
      ],
    },
    problemStatement: {
      bottleneck:
        "Previously, the Brand Growth team built TikTok Shop performance views by hand, one account at a time, from manual Seller Center CSV exports. That made it slow to compare brands, diagnose operational weak spots, or isolate how much of a store's total GMV was driven by content vs. organic catalog listings.",
      objectives: [
        "Automate data ingestion from TikTok Shop Seller Center API into Google BigQuery to replace repetitive manual exports.",
        "Segment performance across 3 distinct account types: Official, Marketing, and Affiliate.",
        "Standardize core e-commerce metrics (GPM, Product CTR, CTOR, AOV, conversion, content share of GMV, GMV per live hour) using SUM ÷ SUM logic directly on the data source.",
        "Build a top-down Looker Studio dashboard scaling from portfolio-level (22 brands) to minute-by-minute session telemetry and video asset.",
        "Deliver action-oriented decision matrices, including the Scale/Fix/Stop video bubble chart and Account Slots upsell views.",
      ],
    },
    datasetScopeDetails: {
      standards:
        "Ingesting 3 months of comprehensive TikTok Shop telemetry (September–November 2026) across 22 active client brands. Dataset covers 321,000+ LIVE broadcast sessions and 519,000+ short videos (including 503K affiliate videos) with strict data hygiene: explicit handling of unclassified rows (N/A / Unknown), preservation of nulls and 'No data from previous month' flags without zero-filling gaps, and full lineage tracing back to source tables.",
      statChips: [
        "10M+ Orders Tracked",
        "20+ Active Brands",
        "300K+ LIVE Sessions",
        "500K+ Videos Analyzed",
        "3 Core Data Mart Tables",
        "Sep–Nov 2026",
      ],
    },
    methodologyExecution: [
      {
        step: "01",
        title: "Requirements to Data Spec",
        description:
          "Translated the Brand Growth team's commercial requirements into analytical datasets and metrics, mapped directly to Seller Center sources (SC1 LIVE sessions, SC2 LIVE daily stats, SC3 video performance).",
      },
      {
        step: "02",
        title: "BigQuery API Data Mart",
        description:
          "Loaded TikTok Shop API data into three analytics tables at distinct grains (daily shop level, daily video level, LIVE session-by-minute level), separating raw staging from transformation layers with automated daily batch ingestion at 07:00 WIB.",
      },
      {
        step: "03",
        title: "Account Classification Logic",
        description:
          "Tagged each account as Official, Marketing, or Affiliate so seller-operated and affiliate performance can be cleanly separated and compared. Handled unclassified rows (N/A, Unknown) explicitly instead of dropping them.",
      },
      {
        step: "04",
        title: "Standardized Metric Layer",
        description:
          "Defined calculated fields once on the data source: GPM (GMV ÷ views × 1,000), Product CTR, CTOR (orders ÷ clicks), AOV, GMV per live hour, content share of GMV, and month-on-month change using SUM ÷ SUM logic so totals reconcile exactly with Seller Center.",
      },
      {
        step: "05",
        title: "Looker Studio Dashboard Build",
        description:
          "Engineered KPI scorecards with sparklines, channel contribution trends, conditional-format brand-by-month GMV pivots, LIVE vs Video funnel benchmarks, session pickers with cross-filtering, and the Scale/Fix/Stop bubble chart.",
      },
      {
        step: "06",
        title: "Data Quality & Honest Handling",
        description:
          "Surfaced 'null' and 'No data from previous month' rather than filling gaps with zeros, keeping granular account-level detail tables so headline numbers remain transparently auditable to source rows.",
      },
      {
        step: "07",
        title: "Usability & Color Coding",
        description:
          "Built consistent page headers, unified color coding (blue for LIVE, orange for Video), and drill-down tables so growth leads can navigate from portfolio-wide views down to a single session or video in clicks.",
      },
      {
        step: "08",
        title: "Scalable Multi-Brand Rollout",
        description:
          "Piloted with KAO Indonesia as the initial deep-dive benchmark, with architecture designed to repeat across all 22 brands, longer rolling historical windows, and cross-brand competitor benchmark layers.",
      },
    ],
    keyNumbers: [
      "20+ active brand clients covered in unified dashboard",
      "300K+ LIVE sessions & 500K+ videos analyzed (500K+ from affiliates)",
      "10M+ total orders tracked across LIVE, Video, and Product Card channels",
      "3 months of history (Sep–Nov 2026) with month-on-month comparison",
      "3 core data mart tables (daily shop analytics, daily video, LIVE session-by-minute)",
      "Granular multi-grain drill-down from brand to account type to session to minute",
      "3 account types tracked (Official, Marketing, Affiliate)",
      "Standardized metrics: GPM, Product CTR, CTOR, AOV, conversion, content share of GMV",
    ],
    workDone: [
      "Requirements to data spec: Translated the Brand Growth team's URD into datasets and metrics, mapped to Seller Center sources (SC1 LIVE sessions, SC2 LIVE daily stats, SC3 video performance).",
      "API data mart: Loaded TikTok Shop API data into three analytics tables at different grains (daily shop level, daily video level, LIVE session-by-minute level), keeping raw data separate from metrics with scheduled automated ingestion.",
      "Account classification: Tagged each account as Official, Marketing, or Affiliate so seller-operated and affiliate performance can be separated and compared, handling unclassified rows explicitly.",
      "Metric layer: Defined calculated fields once on the data source: GPM (GMV ÷ views × 1,000), Product CTR, CTOR (orders ÷ clicks), AOV, GMV per live hour, content share of shop GMV, and month-on-month change computed as SUM ÷ SUM.",
      "Dashboard build (Looker Studio): Built KPI scorecards with sparklines, channel contribution heatmaps, stacked daily GMV charts, LIVE vs Video funnels, session cross-filtering, and the scale/fix/stop bubble chart.",
      "Data quality handling: Preserved 'null' and 'No data from previous month' rather than filling gaps with zeros, retaining account-level audit tables.",
      "Usability: Established consistent page headers, blue/orange color coding for LIVE vs Video, and interactive drill-down tables.",
      "Rollout: Piloted with KAO Indonesia as the deep-dive benchmark, designed to scale across all 22 brands with competitor benchmark integration.",
    ],
    keyFindings: {
      quantitative: [
        {
          title: "Content Drives Over 50% of Shop Sales & Orders",
          desc: "For anchor accounts like Brand Alpha, content (LIVE + Video) generated 50%+ of total shop volume, demonstrating that organic product cards alone capture less than half of commercial conversion potential.",
        },
        {
          title: "LIVE Funnel Efficiency Outpaces Video CTR by ~9.5×",
          desc: "LIVE converted views to product clicks significantly better than short video (~7% vs ~0.7%) while click-to-order rate remained comparable (~9%), proving that product click-through is the primary bottleneck for video monetization.",
        },
        {
          title: "Account Slot Segmentation Reveals Growth Upside",
          desc: "Splitting revenue across Official, Marketing, and Affiliate accounts identified stores underutilizing their 5 allowed marketing accounts, creating clear commercial cases for account-slot expansion.",
        },
      ],
      recommendations: [
        "Focus creative iteration on the video-to-product click step (hooks and product badges) to close the 9.5× CTR gap with LIVE.",
        "Pitch additional marketing-account setups to clients with unassigned account slots based on affiliate-vs-official benchmark data.",
        "Maintain SUM ÷ SUM ratio calculations on the BigQuery data source to prevent metric drift across custom date selections.",
        "Leverage the Scale/Fix/Stop bubble chart weekly to prune underperforming creator affiliate content and allocate ad spend to high-CTOR videos.",
      ],
    },
    keyLearnings:
      "Replaced manual, account-by-account exports with one consolidated dashboard that covers 22 brands, so the growth team can rank brands and spot weak spots in minutes instead of building views by hand (saving 15+ hours weekly).\n\nMade the content story visible: For KAO, the dashboard shows content (LIVE + Video) at about 54% of shop GMV, and that LIVE converts views to clicks far better than video (Product CTR 6.74% vs 0.71%) while click-to-order is similar (about 9%), pinpointing the video-to-product click step as the lever to fix.\n\nSplit GMV by Official, Marketing, and Affiliate accounts, showing how much comes from brand-owned vs creator-driven content and supporting account-slot upsell conversations.\n\nLearning 1, one grain per question: Separating daily, video-level, and session-minute tables let each dashboard section stay fast and accurate.\n\nLearning 2, define metrics once: SUM ÷ SUM calculated fields on the data source kept every page consistent and reconcilable with Seller Center.\n\nLearning 3, show gaps honestly: Keeping nulls and 'no data' visible, along with drill-down audit tables, built stakeholder trust.\n\nLearning 4, design for decisions: Charts like the scale/fix/stop bubble plot and top-contributors table are built to answer 'what should we do next', not just 'what happened'.",
        codeSnippet: {
      language: "sql",
      title: "tiktok_shop_content_performance_mart.sql",
      subtitle: "Google BigQuery Data Mart: Unified Aggregation for LIVE, Video, and Shop Performance with Ratio Logic",
      description:
        "Production BigQuery SQL query modeling omnichannel TikTok Shop telemetry, unifying LIVE broadcast sessions, daily video performance, product-card surfaces, and affiliate creator attribution into an optimized analytical mart.",
      code: `WITH
brand AS (
  SELECT shop_id, ANY_VALUE(shop_name) AS brand
  FROM \`dept-bi-operations.fas_L2.kalo_intelligence_shop_rank\`
  GROUP BY shop_id
),

ca AS (
  SELECT
    username,
    creator_user_name,
    creator_author_type
  FROM \`dept-bi-operations.fas_L2.fas_tiktok_video_daily\`
  QUALIFY ROW_NUMBER() OVER (
    PARTITION BY username
    ORDER BY date DESC
  ) = 1
),

minutes AS (
  SELECT * EXCEPT (rn)
  FROM (
    SELECT
      t.*,
      ROW_NUMBER() OVER (
        PARTITION BY store_id, live_id, start_time
        ORDER BY ingested_at DESC
      ) AS rn
    FROM \`dept-bi-operations.fas_marketplace_tiktok.live_session_minutes\` t
    WHERE live_id IS NOT NULL
  )
  WHERE rn = 1
),

ms AS (
  SELECT
    shop_id,
    live_id,
    SUM(views) AS views,
    SUM(product_impressions) AS product_impressions
  FROM minutes
  GROUP BY shop_id, live_id
),

live_items AS (
  SELECT
    l.shop_id,
    l.date,
    'LIVE' AS content_type,
    IF(ca.creator_author_type = 'AFFILIATE_ACCOUNTS', 'Affiliate', 'Official') AS account_type,
    l.live_id AS content_id,
    CONCAT(
      COALESCE(l.title, 'LIVE'),
      ' · ',
      FORMAT_DATE('%d %b', l.date),
      ' · ',
      COALESCE(l.username, '-')
    ) AS content_label,
    CONCAT(
      IF(EXTRACT(DAYOFWEEK FROM l.date) IN (1, 7), 'Weekend', 'Weekday'),
      ' ',
      FORMAT_DATETIME('%H:00', DATETIME(l.start_time, 'Asia/Jakarta')),
      ' LIVE slot · ',
      COALESCE(l.username, '-')
    ) AS content_group,
    l.username AS account_name,
    l.gmv_amount,
    l.sku_orders AS orders,
    l.items_sold,
    COALESCE(l.views, ms.views) AS views,
    COALESCE(l.product_impressions, ms.product_impressions) AS product_impressions
  FROM \`dept-bi-operations.fas_marketplace_tiktok.live_sessions\` l
  LEFT JOIN ms
    ON ms.shop_id = l.shop_id
    AND ms.live_id = l.live_id
  LEFT JOIN ca
    ON COALESCE(ca.username, ca.creator_user_name) = l.username
),

video_items AS (
  SELECT
    v.shop_id,
    v.date,
    'VIDEO' AS content_type,
    CASE
      WHEN v.creator_author_type = 'AFFILIATE_ACCOUNTS' THEN 'Affiliate'
      WHEN v.creator_author_type IS NOT NULL THEN 'Official'
      ELSE 'Unknown'
    END AS account_type,
    v.video_id AS content_id,
    CONCAT(
      COALESCE(v.title, 'Video'),
      ' · @',
      COALESCE(v.creator_user_name, v.username, '-')
    ) AS content_label,
    COALESCE(v.title, v.video_id) AS content_group,
    COALESCE(v.creator_user_name, v.username) AS account_name,
    v.gmv_amount,
    v.sku_orders AS orders,
    v.items_sold,
    v.views
  FROM \`dept-bi-operations.fas_marketplace_tiktok.shop_video_performance\` v
),

pc_bd AS (
  SELECT
    shop_id,
    date,
    SUM(amount) AS bd_gmv
  FROM \`dept-bi-operations.fas_marketplace_tiktok.shop_performance_breakdown_daily\`
  WHERE metric = 'gmv'
    AND type = 'PRODUCT_CARD'
  GROUP BY shop_id, date
),

pc_sf AS (
  SELECT
    shop_id,
    date,
    SUM(attributed_gmv_amount) AS surface_gmv_amount,
    SUM(product_impressions) AS surface_product_impressions,
    SUM(product_clicks) AS surface_product_clicks,
    SUM(attributed_orders) AS surface_orders,
    SUM(IF(attributed_orders IS NOT NULL, product_clicks, NULL)) AS surface_clicks_with_orders,
    SUM(attributed_sku_orders) AS sku_orders,
    SUM(attributed_sold_items) AS sold_items
  FROM \`dept-bi-operations.fas_marketplace_tiktok.product_performance_daily\`
  WHERE surface = 'seller_product_card'
  GROUP BY shop_id, date
),

pc AS (
  SELECT
    COALESCE(a.shop_id, s.shop_id) AS shop_id,
    COALESCE(a.date, s.date) AS date,
    a.bd_gmv,
    s.* EXCEPT (shop_id, date),
    CASE
      WHEN a.bd_gmv IS NULL THEN s.surface_gmv_amount
      WHEN s.surface_gmv_amount IS NULL THEN a.bd_gmv
      ELSE LEAST(a.bd_gmv, s.surface_gmv_amount)
    END AS official_gmv,
    COALESCE(a.bd_gmv, s.surface_gmv_amount) AS total_gmv
  FROM pc_bd a
  FULL OUTER JOIN pc_sf s
    ON a.shop_id = s.shop_id
    AND a.date = s.date
),

known AS (
  SELECT
    shop_id,
    date,
    SUM(gmv) AS known_gmv_amount
  FROM (
    SELECT shop_id, date, gmv_amount AS gmv
    FROM live_items

    UNION ALL

    SELECT shop_id, date, gmv_amount AS gmv
    FROM video_items

    UNION ALL

    SELECT shop_id, date, total_gmv AS gmv
    FROM pc
  )
  GROUP BY shop_id, date
),

other_d AS (
  SELECT
    sh.shop_id,
    sh.date,
    GREATEST(
      SUM(sh.gmv_amount) - COALESCE(ANY_VALUE(k.known_gmv_amount), 0),
      0
    ) AS gmv_amount
  FROM \`dept-bi-operations.fas_marketplace_tiktok.shop_performance_daily\` sh
  LEFT JOIN known k
    ON k.shop_id = sh.shop_id
    AND k.date = sh.date
  GROUP BY sh.shop_id, sh.date
),

surf AS (
  SELECT
    shop_id,
    date,
    IF(surface IN ('seller_live', 'affiliate_live'), 'LIVE', 'VIDEO') AS content_type,
    IF(surface LIKE 'seller_%', 'Official', 'Affiliate') AS account_type,
    SUM(COALESCE(
      attributed_gmv_amount,
      live_attributed_gmv_amount,
      attributed_video_gmv_amount
    )) AS surface_gmv_amount,
    SUM(product_impressions) AS surface_product_impressions,
    SUM(product_clicks) AS surface_product_clicks,
    SUM(attributed_orders) AS surface_orders,
    SUM(IF(attributed_orders IS NOT NULL, product_clicks, NULL)) AS surface_clicks_with_orders
  FROM \`dept-bi-operations.fas_marketplace_tiktok.product_performance_daily\`
  WHERE surface IN (
    'seller_live',
    'seller_video',
    'affiliate_live',
    'affiliate_video'
  )
  GROUP BY shop_id, date, content_type, account_type
),

-- ==========================================
-- COMBINE ALL CONTENT DATA
-- ==========================================

final_data AS (

  -- LIVE (per sesi)
  SELECT
    i.shop_id,
    b.brand,
    i.date,
    i.content_type,
    i.account_type,
    i.content_id,
    i.content_label,
    i.content_group,
    i.account_name,
    i.gmv_amount,
    i.orders,
    i.items_sold,
    i.views,
    IF(i.views IS NOT NULL, i.gmv_amount, NULL) AS gmv_with_views,
    IF(
      i.views IS NOT NULL AND i.product_impressions IS NOT NULL,
      i.views,
      NULL
    ) AS funnel_views,
    IF(
      i.views IS NOT NULL AND i.product_impressions IS NOT NULL,
      i.product_impressions,
      NULL
    ) AS funnel_product_impressions,
    CAST(NULL AS NUMERIC) AS surface_gmv_amount,
    CAST(NULL AS NUMERIC) AS surface_product_impressions,
    CAST(NULL AS NUMERIC) AS surface_product_clicks,
    CAST(NULL AS NUMERIC) AS surface_orders,
    CAST(NULL AS NUMERIC) AS surface_clicks_with_orders
  FROM live_items i
  LEFT JOIN brand b
    ON b.shop_id = i.shop_id

  UNION ALL

  -- VIDEO (per video per hari)
  SELECT
    i.shop_id,
    b.brand,
    i.date,
    i.content_type,
    i.account_type,
    i.content_id,
    i.content_label,
    i.content_group,
    i.account_name,
    i.gmv_amount,
    i.orders,
    i.items_sold,
    i.views,
    IF(i.views IS NOT NULL, i.gmv_amount, NULL) AS gmv_with_views,
    CAST(NULL AS INT64) AS funnel_views,
    CAST(NULL AS INT64) AS funnel_product_impressions,
    CAST(NULL AS NUMERIC) AS surface_gmv_amount,
    CAST(NULL AS NUMERIC) AS surface_product_impressions,
    CAST(NULL AS NUMERIC) AS surface_product_clicks,
    CAST(NULL AS NUMERIC) AS surface_orders,
    CAST(NULL AS NUMERIC) AS surface_clicks_with_orders
  FROM video_items i
  LEFT JOIN brand b
    ON b.shop_id = i.shop_id

  UNION ALL

  -- PRODUCT_CARD Official
  SELECT
    p.shop_id,
    b.brand,
    p.date,
    'PRODUCT_CARD' AS content_type,
    'Official' AS account_type,
    CAST(NULL AS STRING) AS content_id,
    CAST(NULL AS STRING) AS content_label,
    CAST(NULL AS STRING) AS content_group,
    CAST(NULL AS STRING) AS account_name,
    p.official_gmv AS gmv_amount,
    p.sku_orders AS orders,
    p.sold_items AS items_sold,
    CAST(NULL AS INT64) AS views,
    CAST(NULL AS NUMERIC) AS gmv_with_views,
    CAST(NULL AS INT64) AS funnel_views,
    CAST(NULL AS INT64) AS funnel_product_impressions,
    p.surface_gmv_amount,
    p.surface_product_impressions,
    p.surface_product_clicks,
    p.surface_orders,
    p.surface_clicks_with_orders
  FROM pc p
  LEFT JOIN brand b
    ON b.shop_id = p.shop_id
  WHERE p.official_gmv IS NOT NULL

  UNION ALL

  -- PRODUCT_CARD Unknown (sisa selain Official)
  SELECT
    p.shop_id,
    b.brand,
    p.date,
    'PRODUCT_CARD' AS content_type,
    'Unknown' AS account_type,
    CAST(NULL AS STRING) AS content_id,
    CAST(NULL AS STRING) AS content_label,
    CAST(NULL AS STRING) AS content_group,
    CAST(NULL AS STRING) AS account_name,
    GREATEST(
      COALESCE(p.bd_gmv, 0) - COALESCE(p.official_gmv, 0),
      0
    ) AS gmv_amount,
    CAST(NULL AS NUMERIC) AS orders,
    CAST(NULL AS NUMERIC) AS items_sold,
    CAST(NULL AS INT64) AS views,
    CAST(NULL AS NUMERIC) AS gmv_with_views,
    CAST(NULL AS INT64) AS funnel_views,
    CAST(NULL AS INT64) AS funnel_product_impressions,
    CAST(NULL AS NUMERIC) AS surface_gmv_amount,
    CAST(NULL AS NUMERIC) AS surface_product_impressions,
    CAST(NULL AS NUMERIC) AS surface_product_clicks,
    CAST(NULL AS NUMERIC) AS surface_orders,
    CAST(NULL AS NUMERIC) AS surface_clicks_with_orders
  FROM pc p
  LEFT JOIN brand b
    ON b.shop_id = p.shop_id
  WHERE GREATEST(
    COALESCE(p.bd_gmv, 0) - COALESCE(p.official_gmv, 0),
    0
  ) > 0

  UNION ALL

  -- OTHER
  SELECT
    o.shop_id,
    b.brand,
    o.date,
    'OTHER' AS content_type,
    'N/A' AS account_type,
    CAST(NULL AS STRING) AS content_id,
    CAST(NULL AS STRING) AS content_label,
    CAST(NULL AS STRING) AS content_group,
    CAST(NULL AS STRING) AS account_name,
    o.gmv_amount,
    CAST(NULL AS NUMERIC) AS orders,
    CAST(NULL AS NUMERIC) AS items_sold,
    CAST(NULL AS INT64) AS views,
    CAST(NULL AS NUMERIC) AS gmv_with_views,
    CAST(NULL AS INT64) AS funnel_views,
    CAST(NULL AS INT64) AS funnel_product_impressions,
    CAST(NULL AS NUMERIC) AS surface_gmv_amount,
    CAST(NULL AS NUMERIC) AS surface_product_impressions,
    CAST(NULL AS NUMERIC) AS surface_product_clicks,
    CAST(NULL AS NUMERIC) AS surface_orders,
    CAST(NULL AS NUMERIC) AS surface_clicks_with_orders
  FROM other_d o
  LEFT JOIN brand b
    ON b.shop_id = o.shop_id

  UNION ALL

  -- SURFACE LIVE / VIDEO
  SELECT
    s.shop_id,
    b.brand,
    s.date,
    s.content_type,
    s.account_type,
    CAST(NULL AS STRING) AS content_id,
    CAST(NULL AS STRING) AS content_label,
    CAST(NULL AS STRING) AS content_group,
    CAST(NULL AS STRING) AS account_name,
    CAST(NULL AS NUMERIC) AS gmv_amount,
    CAST(NULL AS NUMERIC) AS orders,
    CAST(NULL AS NUMERIC) AS items_sold,
    CAST(NULL AS INT64) AS views,
    CAST(NULL AS NUMERIC) AS gmv_with_views,
    CAST(NULL AS INT64) AS funnel_views,
    CAST(NULL AS INT64) AS funnel_product_impressions,
    s.surface_gmv_amount,
    s.surface_product_impressions,
    s.surface_product_clicks,
    s.surface_orders,
    s.surface_clicks_with_orders
  FROM surf s
  LEFT JOIN brand b
    ON b.shop_id = s.shop_id
)

-- ==========================================
-- FINAL SELECT: SPLIT METRICS BY CONTENT TYPE
-- ==========================================

SELECT
  shop_id,
  brand,
  date,
  content_type,
  account_type,
  content_id,
  content_label,
  content_group,
  account_name,

  -- GMV
  CASE WHEN content_type = 'LIVE' THEN gmv_amount END AS gmv_live,
  CASE WHEN content_type = 'VIDEO' THEN gmv_amount END AS gmv_video,
  CASE WHEN content_type = 'PRODUCT_CARD' THEN gmv_amount END AS gmv_product_card,
  CASE WHEN content_type = 'OTHER' THEN gmv_amount END AS gmv_other,

  -- ORDERS
  CASE WHEN content_type = 'LIVE' THEN orders END AS orders_live,
  CASE WHEN content_type = 'VIDEO' THEN orders END AS orders_video,
  CASE WHEN content_type = 'PRODUCT_CARD' THEN orders END AS orders_product_card,

  -- ITEMS SOLD
  CASE WHEN content_type = 'LIVE' THEN items_sold END AS items_sold_live,
  CASE WHEN content_type = 'VIDEO' THEN items_sold END AS items_sold_video,
  CASE WHEN content_type = 'PRODUCT_CARD' THEN items_sold END AS items_sold_product_card,

  -- VIEWS
  CASE WHEN content_type = 'LIVE' THEN views END AS views_live,
  CASE WHEN content_type = 'VIDEO' THEN views END AS views_video,

  -- GMV WITH VIEWS
  CASE WHEN content_type = 'LIVE' THEN gmv_with_views END AS gmv_live_with_views,
  CASE WHEN content_type = 'VIDEO' THEN gmv_with_views END AS gmv_video_with_views,

  -- FUNNEL VIEWS
  CASE WHEN content_type = 'LIVE' THEN funnel_views END AS funnel_views_live,
  CASE WHEN content_type = 'LIVE' THEN funnel_product_impressions END AS funnel_product_impressions_live,

  -- SURFACE GMV
  CASE WHEN content_type = 'LIVE' THEN surface_gmv_amount END AS surface_gmv_live,
  CASE WHEN content_type = 'VIDEO' THEN surface_gmv_amount END AS surface_gmv_video,
  CASE WHEN content_type = 'PRODUCT_CARD' THEN surface_gmv_amount END AS surface_gmv_product_card,

  -- SURFACE PRODUCT IMPRESSIONS
  CASE WHEN content_type = 'LIVE' THEN surface_product_impressions END AS surface_product_impressions_live,
  CASE WHEN content_type = 'VIDEO' THEN surface_product_impressions END AS surface_product_impressions_video,
  CASE WHEN content_type = 'PRODUCT_CARD' THEN surface_product_impressions END AS surface_product_impressions_product_card,

  -- SURFACE PRODUCT CLICKS
  CASE WHEN content_type = 'LIVE' THEN surface_product_clicks END AS surface_product_clicks_live,
  CASE WHEN content_type = 'VIDEO' THEN surface_product_clicks END AS surface_product_clicks_video,
  CASE WHEN content_type = 'PRODUCT_CARD' THEN surface_product_clicks END AS surface_product_clicks_product_card,

  -- SURFACE ORDERS
  CASE WHEN content_type = 'LIVE' THEN surface_orders END AS surface_orders_live,
  CASE WHEN content_type = 'VIDEO' THEN surface_orders END AS surface_orders_video,
  CASE WHEN content_type = 'PRODUCT_CARD' THEN surface_orders END AS surface_orders_product_card,

  -- SURFACE CLICKS WITH ORDERS
  CASE WHEN content_type = 'LIVE' THEN surface_clicks_with_orders END AS surface_clicks_with_orders_live,
  CASE WHEN content_type = 'VIDEO' THEN surface_clicks_with_orders END AS surface_clicks_with_orders_video,
  CASE WHEN content_type = 'PRODUCT_CARD' THEN surface_clicks_with_orders END AS surface_clicks_with_orders_product_card

FROM final_data;`,
    },
    gallery: [
      {
        title: "General Overview: Portfolio Health & Channel Contribution",
        caption: "Portfolio-level performance across 22 active client brands tracking GMV, orders, visitors, AOV, and conversion rate, alongside monthly GMV contribution across LIVE, Video, and Product Card.",
        badge: "Portfolio Overview",
        image: "/images/projects/tiktok-shop/01-general-overview.svg",
      },
      {
        title: "GMV Breakdown by Brand: Channel Heatmap Matrix",
        caption: "Monthly pivot matrix breaking down total GMV by LIVE, Video, and Product Card for every client brand with conditional formatting to spotlight rapid growth and channel shifts.",
        badge: "Brand Benchmark",
        image: "/images/projects/tiktok-shop/02-gmv-breakdown-by-brand.svg",
      },
      {
        title: "Brand Deep-Dive: Account Mix & Daily GMV Trend",
        caption: "Single-brand operational audit showing daily GMV trends split by LIVE vs Video, overall content contribution share (53.9%), and revenue breakdown across Official and Affiliate accounts.",
        badge: "Brand Deep-Dive",
        image: "/images/projects/tiktok-shop/03-brand-deep-dive.svg",
      },
      {
        title: "Funnel Step Rates & Channel Efficiency (LIVE vs Video)",
        caption: "Conversion funnel comparison demonstrating LIVE's 9.5× higher Product CTR (6.74% vs 0.71%) with comparable click-to-order rates (~9%), paired with a top-contributor content audit table.",
        badge: "Funnel & Efficiency",
        image: "/images/projects/tiktok-shop/04-funnel-and-efficiency.svg",
      },
      {
        title: "LIVE Deep-Dive: Session Selector & Creator Leaderboard",
        caption: "Granular session filter allowing account managers to isolate broadcast sessions by date, host account, and duration, correlated with creator-level GMV, orders, and GPM rankings.",
        badge: "LIVE Operations",
        image: "/images/projects/tiktok-shop/05-live-deep-dive.svg",
      },
      {
        title: "LIVE Minute-by-Minute Session Telemetry",
        caption: "Time-series stream telemetry charting concurrent viewers against minute-by-minute GMV spikes, isolating which product pitches and flash promos triggered immediate basket conversions.",
        badge: "Minute Telemetry",
        image: "/images/projects/tiktok-shop/06-live-minute-by-minute.svg",
      },
      {
        title: "Video Deep-Dive: Scale / Fix / Stop Decision Matrix",
        caption: "Action-oriented 4-quadrant bubble chart plotting views vs Product CTR to classify videos into Scale, Fix, or Stop decisions, complemented by a days-since-posting GMV decay curve.",
        badge: "Video Strategy",
        image: "/images/projects/tiktok-shop/07-video-deep-dive.svg",
      },
      {
        title: "Product Sold Through Content: Affiliate Attribution",
        caption: "Catalog-level revenue attribution detailing top SKUs sold via creator affiliate videos versus official live sessions, guiding inventory allocation and commission tiering.",
        badge: "Catalog Attribution",
        image: "/images/projects/tiktok-shop/08-product-sold-through-content.svg",
      },
    ],
    confidentialityNote:
      "Confidentiality & Demonstration Data Notice: In compliance with non-disclosure agreements (NDA) and commercial data governance, proprietary brand names, revenue figures, and creator identities shown across these dashboards have been sanitized, anonymized, and presented with demonstration/dummy values. The dashboard architectures, analytical frameworks, and operational data mart designs reflect true production implementations.",
  },

  // 4. Customer Address Geocoding Workflow: Adira Finance
  {
    id: 4,
    slug: "customer-address-geocoding-workflow-adira-finance",
    title: "Customer Address Geocoding Workflow",
    subtitle: "Automated batch geocoding & spatial boundary validation pipeline processing 2M+ customer records",
    affiliation: "PT Adira Dinamika Multi Finance, Tbk. · IT Data Science",
    projectType: "Work Project",
    domain: "Geospatial ETL & Data Engineering",
    category: ["Work Projects", "ETL Development & Data Pipelines"],
    year: "2025",
    duration: "Apr 2025 - July 2025",
    role: "Data Scientist",
    primaryStack: "Python, Dataiku & ArcGIS API",
    featured: true,
    tools: [
      "Python",
      "Dataiku",
      "Geopy",
      "ArcGIS API",
      "GeoPandas",
      "Shapely",
      "ETL Pipelines"
    ],
    coverImage: "/images/projects/geocoding-workflow-cover.svg",
    shortDescription:
      "An automated geocoding pipeline that converts 2M+ raw customer addresses into validated coordinates, using multi-API fallback and point-in-polygon checks so every location matches the correct administrative boundary.",
    links: {
      report: "https://drive.google.com/file/d/1YuzCh5PoxPUFlEkseRLRBh1vV7_ON8hu/view",
      dashboard: "",
      github: "",
    },
    overview:
      "Adira Finance needed more accurate and reliable customer location data to support operational decisions, territory analysis, and location-based business strategies. Raw customer addresses were inconsistent and often unusable for spatial analysis without heavy manual work.\n\nThis project transformed raw addresses into validated geographic coordinates through an automated workflow. It combines geocoding engines, geospatial validation logic, and ETL mechanisms to improve data quality and enable more accurate regional insights for downstream analytics and reporting.",
    keyNumbers: [
      "2,000,000+ customer records processed & validated",
      "~40% reduction in manual data processing time",
      "2 geocoding engines (Geopy & ArcGIS) with auto-fallback",
      "Point-in-polygon validation against administrative boundaries",
      "Comprehensive data quality audit logging in Dataiku",
    ],
    workDone: [
      "Cleaned and standardized raw customer address fields to make them ingestion-ready for geocoding algorithms, reducing manual data preparation time by ~40%.",
      "Engineered an automated batch geocoding pipeline within Dataiku, orchestrating coordinate generation across 2,000,000+ customer records.",
      "Authored Python scripts to automate batch execution, manage API rate limits, and dynamically switch to a secondary fallback API when needed.",
      "Implemented geometric boundary validation using GeoPandas and Shapely to verify each coordinate strictly falls within the designated administrative boundary polygon.",
      "Developed comprehensive audit logging frameworks to track geocoding failures, coordinate discrepancies, and anomaly records for auditability.",
      "Authored detailed technical workflow documentation covering API specifications, data lineages, and validation logic to guarantee long-term maintainability.",
    ],
    keyLearnings:
      "Cut manual address processing by ~40% and delivered a validated location dataset that is more reliable for territory analysis, operational decisions, and regional reporting.\n\nSpatial validation raised trust in coordinates by checking correctness against administrative boundaries, not just whether a geocoder returned a result.\n\nScale: Gained hands-on experience with large-scale geospatial datasets and production-style ETL pipelines.\n\nResilience: Learned to integrate multiple geocoding APIs and design rate-limit handling and fallback logic so the pipeline keeps running reliably.\n\nGeometry skills: Strengthened my use of GeoPandas and Shapely for boundary checking and geometry operations.\n\nMaintainability: Building logging and documentation into the workflow made it easier to monitor, audit, and hand over, with minimal manual intervention.",
    codeSnippet: {
      language: "python",
      title: "batch_geocoding_adira_pipeline.py",
      subtitle: "Automated address normalization, batch geocoding with ArcGIS rate limiting, and administrative boundary validation",
      description:
        "Production Python pipeline executing chunked batch processing, regular-expression address sanitization, geocoding rate throttling, and bounding-box validation against regional provincial coordinates.",
      code: `import pandas as pd
import time
from geopy.geocoders import ArcGIS
from geopy.extra.rate_limiter import RateLimiter
from tqdm import tqdm
import warnings
import json
import math

warnings.filterwarnings("ignore")

# --- CONFIG ---
CHUNK_SIZE = 100
INPUT_FILE = "TBL_CUSTOMER_TAGIH.csv"
OUTPUT_FILE = "TBL_GEOCODING_TAGIH.csv"
PROVINSI_FILE = "koordinat.json"

# --- SETUP GEOLOCATOR ---
geolocator = ArcGIS(timeout=300)
geocode = RateLimiter(geolocator.geocode, min_delay_seconds=1, error_wait_seconds=5.0)

# --- LOAD PROVINSI KOORDINAT DEFAULT ---
with open(PROVINSI_FILE, "r", encoding="utf-8") as f:
    map_file = json.load(f)

PROVINSI_COORDINATES = {
    item['name'].strip().upper(): {
        "default": item['default'],
        "lat_min": item['lat_min'],
        "lat_max": item['lat_max'],
        "lon_min": item['lon_min'],
        "lon_max": item['lon_max']
    }
    for item in map_file['provinsi']
}

# --- HELPER FUNCTIONS ---
def get_default_latlon(provinsi):
    prov = str(provinsi).strip().upper()
    if prov in PROVINSI_COORDINATES:
        return PROVINSI_COORDINATES[prov]["default"]
    raise ValueError(f"Provinsi tidak dikenali: {prov}")

def is_within_bounds(lat, lon, provinsi):
    prov = str(provinsi).strip().upper()
    if prov in PROVINSI_COORDINATES:
        bounds = PROVINSI_COORDINATES[prov]
        return (bounds["lat_min"] <= lat <= bounds["lat_max"]) and (bounds["lon_min"] <= lon <= bounds["lon_max"])
    return False

def get_lat_long(address, provinsi):
    try:
        location = geocode(address)
        if location:
            lat, lon = location.latitude, location.longitude
            if is_within_bounds(lat, lon, provinsi):
                return lat, lon, "Geocoded"
        return *get_default_latlon(provinsi), "Default"
    except Exception:
        return *get_default_latlon(provinsi), "Default"

def clean_and_merge_address(df):
    alamat_components = [
        'ALAMAT_TAGIH', 'RT_RW_TAGIH', 'KEL_TAGIH', 'KEC_TAGIH',
        'KABKOT_TAGIH', 'PROVINSI_TAGIH', 'ZIPCODE_TAGIH'
    ]
    df['ALAMAT_FULL_TAGIH'] = df[alamat_components].astype(str).replace("nan", None).apply(
        lambda row: ', '.join([part for part in row if part not in [None, '', 'nan']]),
        axis=1
    )
    df['NEGARA'] = 'INDONESIA'
    if 'ZIPCODE_TAGIH' in df.columns:
        zipcode_idx = df.columns.get_loc('ZIPCODE_TAGIH')
        negara_col = df.pop('NEGARA')
        df.insert(zipcode_idx + 1, 'NEGARA', negara_col)
    
    df['ALAMAT_FULL_TAGIH'] = df['ALAMAT_FULL_TAGIH'].fillna('')
    df['ALAMAT_FULL_TAGIH'] = df.apply(
        lambda row: row['ALAMAT_FULL_TAGIH'] + ', ' + row['NEGARA'] if row['ALAMAT_FULL_TAGIH'].strip() != '' else row['ALAMAT_FULL_TAGIH'],
        axis=1
    )
    df["ALAMAT_FULL_TAGIH"] = df["ALAMAT_FULL_TAGIH"].str.replace(r"\\b0+/0+\\b", "", regex=True)
    df["ALAMAT_FULL_TAGIH"] = df["ALAMAT_FULL_TAGIH"].str.replace(r"(\\d)(?=[A-Z])", r"\\1, ", regex=True)
    df["ALAMAT_FULL_TAGIH"] = df["ALAMAT_FULL_TAGIH"].str.replace(r"([A-Z]{2,})(?=[A-Z][a-z])", r"\\1, ", regex=True)
    df["ALAMAT_FULL_TAGIH"] = df["ALAMAT_FULL_TAGIH"].str.replace(r"(?<!\\w)\\.(?!\\w)", "", regex=True)
    df["ALAMAT_FULL_TAGIH"] = df["ALAMAT_FULL_TAGIH"].str.replace(r"\\s*,\\s*", ", ", regex=True)
    df["ALAMAT_FULL_TAGIH"] = df["ALAMAT_FULL_TAGIH"].str.replace(r"(,\\s*){2,}", ", ", regex=True)
    df["ALAMAT_FULL_TAGIH"] = df["ALAMAT_FULL_TAGIH"].str.replace(r"\\s{2,}", " ", regex=True)
    df["ALAMAT_FULL_TAGIH"] = df["ALAMAT_FULL_TAGIH"].str.strip(" ,.")
    df["ALAMAT_FULL_TAGIH"] = df["ALAMAT_FULL_TAGIH"].str.replace(r"[^\\x00-\\x7F]", "", regex=True)
    return df

# --- MAIN EXECUTION ---
df_iter = pd.read_csv(INPUT_FILE, chunksize=CHUNK_SIZE)
all_results = []
total_rows = sum(1 for _ in open(INPUT_FILE, encoding="utf-8")) - 1
total_chunks = math.ceil(total_rows / CHUNK_SIZE)

for i, chunk in enumerate(df_iter, start=1):
    print(f"\\nProcessing chunk {i}/{total_chunks} ({len(chunk)} rows)")
    # 1. Processing & Normalizing Address
    chunk = clean_and_merge_address(chunk)
    
    # 2. Batch Geocoding with Rate Limiting & Boundary Check
    latitudes, longitudes, statuses = [], [], []
    for _, row in tqdm(chunk.iterrows(), total=len(chunk), desc="Geocoding", leave=False):
        lat, lon, status = get_lat_long(row['ALAMAT_FULL_TAGIH'], row['PROVINSI_TAGIH'])
        latitudes.append(lat)
        longitudes.append(lon)
        statuses.append(status)
        
    chunk['LATITUDE_TAGIH'] = latitudes
    chunk['LONGITUDE_TAGIH'] = longitudes
    chunk['GEOCODE_STATUS'] = statuses
    all_results.append(chunk)

# 3. Consolidate and Export Final Master Dataset
final_df = pd.concat(all_results, ignore_index=True)
final_df.to_csv(OUTPUT_FILE, index=False)
print(f"\\n✓ Successfully geocoded and saved to {OUTPUT_FILE}")`,
    },
    gallery: [
      {
        title: "The Process — End-to-End Batch Geocoding Workflow",
        image: "/images/projects/adira-geocoding-cover.png",
      },
      {
        title: "Hierarchical Stacking & Merge Strategy (Provinsi → Pulau → All Customer)",
        image: "/images/projects/adira-geocoding-stacking-tree.png",
      },
    ],
  },

  // 2. E-Commerce Data Quality Analysis (FEATURED)
  {
    id: 5,
    slug: "e-commerce-data-quality-analysis",
    title: "E-commerce Data Quality Improvement: SQL Cleaning Pipeline in BigQuery",
    subtitle: "BigQuery SQL data cleaning pipeline transforming scraped multi-channel e-commerce data into a clean production table",
    affiliation: "E-Commerce Data Quality Case Study",
    projectType: "Data Engineering / Data Quality: SQL Data Cleaning and Transformation (Case Study)",
    domain: "Data Quality & Engineering",
    category: "Data Science & Analysis",
    year: "2024",
    role: "Data Analyst",
    primaryStack: "SQL & BigQuery",
    tools: ["Google BigQuery", "SQL"],
    featured: true,
    coverImage: "/images/projects/data-quality/01-check-data-values.jpg",
    shortDescription:
      "A BigQuery SQL pipeline that turns messy scraped marketplace data (text prices, 'K' counts, wrong discounts, duplicates) into a clean table with correct data types.",
    links: {
      report: "https://drive.google.com/file/d/1ixQLccls-8G36uJQ0qjbb4Y-sukA9cnn/view?usp=sharing",
      dashboard: "",
      github: "",
    },
    overview:
      "The task was to inspect and clean e-commerce product data scraped from several marketplaces (Shopee, Tokopedia, Lazada, Blibli, TikTok), then load it into a production-ready table with a plan, SQL scripts, and a before/after comparison. The raw data (94 rows, 7 columns) had five main problems: numbers and dates stored as strings, rows with all-zero values, inconsistent formats ('Rp', 'K', '%', negative discounts), discounts that did not match sale and original prices, and duplicate records.",
    keyNumbers: [
      "94 raw rows, 7 columns, 5 marketplaces",
      "5 data-quality problem types resolved",
      "3 output tables: data_transformed & final_data",
      "9 all-zero rows found before cleaning, 0 after",
      "0.5 percentage points discount tolerance",
      "Data types fixed: 3 columns to INTEGER, 1 to DATE",
    ],
    workDone: [
      "Data Understanding: Reviewed fields and loaded ScrapDate as STRING because BigQuery rejected it as DATE on import.",
      "Data Checks (SQL): Checked duplicates with ROW_NUMBER(), missing values with COUNTIF(), and identified 9 zero-value rows.",
      "Cleaning Plan: Wrote a plan for data types, zero rows, format standardization, discount validation, and duplicates.",
      "Transformation (data_transformed): Cast ScrapDate to DATE, stripped 'Rp', converted 'K' to thousands (2.7K to 2700), removed '%' and '-' from Discount, and filtered header rows that were loaded as data.",
      "Discount Validation: Recomputed discount from sale and original price and replaced the recorded value when the gap exceeded 0.5 points (e.g. 10 became 9.09%).",
      "Final Cleaning (final_data): Removed duplicates and zero rows to materialize the clean analytical table.",
      "Validation: Showed before/after audit for data types, duplicates, zero values, SalesCount, prices, and discounts.",
    ],
    keyLearnings:
      "Impact: Produced an analysis-ready table where prices, sales, and discounts can be summed and compared across marketplaces. Recalculated discounts so reported discounts match actual prices.\n\nKey Learnings:\n1. Run profiling checks (duplicates, nulls, zeros) before writing any transformation.\n2. Write cleaning in stages (check, transform, clean) into separate tables so each step can be audited.\n3. Business rules such as a discount tolerance should be explicit and documented.",
    gallery: [
      {
        title: "Check Data Values: Duplicates, Nulls & Zero Values",
        image: "/images/projects/data-quality/01-check-data-values.jpg",
        badge: "SQL Hygiene Screening",
        caption: "BigQuery SQL screening routine identifying duplicate transaction rows via window functions (ROW_NUMBER), audit of missing values across fields, and zero-value count validation.",
      },
      {
        title: "Data Transformation: Type Casting & Regex Normalization",
        image: "/images/projects/data-quality/02-data-transformation-types-regex.jpg",
        badge: "Data Transformation",
        caption: "Automated parsing pipeline converting string prices with currency prefixes ('Rp') and volume abbreviations ('K') into clean numerical integers and standardized dates via REGEXP_REPLACE.",
      },
      {
        title: "Discount Verification & Automated Recalculation",
        image: "/images/projects/data-quality/03-discount-validation-recalculation.jpg",
        badge: "Discount Verification",
        caption: "Mathematical validation logic recalculating discount percentages when discrepancies exceed 0.5% against original vs sale prices, storing clean audited values in data_transformed.",
      },
      {
        title: "Data Cleaning: Deduplication & Production Mart Export",
        image: "/images/projects/data-quality/04-data-cleaning-final-mart.jpg",
        badge: "Production Final Mart",
        caption: "Final deduplication and anomaly filtering retaining only validated transaction records (nRow = 1, non-zero pricing), materialized into the production analytical table final_data.",
      },
    ],
    codeSnippets: [
      {
        language: "sql",
        title: "1. data_transformed.sql",
        subtitle: "BigQuery SQL · Data Transformation & Discount Validation",
        description:
          "Type casting and regex normalization pipeline parsing string numbers and dates, standardizing currency/volume symbols ('Rp', 'K'), and recalculating discounts when discrepancy exceeds 0.5%.",
        code: `CREATE OR REPLACE TABLE \`main.data_transformed\` AS
WITH data_types AS (
    SELECT 
        ItemId,
        Channel,
        CAST(ScrapDate AS DATE) AS ScrapDate,
        CASE 
            WHEN SalesCount LIKE '%K' 
            THEN CAST(CAST(REGEXP_REPLACE(SalesCount, '[Kk]', '') AS FLOAT64) * 1000 AS INT64)
            ELSE CAST(SalesCount AS INT64) 
        END AS SalesCount,
        CASE 
            WHEN SalePrice LIKE 'Rp%' 
            THEN CAST(REGEXP_REPLACE(SalePrice, '[^0-9]', '') AS INT64) 
            ELSE CAST(SalePrice AS INT64) 
        END AS SalePrice,
        CASE 
            WHEN OriginalPrice LIKE 'Rp%' 
            THEN CAST(REGEXP_REPLACE(OriginalPrice, '[^0-9]', '') AS INT64) 
            ELSE CAST(OriginalPrice AS INT64) 
        END AS OriginalPrice,
        CASE
          WHEN Discount LIKE '-%'
          THEN CAST(REGEXP_REPLACE(Discount, '[%\\\\-]', '') AS FLOAT64)
          ELSE CAST(Discount AS FLOAT64) 
        END AS Discount
    FROM \`main.data\`
    WHERE 
        LOWER(ItemId) != 'itemid'
),

discount_fix AS (
    SELECT *,
           CASE 
               WHEN OriginalPrice <> SalePrice
               THEN ROUND(((OriginalPrice - SalePrice) / OriginalPrice) * 100, 2)
               ELSE 0 
           END AS CorrectDiscount, 
           CASE 
               WHEN ABS(Discount - ((OriginalPrice - SalePrice) / NULLIF(OriginalPrice, 0)) * 100) > 0.5
               THEN TRUE 
               ELSE FALSE 
           END AS NeedsCorrection
    FROM data_types
)

SELECT 
    ItemId,
    Channel,
    ScrapDate,
    SalesCount,  
    SalePrice,
    OriginalPrice,
    CASE 
        WHEN NeedsCorrection THEN CONCAT(CorrectDiscount, '%')
        ELSE CONCAT(Discount, '%')  
    END AS Discount
FROM discount_fix;`,
      },
      {
        language: "sql",
        title: "2. final_data.sql",
        subtitle: "BigQuery SQL · Deduplication & Production Mart Export",
        description:
          "Window function deduplication partitioning by all primary attributes with ROW_NUMBER(), filtering out all-zero anomaly rows, and materializing the clean final_data table.",
        code: `CREATE OR REPLACE TABLE \`main.final_data\` AS
WITH remove_duplicate AS (
  SELECT *,
         ROW_NUMBER() OVER(PARTITION BY ItemId, Channel, SalesCount, SalePrice, OriginalPrice, Discount) AS nRow
  FROM main.data_transformed
),
data_cleaned AS (
  SELECT 
      ItemId,
      Channel,
      ScrapDate,
      SalesCount,
      SalePrice,
      OriginalPrice,
      Discount
  FROM remove_duplicate
  WHERE nRow = 1
    AND SalesCount != 0 
    AND SalePrice != 0 
    AND OriginalPrice != 0 
)
SELECT * FROM data_cleaned;`,
      },
    ],
  },

    // 3. Credit Risk Prediction and Optimization (Home Credit VIX)
  {
    id: 6,
    slug: "credit-risk-prediction",
    title: "Credit Risk Prediction and Optimization: Home Credit Virtual Internship",
    affiliation: "Home Credit Indonesia x Rakamin Academy · Virtual Internship",
    projectType: "Data Science: Machine Learning (Credit Scoring), Virtual Internship Project",
    domain: "Data Science",
    category: ["Work Projects", "Data Science & Analysis"],
    year: "2025",
    role: "Data Scientist (Virtual Internship, Home Credit)",
    duration: "1 Week",
    tools: [
      "Python",
      "Pandas",
      "NumPy",
      "Scikit-learn",
      "XGBoost",
      "Matplotlib",
      "Seaborn",
      "GitHub",
    ],
    coverImage: "/images/projects/credit-risk/08-model-accuracy-comparison.png",
    shortDescription:
      "A credit-scoring project on 300K+ loan applications that cleans the data, segments customers with K-Means, compares three models, and recommends loan-structuring rules such as a 40% loan-to-income cap.",
    links: {
      report: "https://drive.google.com/file/d/1JBKwT93UYEm30oa31xIA-FWjdCI9u4hf/view",
      github: "https://github.com/adeliadeswita/home-credit-risk-modeling",
    },
    overview:
      "Home Credit needs to predict who will repay a loan. Inaccurate scoring rejects creditworthy customers and approves risky ones, while loan terms are not tuned for repayment and credit decisions are hard to explain. The project covered the full workflow on the application dataset: cleaning, EDA, feature engineering, customer segmentation, predictive modeling, and recommendations for loan structure.",
    keyNumbers: [
      "307,511 training rows with 122 features, and 48,744 test rows",
      "3 models compared: Logistic Regression (91.98%), XGBoost (91.90%), Random Forest (92.01%)",
      "3 customer clusters from K-Means (elbow method optimized)",
      "67/33 train/test split",
      "5 income and credit bands from quantile binning",
      "Recommended LTI cap of 40%",
    ],
    workDone: [
      "Business Understanding: Defined goals, three core analytical questions, and prioritized evaluation metrics (accuracy, precision, recall, F1).",
      "Data Cleaning: Dropped redundant MODE/AVG columns (kept median), credit bureau request columns (kept yearly), and low-value columns.",
      "Data Manipulation: Median imputation for numeric columns, 'Not Identified' for categorical, and grouped categories (income type, family status, organization type).",
      "Exploratory Data Analysis: Analyzed correlation heatmap, income vs credit amount, target by car and realty ownership, and age distribution.",
      "Feature Engineering: Quantile binning of income and credit, Label Encoding, and Min-Max scaling.",
      "Clustering: Segmented customers by income, credit amount, and age into three risk profiles using K-Means.",
      "Modeling and Evaluation: Trained and compared three models with precision, recall, and F1 on a 33% test split.",
      "Recommendations: Proposed an LTI cap of 40%, flexible tenures for unstable incomes, and a repayment calendar aligned to salary cycles.",
    ],
    keyLearnings:
      "Impact: Showed the key drivers of repayment (income, credit amount, credit history, employment) and segmented customers into risk groups. Translated models into actions: loan-to-income limits, flexible tenures, salary-aligned due dates, and lower rates for high-score customers.\n\nKey Learnings:\n1. Accuracy alone is misleading on imbalanced data, so recall and F1 matter more for the default class.\n2. Clustering gives business-friendly segments that complement a predictive model.\n3. Cleaning decisions (which columns to drop, how to impute) shape the model as much as the algorithm.",
    gallery: [
      {
        title: "Feature Correlation Heatmap",
        caption: "Correlation matrix analyzing linear relationships between loan default target and key numeric features including Total Income, Credit Amount, Annuity, and Goods Price.",
        badge: "EDA · Correlations",
        image: "/images/projects/credit-risk/01-feature-correlation-heatmap.png",
      },
      {
        title: "Relationship Between Income & Credit Amount",
        caption: "Bivariate scatter distribution showing loan size concentration across income tiers, highlighting prudent debt sizing among lower-income applicant brackets.",
        badge: "Bivariate Distribution",
        image: "/images/projects/credit-risk/02-income-vs-credit-amount.jpg",
      },
      {
        title: "Target Distribution by Car Ownership",
        caption: "Default rate comparison segmented by vehicle ownership status, demonstrating applicant pool proportion and risk differential.",
        badge: "Asset Ownership: Car",
        image: "/images/projects/credit-risk/03-target-by-car-ownership.png",
      },
      {
        title: "Target Distribution by Realty Ownership",
        caption: "Comparative default probability analysis between property owners and non-owners, validating collateral asset ownership as a stabilizing risk indicator.",
        badge: "Asset Ownership: Realty",
        image: "/images/projects/credit-risk/04-target-by-realty-ownership.png",
      },
      {
        title: "Applicant Age Distribution Profile",
        caption: "Continuous age frequency curve illustrating peak borrowing volume in the 30–40 age bracket, with natural tapering past age 50 and minimal exposure >60.",
        badge: "Demographic Curve",
        image: "/images/projects/credit-risk/05-applicant-age-distribution.png",
      },
      {
        title: "K-Means Clustering: Elbow Method Optimization",
        badge: "Unsupervised Clustering",
        caption: "Inertia curve across K=1 to K=10 on Application Train and Test datasets, confirming optimal clustering inflection at K=3.",
        image: "/images/projects/credit-risk/06-kmeans-elbow-method.png",
      },
      {
        title: "Customer Cluster Profiles & Risk Characteristics",
        caption: "Segment profiles across 3 borrower cohorts: Cluster 0 (lower income, higher DTI / loan strain), Cluster 1 (high income, low loan size, prime credit), and Cluster 2 (high income & loans, balanced leverage).",
        badge: "Behavioral Profiles",
        image: "/images/projects/credit-risk/07-cluster-characteristics.jpg",
      },
      {
        title: "Supervised Model Accuracy Score Comparison",
        caption: "Evaluation benchmark across 33% test split: Logistic Regression (91.98%), XGBoost (91.90%), and Random Forest (92.01%) optimized for credit risk classification.",
        badge: "Model Evaluation",
        image: "/images/projects/credit-risk/08-model-accuracy-comparison.png",
      },
    ],
  },

  // 3. Movies & TV Shows Recommendation System
  {
    id: 7,
    slug: "movies-tv-shows-recommendation-system",
    title: "Movie & TV Show Recommendation System (Content-Based Filtering, Streamlit App)",
    affiliation: "Data Science Beginner Study Club · Team Final Project",
    projectType: "Data Science: Recommender System (Team Final Project, Data Science Beginner)",
    domain: "Data Science",
    category: "Data Science & Analysis",
    year: "2024",
    role: "Data Scientist (Team of 3)",
    duration: "1 Week",
    tools: [
      "Python",
      "Google Colab",
      "Anaconda",
      "scikit-learn (TF-IDF, cosine similarity)",
      "Pandas",
      "Seaborn",
      "Matplotlib",
      "Streamlit",
      "GitHub",
    ],
    coverImage: "/images/projects/movies-recommendation/01-streamlit-recommendation-ui.png",
    shortDescription:
      "A content-based recommender over 8,807 Netflix titles that suggests similar movies and TV shows from a title the user enters, deployed as a Streamlit web app.",
    links: {
      report: "",
      streamlit: "",
      github: "",
    },
    overview:
      "With so many streaming titles, users spend a long time finding something that fits their taste, and poor recommendations make it worse. The project built a data-driven recommender that suggests similar titles quickly. Each title’s director, cast, genre, rating, and description were combined into one text profile, turned into TF-IDF vectors, and compared with cosine similarity. The user types a title and gets the most similar content.",
    keyNumbers: [
      "8,807 titles, TF-IDF matrix of 8,807 × 52,053",
      "5 content features combined into a Bag of Words",
      "80% manual test result (8 of 10 test titles relevant)",
      "10 recommendations in notebook, 5 in live app",
      "4 EDA views: type, top countries, release year, ratings",
    ],
    workDone: [
      "Data Preparation: Loaded the Kaggle dataset and checked structure, missing values, and duplicates (0 duplicates).",
      "Preprocessing: Dropped rows with too many nulls and filled the rest with 'Unknown' or 'Not Rated'.",
      "Exploratory Data Analysis (EDA): Analyzed movie vs TV show split, top countries (US leads), release year growth, popular categories, and rating distribution.",
      "Feature Engineering: Cleaned text (lowercase, punctuation, spaces) and merged director, cast, rating, genre, and description into one Bag of Words.",
      "Modeling: Vectorized with TF-IDF, computed a cosine similarity matrix, and wrapped it in a recommendations() retrieval function.",
      "Testing: Tried 10 titles (e.g. Squid Game, The Karate Kid, Better Call Saul) and judged relevance manually, achieving an 80% relevance score.",
      "Deployment: Saved model artifacts, pushed repository to GitHub, and deployed an interactive Streamlit web application.",
    ],
    keyLearnings:
      "Impact: Reduces browsing time by returning similar titles from one input. Delivered end to end, from raw data to a live app people can use.\n\nKey Learnings:\n1. Content-based filtering works well with only metadata and needs no user history.\n2. Text cleaning decides similarity quality, since the TF-IDF input is only as good as the merged text.\n3. Deployment changes how you save artifacts, for example storing similarity results so the app stays fast.",
    gallery: [
      {
        title: "Interactive Streamlit Recommendation UI",
        image: "/images/projects/movies-recommendation/01-streamlit-recommendation-ui.png",
        badge: "Streamlit Web App",
        caption: "Interactive web user interface allowing users to input any movie or TV show title and instantly receive top-5 ranked content recommendations with genre tags.",
      },
      {
        title: "Feature Engineering & Bag of Words (BoW)",
        image: "/images/projects/movies-recommendation/02-feature-engineering-bow.jpg",
        badge: "NLP Preprocessing",
        caption: "Custom TextCleaner class and multi-attribute integration merging title, director, cast, content rating, genres, and synopsis into clean Bag of Words text representations.",
      },
      {
        title: "TF-IDF Vectorization Pipeline",
        image: "/images/projects/movies-recommendation/03-tfidf-vectorization.png",
        badge: "Vector Space Model",
        caption: "Transforming tokenized Bag of Words corpus into a sparse 8,807 x 52,053 TF-IDF numerical matrix to calculate term frequency-inverse document frequency weighting.",
      },
      {
        title: "Cosine Similarity Computation",
        image: "/images/projects/movies-recommendation/04-cosine-similarity-matrix.png",
        badge: "Similarity Scoring",
        caption: "Pairwise cosine distance calculation measuring angular similarity between high-dimensional vector representations across all catalog titles.",
      },
      {
        title: "Similarity Matrix DataFrame Indexing",
        image: "/images/projects/movies-recommendation/05-similarity-dataframe-matrix.png",
        badge: "Matrix Indexing",
        caption: "Structured 2D similarity matrix with title-labeled indices and columns, enabling fast retrieval of highest-similarity neighbor titles during deployment inference.",
      },
      {
        title: "Testing Dataset Preparation & Evaluation",
        image: "/images/projects/movies-recommendation/06-data-testing-evaluation.png",
        badge: "Validation & Testing",
        caption: "Standardized final testing dataset containing enriched movie attributes to validate recommendation accuracy, yielding an 80% user evaluation success rate.",
      },
    ],
  },

  // 4. Customer Review Analysis of Ruangguru
  {
    id: 8,
    slug: "customer-review-analysis-ruangguru",
    title: "Customer Review Analysis Dashboard: Ruangguru",
    affiliation: "SISTECH 2024 BI Program · Team Project",
    projectType: "Business Intelligence: Text/Review Analytics and Dashboard",
    domain: "Business Intelligence",
    category: "Business Intelligence",
    year: "2024",
    role: "Business Intelligence Analyst (Team of 2)",
    duration: "2 Weeks",
    tools: ["Python", "Google Colab", "Looker Studio", "GitHub"],
    featured: true,
    coverImage: "/images/projects/ruangguru/01-satisfaction-overview-kpi.png",
    shortDescription:
      "A Looker Studio dashboard that turns 4,180 Ruangguru app reviews into clear signals about satisfaction, sentiment, review timing, app versions, and the topics users complain about most.",
    links: {
      report: "https://drive.google.com/file/d/1O-XcfFRrrzn3fMnm6RKrMTgQX55NCYQ5/view",
      dashboard: "https://lookerstudio.google.com/reporting/01ced793-5995-4030-a3b5-a8e148249f5c/page/C7b6D",
      github: "https://github.com/adeliadeswita/customer-review-analysis",
    },
    overview:
      "Ruangguru is a large edtech platform in Indonesia, and the volume of user reviews made it hard for management to see where users were unhappy. The project asked one question: based on user reviews, in which specific areas of the service do users frequently express dissatisfaction? I cleaned the review dataset and built a dashboard covering score satisfaction (score distribution, satisfaction levels, and average score per month), review behavior (review volume and average score by hour of day), sentiment and category (sentiment by review category: Compliments, Complaints, Critics, Suggestions, Questions, Others), app versions (average score per app version), and tags (the topics users discuss most: app, learning, connection, video, price, download, bug).",
    keyNumbers: [
      "4,180 reviews analyzed (avg score 4.1)",
      "2,500+ positive reviews",
      "8 preprocessing steps",
      "73.8% of reviews mention a specific topic tag",
      "Review volume peaks at 18:00–19:00",
      "Score drop in v4.5.3 & Feb–Mar 2024",
      "9 prioritized recommendations",
    ],
    workDone: [
      "Problem Framing: Defined the problem statement, goal, and objective around finding the specific operational areas where users are dissatisfied.",
      "Data Preprocessing (Python): Corrected data types, fixed reply date/time earlier than review date/time, imputed missing app versions, transformed numerical variables, binned scores into satisfaction categories, extracted tag lists, and replaced empty tags with 'No Specific Tags'.",
      "Dashboard Build (Looker Studio): Built score satisfaction, review-by-hour, category sentiment, app version, and tag analysis views with KPI scorecards, pie charts, bar charts, and time-series line trends.",
      "Insight Analysis: Compared tags against review categories to find which topics drive complaints (connection and video) and which drive compliments (app and learning).",
      "Actionable Recommendations: Turned analytical findings into 9 prioritized actions across product bug fixes, customer support staffing, video infrastructure, and pricing.",
    ],
    keyLearnings:
      "Impact: Gave management a single view to spot dissatisfaction by topic, version, and time, instead of reading reviews one by one. Produced actions tied to evidence: fix connection and video quality, investigate bugs in version 4.5.3, add customer support staffing at the 18:00–19:00 peak, schedule maintenance between 00:00 and 06:00, and review pricing.\n\nKey Learnings:\n1. Overall positive ratings (avg 4.1) can hide specific weak spots, so breaking reviews down by tag, category, and version is what makes them actionable.\n2. Preprocessing of dates, tags, and missing values decides how trustworthy the downstream dashboard is.\n3. Looking at time patterns (hour, month, version) turns review data into operational recommendations such as support staffing and release timing.",
    gallery: [
      {
        title: "Ruangguru Review Dashboard: Overview & User Satisfaction",
        image: "/images/projects/ruangguru/01-satisfaction-overview-kpi.png",
        badge: "Executive KPI & Satisfaction",
        caption: "Executive summary tracking 4,180 reviews with an average score of 4.1, satisfaction distribution (71.4% Sangat Puas), rating histograms, and monthly trend trajectory.",
      },
      {
        title: "Review Timing Behavior & Score by App Version",
        image: "/images/projects/ruangguru/02-review-timing-app-version.png",
        badge: "Hourly Trend & Version Health",
        caption: "Temporal distribution showing review volume peaks between 18:00–19:00 alongside version-by-version rating stability analysis highlighting drops in older releases.",
      },
      {
        title: "Sentiment Analysis & Category Breakdown",
        image: "/images/projects/ruangguru/03-sentiment-review-categories.png",
        badge: "Sentiment & Category Matrix",
        caption: "Sentiment breakdown (Positive, Negative, Neutral) mapped across feedback categories: Compliments, Complaints, Critics, Suggestions, and Questions.",
      },
      {
        title: "Topic Tag Proportion & Feedback Categories",
        image: "/images/projects/ruangguru/04-tag-distribution-categories.png",
        badge: "Tag Mining & Breakdown",
        caption: "73.8% of user reviews contain specific topic tags; category breakdown maps volume across Application, Learning Experience, Connection, Pricing, and Video.",
      },
      {
        title: "Top Discussed Tags & Rating Matrix",
        image: "/images/projects/ruangguru/05-discussed-tags-frequency.png",
        badge: "Topic Frequency & Ratings",
        caption: "Frequency ranking of user topics (Aplikasi, Pembelajaran, Pengalaman Pengguna, Materi, Koneksi) mapped against average score ratings to prioritize operational fixes.",
      },
    ],
  },

  // 5. Weather Prediction Model
  {
    id: 9,
    slug: "weather-prediction-model",
    title: "Weather Prediction Model",
    affiliation: "Big Data Course",
    projectType: "Group Project",
    domain: "Data Science",
    category: "Data Science & Analysis",
    year: "2024",
    role: "Data Scientist",
    duration: "4 Days",
    tools: ["Python", "Google Colab"],
    coverImage: "/images/projects/weather-prediction/01-roc-curve-comparison.png",
    shortDescription:
      "Predictive machine learning models leveraging Random Forest and Gradient Boosting on historical meteorological data.",
    links: {
      report: "",
      github: "https://github.com/adeliadeswita/weather-prediction-model/blob/main/Weather_Prediction_Model.ipynb",
    },
    overview:
      "Weather Prediction Model is focused on building a model that uses historical meteorological data. The primary objective is to leverage machine learning algorithms, specifically Random Forest and Gradient Boosting, to identify the most effective methods for making accurate predictions.",
    keyNumbers: ["8,784 records", "75% accuracy", "76% precision", "ROC-AUC 0.89"],
    workDone: [
      "Conducted data preparation, exploratory data analysis (EDA), and data preprocessing on a dataset containing 8,784 records.",
      "Developed predictive models using Random Forest and Gradient Boosting, optimizing hyperparameters through grid search for best performance.",
      "Achieved 75% accuracy, 76% precision, and a ROC-AUC score of 0.89 with the Random Forest model, outperforming the Gradient Boosting model.",
    ],
    keyLearnings:
      "I enhanced my skills in data preprocessing, feature engineering, and hyperparameter tuning, which were critical in building accurate weather prediction models. Working with Random Forest and Gradient Boosting deepened my understanding of ensemble methods and their effectiveness in handling non-linear relationships in data. I also learned to interpret feature importances, which improved my ability to derive insights from the model.",
    gallery: [
      {
        title: "ROC-AUC Curve Comparison (RF vs GB)",
        image: "/images/projects/weather-prediction/01-roc-curve-comparison.png",
        badge: "ROC Evaluation",
        caption: "Receiver Operating Characteristic comparison showing Random Forest achieving a superior AUC of 0.89 versus Gradient Boosting at 0.87 across 8,784 meteorological records.",
      },
      {
        title: "Model Accuracy Comparison (RF vs GB)",
        image: "/images/projects/weather-prediction/02-accuracy-rf-vs-gb.png",
        badge: "Model Benchmark",
        caption: "Barplot comparison illustrating Random Forest achieving 75.3% accuracy, outperforming Gradient Boosting at 74.1%.",
      },
      {
        title: "Normalized Confusion Matrix: Random Forest",
        image: "/images/projects/weather-prediction/03-confusion-matrix-rf.png",
        badge: "Confusion Matrix",
        caption: "Normalized classification error matrix across weather conditions (Cloudy, Clear, Rain), confirming 76.0% true positive rate on Class 0 and 74.3% on Class 1.",
      },
      {
        title: "Confusion Matrix: Gradient Boosting",
        image: "/images/projects/weather-prediction/04-confusion-matrix-gb.png",
        badge: "Confusion Matrix",
        caption: "Absolute frequency confusion matrix for Gradient Boosting across holdout predictions (517 correct Class 0, 566 correct Class 1, 40 correct Class 2).",
      },
      {
        title: "Meteorological Feature Correlation Matrix",
        image: "/images/projects/weather-prediction/05-correlation-matrix.png",
        badge: "EDA · Correlation",
        caption: "Correlation heatmap showing a near-perfect positive linear relationship (0.93) between Temperature and Dew Point, and moderate inverse correlation with pressure (-0.33).",
      },
      {
        title: "Weather Condition Target Distribution",
        image: "/images/projects/weather-prediction/06-weather-distribution.png",
        badge: "Class Distribution",
        caption: "Imbalanced class distribution across target meteorological states: Cloudy (3,800+ entries), Clear (~3,400 entries), and Rain (~350 entries).",
      },
      {
        title: "Continuous Temperature Distribution Profile",
        image: "/images/projects/weather-prediction/07-temperature-distribution.png",
        badge: "Feature Distribution",
        caption: "Bimodal histogram showing multi-seasonal temperature spread from -23°C to +33°C across 8,784 hourly weather records.",
      },
      {
        title: "Temperature vs. Dew Point Bivariate Relationship",
        image: "/images/projects/weather-prediction/08-temp-vs-dewpoint.png",
        badge: "Bivariate Scatter",
        caption: "Dense scatter plot confirming tight collinearity and thermal saturation dynamics between ambient temperature and dew point.",
      },
      {
        title: "Numerical Feature Boxplots & Outlier Screening",
        image: "/images/projects/weather-prediction/09-feature-boxplots.png",
        badge: "EDA · Outlier Detection",
        caption: "Comparative boxplots identifying distribution spreads and extreme outliers across wind speed, pressure, humidity, visibility, and temperature metrics.",
      },
    ],
  },

  // 6. Sales Data Analysis
  {
    id: 10,
    slug: "sales-data-analysis",
    title: "Sales Data Analysis",
    affiliation: "Big Data Course",
    projectType: "Individual Project",
    domain: "Data Analysis",
    category: "Business Intelligence",
    year: "2024",
    role: "Data Analyst",
    duration: "2 Days",
    tools: ["Hadoop", "Looker Studio"],
    coverImage: "/images/projects/sales-data-analysis/01-sales-dashboard-looker-studio.jpg",
    shortDescription:
      "Sales data analysis processed with Hadoop MapReduce and visualized in a dynamic Looker Studio dashboard with 6 visualizations.",
    links: {
      report: "https://drive.google.com/file/d/1GFo3x4PNx-1_YqEw4Rc8hD4ZeRUkgAHG/view",
      dashboard: "",
    },
    overview:
      "Sales Data Analysis is created to analyze sales data using Hadoop MapReduce and develop an interactive dashboard for data visualization. The dataset is processed with Hadoop, and the results are visualized in a comprehensive dashboard built using Looker Studio.",
    keyNumbers: [
      "$2.69M total sales revenue",
      "1,000 transactions & 10,539 items sold",
      "Top product: Jeans ($199.18K)",
      "Top category: Clothing ($714.26K)",
      "Peak sales month: Mar 2024 ($299.7K)",
    ],
    workDone: [
      "Optimized sales insights by developing 3 Python scripts using Hadoop MapReduce to calculate total sales by category, identify top-selling products, and analyze monthly sales trends.",
      "Designed and implemented interactive dashboards with 6 dynamic visualizations, featuring category, product, and time-period filters.",
    ],
    keyLearnings:
      "This project enhanced my understanding of big data processing and visualization. Implementing Hadoop MapReduce deepened my skills in distributed computing and handling large-scale datasets. I gained practical experience in Python scripting for creating efficient mappers and reducers, ensuring accurate calculations despite diverse data inputs. Designing an interactive dashboard with Looker Studio sharpened my ability to present complex data in an intuitive, visually appealing manner.",
    gallery: [
      {
        title: "Executive Sales Performance Dashboard",
        image: "/images/projects/sales-data-analysis/01-sales-dashboard-looker-studio.jpg",
        badge: "Looker Studio Dashboard",
        caption: "Comprehensive sales analytics dashboard tracking $2,698,925.17 total revenue across 1,000 transactions and 10,539 units sold, featuring category and product rankings, monthly sales trends, and breakdown filters.",
      },
    ],
  },

  // 7. Sentiment Analysis on Boycott Opinion
  {
    id: 11,
    slug: "sentiment-analysis-boycott-opinion",
    title: "Sentiment Analysis on Boycott Opinion",
    affiliation: "Communication Network and Big Data Course",
    projectType: "Group Project",
    domain: "Data Analysis",
    category: "Business Intelligence",
    year: "2024",
    role: "Data Analyst",
    duration: "2 Weeks",
    tools: ["Python", "Google Colab"],
    coverImage: "/images/projects/sentiment-boycott/01-boycott-wordcloud.jpg",
    shortDescription:
      "Scraping YouTube comments and applying NLP sentiment classification to uncover public attitudes and trends on boycott opinions.",
    links: {
      report: "",
      github: "https://github.com/adeliadeswita/sentiment-analysis-boikot",
    },
    overview:
      "Sentiment Analysis on Boycott Opinion analyzes YouTube comments on boycotts against pro-Israel products using web scraping and NLP to classify sentiments as positive, negative, or neutral, aiming to uncover public attitudes and trends.",
    keyNumbers: [
      "6,281 comments scraped",
      "60.9% positive sentiment",
      "19.9% neutral sentiment",
      "19.2% negative sentiment",
    ],
    workDone: [
      "Collected data through web scraping of YouTube comments, resulting in 6,281 data points.",
      "Conducted sentiment analysis to evaluate public support for a boycott movement by categorizing comments into positive, neutral, and negative sentiments.",
      "Revealed that 60.9% of comments expressed positive sentiments, while 19.9% were neutral and 19.2% were negative.",
    ],
    keyLearnings:
      "This project offered valuable insights into the intersection of technology and social issues. I learned how sentiment analysis can uncover public opinion on controversial topics by processing large datasets from social media. The process taught me the intricacies of data collection using web scraping, especially navigating APIs to handle large-scale data. Additionally, the use of lexicon-based methods for sentiment classification enhanced my understanding of natural language processing.",
    gallery: [
      {
        title: "Public Discourse Word Cloud",
        image: "/images/projects/sentiment-boycott/01-boycott-wordcloud.jpg",
        badge: "NLP Word Cloud",
        caption: "Term frequency visualization highlighting predominant keywords in public YouTube discourse, dominated by terms like 'boikot', 'produk', 'indonesia', and 'israel'.",
      },
      {
        title: "Comment Sentiment Distribution",
        image: "/images/projects/sentiment-boycott/02-sentiment-distribution-bar.png",
        badge: "Sentiment Frequency",
        caption: "Absolute comment frequency across 3 sentiment categories, showing a massive lead for positive support (~3,800+ comments) over neutral and negative sentiments.",
      },
      {
        title: "Overall Sentiment Proportion",
        image: "/images/projects/sentiment-boycott/03-sentiment-proportion-pie.png",
        badge: "Sentiment Breakdown",
        caption: "Percentage share breakdown across 6,281 processed comments: 60.9% Positive, 19.9% Neutral, and 19.2% Negative sentiment.",
      },
    ],
    codeSnippets: [
      {
        language: "python",
        title: "lexicon_sentiment_analysis.py",
        subtitle: "Indonesian Lexicon-Based Sentiment Scoring & Polarity Categorization",
        description:
          "Loads positive and negative Indonesian sentiment lexicons, aggregates polarity scores across tokenized YouTube comments, and classifies sentiments into Positive, Negative, or Neutral.",
        code: `# Load sentiment lexicon
lexicon_positive = pd.read_csv('positive.tsv', sep='\\t')
lexicon_negative = pd.read_csv('negative.tsv', sep='\\t')

# Convert to dictionary
lexicon_positive_dict = {row[0]: row[1] for _, row in lexicon_positive.iterrows()}
lexicon_negative_dict = {row[0]: row[1] for _, row in lexicon_negative.iterrows()}

# Sentiment analysis function
def sentiment_analysis_lexicon_indonesia(text):
    if pd.isnull(text) or not isinstance(text, str):
        return 0, 'Neutral'
    words = text.split()
    score = 0
    for word in words:
        if word in lexicon_positive_dict:
            score += lexicon_positive_dict[word]
        elif word in lexicon_negative_dict:
            score += lexicon_negative_dict[word]
    if score > 0:
        sentiment = 'Positive'
    elif score < 0:
        sentiment = 'Negative'
    else:
        sentiment = 'Neutral'
    return score, sentiment

# Apply to DataFrame
filtered_df['Polarity Score'], filtered_df['Sentiment'] = zip(
    *filtered_df['comments'].apply(sentiment_analysis_lexicon_indonesia)
)

# Display the results
filtered_df[['comments', 'Polarity Score', 'Sentiment']]`,
      },
    ],
  },

  // 8. Customer Clustering Analysis PT ABC
  {
    id: 12,
    slug: "customer-clustering-analysis-pt-abc",
    title: "Customer Clustering Analysis PT ABC",
    affiliation: "Data Science Beginner Study Club",
    projectType: "Individual Project",
    domain: "Data Science",
    category: "Data Science & Analysis",
    year: "2024",
    role: "Data Scientist",
    duration: "2 Days",
    tools: ["Python", "Google Colab"],
    coverImage: "/images/projects/customer-clustering/02-elbow-method-optimal-k.png",
    shortDescription:
      "Customer segmentation through K-Means clustering analysis to group customers based on transaction history and purchasing patterns.",
    links: {
      github: "https://github.com/adeliadeswita/customer-clustering-analysis",
    },
    overview:
      "Customer Clustering Analysis PT ABC focuses on customer segmentation through clustering analysis. The goal is to group customers with similar behaviors and characteristics based on their transaction history, purchasing patterns, or demographic information.",
    keyNumbers: ["2,240 records", "optimal k = 2"],
    workDone: [
      "Conducted data preprocessing on a dataset containing 2,240 records by handling missing values using KNN imputer, performing label encoding, and simplifying categorical variables.",
      "Applied K-Means clustering to segment customers for PT ABC, identifying the optimal number of clusters (k = 2).",
      "Conducted in-depth evaluation using metrics such as Within-Cluster Sum of Squares (WCSS) and silhouette scores.",
    ],
    keyLearnings:
      "This project provided valuable experience in applying unsupervised learning for customer segmentation. I learned to preprocess and standardize data, apply the K-Means algorithm, and evaluate clusters using the Elbow Method and Calinski-Harabasz Index. This reinforced the importance of interpreting results within a business context to enable actionable strategies like personalized marketing and improved customer retention. This segmentation revealed two distinct customer groups, offering insights to inform targeted marketing and retention strategies.",
    gallery: [
      {
        title: "Customer Income Distribution & Density Curve",
        image: "/images/projects/customer-clustering/01-income-distribution.png",
        badge: "Exploratory Data Analysis",
        caption: "Bimodal-leaning income distribution histogram with KDE kernel density estimation across 2,240 customers, highlighting core demographic purchasing tiers.",
      },
      {
        title: "K-Means Clustering: Elbow Method for Optimal K",
        image: "/images/projects/customer-clustering/02-elbow-method-optimal-k.png",
        badge: "Unsupervised Clustering",
        caption: "Within-Cluster Sum of Squares (Inertia) curve evaluated from k=1 to k=10, identifying k=2 as the optimal cluster inflection point for customer segmentation.",
      },
    ],
  },

  // 9. DDoS Attack Analysis
  {
    id: 13,
    slug: "ddos-attack-analysis",
    title: "DDoS Attack Analysis",
    affiliation: "Network Security Course",
    projectType: "Group Project",
    domain: "Data Science",
    category: "Data Science & Analysis",
    year: "2024",
    role: "Data Scientist",
    duration: "2 Weeks",
    tools: ["Python", "Jupyter Notebook", "Visual Studio Code"],
    coverImage: "/images/projects/ddos-attack/07-model-accuracy-comparison.png",
    shortDescription:
      "In-depth examination of DDoS attacks using network traffic datasets and predictive modeling to identify attack patterns and mitigation strategies.",
    links: {
      github: "https://github.com/adeliadeswita/DDoS-attack-analysis/blob/main/DDoS-attack-analysis.ipynb",
    },
    overview:
      "DDoS Attack Analysis focuses on an in-depth examination of DDoS attacks using collected datasets, including the development of predictive models. The main goal is to identify patterns and types of attacks, providing actionable insights to prevent and mitigate similar threats in the future.",
    keyNumbers: ["1M+ network traffic records", "3 models evaluated", "11 actionable insights"],
    workDone: [
      "Preprocessed and cleaned the dataset, handling missing values, converting categorical data, normalizing numerical features, and extracting time-based patterns and port usage statistics.",
      "Performed exploratory data analysis (EDA) on a dataset containing DDoS attack logs, analyzing over 1 million network traffic records.",
      "Performed data modeling using three different models along with their evaluation.",
      "Generated 11 actionable insights on attack behaviors and prevention strategies.",
    ],
    keyLearnings:
      "Through this project, I gained valuable technical skills in data preprocessing, including handling various data formats, addressing missing values, and normalizing features for consistency. I also enhanced my ability to apply machine learning algorithms to detect patterns in cybersecurity data. Additionally, I learned how to generate actionable insights on attack behaviors and prevention strategies. By analyzing patterns in the data, I identified common attack vectors, frequency trends, and the characteristics of high-risk activities.",
    gallery: [
      {
        title: "Korelasi Faktor Utama Subcategory DDoS",
        image: "/images/projects/ddos-attack/01-feature-correlation-heatmap.png",
        badge: "Exploratory Data Analysis",
        caption: "Correlation heatmap matrix evaluating relationships between network traffic features (sport, dport, pkts, proto, flgs, seq) and attack categories, highlighting strong protocol and flag collinearity.",
      },
      {
        title: "Distribusi Paket Berdasarkan Connection State",
        image: "/images/projects/ddos-attack/02-packets-sent-per-state-boxplot.png",
        badge: "Network Traffic Analysis",
        caption: "Boxplot analysis of packets transmitted across distinct connection states during attack intervals, revealing packet volume spikes and heavy outlier distributions in anomalous states.",
      },
      {
        title: "Top Attacker Source IP Addresses",
        image: "/images/projects/ddos-attack/03-top-source-ip-addresses.png",
        badge: "Threat Intelligence",
        caption: "Frequency distribution identifying top threat source IPs (192.168.100.147, 192.168.100.148, 192.168.100.150, 192.168.100.149) flooding the target with over 500,000 malicious requests each.",
      },
      {
        title: "Total Bytes & Packets per IP vs Indikator Serangan",
        image: "/images/projects/ddos-attack/04-total-bytes-packets-per-ip.jpg",
        badge: "Multivariate Traffic Analysis",
        caption: "Scatter plot examining total bytes versus packets per destination and source IP, distinguishing dense volumetric flooding clusters from normal baseline operations.",
      },
      {
        title: "Distribusi Paket Berdasarkan State & Protocol",
        image: "/images/projects/ddos-attack/05-packets-per-state-protocol-ip.jpg",
        badge: "Protocol Behavioral Analysis",
        caption: "Multi-dimensional scatter mapping packet distribution across protocol types and transmission states, isolating synchronized malicious traffic signatures.",
      },
      {
        title: "Koneksi Masuk Source & Destination IP",
        image: "/images/projects/ddos-attack/06-incoming-connections-source-dest.png",
        badge: "Concurrency & Load Analysis",
        caption: "Scatter analysis of simultaneous incoming connection requests between source and destination IP endpoints, illustrating buffer exhaustion thresholds during DDoS events.",
      },
      {
        title: "Evaluasi Akurasi Model Klasifikasi Serangan DDoS",
        image: "/images/projects/ddos-attack/07-model-accuracy-comparison.png",
        badge: "Machine Learning Benchmark",
        caption: "Model performance benchmark comparing Random Forest, Logistic Model, and Decision Tree classifiers, demonstrating robust near-100% predictive accuracy for DDoS intrusion detection.",
      },
    ],
  },

  // 10. Clustering Data Body Mass Index
  {
    id: 14,
    slug: "clustering-data-body-mass-index",
    title: "Clustering Data Body Mass Index",
    affiliation: "Data Mining and Data Warehouse Course",
    projectType: "Individual Project",
    domain: "Data Science",
    category: "Data Science & Analysis",
    year: "2024",
    role: "Data Scientist",
    duration: "2 Days",
    tools: ["Python", "Google Colab"],
    coverImage: "/images/projects/bmi-clustering/02-kmeans-clustering-scatter.png",
    shortDescription:
      "Clustering BMI data based on height and weight into health categories using K-Means and quality metrics.",
    links: {
      github: "",
    },
    overview:
      "Clustering BMI Data focuses on applying clustering techniques to analyze Body Mass Index (BMI) data. The aim is to group individuals based on their BMI characteristics into distinct clusters, which may represent different health categories, such as underweight, normal weight, overweight, or obese.",
    keyNumbers: ["optimal k = 4", "k tested 2 to 7"],
    workDone: [
      "Performed unsupervised learning using K-Means clustering to segment data based on height and weight, identifying the optimal number of clusters (k = 4) through the Elbow Method and Calinski-Harabasz Index.",
      "Conducted iterative analysis with k values ranging from 2 to 7, visualizing clustering results and evaluating cluster quality metrics.",
    ],
    keyLearnings:
      "This project provided valuable insights into using unsupervised learning for health-related data analysis, particularly clustering based on height and weight. I learned the importance of proper data preprocessing, such as standardizing features with MinMaxScaler, to ensure consistent scaling and improve clustering accuracy. The project reinforced the importance of interpreting clustering results in a meaningful context to enable practical applications.",
    gallery: [
      {
        title: "Elbow Method For Optimal k",
        image: "/images/projects/bmi-clustering/01-elbow-method-optimal-k.png",
        badge: "Optimal Cluster Evaluation",
        caption: "Within-Cluster Sum of Squares (WCSS / Inertia) curve evaluated for k=2 through k=7, demonstrating the sharp elbow inflection at k=4 as the optimal cluster count.",
      },
      {
        title: "K-Means Clustering: Height vs Weight Segments",
        image: "/images/projects/bmi-clustering/02-kmeans-clustering-scatter.png",
        badge: "Unsupervised Clustering",
        caption: "Scatter plot of body mass distributions partitioned into clusters with marked red centroid coordinates, grouping individuals into distinct health and body proportion categories.",
      },
    ],
  },

  // 11. Heart Disease Analysis
  {
    id: 15,
    slug: "heart-disease-analysis",
    title: "Heart Disease Analysis",
    affiliation: "Data Science Basic Study Club",
    projectType: "Individual Project",
    domain: "Data Science",
    category: "Data Science & Analysis",
    year: "2023",
    role: "Data Scientist",
    duration: "1 Week",
    tools: ["Python", "Google Colab"],
    coverImage: "/images/projects/heart-disease/02-model-accuracy-benchmark.png",
    shortDescription:
      "Predictive modeling on medical data to estimate heart disease risk, evaluating Random Forest, SVM, and Naïve Bayes.",
    links: {
      report: "https://drive.google.com/file/d/1aY2XZfGeA4FlojatBAzHMwjjrd_KsajI/view",
      github: "https://github.com/adeliadeswita/heart-disease-analysis",
    },
    overview:
      "Heart Disease Analysis focuses on identifying heart disease from medical data, developing predictive models to estimate an individual's risk, and evaluating the most effective methodologies for achieving accurate and reliable predictions.",
    keyNumbers: [
      "1,025 medical records",
      "94% accuracy (Random Forest)",
      "3 classification models compared",
      "Key drivers: Chest pain (0.43) & Max HR (0.42)",
    ],
    workDone: [
      "Performed data preparation, exploratory data analysis (EDA), and data preprocessing on a dataset with 1,025 records.",
      "Built and evaluated 3 predictive models (Random Forest, SVM, and Naïve Bayes).",
      "Achieved 94% accuracy with the Random Forest model, making it the most accurate model.",
    ],
    keyLearnings:
      "Through this project, I gained valuable insights into data preparation, predictive modeling, and evaluating methods to address real-world medical issues. Key findings showed that chest pain type (0.43) and maximum heart rate achieved (0.42) were the most influential variables based on correlation analysis. The Random Forest model proved to be the most accurate, achieving 94% accuracy. This project reinforced the importance of combining technical precision with practical applications, especially in healthcare.",
    gallery: [
      {
        title: "Model Accuracy Benchmark Comparison",
        image: "/images/projects/heart-disease/02-model-accuracy-benchmark.png",
        badge: "Model Evaluation",
        caption: "Cross-algorithm classification benchmark comparing Random Forest (94% accuracy), SVM (89%), and Naive Bayes (80%) on 33% medical holdout test data.",
      },
      {
        title: "Clinical Feature Correlation Heatmap",
        image: "/images/projects/heart-disease/01-feature-correlation-heatmap.jpg",
        badge: "Exploratory Data Analysis",
        caption: "Full correlation matrix identifying chest pain type (cp: +0.43) and maximum heart rate achieved (thalach: +0.42) as the primary positive indicators of heart disease.",
      },
    ],
    codeSnippets: [
      {
        language: "python",
        title: "heart_disease_modeling.py",
        subtitle: "Scikit-Learn · ML Modeling, Hyperparameter Tuning & Cross-Model Benchmark",
        description:
          "Trains and evaluates SVM, Gaussian Naive Bayes, and Random Forest Classifier on standardized clinical features, generating confusion matrix and classification benchmarks.",
        code: `import pandas as pd
import seaborn as sns
import matplotlib.pyplot as plt
from sklearn.preprocessing import StandardScaler
from sklearn.model_selection import train_test_split
from sklearn.svm import SVC
from sklearn.naive_bayes import GaussianNB
from sklearn.ensemble import RandomForestClassifier
from sklearn.metrics import accuracy_score, confusion_matrix, classification_report

# 1. Load Data
data = pd.read_csv('heart.csv')

# 2. Data Cleaning: Filter invalid categorical values
data = data.loc[data['ca'] != 4]
data = data.loc[data['thal'] != 3]

# 3. Feature Scaling & Partitioning
x = data[data.columns[:13]]
y = data['target']

scaler = StandardScaler()
x = scaler.fit_transform(x)

x_train, x_test, y_train, y_test = train_test_split(
    x, y, test_size=0.33, random_state=42
)

# 4. Model Training: Support Vector Machine (SVM)
clf = SVC()
clf.fit(x_train, y_train)
y_pred_clf = clf.predict(x_test)
accuracy_svm = accuracy_score(y_test, y_pred_clf)

# 5. Model Training: Gaussian Naive Bayes
nb = GaussianNB()
nb.fit(x_train, y_train)
y_pred_nb = nb.predict(x_test)
accuracy_nb = accuracy_score(y_test, y_pred_nb)

# 6. Model Training: Random Forest Classifier
rf = RandomForestClassifier(
    n_estimators=100, 
    criterion="entropy", 
    max_depth=7, 
    min_samples_leaf=2, 
    max_features="sqrt", 
    random_state=2
)
rf.fit(x_train, y_train)
y_pred_rf = rf.predict(x_test)
accuracy_rf = accuracy_score(y_test, y_pred_rf)

# 7. Model Accuracy Benchmark Comparison
results = pd.DataFrame({
    "Algorithms": ["SVM", "Naive Bayes", "Random Forest"],
    "Accuracy (%)": [accuracy_svm * 100, accuracy_nb * 100, accuracy_rf * 100]
})
print(results)`,
      },
    ],
  },

  // 12. Database System for Watsons Indonesia
  {
    id: 16,
    slug: "database-system-watsons-indonesia",
    title: "Database System for Watsons Indonesia",
    affiliation: "Database System Course",
    projectType: "Group Project",
    domain: "Database System",
    category: "Database Design & Management",
    year: "2023",
    role: "Database Developer",
    duration: "2 Weeks",
    tools: ["MySQL", "phpMyAdmin", "Draw.io", "SQL"],
    coverImage: "/images/projects/watsons/03-mysql-physical-data-model.png",
    shortDescription:
      "Designing a structured relational database system integrating product supply, sales tracking, triggers, and stored procedures for Watsons Indonesia.",
    links: {
      report: "",
    },
    overview:
      "This project focuses on designing a structured and efficient database system to support the business processes of PT Duta Intidaya, Tbk., known as Watsons Indonesia. The system integrates key operational areas such as product supply management, sales tracking, and customer transactions.",
    workDone: [
      "Designed a comprehensive database system for managing business processes, including product supply, sales transactions, and inventory tracking.",
      "Developed and implemented an Entity-Relationship Diagram (ERD) and optimized database structure using SQL queries, triggers, and stored procedures.",
    ],
    keyLearnings:
      "This project deepened my understanding of database design and implementation, particularly in aligning technical solutions with business needs. I enhanced my SQL skills through the creation of complex queries, triggers, and stored procedures, ensuring data accuracy and operational efficiency. Additionally, addressing challenges like redundancy and real-time updates strengthened my problem-solving and critical-thinking abilities, preparing me for future roles in database and system development.",
    sqlTopics: [
      "DDL & EER HIERARCHY",
      "DML & AUDITING",
      "INVENTORY TRIGGERS",
      "STORED PROCEDURES",
      "STORED FUNCTIONS",
      "CURSORS",
      "MYSQLDUMP BACKUP / RESTORE",
      "ANALYTICAL SUBQUERIES",
      "MULTI-TABLE JOINS",
    ],
    codeSnippets: [
      {
        language: "sql",
        title: "1. watsons_schema_ddl.sql",
        subtitle: "DDL · Relational Schema & Disjoint Specialization Hierarchy",
        description:
          "Enhanced ERD physical schema definition for Pemasok, Produk, Pembeli, Kasir, Transaksi, and Subclasses (Perawatan, Vitamin, Makeup) with primary and foreign key constraints.",
        code: `-- DDL: Create Database & Tables
CREATE DATABASE IF NOT EXISTS Watsons;
USE Watsons;

CREATE TABLE Pemasok (
  id_pemasok VARCHAR(15) PRIMARY KEY,
  nm_pemasok VARCHAR(50),
  alamat_pemasok VARCHAR(50)
);

CREATE TABLE Produk (
  kd_produk VARCHAR(15) PRIMARY KEY,
  id_pemasok VARCHAR(15),
  nm_produk VARCHAR(50),
  hrg_produk INT(20),
  jml_produk INT(5),
  kategori VARCHAR(15),
  FOREIGN KEY (id_pemasok) REFERENCES Pemasok(id_pemasok)
);

CREATE TABLE Pembeli (
  id_pembeli VARCHAR(15) PRIMARY KEY,
  nm_pembeli VARCHAR(30)
);

CREATE TABLE Kasir (
  id_kasir VARCHAR(15) PRIMARY KEY,
  nm_kasir VARCHAR(15),
  jns_kel CHAR(2)
);

CREATE TABLE Transaksi (
  kd_trans VARCHAR(15) PRIMARY KEY,
  id_pembeli VARCHAR(15),
  id_kasir VARCHAR(15),
  kd_produk VARCHAR(15),
  jml_beli INT(10),
  total_hrg INT(20),
  tgl_trans DATE,
  FOREIGN KEY (id_pembeli) REFERENCES Pembeli(id_pembeli),
  FOREIGN KEY (id_kasir) REFERENCES Kasir(id_kasir),
  FOREIGN KEY (kd_produk) REFERENCES Produk(kd_produk)
);

-- Subclass Entities (Disjoint Specialization dari Produk)
CREATE TABLE Perawatan (
  jns_produk VARCHAR(15),
  kd_produk VARCHAR(15),
  FOREIGN KEY (kd_produk) REFERENCES Produk(kd_produk)
);

CREATE TABLE Vitamin (
  jml_tablet VARCHAR(15),
  kd_produk VARCHAR(15),
  FOREIGN KEY (kd_produk) REFERENCES Produk(kd_produk)
);

CREATE TABLE Makeup (
  kategori_produk VARCHAR(15),
  kd_produk VARCHAR(15),
  FOREIGN KEY (kd_produk) REFERENCES Produk(kd_produk)
);`,
      },
      {
        language: "sql",
        title: "2. watsons_triggers.sql",
        subtitle: "Triggers & Auditing · Automated Inventory Deduction & Change Logs",
        description:
          "Database triggers automating real-time inventory deductions upon customer purchase and logging historical changes into dedicated audit tables.",
        code: `-- 1. Automasi Pengurangan Stok Produk Saat Transaksi Masuk
DELIMITER $$
CREATE TRIGGER tambah_stok
AFTER INSERT ON Transaksi
FOR EACH ROW
BEGIN
  UPDATE Produk 
  SET jml_produk = jml_produk - NEW.jml_beli
  WHERE kd_produk = NEW.kd_produk;
END $$
DELIMITER ;

-- 2. Audit Table & Trigger: Catat Riwayat Perubahan Stok Produk
CREATE TABLE log_produk (
  id_logproduk INT(3) PRIMARY KEY AUTO_INCREMENT,
  kd_produk VARCHAR(15) NOT NULL,
  stok_lama INT(5) NOT NULL,
  stok_baru INT(5) NOT NULL,
  waktu DATETIME NOT NULL
);

DELIMITER $$
CREATE TRIGGER stok_produk_baru
BEFORE UPDATE ON Produk
FOR EACH ROW
BEGIN
  INSERT INTO log_produk
  SET kd_produk = OLD.kd_produk,
      stok_lama = OLD.jml_produk,
      stok_baru = NEW.jml_produk,
      waktu = NOW();
END $$
DELIMITER ;

-- Test Trigger Update Stok
UPDATE Produk SET jml_produk = 40 WHERE kd_produk = 'PR08';

-- 3. Audit Table & Trigger: Catat Registrasi Pembeli Baru
CREATE TABLE log_pembeli (
  id_logpembeli INT(3) PRIMARY KEY AUTO_INCREMENT,
  id_pembeli VARCHAR(15) NOT NULL,
  nm_pembeli VARCHAR(30) NOT NULL,
  waktu_perubahan DATETIME NOT NULL
);

DELIMITER $$
CREATE TRIGGER add_record_pembeli
AFTER INSERT ON Pembeli
FOR EACH ROW
BEGIN
  INSERT INTO log_pembeli
  SET id_pembeli = NEW.id_pembeli,
      nm_pembeli = NEW.nm_pembeli,
      waktu_perubahan = NOW();
END $$
DELIMITER ;

-- Test Trigger Tambah Pembeli
INSERT INTO Pembeli VALUES ('PL06', 'Echan');`,
      },
      {
        language: "sql",
        title: "3. watsons_procedures_functions.sql",
        subtitle: "Stored Logic · Parametric Procedures & Deterministic Functions",
        description:
          "Stored Procedures to inspect real-time product availability and register customers, alongside deterministic Stored Functions for tiered vouchers and stock health.",
        code: `-- Stored Procedure: Cek Ketersediaan Stok Produk
DELIMITER //
CREATE PROCEDURE getProduk(IN nm_produk VARCHAR(50))
BEGIN
  DECLARE stok VARCHAR(25);
  IF EXISTS (SELECT * FROM Produk WHERE nm_produk IN (SELECT a.nm_produk FROM Produk a)) THEN
    SET stok = "PRODUK TERSEDIA";
  ELSE
    SET stok = "PRODUK TIDAK TERSEDIA";
  END IF;
  SELECT stok AS status_ketersediaan;
END //
DELIMITER ;

-- Eksekusi Procedure
CALL getProduk("Imboost Tablet");

-- Stored Procedure: Registrasi Pembeli Baru
DELIMITER //
CREATE PROCEDURE addPembeli(IN id_pembeli VARCHAR(30), IN nm_pembeli VARCHAR(30))
BEGIN
  INSERT INTO Pembeli VALUES (id_pembeli, nm_pembeli);
END //
DELIMITER ;

CALL addPembeli("PL07", "Della");

-- Stored Function: Penentuan Kategori Voucher Berdasarkan Total Belanja
DELIMITER //
CREATE FUNCTION voucher(total_hrg INT(20))
RETURNS VARCHAR(25)
DETERMINISTIC
BEGIN
  DECLARE voucher VARCHAR(25);
  IF total_hrg >= 200000 THEN 
    SET voucher = 'Voucher Rp15.000';
  ELSEIF (total_hrg >= 100000 AND total_hrg < 200000) THEN 
    SET voucher = 'Voucher Rp10.000';
  ELSE 
    SET voucher = 'Voucher Tidak Tersedia';
  END IF;
  RETURN(voucher);
END //
DELIMITER ;

SELECT kd_trans, id_pembeli, total_hrg, voucher(total_hrg) AS reward_voucher FROM Transaksi;

-- Stored Function: Pengecekan Ambang Batas Kesehatan Stok
DELIMITER //
CREATE FUNCTION cekStok(jml_produk INT(5))
RETURNS VARCHAR(50)
DETERMINISTIC
BEGIN
  DECLARE status VARCHAR(50);
  IF jml_produk >= 35 THEN 
    SET status = "Stok Tersedia Banyak";
  ELSEIF (jml_produk < 35 AND jml_produk > 0) THEN 
    SET status = "Stok Menipis";
  ELSE 
    SET status = "Stok Tidak Tersedia";
  END IF;
  RETURN(status);
END //
DELIMITER ;

SELECT kd_produk, nm_produk, jml_produk, cekStok(jml_produk) AS status_stok FROM Produk;`,
      },
      {
        language: "sql",
        title: "4. watsons_cursors_admin.sql",
        subtitle: "Advanced Operations · Cursors, CLI Backup/Restore & Reports",
        description:
          "Stored Procedure with cursor loop iteration, mysqldump CLI routines for disaster recovery, and export reporting queries.",
        code: `-- Cursor: Iterasi Record Kasir dan Penggabungan String Dinamis
DELIMITER //
CREATE PROCEDURE createNamaKasir(INOUT kasirList VARCHAR(5000))
BEGIN
  DECLARE selesai INTEGER DEFAULT 0;
  DECLARE namaKasir VARCHAR(30) DEFAULT "";
  DECLARE cursorKasir CURSOR FOR SELECT nm_kasir FROM Kasir;
  DECLARE CONTINUE HANDLER FOR NOT FOUND SET selesai = 1;

  OPEN cursorKasir;
  getKasir: LOOP
    FETCH cursorKasir INTO namaKasir;
    IF selesai = 1 THEN 
      LEAVE getKasir; 
    END IF;
    SET kasirList = CONCAT(namaKasir, " - ", kasirList);
  END LOOP getKasir;
  CLOSE cursorKasir;
END //
DELIMITER ;

SET @kasirList = "";
CALL createNamaKasir(@kasirList);
SELECT @kasirList AS daftar_kasir_tergabung;

-- Subquery Analitis & Aggregasi
SELECT kd_trans, id_pembeli, kd_produk, total_hrg 
FROM Transaksi
WHERE total_hrg > (SELECT AVG(total_hrg) FROM Transaksi);

-- Laporan Query Export (Pesanan Nilai Tinggi > 100K)
SELECT kd_trans, id_pembeli, total_hrg
FROM Transaksi
WHERE total_hrg > 100000;

-- Administrative Backup & Restore Routine (CLI Shell):
-- # Backup database Watsons ke SQL dump file:
-- cd C:\\xampp\\mysql\\bin
-- mysqldump -u root Watsons > Watsons_backup.sql
--
-- # Restore dump file ke database pemulihan baru:
-- mysql -u root -e "CREATE DATABASE Watsons_restore;"
-- mysql -u root Watsons_restore < Watsons_backup.sql`,
      },
    ],
    gallery: [
      {
        title: "Entity-Relationship Diagram (ERD) Konseptual",
        image: "/images/projects/watsons/01-erd-conceptual-model.png",
        badge: "Conceptual Data Model",
        caption: "Enhanced Entity-Relationship (EER) diagram dengan hierarki spesialisasi/generalisasi kategori produk (Perawatan, Vitamin, Makeup), relasi transaksi multi-entitas, serta entitas Pemasok, Pembeli, dan Kasir.",
      },
      {
        title: "Skema Relasi Antar Tabel (Relational Schema)",
        image: "/images/projects/watsons/02-relational-schema-mapping.png",
        badge: "Logical Relational Schema",
        caption: "Pemetaan skema relasional ternormalisasi (3NF) lengkap dengan penentuan Primary Key, Foreign Key dependencies, serta integritas referensial antar tabel transaksi dan master data.",
      },
      {
        title: "Physical Data Model & MySQL Schema Designer",
        image: "/images/projects/watsons/03-mysql-physical-data-model.png",
        badge: "Physical Database Implementation",
        caption: "Implementasi fisik basis data Watsons pada MySQL / phpMyAdmin Designer, memetakan tipe data spesifik (varchar, int, char, date) dan foreign key constraints untuk integritas data transaksi.",
      },
    ],
  },

  // 13. Database System for XYZ Supermarket
  {
    id: 17,
    slug: "database-system-xyz-supermarket",
    title: "Database System for XYZ Supermarket",
    affiliation: "Database System Course",
    projectType: "Individual Project",
    domain: "Database System",
    category: "Database Design & Management",
    year: "2023",
    role: "Database Developer",
    duration: "1 Week",
    tools: ["MySQL", "Draw.io", "SQL"],
    coverImage: "/images/projects/supermarket-xyz/02-relational-schema-mapping.jpg",
    shortDescription:
      "Relational schema and Enhanced Entity-Relationship (EER) model managing sales, inventory, and transaction consistency for Supermarket XYZ.",
    links: {
      report: "",
    },
    overview:
      "This project involves the design of a database system for Supermarket XYZ, focusing on efficiently managing sales, inventory, and customer data. It incorporates an Enhanced Entity-Relationship (EER) model to ensure a detailed and accurate representation of relationships and hierarchies within the database.",
    workDone: [
      "Developed an Enhanced Entity-Relationship (EER) model and relational database schema to organize and manage key entities, such as products, transactions, and customers.",
      "Wrote and executed SQL scripts for database creation, modification, and data management, including complex queries, triggers, and views to optimize data retrieval and ensure consistency.",
    ],
    keyLearnings:
      "Through this project, I deepened my understanding of relational database design and the Enhanced Entity-Relationship (EER) model, which allowed me to map complex relationships between entities effectively. I honed my SQL skills, including creating efficient queries, implementing transaction controls, and optimizing database operations for real-world applications. Additionally, the experience highlighted the importance of aligning database design with business processes to improve operational efficiency.",
    sqlTopics: [
      "EER SPECIALIZATION",
      "DDL (CREATE & ALTER)",
      "DML (INSERT, UPDATE, DELETE)",
      "ACID TRANSACTIONS (SAVEPOINT & ROLLBACK)",
      "TABLE LOCKING & CONCURRENCY",
      "ANALYTICAL SUBQUERIES",
      "VIEWS & JOINS",
    ],
    codeSnippets: [
      {
        language: "sql",
        title: "1. xyz_eer_schema_ddl.sql",
        subtitle: "DDL · Enhanced Entity-Relationship (EER) Schema & Table Alterations",
        description:
          "Database creation with superclass-subclass inheritance (Pelanggan -> Pelanggan Baru & Pelanggan Lama), junction relationships, and ALTER schema evolution.",
        code: `-- DDL: Create Master Entities
CREATE TABLE jenis_barang (
  kd_jenis varchar(5) PRIMARY KEY,
  nm_jenis varchar(15)
);

CREATE TABLE barang (
  kd_barang varchar(5) PRIMARY KEY,
  nm_barang varchar(25),
  hrg_barang int(15),
  kd_jenis varchar(5),
  FOREIGN KEY (kd_jenis) REFERENCES jenis_barang(kd_jenis)
);

CREATE TABLE kasir (
  kd_kasir varchar(5) PRIMARY KEY,
  nm_kasir varchar(15)
);

CREATE TABLE pelanggan (
  kd_pel varchar(5) PRIMARY KEY,
  nm_pel varchar(25)
);

-- EER Superclass-Subclass Inheritance (Disjoint Specialization)
CREATE TABLE pel_baru (
  kd_daftar varchar(5) PRIMARY KEY,
  kd_pel varchar(5),
  FOREIGN KEY (kd_pel) REFERENCES pelanggan(kd_pel)
);

CREATE TABLE pel_lama (
  kd_member varchar(5) PRIMARY KEY,
  kd_pel varchar(5),
  FOREIGN KEY (kd_pel) REFERENCES pelanggan(kd_pel)
);

-- Transaction & Junction Entities
CREATE TABLE transaksi (
  kd_trans varchar(5) PRIMARY KEY,
  kd_pel varchar(5),
  hrg_bayar int(15),
  jumlah int(5),
  kd_barang varchar(5),
  FOREIGN KEY (kd_pel) REFERENCES pelanggan(kd_pel),
  FOREIGN KEY (kd_barang) REFERENCES barang(kd_barang)
);

CREATE TABLE terdiri (
  kd_brg_trans varchar(5) PRIMARY KEY,
  kd_trans varchar(5),
  kd_barang varchar(5),
  jumlah int(5),
  hrg_barang int(5),
  FOREIGN KEY (kd_trans) REFERENCES transaksi(kd_trans),
  FOREIGN KEY (kd_barang) REFERENCES barang(kd_barang)
);

-- Schema Alterations (ALTER TABLE)
ALTER TABLE transaksi ADD kd_kasir varchar(5);
ALTER TABLE transaksi ADD FOREIGN KEY (kd_kasir) REFERENCES kasir(kd_kasir);
ALTER TABLE terdiri CHANGE hrg_barang hrg_bayar int(15);`,
      },
      {
        language: "sql",
        title: "2. xyz_transactions_locking.sql",
        subtitle: "Transactions & Concurrency · ACID Savepoint, Rollback & Table Locking",
        description:
          "Implementation of atomic transaction blocks with multi-level savepoints, selective rollback, and pessimistic table read locks.",
        code: `-- DML: Data Ingestion
INSERT INTO jenis_barang VALUES
('001','Makanan'),('002','Minuman'),('003','Kelontong'),('004','Perawatan');

INSERT INTO barang VALUES
('MK01','Roti Tawar',18000,'001'),
('PR01','Sabun Mandi',12000,'004'),
('PR03','Sampo',21000,'004');

INSERT INTO kasir VALUES
('KK01','Andi Yoga'),('KK02','Zahra Mila'),('KK03','Sarla Gania'),
('KK04','Danang Galih'),('KK05','Ananda Putri');

INSERT INTO pelanggan VALUES
('PL01','Amanda Zaki'),('PL02','Banu Razika'),('PL03','Zakila Afifah'),
('PL04','Fadhli Raza'),('PL05','Nana Aminah');

-- Subclass Population
INSERT INTO pel_baru VALUES ('DF01','PL05'),('DF02','PL01'),('DF03','PL04');
INSERT INTO pel_lama VALUES ('MB01','PL02'),('MB02','PL03');

INSERT INTO transaksi VALUES
('TR001','PL02',18000,1,'MK01','KK02'),
('TR005','PL03',15000,3,'MN03','KK05');

-- ACID Transaction Controls: SAVEPOINT & ROLLBACK
START TRANSACTION;
UPDATE barang SET nm_barang = 'Sabun Mandi Herbal' WHERE kd_barang = 'PR01';
SAVEPOINT a;

INSERT INTO barang (kd_barang) VALUES ('PR03');
SAVEPOINT b;

INSERT INTO barang (kd_barang) VALUES ('MN01');
ROLLBACK TO b; -- Rollback MN01 insert
ROLLBACK TO a; -- Rollback PR03 insert
COMMIT;

-- Concurrency Control: Table Locking
LOCK TABLES kasir READ;
-- Following insert will be blocked while read-lock is held:
-- INSERT INTO kasir VALUES ('KK06', 'Dayat Hidayat');
UNLOCK TABLES;
INSERT INTO kasir VALUES ('KK06', 'Dayat Hidayat'); -- Operasi berhasil setelah tabel di-unlock`,
      },
      {
        language: "sql",
        title: "3. xyz_subqueries_views.sql",
        subtitle: "Advanced Queries · Subqueries, Aggregates & Materialized Views",
        description:
          "Nested subqueries for statistical boundary lookup, analytical views, and relational joins spanning subclass tables.",
        code: `-- Subqueries: Analisis Kuantitas & Harga Berbasis Sub-kueri
SELECT * FROM transaksi WHERE jumlah = (SELECT MAX(jumlah) FROM transaksi);
SELECT * FROM transaksi WHERE jumlah = (SELECT MIN(jumlah) FROM transaksi);
SELECT * FROM transaksi WHERE hrg_bayar = (SELECT AVG(hrg_bayar) FROM transaksi);

-- Subqueries: Deteksi Produk Belum Terjual & Filter Pelanggan
SELECT * FROM barang WHERE kd_barang NOT IN (SELECT DISTINCT kd_barang FROM transaksi);
SELECT * FROM transaksi WHERE kd_pel IN (SELECT DISTINCT kd_pel FROM pelanggan WHERE kd_pel = 'PL02');

-- Analytical Views
CREATE VIEW harga_murah AS SELECT * FROM transaksi WHERE hrg_bayar < 10000;
CREATE VIEW harga_mahal AS SELECT * FROM transaksi WHERE hrg_bayar > 10000;
CREATE VIEW jenis_makanan AS SELECT * FROM barang WHERE kd_jenis = '001';

-- Relational Joins dengan Entitas Subclass
SELECT p.kd_pel, p.nm_pel, t.kd_trans, t.hrg_bayar
FROM pelanggan p
INNER JOIN transaksi t ON p.kd_pel = t.kd_pel;

SELECT p.kd_pel, p.nm_pel, pl.kd_member
FROM pelanggan p
INNER JOIN pel_lama pl ON p.kd_pel = pl.kd_pel;

SELECT b.kd_barang, b.nm_barang, t.kd_trans
FROM barang b
LEFT JOIN transaksi t ON b.kd_barang = t.kd_barang;`,
      },
    ],
    gallery: [
      {
        title: "Enhanced Entity-Relationship (EER) Konseptual",
        image: "/images/projects/supermarket-xyz/01-eer-conceptual-diagram.jpg",
        badge: "Conceptual EER Model",
        caption: "Diagram EER Supermarket XYZ dengan hierarki spesialisasi pelanggan (Pelanggan Baru & Pelanggan Lama), kardinalitas relasi multi-tabel (Barang, Jenis Barang, Transaksi, Kasir), dan relasi asosiasi 'Terdiri'.",
      },
      {
        title: "Skema Relasi Antar Tabel (Relational Schema)",
        image: "/images/projects/supermarket-xyz/02-relational-schema-mapping.jpg",
        badge: "Logical Relational Schema",
        caption: "Pemetaan relasi basis data ternormalisasi (3NF) mendefinisikan Primary Key, Foreign Key dependencies, serta integritas referensial antar tabel Barang, Jenis Barang, Transaksi, Kasir, dan Pelanggan.",
      },
    ],
  },

  // 14. Database System for Nikmat Restaurant
  {
    id: 18,
    slug: "database-system-nikmat-restaurant",
    title: "Database System for Nikmat Restaurant",
    affiliation: "Database System Course",
    projectType: "Group Project",
    domain: "Database System",
    category: "Database Design & Management",
    year: "2023",
    role: "Database Developer",
    duration: "2 Weeks",
    tools: ["MySQL", "Draw.io", "SQL"],
    coverImage: "/images/projects/nikmat-restaurant/02-relasi-antar-tabel-schema.png",
    shortDescription:
      "Database system design managing customer orders, menu items, and transaction processing using ERD and SQL views.",
    links: {
      report: "",
    },
    overview:
      "This project involves the design of a database system for a restaurant, focusing on efficiently managing customer orders, menu items, and transactions. It includes creating Entity-Relationship Diagrams (ERD) to visually represent the structure and relationships between key entities.",
    workDone: [
      "Designed the database structure, including creating Entity-Relationship Diagrams (ERD), defining primary and foreign keys, and establishing relationships between tables.",
      "Developed and executed SQL queries for data manipulation, retrieval, and aggregation, ensuring accurate and efficient processing of customer orders, menu management, and transactions.",
    ],
    keyLearnings:
      "This project has provided me with a deeper understanding of database design and its role in improving business processes. I learned how to analyze real-world challenges and translate them into structured systems that are both efficient and scalable. Through SQL query implementation, I enhanced my technical skills and became more confident in handling data manipulation tasks.",
    sqlTopics: [
      "DDL (CREATE TABLE & PK/FK)",
      "DML (INSERT & UPDATE)",
      "AGGREGATE FUNCTIONS",
      "GROUP BY & ORDER BY",
      "LIKE / NOT LIKE",
      "MATERIALIZED VIEWS",
      "MULTI-TABLE JOINS (INNER, LEFT, RIGHT)",
    ],
    codeSnippets: [
      {
        language: "sql",
        title: "1. nikmat_schema_ddl.sql",
        subtitle: "DDL · Database & Relational Table Creation",
        description:
          "Schema creation for Pelanggan, Menu, Jenis Menu, Pelayan, and Transaksi tables in MariaDB.",
        code: `-- DDL: Create Database & Relational Tables
CREATE DATABASE IF NOT EXISTS RestoranNikmat;
USE RestoranNikmat;

CREATE TABLE pelanggan (
  kode_pel varchar(10) NOT NULL PRIMARY KEY,
  nama_pel varchar(25) NOT NULL,
  alamat_pel varchar(30) NOT NULL,
  telp_pel varchar(15) NOT NULL,
  id_meja varchar(10) NOT NULL
);

CREATE TABLE jenis_menu (
  kode_jns char(5) NOT NULL PRIMARY KEY,
  nm_jenis varchar(25) NOT NULL
);

CREATE TABLE menu (
  kode_menu varchar(10) NOT NULL PRIMARY KEY,
  nama_menu varchar(25) NOT NULL,
  hrg_menu int(15) NOT NULL,
  kode_jns char(5) NOT NULL,
  FOREIGN KEY (kode_jns) REFERENCES jenis_menu(kode_jns)
);

CREATE TABLE pelayan (
  kode_pelayan varchar(10) NOT NULL PRIMARY KEY,
  nama_pelayan varchar(25) NOT NULL,
  jabatan varchar(15) NOT NULL
);

CREATE TABLE transaksi (
  kode_trans varchar(10) NOT NULL PRIMARY KEY,
  kode_pel varchar(10) NOT NULL,
  harga_byr int(15) NOT NULL,
  jml int(5) NOT NULL,
  kode_menu varchar(10) NOT NULL,
  FOREIGN KEY (kode_pel) REFERENCES pelanggan(kode_pel),
  FOREIGN KEY (kode_menu) REFERENCES menu(kode_menu)
);

DESC pelanggan;
DESC menu;
DESC transaksi;`,
      },
      {
        language: "sql",
        title: "2. nikmat_dml_crud.sql",
        subtitle: "DML · Data Insertion & Targeted Record Updates",
        description:
          "Data population across master and transactional entities, along with conditional record update scripts.",
        code: `-- DML: Insert Master & Transactional Records
INSERT INTO pelanggan VALUES
('P001','Syifa Najwa','Jl. Manggis No.12','087834562987','A20'),
('P002','Budi Satria','Jl. Wijaya Kusuma No.01','082143865928','A12'),
('P003','Imelda Sephia','Jl. Mawar NO.4','081243865928','A15'),
('P004','Iqbal Alamsyah','Jl. Merdeka No.10','082110592730','A18'),
('P005','Faisal Zaki','Jl. Damai No.06','085887011288','A22');

INSERT INTO jenis_menu VALUES
('001','Makanan Berat'),
('002','Makanan Ringan'),
('003','Minuman'),
('004','Buah');

INSERT INTO menu VALUES
('BR01','Nasi Ayam Goreng',35000,'001'),
('BR02','Nasi Ikan Goreng',40000,'001'),
('BR03','Nasi Bebek Bakar',83000,'001'),
('MR01','Kue Pancong',15000,'002'),
('MN01','Es Teh Manis',10000,'003'),
('MN04','Jus Alpukat',35000,'003'),
('BU04','Durian',75000,'004');

INSERT INTO pelayan VALUES
('KM01','Ardi Wibowo','Manajer Utama'),
('KC01','Bunga Cantika','Chef'),
('KC02','Shadiq Dewangga','Chef'),
('KK01','Sinta Rini','Kasir'),
('KP01','Diva Putri','Pelayan');

INSERT INTO transaksi VALUES
('TR0001','P004',40000,1,'BR02'),
('TR0002','P001',83000,1,'BR03'),
('TR0010','P003',35000,7,'MN04');

-- Targeted Updates
UPDATE menu SET hrg_menu = 20000 WHERE nama_menu = 'Kue Pancong';
UPDATE pelayan SET jabatan = 'Receptionist' WHERE nama_pelayan = 'Bunga Cantika';
UPDATE pelanggan SET telp_pel = '088289992962' WHERE nama_pel = 'Budi Satria';`,
      },
      {
        language: "sql",
        title: "3. nikmat_analytics_joins_views.sql",
        subtitle: "Analytics · Agregat, Views & Multi-Table Joins",
        description:
          "Statistical aggregations, group-by summaries, pattern matching, materialized views, and inner/left/right join operations.",
        code: `-- Fungsi Agregat
SELECT SUM(harga_byr) AS total_omset FROM transaksi;
SELECT MAX(hrg_menu) AS harga_termahal FROM menu;
SELECT MIN(hrg_menu) AS harga_termurah FROM menu;
SELECT AVG(harga_byr) AS rata_rata_harga_bayar FROM transaksi;

-- GROUP BY & ORDER BY
SELECT harga_byr, COUNT(*) AS total_transaksi FROM transaksi GROUP BY harga_byr;
SELECT * FROM menu ORDER BY hrg_menu ASC;
SELECT * FROM menu ORDER BY hrg_menu DESC;

-- LIKE & NOT LIKE Pattern Matching
SELECT * FROM menu WHERE nama_menu LIKE 'm%';
SELECT * FROM menu WHERE nama_menu NOT LIKE '%a';

-- Materialized Views
CREATE VIEW menu_murah AS
  SELECT kode_menu, nama_menu, hrg_menu FROM menu WHERE hrg_menu < 20000;

CREATE VIEW menu_mahal AS
  SELECT kode_menu, nama_menu, hrg_menu FROM menu WHERE hrg_menu > 50000;

CREATE VIEW daftar_minuman AS
  SELECT kode_menu, nama_menu, hrg_menu FROM menu WHERE kode_jns = '003';

CREATE VIEW daftar_buah AS
  SELECT kode_menu, nama_menu, hrg_menu FROM menu WHERE kode_jns = '004';

-- Multi-Table Joins (INNER, LEFT, RIGHT)
SELECT m.kode_menu, m.nama_menu, m.hrg_menu, t.kode_trans, t.harga_byr
FROM menu m 
INNER JOIN transaksi t ON m.kode_menu = t.kode_menu;

SELECT m.kode_menu, m.nama_menu, t.kode_trans
FROM menu m 
LEFT JOIN transaksi t ON m.kode_menu = t.kode_menu;

SELECT m.nama_menu, t.kode_trans, t.jml, t.harga_byr
FROM menu m 
RIGHT JOIN transaksi t ON m.kode_menu = t.kode_menu;`,
      },
    ],
    gallery: [
      {
        title: "Entity-Relationship Diagram (ERD) Konseptual",
        image: "/images/projects/nikmat-restaurant/01-erd-conceptual-model.png",
        badge: "Conceptual ERD Model",
        caption: "Diagram ERD sistem pemesanan Restoran Nikmat yang memetakan relasi entitas Jenis Menu, Menu, Menu Transaksi, Transaksi, Pelanggan, dan Pelayan beserta seluruh atribut operasional.",
      },
      {
        title: "Skema Relasi Antar Tabel (Relational Schema)",
        image: "/images/projects/nikmat-restaurant/02-relasi-antar-tabel-schema.png",
        badge: "Logical Relational Schema",
        caption: "Pemetaan skema relasi basis data ternormalisasi (3NF) lengkap dengan relasi Foreign Key (FK) dari Jenis Menu, Pelanggan, dan Menu ke tabel junction Menu Transaksi dan Transaksi.",
      },
      {
        title: "Struktur Basis Data & Pemetaan Kunci PK-FK",
        image: "/images/projects/nikmat-restaurant/03-data-structure-relational-mapping.png",
        badge: "Data Structure Diagram",
        caption: "Visualisasi struktur data relasional mendetail dengan representasi formal primary key (@) dan foreign key (@@) antar entitas master dan tabel transaksi restoran.",
      },
    ],
  },

  // 15. ETL Pipeline for Sentiment Analysis on Jakarta Gubernatorial Election 2017
  {
    id: 19,
    slug: "etl-pipeline-jakarta-election-2017",
    title: "ETL Pipeline for Sentiment Analysis on Jakarta Gubernatorial Election 2017",
    affiliation: "Big Data Course",
    projectType: "Individual Project",
    domain: "Data Engineer",
    category: "ETL Development & Data Pipelines",
    year: "2024",
    role: "Data Engineer",
    duration: "2 Days",
    tools: ["Pentaho Data Integration (PDI)", "MySQL", "ETL"],
    coverImage: "/images/projects/jakarta-election-etl/01-pentaho-etl-transformation-pipeline.png",
    shortDescription:
      "ETL pipeline to preprocess, clean, transform, and normalize public sentiment data on candidates in the 2017 Jakarta gubernatorial election.",
    links: {
      report: "",
    },
    overview:
      "This project aims to preprocess and transform data related to public sentiment analysis for candidates in the 2017 Jakarta gubernatorial election. The data, sourced from CSV files, was cleaned, transformed, and normalized using advanced data processing techniques to prepare it for analysis.",
    workDone: [
      "Filtered Jakarta-specific data, removed duplicates, normalized text, and handled missing values using mean imputation.",
      "Applied Min-Max Scaling, calculated engagement metrics, and organized data into structured database tables.",
      "Implemented error handling, logging mechanisms, and automated daily workflows for seamless data processing.",
    ],
    keyLearnings:
      "This project was an excellent opportunity to deepen my understanding of big data processing techniques. I learned how to systematically clean, transform, and normalize data to enhance its quality for analysis, while also implementing reliable error handling and logging mechanisms to ensure the robustness of the data pipeline. Managing large datasets and storing them in well-structured databases improved my organizational skills and familiarity with database management systems. Additionally, automating workflows through job scheduling taught me how to create efficient and repeatable processes.",
    gallery: [
      {
        title: "Pentaho ETL Transformation Pipeline: Pilkada DKI 2017",
        image: "/images/projects/jakarta-election-etl/01-pentaho-etl-transformation-pipeline.png",
        badge: "ETL Pipeline Architecture",
        caption: "End-to-end Pentaho Data Integration (PDI) transformation pipeline: pembersihan data CSV, filtering wilayah Jakarta, penanganan duplikasi & missing values (mean imputation), normalisasi teks, Min-Max feature scaling, serta segregasi data ke Table Paslon dan Table Sentiment lengkap dengan step error handling.",
      },
    ],
  },

  // 16. ETL Pipeline for Transaction Data Integration
  {
    id: 20,
    slug: "etl-pipeline-transaction-data-integration",
    title: "ETL Pipeline for Transaction Data Integration",
    affiliation: "Big Data Course",
    projectType: "Individual Project",
    domain: "Data Engineer",
    category: "ETL Development & Data Pipelines",
    year: "2024",
    role: "Data Engineer",
    duration: "1 Day",
    tools: ["Pentaho Data Integration (PDI)", "MySQL", "MongoDB", "ETL"],
    coverImage: "/images/projects/transaction-etl/01-pentaho-transaction-etl-pipeline.jpg",
    shortDescription:
      "ETL pipeline integrating transaction, customer, and product datasets into unified storage systems across MySQL and MongoDB.",
    links: {
      report: "",
    },
    overview:
      "This project focuses on developing an ETL pipeline to process and integrate transaction data with customer and product datasets. The goal was to create a unified dataset for analytical purposes, store the final output in MySQL and MongoDB, implement error handling, schedule daily jobs, and configure logging to monitor data processes.",
    workDone: [
      "Designed and implemented an ETL pipeline to clean, transform, and integrate transactional, customer, and product datasets into unified storage systems (MySQL and MongoDB).",
      "Performed data transformation, including handling missing values, calculating statistical metrics, and deriving new fields such as total sales and average prices.",
      "Automated pipeline execution with daily scheduling and implemented logging and error handling mechanisms to ensure process reliability.",
    ],
    keyLearnings:
      "Through this project, I gained practical experience in developing end-to-end ETL pipelines, enhancing my technical proficiency in data transformation and integration. I learned to handle real-world data issues, such as missing values and inconsistencies, while improving my skills in using SQL and NoSQL databases. Additionally, I developed an understanding of job automation and the importance of monitoring and error handling for ensuring data processing reliability. This experience reinforced my problem-solving abilities and readiness to tackle challenges in data engineering.",
    gallery: [
      {
        title: "Pentaho Transaction ETL Pipeline: MySQL & MongoDB Integration",
        image: "/images/projects/transaction-etl/01-pentaho-transaction-etl-pipeline.jpg",
        badge: "Multi-Source ETL Architecture",
        caption: "Integrasi data multi-sumber (CSV Produk, CSV Pelanggan, dan Table Transaksi RDBMS) dengan transformasi merge join, kalkulasi statistik (rata-rata harga, total penjualan, jumlah pesanan), serta pemuatan simultan ke MySQL dan NoSQL MongoDB lengkap dengan mekanisme error handling.",
      },
    ],
  },

  // 17. ETL Pipeline for Sales Dataset
  {
    id: 21,
    slug: "etl-pipeline-sales-dataset",
    title: "ETL Pipeline for Sales Dataset",
    affiliation: "Big Data Course",
    projectType: "Individual Project",
    domain: "Data Engineer",
    category: "ETL Development & Data Pipelines",
    year: "2024",
    role: "Data Engineer",
    duration: "3 Days",
    tools: ["Pentaho Data Integration (PDI)", "MySQL", "ETL"],
    coverImage: "/images/projects/sales-etl/01-pentaho-sales-etl-pipeline.png",
    shortDescription:
      "Data transformation pipeline handling missing values, extracting numeric fields, converting binary data, and configuring error handling in Pentaho.",
    links: {
      report: "",
    },
    overview:
      "This project focuses on performing data transformation tasks. The main goals are handling missing values, extracting numeric data, converting binary values to readable formats, and implementing robust error handling to ensure the smooth execution of the data pipeline.",
    workDone: [
      "Standardized numeric fields and addressed missing data using statistical methods such as mean and mode calculations.",
      "Designed a robust error handling mechanism to ensure pipeline resilience and prevent interruptions during transformation stages.",
      "Established a logging system to track all transformation activities, ensuring transparency and facilitating debugging.",
    ],
    keyLearnings:
      "This project provided valuable insights into big data processing and its applications in real-world scenarios. I gained hands-on experience in handling missing values using statistical approaches like mean and mode, which improved data quality and consistency. The implementation of error handling taught me the importance of building robust pipelines that can handle unexpected issues without disrupting operations. Additionally, integrating the processed data into a relational database deepened my understanding of database systems and their role in big data workflows. Setting up a comprehensive logging system further highlighted the importance of monitoring and transparency in data transformation projects. Overall, this experience enhanced my technical skills and reinforced my ability to manage end-to-end data processing pipelines.",
    gallery: [
      {
        title: "Pentaho Sales Dataset ETL Pipeline & Statistical Imputation",
        image: "/images/projects/sales-etl/01-pentaho-sales-etl-pipeline.png",
        badge: "ETL Transformation Pipeline",
        caption: "Alur kerja ETL Pentaho Data Integration: ekstraksi angka, konversi binary ke format normal, imputasi nilai hilang statistik bertahap (mean rating, modus kapasitas memory, modus kapasitas storage), mekanisme error handling terpusat ke Dummy step, dan pemuatan ke Table output relasional.",
      },
    ],
  },

  // 18. ETL Pipeline for Movie Dataset
  {
    id: 22,
    slug: "etl-pipeline-movie-dataset",
    title: "ETL Pipeline for Movie Dataset",
    affiliation: "Big Data Course",
    projectType: "Individual Project",
    domain: "Data Engineer",
    category: "ETL Development & Data Pipelines",
    year: "2024",
    role: "Data Engineer",
    duration: "3 Days",
    tools: ["Pentaho Data Integration (PDI)", "MySQL", "ETL"],
    coverImage: "/images/projects/movie-etl/01-pentaho-movie-etl-pipeline.png",
    shortDescription:
      "Cleaning and transforming movie datasets in Pentaho by row filtering, unique value extraction, and mean imputation for database storage.",
    links: {
      report: "",
    },
    overview:
      "This project demonstrates the process of cleaning and transforming big data using a practical case of movie datasets. The tasks involve filtering data, handling missing values, and preparing it for database storage.",
    workDone: [
      "Filtered and cleaned the movie dataset by separating roles (actors and directors) using row-based filtering and unique value extraction.",
      "Handled missing values in the imdb_score column by calculating and imputing the mean score.",
      "Merged and formatted datasets to ensure consistent and comprehensive data for analysis.",
    ],
    keyLearnings:
      "This project provided a deeper understanding of data preprocessing and transformation techniques essential for big data analysis. I learned to tackle challenges such as handling missing values and ensuring data consistency across multiple datasets. Additionally, I gained practical experience in using tools to automate workflows and integrate processed data into databases. The hands-on approach significantly enhanced my problem-solving skills and ability to handle complex data pipelines, preparing me for similar challenges in real-world scenarios.",
    gallery: [
      {
        title: "Pentaho Movie Dataset Transformation Workflow & Imputation",
        image: "/images/projects/movie-etl/01-pentaho-movie-etl-pipeline.png",
        badge: "ETL Pipeline Architecture",
        caption: "Alur kerja Pentaho Data Integration: pemisahan peran cast (actor & director) via filtering dan ekstraksi nilai unik ke tabel output masing-masing, kalkulasi imputasi mean untuk nilai null imdb_score, serta merge join antara metadata judul film dan sutradara ke penyimpanan database.",
      },
    ],
  },
];

export const projectCategories = [
  "All",
  "Work Projects",
  "Data Science & Analysis",
  "Business Intelligence",
  "Database Design & Management",
  "ETL Development & Data Pipelines",
  "Others",
];

