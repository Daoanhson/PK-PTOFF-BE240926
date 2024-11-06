-- tao csdl
-- CREATE DATABASE ECommerceDB;
USE ECommerceDB;

-- tao users
-- CREATE TABLE Users (
--     UserID INT PRIMARY KEY AUTO_INCREMENT,
--     Username VARCHAR(50) UNIQUE NOT NULL,
--     PasswordHash VARCHAR(255) NOT NULL,
--     Email VARCHAR(100) UNIQUE NOT NULL,
--     CreatedAt DATETIME DEFAULT CURRENT_TIMESTAMP
-- );

-- Tao product
-- CREATE TABLE Products (
--     ProductID INT PRIMARY KEY AUTO_INCREMENT,
--     ProductName VARCHAR(100) NOT NULL,
--     Description TEXT,
--     Price DECIMAL(10, 2) NOT NULL,
--     Stock INT NOT NULL
-- );

-- Tao Orders
-- CREATE TABLE Orders (
--     OrderID INT PRIMARY KEY AUTO_INCREMENT,
--     UserID INT,
--     OrderDate DATETIME DEFAULT CURRENT_TIMESTAMP,
--     TotalAmount DECIMAL(10, 2) NOT NULL,
--     FOREIGN KEY (UserID) REFERENCES Users(UserID)
-- );

-- Tao OrderDetails
-- CREATE TABLE OrderDetails (
--     OrderDetailID INT PRIMARY KEY AUTO_INCREMENT,
--     OrderID INT,
--     ProductID INT,
--     Quantity INT NOT NULL,
--     PriceAtOrder DECIMAL(10, 2) NOT NULL,
--     FOREIGN KEY (OrderID) REFERENCES Orders(OrderID),
--     FOREIGN KEY (ProductID) REFERENCES Products(ProductID)
-- );

-- Tao review
-- CREATE TABLE Reviews (
--     ReviewID INT PRIMARY KEY AUTO_INCREMENT,
--     ProductID INT,
--     UserID INT,
--     Rating INT CHECK (Rating BETWEEN 1 AND 5),
--     ReviewText TEXT,
--     CreatedAt DATETIME DEFAULT CURRENT_TIMESTAMP,
--     FOREIGN KEY (ProductID) REFERENCES Products(ProductID),
--     FOREIGN KEY (UserID) REFERENCES Users(UserID)
-- );


-- Them gia tri
-- Thêm người dùng vào bảng Users
-- INSERT INTO Users (Username, PasswordHash, Email) VALUES
-- ('user1', 'password1', 'user1@example.com'),
-- ('user2', 'password2', 'user2@example.com'),
-- ('user3', 'password3', 'user3@example.com');

-- -- Thêm sản phẩm vào bảng Products
-- INSERT INTO Products (ProductName, Description, Price, Stock) VALUES
-- ('Product A', 'Description A', 50.00, 20),
-- ('Product B', 'Description B', 150.00, 30),
-- ('Product C', 'Description C', 100.00, 40),
-- ('Product D', 'Description D', 200.00, 50),
-- ('Product E', 'Description E', 300.00, 60);

-- -- Thêm đơn hàng vào bảng Orders
-- INSERT INTO Orders (UserID, TotalAmount) VALUES
-- (1, 500.00),
-- (2, 600.00);

-- -- Thêm chi tiết đơn hàng vào bảng OrderDetails
-- INSERT INTO OrderDetails (OrderID, ProductID, Quantity, PriceAtOrder) VALUES
-- (1, 1, 2, 50.00),  -- Đơn hàng 1, Product A
-- (1, 2, 1, 150.00),  -- Đơn hàng 1, Product B
-- (2, 3, 2, 100.00),  -- Đơn hàng 2, Product C
-- (2, 4, 1, 200.00);  -- Đơn hàng 2, Product D

-- -- Thêm đánh giá vào bảng Reviews
-- INSERT INTO Reviews (ProductID, UserID, Rating, ReviewText) VALUES
-- (1, 1, 5, 'Good product!'),
-- (2, 2, 4, 'Very good.'),
-- (3, 3, 3, 'Good.');


-- Update
-- Cập nhật giá của một sản phẩm
-- UPDATE Products
-- SET Price = 130.00
-- WHERE ProductID = 1; 

-- Cập nhật số lượng sản phẩm trong kho
-- UPDATE Products
-- SET Stock = 100
-- WHERE ProductID = 2;  -- Cập nhật kho cho Product B

-- Thay đổi địa chỉ email của một người dùng
-- UPDATE Users
-- SET Email = 'email@example.com'
-- WHERE UserID = 1; 


-- DELETE
-- Xóa một sản phẩm khỏi bảng Products
-- DELETE FROM OrderDetails WHERE ProductID = 1;  -- xoa tai orderdetails
-- DELETE FROM Reviews WHERE ProductID = 1;  -- Review lien quan
-- DELETE FROM Products WHERE ProductID = 1;  -- Xoa san phan co id = 1

-- Xóa một đơn hàng cụ thể
-- DELETE FROM OrderDetails WHERE OrderID = 1;  -- Xoa cot OrderID
-- DELETE FROM Orders WHERE OrderID = 1;  -- delete don hang 
