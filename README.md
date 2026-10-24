# Sales Data Analysis Project

## Overview
A portfolio-ready analysis of the provided sales dataset, prepared to support a Google Sheets dashboard matching the supplied dashboard design.

## Dataset
- Records: 1,000
- Fields: Product_ID, Sale_Date, Sales_Rep, Region, Sales_Amount, Quantity_Sold, Product_Category, Unit_Cost, Unit_Price, Customer_Type
- Date range: 2023-01-01 to 2024-01-01
- Currency: not specified in the source file.

## Headline KPIs
- Total recorded sales: 5,019,265.23
- Total units sold: 25,355
- Sales records: 1,000
- Average sales per record: 5,019.27

## Included analysis
- Monthly and quarterly sales
- Sales by region
- Sales by product category
- Sales by representative
- Customer-type record mix
- Data quality checks
- Chart PNGs and an Excel workbook

## Key findings
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
