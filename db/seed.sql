insert into activity_categories (category_name, createdAt, updatedAt) values ("Bicycling", CURRENT_TIMESTAMP(), CURRENT_TIMESTAMP());
insert into activity_categories (category_name, createdAt, updatedAt) values ("Conditioning", CURRENT_TIMESTAMP(), CURRENT_TIMESTAMP());
insert into activity_categories (category_name, createdAt, updatedAt) values ("Running", CURRENT_TIMESTAMP(), CURRENT_TIMESTAMP());
insert into activity_categories (category_name, createdAt, updatedAt) values ("Sports", CURRENT_TIMESTAMP(), CURRENT_TIMESTAMP());
insert into activity_categories (category_name, createdAt, updatedAt) values ("Water Activities", CURRENT_TIMESTAMP(), CURRENT_TIMESTAMP());
insert into activity_categories (category_name, createdAt, updatedAt) values ("Winter Activities", CURRENT_TIMESTAMP(), CURRENT_TIMESTAMP());
insert into activity_categories (category_name, createdAt, updatedAt) values ("Walking", CURRENT_TIMESTAMP(), CURRENT_TIMESTAMP());

-- **********************************************
-- **********************************************

-- cycling 
insert into activities (activity_name, met, createdAt, updatedAt, fk_activity_category) 
values ("Bicycling - mountain","14", CURRENT_TIMESTAMP(), CURRENT_TIMESTAMP(),
(select id from activity_categories where category_name = "Bicycling")); 

insert into activities (activity_name, met, createdAt, updatedAt, fk_activity_category) 
values ("Bicycling - competitive","16", CURRENT_TIMESTAMP(), CURRENT_TIMESTAMP(),
(select id from activity_categories where category_name = "Bicycling")); 

insert into activities (activity_name, met, createdAt, updatedAt, fk_activity_category) 
values ("Bicycling - general","7.5", CURRENT_TIMESTAMP(), CURRENT_TIMESTAMP(),
(select id from activity_categories where category_name = "Bicycling")); 

insert into activities (activity_name, met, createdAt, updatedAt, fk_activity_category) 
values ("Bicycling - leisurely","3.5", CURRENT_TIMESTAMP(), CURRENT_TIMESTAMP(),
(select id from activity_categories where category_name = "Bicycling"));

insert into activities (activity_name, met, createdAt, updatedAt, fk_activity_category) 
values ("Unicycling","5", CURRENT_TIMESTAMP(), CURRENT_TIMESTAMP(),
(select id from activity_categories where category_name = "Bicycling"));

insert into activities (activity_name, met, createdAt, updatedAt, fk_activity_category) 
values ("Stationary Bike - vigorous","8.8", CURRENT_TIMESTAMP(), CURRENT_TIMESTAMP(),
(select id from activity_categories where category_name = "Bicycling")); 

insert into activities (activity_name, met, createdAt, updatedAt, fk_activity_category) 
values ("Stationary Bike - general","7", CURRENT_TIMESTAMP(), CURRENT_TIMESTAMP(),
(select id from activity_categories where category_name = "Bicycling")); 

-- conditioning 
insert into activities (activity_name, met, createdAt, updatedAt, fk_activity_category) 
values ("Calisthenics - general","8", CURRENT_TIMESTAMP(), CURRENT_TIMESTAMP(),
(select id from activity_categories where category_name = "Conditioning")); 

insert into activities (activity_name, met, createdAt, updatedAt, fk_activity_category) 
values ("Circuit Training","4.3", CURRENT_TIMESTAMP(), CURRENT_TIMESTAMP(),
(select id from activity_categories where category_name = "Conditioning")); 

insert into activities (activity_name, met, createdAt, updatedAt, fk_activity_category) 
values ("Elliptical Trainer","5", CURRENT_TIMESTAMP(), CURRENT_TIMESTAMP(),
(select id from activity_categories where category_name = "Conditioning")); 

insert into activities (activity_name, met, createdAt, updatedAt, fk_activity_category) 
values ("Rowing","4.8", CURRENT_TIMESTAMP(), CURRENT_TIMESTAMP(),
(select id from activity_categories where category_name = "Conditioning"));

insert into activities (activity_name, met, createdAt, updatedAt, fk_activity_category) 
values ("Weight Training","5", CURRENT_TIMESTAMP(), CURRENT_TIMESTAMP(),
(select id from activity_categories where category_name = "Conditioning")); 

insert into activities (activity_name, met, createdAt, updatedAt, fk_activity_category) 
values ("Pilates","3", CURRENT_TIMESTAMP(), CURRENT_TIMESTAMP(),
(select id from activity_categories where category_name = "Conditioning"));

insert into activities (activity_name, met, createdAt, updatedAt, fk_activity_category) 
values ("Water Aerobics","5.3", CURRENT_TIMESTAMP(), CURRENT_TIMESTAMP(),
(select id from activity_categories where category_name = "Conditioning")); 

insert into activities (activity_name, met, createdAt, updatedAt, fk_activity_category) 
values ("Yoga","3", CURRENT_TIMESTAMP(), CURRENT_TIMESTAMP(),
(select id from activity_categories where category_name = "Conditioning")); 

-- running
insert into activities (activity_name, met, createdAt, updatedAt, fk_activity_category) 
values ("Jogging","7", CURRENT_TIMESTAMP(), CURRENT_TIMESTAMP(),
(select id from activity_categories where category_name = "Running"));

