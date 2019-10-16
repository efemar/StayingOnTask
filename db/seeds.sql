USE exampledb;

INSERT INTO ProjectTypes (name,createdAt,updatedAt)
values("birthday", now(), now()),("wedding", now(), now());;



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



INSERT INTO TemplateTasks(description,createdAt,updatedAt,ProjectTypeId, CategoryTypeId) 
VALUES 
("Choose a date and two back ups", now(), now(), 2 , 1),
("Talk Budget & decide who is contributing to what", now(), now(), 2 , 5),
("Decide on the general style you are shooting for", now(), now(), 2 , 2),
("Choose a Wedding Party", now(), now(), 2 , 1),
("Get engagement ring insured and consider purchasing wedding insurance", now(), now(), 2 , 5),
("Explore Ceremony & Reception venues", now(), now(), 2 , 3),
("Begin compiling Guest List", now(), now(), 2 , 2),
("Get Engagement photos taken", now(), now(), 2 , 5),
("Order the Save the Dates", now(), now(), 2 , 3),
("Hire Planner", now(), now(), 2 , 3),
("Hire Photographer", now(), now(), 2 , 3),
("Hire Videographer", now(), now(), 2 , 3),
("Hire Caterer", now(), now(), 2 , 3),
("Hire Florist", now(), now(), 2 , 3),
("Hire Musicians/Band/DJ", now(), now(), 2 , 3),
("Reserve ceremony & reception venues", now(), now(), 2 , 3),
("Book officiant", now(), now(), 2 , 3),
("Give Deposit to Photographer", now(), now(), 2 , 5),
("Give Deposit to Videographer", now(), now(), 2 , 5),
("Reserve Facilities Rentals", now(), now(), 2 , 3),
("Order Menu cards", now(), now(), 2 , 5),
("Purchase Toasting Flutes", now(), now(), 2 , 5),
("Purchase Serving Pieces", now(), now(), 2 , 5),
("Purchase Guest Book", now(), now(), 2 , 5),
("Purchase Flower Basket", now(), now(), 2 , 5),
("Purchase Ring Bearer Pillow", now(), now(), 2 , 5),
("Mail Wedding Invitations", now(), now(), 2 , 2),
("Begin writing vows", now(), now(), 2 , 1),
("Apply for marriage license: order 2-3 extra", now(), now(), 2 , 1),
("Create wedding day timeline & send to your vendors, officiant & wedding party", now(), now(), 2 , 2),
("Book spa and beauty treatments for you and your bridal party", now(), now(), 2 , 3),
("Book Wedding Transportation", now(), now(), 2 , 3),
("Something Old", now(), now(), 2 , 4),
("Something New", now(), now(), 2 , 4),
("Something Borrowed", now(), now(), 2 , 4),
("Something Blue", now(), now(), 2 , 4),
("Call vendors to confirm date, times, location", now(), now(), 2 , 2),
("Confirm honeymoon reservations", now(), now(), 2 , 3),
("Pack for honymon", now(), now(), 2 , 1),
("Pick up wedding rings", now(), now(), 2 , 4),
("Give photographer and videographer your image and video shot requests", now(), now(), 2 , 2),
("Prepare wedding day emergency kit", now(), now(), 2 , 4),
("Attend wedding rehearsal", now(), now(), 2 , 1);