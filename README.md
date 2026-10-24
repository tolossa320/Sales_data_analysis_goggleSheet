# Sales Data Analysis Using Google Sheets

## 📌 Project Overview
This project analyzes sales data using Google Sheets to identify revenue trends, product category performance, regional differences, sales representative performance, and customer purchasing patterns.

## 🎯 Project Objectives
- Analyze total recorded sales revenue and units sold.
- Compare revenue across regions and product categories.
- Evaluate sales representative performance.
- Identify monthly sales trends.
- Compare new and returning customer transactions.
- Present findings through a visual dashboard.

## Dataset
The dataset contains 1,000 sales records and 10 original columns, including sale date, product ID, sales representative, region, sales amount, quantity sold, product category, unit cost, unit price, and customer type.
## 🛠️ Tools and Technologies
- Google Sheets: Data preparation, calculations, PivotTables, charts, and dashboard creation.
- Spreadsheet formulas: Calculating metrics and extracting date information.
- Data visualization: Presenting business performance through charts.
## Data Cleaning and Preparation
1. The following data preparation activities are included in the project:
2. Checked the dataset for missing values.
2. Reviewed records for potential duplicates.
3. Validated date formats and chronological order.
4. Formatted numerical fields.
5. Reviewed product categories and customer classifications for consistency.
6. Created additional date columns for analysis:
- Year
- Month
- Month-Year
7. Investigated inconsistencies between recorded sales amounts, quantities, unit costs, and unit prices.
  
The original dataset is preserved separately from the prepared data to maintain data integrity.
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
## 1. Sales Performance Analysis
- What is the total recorded revenue?
- How many units were sold?
-What is the average recorded sales amount per record?
How does revenue change over time?

## 2. Product Category Analysis
- Which product categories generate the highest recorded revenue?
- Which categories sell the largest number of units?
- Are the highest-revenue categories also the highest-volume categories?
## 3. Regional Sales Analysis
- Which region records the highest sales?
- Which region records the lowest sales?
- How does product performance differ across regions?
## 4. Sales Representative Analysis
- Which sales representatives record the highest revenue?
- How many units are sold by each representative?
- What differences exist in recorded sales performance?
## 5. Customer Purchasing Patterns
Customer purchasing patterns describe the behaviors observed in sales records, including the types of products purchased, recorded spending, purchase timing, and differences between customer classifications.

This analysis compares:
- New versus returning customer transactions.
- Recorded revenue by customer type.
- Product category performance.
- Monthly sales trends.
- Regional sales performance.
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
