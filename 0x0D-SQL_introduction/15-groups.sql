-- List number of records with the same score in the table
--  sorted by number of records (descending)
SELECT
    score,
    COUNT(score) AS number
FROM
    second_table
GROUP BY
    score
ORDER BY
    score DESC;