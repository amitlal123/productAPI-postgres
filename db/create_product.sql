-- Sample values
-- insert into products values('ipad-mini-4', 'Mini ipad version 4', 399, 'https://www.imore.com/sites/imore.com/files/styles/larger/public/field/image/2015/09/ipad-mini-4.jpg?itok=VSBAHESq');
-- insert into products values('MacBook Pro', 'MacBook Pro with Retina Display', 2795, 'https://cdn1.tnwcdn.com/wp-content/blogs.dir/1/files/2014/01/29-macbookpro-retina.jpg');
insert into products (name, description, price, imageurl) values($1, $2, $3, $4);
