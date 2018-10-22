DROP DATABASE IF EXISTS bamazon;
CREATE DATABASE bamazon;

USE bamazon;

CREATE TABLE products (
  item_id INT NOT NULL AUTO_INCREMENT,
  product_name VARCHAR(100) NOT NULL,
  department_name VARCHAR(45) NOT NULL,
  price INT default 0,
  stock_quantity INT default 0,
  PRIMARY KEY (item_id)
);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Playstation 2", "Video Games", 200, 100);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("X-Box", "Video Games", 200, 300);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Gamecube", "Video Games", 200, 200);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Game Boy Advance", "Handheld", 100, 50);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Palm Pilot", "Handheld", 100, 150);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Gateway 2000 Laptop", "Computers", 1500, 20);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("iMac", "Computers", 1000, 50);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Discman", "Audio", 90, 150);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Walkman", "Audio", 50, 25);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Boombox", "Audio", 150, 100);



