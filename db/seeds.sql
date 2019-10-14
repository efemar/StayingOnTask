USE exampledb;

INSERT INTO ProjectTypes SET name="birthday",createdAt=now(),updatedAt=now();

INSERT INTO CategoryTypes(name,createdAt,updatedAt) 
VALUES ("preparation", now(), now()),
("communication", now(), now()),
("reservation", now(), now()),
("supplies", now(), now()),
("financial", now(), now());

INSERT INTO TemplateTasks(description,createdAt,updatedAt,ProjectTypeId, CategoryTypeId) 
VALUES 
("Choose the Party Theme", now(), now(), 1, 1),
("Prepare the Guest List", now(), now(), 1, 1),
("Prepare Invitations", now(), now(), 1, 1),
("Set a Party Date", now(), now(), 1, 1),
("Plan the Menu", now(), now(), 1, 1),
("Write a Grocery List", now(), now(), 1, 1),
("Plan the Party Games", now(), now(), 1, 1),
("Mail, Email, or Handout Invitations", now(), now(), 1, 2),
("Call guests that haven't replied within the week", now(), now(), 1, 2),
("Send Thank you notes", now(), now(), 1, 2),
("Reserve Venue", now(), now(), 1, 3),
("Order Cake", now(), now(), 1, 3),
("Decorations", now(), now(), 1, 4),
("Disposable Plates, cutlery, napkins", now(), now(), 1, 4),
("Activities & Craft essentials", now(), now(), 1, 4),
("Music", now(), now(), 1, 4),
("Serving trays & Drink coolers", now(), now(), 1, 4),
("Charge the photo & video cameras", now(), now(), 1, 4),
("Bake Cake", now(), now(), 1, 4),
("Prepare food", now(), now(), 1, 4),
("Purchase Party Favors", now(), now(), 1, 5),
("Purchase party supplies", now(), now(), 1, 5),
("Purchase additonal party supplies", now(), now(), 1, 5),
("Purchase food and drink", now(), now(), 1, 5)