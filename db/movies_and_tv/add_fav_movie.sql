INSERT INTO fav_movies(
    movie_id,
    movie_pic,
    movie_rate,
    user_id
)
values (
    $1,
    $2,
    $3,
    $4
);