USE management_sale;
-- CREATE TABLE Customers (
--     CustomerID INT PRIMARY KEY AUTO_INCREMENT,
--     FirstName VARCHAR(50),
--     LastName VARCHAR(50),
--     Email VARCHAR(100)
-- );

-- CREATE TABLE Products (
--     ProductID INT PRIMARY KEY,
--     ProductName VARCHAR(100),
--     Price DECIMAL(10, 2)
-- );

-- CREATE TABLE Orders (
--     OrderID INT PRIMARY KEY AUTO_INCREMENT,
--     CustomerID INT,
--     OrderDate DATE,
--     TotalAmount DECIMAL(10, 2),
--     FOREIGN KEY (CustomerID) REFERENCES Customers(CustomerID)
-- );

-- CREATE TABLE Promotions (
--     PromotionID INT PRIMARY KEY AUTO_INCREMENT,
--     PromotionName VARCHAR(100),
--     DiscountPercentage DECIMAL(5, 2)
-- );

-- CREATE TABLE Sales (
--     SaleID INT PRIMARY KEY AUTO_INCREMENT,
--     OrderID INT,
--     SaleDate DATE,
--     SaleAmount DECIMAL(10, 2),
--     FOREIGN KEY (OrderID) REFERENCES Orders(OrderID)
-- );


-- CREATE INDEX IX_Orders_CustomerID ON Orders(CustomerID);
-- CREATE INDEX IX_Sales_OrderID ON Sales(OrderID);

-- Thêm dữ liệu vào bảng Customers
INSERT INTO Customers (FirstName, LastName, Email)
VALUES 
('A', 'Nguyen A', 'A@example.com'),
('B', 'Nguyen B', 'B@example.com'),
('C', 'Nguyen C', 'C@example.com'),
('D', 'Nguyen D', 'D@example.com');

-- Thêm dữ liệu vào bảng Products
INSERT INTO Products (ProductName, Price)
VALUES 
('SP1', 100.50),
('SP2', 600.00),
('SP3', 530.75),
('SP4', 420.25);

-- Thêm dữ liệu vào bảng Orders
INSERT INTO Orders (CustomerID, OrderDate, TotalAmount)
VALUES 
(1, '2024-11-16', 120.50),
(2, '2024-11-17', 500.00),
(3, '2024-11-18', 550.75),
(4, '2024-11-19', 600.00);

-- Thêm dữ liệu vào bảng Promotions
INSERT INTO Promotions (PromotionName, DiscountPercentage)
VALUES 
('Black Friday', 3.00),
('Cyber Monday Sale', 20.00),
('Holiday Discount', 15.00),
('New Year Sale', 10.00);