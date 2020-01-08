create table theater_users(
    user_id serial primary key,
    username VARCHAR(30) not null,
    email varchar(100),
    password varchar(250) not null,
    user_picture varchar(250)
);

create table reviews(
    review_id serial PRIMARY KEY,
    movie_id int not null,
    review_content text,
    movie_title varchar(150),
    user_id int REFERENCES theater_users(user_id)
);

create table fav_movies(
    fav_movie_id serial PRIMARY KEY,
    movie_id int,
    movie_pic VARCHAR(250),
    movie_rate int,
    user_id int REFERENCES theater_users(user_id)
);

create table fav_shows(
    fav_shows_id serial PRIMARY KEY,
    show_id int,
    show_pic VARCHAR(250),
    show_rate int,
    user_id int REFERENCES theater_users(user_id)
);
