INSERT INTO fav_movies(
    show_id,
    show_pic,
    show_rate,
    user_id
)
values (
    $1,
    $2,
    $3,
    $4
);