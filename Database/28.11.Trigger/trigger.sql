USE InventoryManagement; 
-- CREATE TABLE Products (
--     ProductID INT PRIMARY KEY AUTO_INCREMENT,
--     ProductName VARCHAR(100),
--     Quantity INT
-- );

-- CREATE TABLE InventoryChanges (
--     ChangeID INT PRIMARY KEY AUTO_INCREMENT,
--     ProductID INT,
--     OldQuantity INT,
--     NewQuantity INT,
--     ChangeDate DATETIME,
--     FOREIGN KEY (ProductID) REFERENCES Products(ProductID)
-- );

-- DELIMITER $$
-- CREATE TRIGGER AfterProductUpdate
-- AFTER UPDATE ON Products
-- FOR EACH ROW
-- BEGIN
--     INSERT INTO InventoryChanges (ProductID, OldQuantity, NewQuantity, ChangeDate)
--     VALUES (NEW.ProductID, OLD.Quantity, NEW.Quantity, NOW());
-- END $$

-- DELIMITER ;

-- Thêm dữ liệu mẫu vào bảng Products
-- INSERT INTO Products (ProductName, Quantity) VALUES ('Product A', 55);
-- INSERT INTO Products (ProductName, Quantity) VALUES ('Product B', 132);
-- INSERT INTO Products (ProductName, Quantity) VALUES ('Product C', 70);

-- Thực hiện cập nhật trên bảng Products để kích hoạt trigger
-- UPDATE Products SET Quantity = 66 WHERE ProductID = 1;


-- Tạo Trigger BeforeProductDelete để kiểm tra số lượng sản phẩm trước khi xóa:
-- Kiểm tra xóa một sản phẩm có số lượng lớn hơn 10 và kiểm tra thông báo lỗi.

-- DELIMITER $$

-- CREATE TRIGGER BeforeProductDelete
-- BEFORE DELETE ON Products
-- FOR EACH ROW
-- BEGIN
--     DECLARE product_quantity INT;
--     SELECT Quantity INTO product_quantity FROM Products WHERE ProductID = OLD.ProductID;

--     IF product_quantity > 10 THEN
--         SIGNAL SQLSTATE '45000'
--         SET MESSAGE_TEXT = 'Không thể xóa sản phẩm có số lượng lớn hơn 10.';
--     END IF;
-- END$$


-- DELIMITER ;


-- Thay đổi cấu trúc bảng Products để bao gồm một trường LastUpdated
-- Tạo Trigger AfterProductUpdateSetDate để cập nhật trường LastUpdated khi có thay đổi
-- ALTER TABLE Products
-- ADD COLUMN LastUpdated TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP;

-- DELIMITER $$
-- CREATE TRIGGER AfterProductUpdateSetDate
-- AFTER UPDATE ON Products
-- FOR EACH ROW
-- BEGIN
--     UPDATE Products
--     SET LastUpdated = CURRENT_TIMESTAMP
--     WHERE ProductID = NEW.ProductID;
-- END $$
-- DELIMITER ;


-- Tạo bảng ProductSummary: SummaryID(INT, Primary Key), TotalQuantity(INT)
-- Thêm một bản ghi khởi tạo vào bảng ProductSummary
-- Tạo Trigger AfterProductUpdateSummary để cập nhật tổng số lượng hàng trong ProductSummary
-- mỗi khi có thay đổi số lượng hàng trong Products:

-- CREATE TABLE ProductSummary (
--     SummaryID INT PRIMARY KEY,
--     TotalQuantity INT
-- );

-- INSERT INTO ProductSummary (SummaryID, TotalQuantity) VALUES (1, 0);

-- DELIMITER $$

-- CREATE TRIGGER AfterProductUpdateSummary
-- AFTER UPDATE ON Products
-- FOR EACH ROW
-- BEGIN
--     DECLARE total_quantity INT;
--     SELECT SUM(Quantity) INTO total_quantity FROM Products;
--     
--     UPDATE ProductSummary
--     SET TotalQuantity = total_quantity
--     WHERE SummaryID = 1;
-- END $$

-- DELIMITER ;

