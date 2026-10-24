# Sales Data Analysis Using Google Sheets

## Overview
This project analyzes sales data using Google Sheets to identify revenue trends, product category performance, regional differences, sales representative performance, and customer purchasing patterns.

## Objective
- Analyze total recorded sales revenue and units sold.
- Compare revenue across regions and product categories.
- Evaluate sales representative performance.
- Identify monthly sales trends.
- Compare new and returning customer transactions.
- Present findings through a visual dashboard.

## Dataset
The dataset contains 1,000 sales records and 10 original columns, including sale date, product ID, sales representative, region, sales amount, quantity sold, product category, unit cost, unit price, and customer type.
## Tools Used
- Google Sheets
- Spreadsheet formulas
- Charts and visualizations
## Included analysis
- Monthly and quarterly sales
- Sales by region
- Sales by product category
- Sales by representative
- Customer-type record mix
- Data quality checks
- Chart PNGs and an Excel workbook

## 📈 Key Performance Indicators (KPIs)
The dashboard focuses on the following metrics:
- Total Recorded Revenue: Sum of Sales_Amount.
- Total Units Sold: Sum of Quantity_Sold.
- Total Sales Records: Count of sales records.
- Average Recorded Sales per Record: Average of Sales_Amount.
- Unique Product IDs: Count of distinct product identifiers.
- Revenue by Region: Recorded revenue grouped by region.
- Revenue by Product Category: Recorded revenue grouped by category.
- Customer-Type Revenue: Recorded revenue grouped by customer type.

## 🔍 Analysis and Business Questions
1. Sales Performance Analysis

## Recreate in Google Sheets
1. Open Google Sheets and create a blank spreadsheet.
2. Select **File → Import → Upload** and import `sales_data_with_time_fields.csv`.
3. Import the summary CSVs into separate tabs or create pivot tables from the analysis data.
4. Build line/bar/pie charts from the summary tabs.
5. Add slicers for Region, Product_Category, Sales_Rep, and Customer_Type if available in your Sheets interface.
6. Use the chart PNGs as reference images; the values in the tables are calculated from the supplied dataset.

## Files
- `sales_data_raw_copy.csv`: copy of source data
- `sales_data_with_time_fields.csv`: data with Sale_Month, Sale_Year, Sale_Quarter
- Summary CSV files: monthly, quarterly, region, category, representative, customer type
- `data_quality_checks.csv`: data quality checks
- `sales_analysis_workbook.xlsx`: workbook with data and summary tabs
- `charts/`: charts generated from the data
- `dashboard_design_reference.png`: supplied visual design reference, if included
