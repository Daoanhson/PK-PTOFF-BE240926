USE SalesDB;

CREATE INDEX IX_OrderDetails_OrderID
ON OrderDetails(OrderID);