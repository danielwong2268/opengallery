const pg = require('../db/database')
const Promise = require('bluebird')

const util = require('../config/helpers')
const { isInt } = util

exports.fetch = (user, artist) => {
  if (isInt(user) && isInt(artist)) {
    return pg.raw(
      `SELECT array_to_json(array_agg(row_to_json(d))) as data
      FROM (
        SELECT
          m.id as media_id, m.title, m.media, m.description, m.width, m.height, m.url_small as url_sm, m.url_medium as url_md, m.url_large as url_lg,
          (
            SELECT mh.hashtag_id
            FROM media_hashtags mh
            WHERE mh.media_id = m.id
            AND mh.user_id = ${artist}
          ) as user_feedback_id,
          (
            SELECT row_to_json(a)
            FROM (
              SELECT u.id, u.username, u.avatar_url
              FROM users u
              WHERE u.id = m.user_id
            ) a
          ) as artist,
          (
            SELECT array_to_json(array_agg(row_to_json(f)))
            FROM (
              SELECT h.id, h.hashtag_text, mht.total
              FROM media_hashtag_totals mht
              INNER JOIN hashtags h
              ON (mht.hashtag_id = h.id)
              WHERE mht.media_id = m.id
            ) f
          ) as feedback
        FROM media m
        INNER JOIN users u
        ON (m.user_id = u.id)
        WHERE m.user_id = ${artist}
        ORDER BY m.id
      ) d`
    )
  } else {
    return Promise.reject(`User ID must be integer, not ${typeof user}`)
  }
}
