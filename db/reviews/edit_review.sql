UPDATE reviews 
set review_content = $2
where review_id = $1;