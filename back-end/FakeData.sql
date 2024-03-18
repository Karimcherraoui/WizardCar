-- Insertion de données dans la table Company
INSERT INTO `Campany` (`company_logo`, `company_name`, `owner_name`, `owner_lastname`, `vat_number`, `address`, `zip_code`, `city`, `country`, `owner_email`, `owner_phone`, `owner_website`, `bank_name`, `bank_account_number`, `created_at`, `updated_at`)
VALUES
('images/mbo.png', 'MBO', 'Mehdi', 'Latifi', '123.456.789', 'vivastreet 123', '1234', 'Hasselt', 'TEST', 'mbo@test.be', '04949002034', 'www.mbo.be', 'ING', '123443211234', '2023-08-14 15:41:53', NULL),
('images/ybo.png', 'YBO', 'YASSINE', 'Latifi', '111.222.333', 'teststraat 123', '1700', 'Vilvoorde', 'TEST', 'ybo@test.be', '04949002034', 'www.ybo.be', 'ING', '123443211234', '2023-08-14 15:41:53', NULL);

-- Insertion de données dans la table Client
INSERT INTO `Client` (`surname`, `firstname`, `email`, `address`, `genre`, `identity`, `phonenumber`, `cin`, `expiration`, `country`, `city`, `region`, `created_at`, `updated_at`, `compagny_id`)
VALUES
('Latifi', 'Yassine', 'test@test.be', 'Teststraat 1', 'Male', 'hh789', '123455667', 'hh890', '2023-04-27 19:46:39', 'Belgium', 'Vilvoorde', 'test', '2023-04-27 19:46:39', '2023-04-27 19:46:39', 1),
('Wayne', 'John', 'test1@test.be', 'teststreet 5', 'Male', 'hh389', '1234566686', 'hh893', '2023-04-27 19:46:39', 'Belgium', 'Brussels', 'yesy', '2023-04-27 19:42:54', '2023-04-27 19:42:54', 1);


-- Insertion de données dans la table Invoice
INSERT INTO `Invoice` (`client_id`, `car_id`, `date`, `dueDate`, `amount`, `paymentMethod`, `paidStatus`, `comment`, `created_at`, `updated_at`, `compagny_id`)
VALUES
(client_id_value, car_id_value, '2023-04-27 19:46:39', '2023-04-27 19:46:39', 1000.0, 'Cash', false, 'NULL', NOW(), NOW(), compagny_id_value),
-- Ajoutez d'autres données de facture ici

-- Insertion de données dans la table Car
INSERT INTO `Car` (`carImage`, `chassisNumber`, `brand`, `model`, `Year`, `Price`, `carType`, `transmission`, `fuel`, `matriculation`, `color`, `disponibility`, `created_at`, `updated_at`, `compagny_id`)
VALUES
('images/car_image.png', '123456', 'BMW', '330', '2022', 50000, 'Sedan', 'Automatic', 'Gasoline', '123ABC', 'Black', true, NOW(), NOW(), compagny_id_value),
-- Ajoutez d'autres données de voiture ici
