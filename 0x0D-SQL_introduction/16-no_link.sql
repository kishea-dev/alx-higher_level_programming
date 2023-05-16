-- List all records with the score in descending order
--  name is is not null
SELECT
    score,
    name
FROM
    second_table
WHERE
    name IS NOT NULL
ORDER BY
    score DESC;