CREATE TABLE FdNutritionSummary (
  FoodId int NOT NULL,
  FdGrp_Desc varchar(50) not null,
  FdGrp_Cd varchar(10) null,
  FdName varchar(200) not null,
  Amount float not null,
  Msre_Desc varchar(100) ,
  Gm_Wgt float null,
  msre varchar(100) null,
  Calories float not null,
  Protein float not null,
  Fat float not null,
  Carbohydrates float not null,
  PRIMARY KEY (FoodId)
) 


alter table 