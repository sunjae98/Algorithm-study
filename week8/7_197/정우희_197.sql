SELECT id
FROM (
    SELECT id, temperature,
           LAG(temperature) OVER (ORDER BY recordDate) as prev_temperature
    FROM Weather
) as TempComparison
WHERE temperature > prev_temperature;