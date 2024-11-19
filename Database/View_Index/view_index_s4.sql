USE SalesDB;


-- CREATE VIEW CustomerOrders AS
-- SELECT o.OrderID, c.CustomerName, o.OrderDate, o.TotalAmount
-- FROM Orders o
-- JOIN Customers c ON o.CustomerID = c.CustomerID;


-- INSERT INTO Customers (CustomerName, Phone, CreatedAt)
-- VALUES
--     ('Ng A', '0972435205', '2023-11-19'),
--     ('Ng B', '0972435205', '2023-11-18'),
--     ('Ng C', '0972435205', '2023-11-17');

-- INSERT INTO Products (ProductName, Category, Price)
-- VALUES
--     ('Laptop', 'Electronics', 111.99),
--     ('Smartphone', 'Electronics', 111.99),
--     ('Book', 'Books', 111.99);

-- INSERT INTO Orders (CustomerID, TotalAmount, OrderDate)
-- VALUES
--     (1, 1299.98, '2023-11-19'),
--     (2, 799.99, '2023-11-18'),
--     (3, 39.98, '2023-11-17');

-- INSERT INTO OrderDetails (OrderID, ProductID, Quantity, UnitPrice)
-- VALUES
--     (1, 1, 1, 999.99),
--     (1, 2, 1, 299.99),
--     (2, 2, 1, 799.99),
--     (3, 3, 2, 19.99);
--     


UPDATE Orders
SET TotalAmount = 250.00
WHERE OrderID = 1;