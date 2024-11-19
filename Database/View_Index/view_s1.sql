USE SalesDB;

-- CREATE TABLE Customers (
--     CustomerID INT PRIMARY KEY AUTO_INCREMENT,
--     CustomerName VARCHAR(100) NOT NULL,
--     Phone VARCHAR(15),
--     CreatedAt DATETIME
-- );

-- CREATE TABLE Products (
--     ProductID INT PRIMARY KEY AUTO_INCREMENT,
--     ProductName VARCHAR(255) NOT NULL,
--     Category VARCHAR(255),
--     Price DECIMAL(10,2) NOT NULL
-- );

-- CREATE TABLE Orders (
--     OrderID INT PRIMARY KEY AUTO_INCREMENT,
--     CustomerID INT,
--     TotalAmount DECIMAL(10,2) NOT NULL,
--     OrderDate DATETIME,
--     FOREIGN KEY (CustomerID) REFERENCES Customers(CustomerID)
-- );

-- CREATE TABLE OrderDetails (
--     OrderDetailID INT PRIMARY KEY AUTO_INCREMENT,
--     OrderID INT,
--     ProductID INT,
--     Quantity INT NOT NULL,
--     UnitPrice DECIMAL(10,2) NOT NULL,
--     FOREIGN KEY (OrderID) REFERENCES Orders(OrderID),
--     FOREIGN KEY (ProductID) REFERENCES Products(ProductID)
-- );

CREATE INDEX IX_Orders_OrderDate ON Orders(OrderDate);