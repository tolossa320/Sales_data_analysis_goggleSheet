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
- Regional performance: North recorded the highest sales (1,369,612.51); South recorded the lowest (1,154,250.86).
- Product categories: Clothing had the highest recorded category sales (1,313,474.36).
- Sales representatives: David had the highest recorded sales (1,141,737.36); Charlie had the lowest (860,811.48).
- Monthly trend: 2023-01 was the highest-sales month (476,092.36); 2024-01 was the lowest (19,328.01).
- Customer type counts are record counts, not unique people, because there is no customer ID.
- Profit and profit margin are not calculated because the meaning of Sales_Amount, Unit_Cost and Unit_Price needs confirmation.

## Important limitations
- Sales records are rows, not unique orders; the dataset has no order ID.
- Customer type counts are records, not distinct customers; no customer ID is provided.
- Profit/margin is intentionally omitted until the meanings of Sales_Amount, Unit_Cost, and Unit_Price are verified.
- Month-to-month changes do not, by themselves, prove seasonality or explain why sales changed.

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
