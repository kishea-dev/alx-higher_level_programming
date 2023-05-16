-- Dispaly the top 3 of cities temprature during july and august
SELECT
    city,
    AVG(value) AS avg_temp
FROM
    temperatures
WHERE
    month = 8
    OR month = 7
GROUP BY
    city
ORDER BY
    avg_temp DESC
LIMIT
    3;