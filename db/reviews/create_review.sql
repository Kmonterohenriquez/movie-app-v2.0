INSERT INTO reviews (
    movie_id,
    user_id,
    review_content,
    movie_title
) VALUES (
    $1,
    $2,
    $3,
    $4
);