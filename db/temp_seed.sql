--activities 

-- day 1

INSERT INTO `fitness_app2_db`.`user_activity_log` 
(`activity_dt`, `duration`, `calories_per_hour`, `calories_per_activity`, `createdAt`, `updatedAt`, `fk_user`, `fk_activity`)
VALUES ('2020-03-03 10:10:10', '30', '300', '150', '2020-03-03 10:10:10', '2020-03-03 10:10:10', '1', '59');

INSERT INTO `fitness_app2_db`.`user_activity_log` 
(`activity_dt`, `duration`, `calories_per_hour`, `calories_per_activity`, `createdAt`, `updatedAt`, `fk_user`, `fk_activity`)
VALUES ('2020-03-03 10:10:10', '55', '400', '200', '2020-03-03 10:10:10', '2020-03-03 10:10:10', '1', '61');

INSERT INTO `fitness_app2_db`.`user_activity_log` 
(`activity_dt`, `duration`, `calories_per_hour`, `calories_per_activity`, `createdAt`, `updatedAt`, `fk_user`, `fk_activity`)
VALUES ('2020-03-03 10:10:10', '30', '300', '150', '2020-03-03 10:10:10', '2020-03-03 10:10:10', '2', '59');

INSERT INTO `fitness_app2_db`.`user_activity_log` 
(`activity_dt`, `duration`, `calories_per_hour`, `calories_per_activity`, `createdAt`, `updatedAt`, `fk_user`, `fk_activity`)
VALUES ('2020-03-03 10:10:10', '55', '400', '200', '2020-03-03 10:10:10', '2020-03-03 10:10:10', '2', '61');

-- day 2

INSERT INTO `fitness_app2_db`.`user_activity_log` 
(`activity_dt`, `duration`, `calories_per_hour`, `calories_per_activity`, `createdAt`, `updatedAt`, `fk_user`, `fk_activity`)
VALUES ('2020-03-02 10:10:10', '30', '300', '150', '2020-03-03 10:10:10', '2020-03-03 10:10:10', '1', '59');

INSERT INTO `fitness_app2_db`.`user_activity_log` 
(`activity_dt`, `duration`, `calories_per_hour`, `calories_per_activity`, `createdAt`, `updatedAt`, `fk_user`, `fk_activity`)
VALUES ('2020-03-02 10:10:10', '55', '400', '200', '2020-03-03 10:10:10', '2020-03-03 10:10:10', '1', '61');

INSERT INTO `fitness_app2_db`.`user_activity_log` 
(`activity_dt`, `duration`, `calories_per_hour`, `calories_per_activity`, `createdAt`, `updatedAt`, `fk_user`, `fk_activity`)
VALUES ('2020-03-02 10:10:10', '30', '300', '150', '2020-03-03 10:10:10', '2020-03-03 10:10:10', '2', '59');

INSERT INTO `fitness_app2_db`.`user_activity_log` 
(`activity_dt`, `duration`, `calories_per_hour`, `calories_per_activity`, `createdAt`, `updatedAt`, `fk_user`, `fk_activity`)
VALUES ('2020-03-02 10:10:10', '55', '400', '200', '2020-03-03 10:10:10', '2020-03-03 10:10:10', '2', '61');

-- food

-- day 1 user 1

INSERT INTO `fitness_app2_db`.`user_foodlog` 
(`FoodId`, `FoodConsume_dt`, `Amount`, `Calories`, `Protein`, `Fat`, `Carbohydrates`, `createdAt`, `updatedAt`, `fk_user`, `fk_food`)
VALUES ('137', '2020-03-03 10:10:10', '1', '242', '15.17', '10.3', '22.21', '2020-03-03 10:10:10', '2020-03-03 10:10:10', '1', '137');

INSERT INTO `fitness_app2_db`.`user_foodlog` 
(`FoodId`, `FoodConsume_dt`, `Amount`, `Calories`, `Protein`, `Fat`, `Carbohydrates`, `createdAt`, `updatedAt`, `fk_user`, `fk_food`)
VALUES ('111', '2020-03-03 10:10:10', '1', '52', '0.26', '0.17', '13.81', '2020-03-03 10:10:10', '2020-03-03 10:10:10', '1', '111');

-- day 1 user 2

INSERT INTO `fitness_app2_db`.`user_foodlog` 
(`FoodId`, `FoodConsume_dt`, `Amount`, `Calories`, `Protein`, `Fat`, `Carbohydrates`, `createdAt`, `updatedAt`, `fk_user`, `fk_food`)
VALUES ('137', '2020-03-03 10:10:10', '1', '242', '15.17', '10.3', '22.21', '2020-03-03 10:10:10', '2020-03-03 10:10:10', '2', '137');

INSERT INTO `fitness_app2_db`.`user_foodlog` 
(`FoodId`, `FoodConsume_dt`, `Amount`, `Calories`, `Protein`, `Fat`, `Carbohydrates`, `createdAt`, `updatedAt`, `fk_user`, `fk_food`)
VALUES ('111', '2020-03-03 10:10:10', '1', '52', '0.26', '0.17', '13.81', '2020-03-03 10:10:10', '2020-03-03 10:10:10', '2', '111');

-- day 2 user 1 

INSERT INTO `fitness_app2_db`.`user_foodlog` 
(`FoodId`, `FoodConsume_dt`, `Amount`, `Calories`, `Protein`, `Fat`, `Carbohydrates`, `createdAt`, `updatedAt`, `fk_user`, `fk_food`)
VALUES ('137', '2020-03-02 10:10:10', '1', '242', '15.17', '10.3', '22.21', '2020-03-03 10:10:10', '2020-03-03 10:10:10', '1', '137');

INSERT INTO `fitness_app2_db`.`user_foodlog` 
(`FoodId`, `FoodConsume_dt`, `Amount`, `Calories`, `Protein`, `Fat`, `Carbohydrates`, `createdAt`, `updatedAt`, `fk_user`, `fk_food`)
VALUES ('111', '2020-03-02 10:10:10', '1', '52', '0.26', '0.17', '13.81', '2020-03-03 10:10:10', '2020-03-03 10:10:10', '1', '111');

-- day 2 user 2

INSERT INTO `fitness_app2_db`.`user_foodlog` 
(`FoodId`, `FoodConsume_dt`, `Amount`, `Calories`, `Protein`, `Fat`, `Carbohydrates`, `createdAt`, `updatedAt`, `fk_user`, `fk_food`)
VALUES ('137', '2020-03-02 10:10:10', '1', '242', '15.17', '10.3', '22.21', '2020-03-03 10:10:10', '2020-03-03 10:10:10', '2', '137');

INSERT INTO `fitness_app2_db`.`user_foodlog` 
(`FoodId`, `FoodConsume_dt`, `Amount`, `Calories`, `Protein`, `Fat`, `Carbohydrates`, `createdAt`, `updatedAt`, `fk_user`, `fk_food`)
VALUES ('111', '2020-03-02 10:10:10', '1', '52', '0.26', '0.17', '13.81', '2020-03-03 10:10:10', '2020-03-03 10:10:10', '2', '111');