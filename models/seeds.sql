INSERT INTO ProjectTypes SET name="birthday",createdAt=now(),updatedAt=now();

INSERT INTO CategoryTypes(name,createdAt,updatedAt) 
VALUES ("communication", now(), now()),
("preparation", now(), now()),
("reservation", now(), now()),
("supplies", now(), now()),
("financial", now(), now());

INSERT INTO TemplateTasks(description,createdAt,updatedAt,ProjectTypeId, CategoryTypeId) 
VALUES ("Prepare the Guest List", now(), now(), 1, 1),
("Prepare Invitations", now(), now(), 1, 2),
("Reserve Venue", now(), now(), 1, 3),
("Purchase Food and Drink", now(), now(), 1, 4),
("Order Cake", now(), now(), 1, 5);