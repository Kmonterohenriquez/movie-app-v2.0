INSERT INTO fav_movies(
    movie_id,
    movie_pic,
    movie_rate,
    user_id,
    movie_name
)
values (
    $1,
    $2,
    $3,
    $4,
    $5
);