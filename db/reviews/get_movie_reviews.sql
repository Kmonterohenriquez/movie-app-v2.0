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
<<<<<<< HEAD
where r.movie_id = $1
order by review_id desc;
=======
where r.movie_id = $1;
>>>>>>> 662d577d9cfadc60a90cc5bf40ecf6c4dbad2043
