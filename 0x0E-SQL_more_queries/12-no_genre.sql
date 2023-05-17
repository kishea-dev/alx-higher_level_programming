-- Lists all shows in hbtn_0d_tvshows without genres.
-- Records are sorted by ascending tv_shows.title and tv_show_genres.genre_id.
SELECT
  s.`title`,
  g.`genre_id`
FROM
  `tv_shows` AS s
  LEFT JOIN `tv_show_genres` AS g ON s.`id` = g.`show_id`
WHERE
  g.`genre_id` is NULL
ORDER BY
  s.`title`,
  g.`genre_id`;