use CompanyDB; 
create table Products (
ProductID int primary key auto_increment,
ProductName varchar(100) not null,
Category varchar(50),
Price decimal(10,2),
StockQuantity int not null
);

insert into Products(ProductName, Category,Price,StockQuantity)
values
('SmartPhone', 'Phone', 1200.00, 50),
('Laptop', 'Elec', 75.50, 30),
('Mouse', 'Accessories', 25.99, 100);
