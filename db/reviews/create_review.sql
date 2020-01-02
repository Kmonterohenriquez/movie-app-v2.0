INSERT INTO reviews (
    movie_id,
    user_id,
    review_content,
    movie_title,
    item_type
) VALUES (
    $1,
    $2,
    $3,
    $4,
    $5
);

select * from reviews where movie_id = $1;