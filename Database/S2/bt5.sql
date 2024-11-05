use CompanyDB;

-- create table Orders (
-- OrderId int primary key auto_increment,
-- CustomerID int,
-- OrderDate date not null,
-- TotalAmount decimal(10,1) check (TotalAmount >=0),
-- ProductID int,
-- foreign key (CustomerID) references Customers(CustomerID)

-- );

-- alter table Orders
-- add column ProductID int, 
-- add foreign key (ProductID) references Products(ProductID)
-- alter table Orders
-- add column Quantity int;


-- Them 2 don hang 
-- insert into Orders (CustomerID,OrderDate, ProductID, Quantity) values
-- (1,'2024-11-01', 1, 2),  
-- (1,'2024-11-02', 2, 1);  


-- Cap nhat gia 1 sp 
-- update Products set Price = 1200.00 where ProductID=1;

-- Cap nhap total 
-- UPDATE Orders
-- SET TotalAmount = (select Price from Products where Products.ProductID = Orders.ProductID) * Quantit

-- Truy van du lieu
select ProductName, StockQuantity from Products;