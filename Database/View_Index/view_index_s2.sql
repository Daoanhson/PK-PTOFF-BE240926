USE SalesDB;
CREATE VIEW CustomerOrders AS
SELECT 
    O.OrderID,
    C.CustomerName,
    O.OrderDate,
    O.TotalAmount
FROM 
    Orders O
INNER JOIN Customers C ON O.CustomerID = C.CustomerID;