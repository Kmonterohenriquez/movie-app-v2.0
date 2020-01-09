select 
    review_id,
    movie_id,
    r.user_id,
    item_type,
    u.username,
    movie_title,
    review_content,
    user_picture
from reviews r
join theater_users u on r.user_id = u.user_id
where r.movie_id = $1;