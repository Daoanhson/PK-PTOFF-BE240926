USE shop;
-- CREATE TABLE Customers (
--     CustomerID INT PRIMARY KEY,
--     CustomerName VARCHAR(100),
--     ContactName VARCHAR(100),
--     Country VARCHAR(100)
-- );

-- CREATE TABLE Orders (
--     OrderID INT PRIMARY KEY,
--     CustomerID INT,
--     OrderDate DATE,
--     TotalAmount DECIMAL(10, 2),
--     FOREIGN KEY (CustomerID) REFERENCES Customers(CustomerID)
-- );

-- CREATE TABLE Products (
--     ProductID INT PRIMARY KEY,
--     ProductName VARCHAR(100),
--     Price DECIMAL(10, 2)
-- );

-- CREATE TABLE OrderDetails (
--     OrderDetailID INT PRIMARY KEY,
--     OrderID INT,
--     ProductID INT,
--     Quantity INT,
--     UnitPrice DECIMAL(10, 2),
--     FOREIGN KEY (OrderID) REFERENCES Orders(OrderID),
--     FOREIGN KEY (ProductID) REFERENCES Products(ProductID)
-- );


-- CREATE VIEW OrderInfo AS
-- SELECT 
--     o.OrderID,
--     c.CustomerName,
--     o.OrderDate,
--     o.TotalAmount
-- FROM 
--     Orders o
-- JOIN 
--     Customers c ON o.CustomerID = c.CustomerID;


-- CREATE VIEW OrderDetailsInfo AS
-- SELECT 
--     od.OrderDetailID,
--     o.OrderID,
--     p.ProductName,
--     od.Quantity,
--     od.UnitPrice,
--     (od.Quantity * od.UnitPrice) AS TotalPrice
-- FROM 
--     OrderDetails od
-- JOIN 
--     Orders o ON od.OrderID = o.OrderID
-- JOIN 
--     Products p ON od.ProductID = p.ProductID;


-- CREATE INDEX idx_customer ON Orders (CustomerID);

-- CREATE INDEX idx_order ON OrderDetails (OrderID);

