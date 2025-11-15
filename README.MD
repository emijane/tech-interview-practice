1️⃣ Filtering + Mapping Together

Examples:

Return only phones above $500 and extract only {name, price}

Filter users by age and return their first names

Filter products based on availability and map into display objects

Mixes 2 skills:

filter logic

transform objects

2️⃣ Filtering + Deduping

Examples:

Remove duplicate product names but keep only items above a price

Unique users by email after filtering by active status

Mixes:

dedupe by key

includes logic

conditional logic

3️⃣ Grouping (By Category, Nested Keys)

This is a big one.

Examples:

Group products by category

Group students by grade

Group boats by type

Group files by extension

Group orders by date (YYYY-MM-DD)

Key skills:

working with objects as dictionaries

creating keys dynamically

pushing into nested arrays

4️⃣ Mapping + Grouping Combined

Examples:

Create groups where each item is {name, price}

Organize data into render-ready shape for UI components

Transform raw API data into “sections” for React components

5️⃣ Deduping + Grouping Combined

Example:

Products grouped by category but only unique product names

Events grouped by month with duplicates removed

Skills required:

dedupe by a key

check existence

manipulate nested arrays

6️⃣ Sorting Objects Inside Groups (Descending or Ascending)

Examples:

Sort items inside each category by price

Sort students in each class by GPA

Sort files by size within folders

Skills:

using .sort() with compare functions

sorting arrays inside objects

sorting newly pushed data

7️⃣ Full “Data Pipeline” Problems (the ones you solved)

This is where Level 3 peaks.

A full pipeline includes:

filtering

deduping

grouping

mapping

sorting

returning a structured object ready for UI