insert into activities (activity_name, met, createdAt, updatedAt, fk_activity_category) 
values ("Running - moderate","11.8", CURRENT_TIMESTAMP(), CURRENT_TIMESTAMP(),
(select id from activity_categories where category_name = "Running")); 

insert into activities (activity_name, met, createdAt, updatedAt, fk_activity_category) 
values ("Running - vigorous","19", CURRENT_TIMESTAMP(), CURRENT_TIMESTAMP(),
(select id from activity_categories where category_name = "Running")); 

-- sports
insert into activities (activity_name, met, createdAt, updatedAt, fk_activity_category) 
values ("Basketball","8", CURRENT_TIMESTAMP(), CURRENT_TIMESTAMP(),
(select id from activity_categories where category_name = "Sports"));

insert into activities (activity_name, met, createdAt, updatedAt, fk_activity_category) 
values ("Bowling","3.8", CURRENT_TIMESTAMP(), CURRENT_TIMESTAMP(),
(select id from activity_categories where category_name = "Sports"));

insert into activities (activity_name, met, createdAt, updatedAt, fk_activity_category) 
values ("Boxing","12.8", CURRENT_TIMESTAMP(), CURRENT_TIMESTAMP(),
(select id from activity_categories where category_name = "Sports"));

insert into activities (activity_name, met, createdAt, updatedAt, fk_activity_category) 
values ("Football - recreational","8", CURRENT_TIMESTAMP(), CURRENT_TIMESTAMP(),
(select id from activity_categories where category_name = "Sports")); 

insert into activities (activity_name, met, createdAt, updatedAt, fk_activity_category) 
values ("Golf","4.8", CURRENT_TIMESTAMP(), CURRENT_TIMESTAMP(),
(select id from activity_categories where category_name = "Sports")); 

insert into activities (activity_name, met, createdAt, updatedAt, fk_activity_category) 
values ("Hockey","8", CURRENT_TIMESTAMP(), CURRENT_TIMESTAMP(),
(select id from activity_categories where category_name = "Sports")); 

insert into activities (activity_name, met, createdAt, updatedAt, fk_activity_category) 
values ("Rock Climbing","5.8", CURRENT_TIMESTAMP(), CURRENT_TIMESTAMP(),
(select id from activity_categories where category_name = "Sports")); 

insert into activities (activity_name, met, createdAt, updatedAt, fk_activity_category) 
values ("Soccer","7", CURRENT_TIMESTAMP(), CURRENT_TIMESTAMP(),
(select id from activity_categories where category_name = "Sports"));

insert into activities (activity_name, met, createdAt, updatedAt, fk_activity_category) 
values ("Tennis","7", CURRENT_TIMESTAMP(), CURRENT_TIMESTAMP(),
(select id from activity_categories where category_name = "Sports")); 

-- water activities
insert into activities (activity_name, met, createdAt, updatedAt, fk_activity_category) 
values ("Canoeing","5.8", CURRENT_TIMESTAMP(), CURRENT_TIMESTAMP(),
(select id from activity_categories where category_name = "Water Activities")); 

insert into activities (activity_name, met, createdAt, updatedAt, fk_activity_category) 
values ("Surfing","3", CURRENT_TIMESTAMP(), CURRENT_TIMESTAMP(),
(select id from activity_categories where category_name = "Water Activities"));

insert into activities (activity_name, met, createdAt, updatedAt, fk_activity_category) 
values ("Swimming - vigorous","9.8", CURRENT_TIMESTAMP(), CURRENT_TIMESTAMP(),
(select id from activity_categories where category_name = "Water Activities")); 

-- winter activities 
insert into activities (activity_name, met, createdAt, updatedAt, fk_activity_category) 
values ("Ice Skating","7", CURRENT_TIMESTAMP(), CURRENT_TIMESTAMP(),
(select id from activity_categories where category_name = "Winter Activities")); 

insert into activities (activity_name, met, createdAt, updatedAt, fk_activity_category) 
values ("Cross Country Skiing","9", CURRENT_TIMESTAMP(), CURRENT_TIMESTAMP(),
(select id from activity_categories where category_name = "Winter Activities")); 

insert into activities (activity_name, met, createdAt, updatedAt, fk_activity_category) 
values ("Downhill Skiing","5.3", CURRENT_TIMESTAMP(), CURRENT_TIMESTAMP(),
(select id from activity_categories where category_name = "Winter Activities")); 

-- walking 
insert into activities (activity_name, met, createdAt, updatedAt, fk_activity_category) 
values ("Backpacking","7", CURRENT_TIMESTAMP(), CURRENT_TIMESTAMP(),
(select id from activity_categories where category_name = "Walking")); 

insert into activities (activity_name, met, createdAt, updatedAt, fk_activity_category) 
values ("Hiking","5.3", CURRENT_TIMESTAMP(), CURRENT_TIMESTAMP(),
(select id from activity_categories where category_name = "Walking"));

insert into activities (activity_name, met, createdAt, updatedAt, fk_activity_category) 
values ("Race Walking","6.5", CURRENT_TIMESTAMP(), CURRENT_TIMESTAMP(),
(select id from activity_categories where category_name = "Walking"));

insert into activities (activity_name, met, createdAt, updatedAt, fk_activity_category) 
values ("Walking - leisurely","4", CURRENT_TIMESTAMP(), CURRENT_TIMESTAMP(),
(select id from activity_categories where category_name = "Walking")); 

insert into activities (activity_name, met, createdAt, updatedAt, fk_activity_category) 
values ("Walking - vigorous","5", CURRENT_TIMESTAMP(), CURRENT_TIMESTAMP(),
(select id from activity_categories where category_name = "Walking")); 


