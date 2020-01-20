INSERT INTO fav_shows(
    show_id,
    show_pic,
    show_rate,
    user_id,
    tv_name
)
values (
    $1,
    $2,
    $3,
    $4,
    $5
);