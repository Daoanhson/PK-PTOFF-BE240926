USE shopee_fake;

-- MỤC LỤC 
-- BÀI SỐ 2 (DÒNG 10)
-- BÀI SỐ 3 (DÒNG 36)
-- BÀI SỐ 4 (DÒNG 197)
-- BÀI SỐ 5 (DÒNG 230)


-- ALTER TABLE products
-- ADD FOREIGN KEY (storeId) REFERENCES stores(storeId),
-- ADD FOREIGN KEY (categoryId) REFERENCES categories(categoryId);

-- ALTER TABLE images
-- ADD FOREIGN KEY (productId) REFERENCES products(productId);

-- ALTER TABLE stores
-- ADD FOREIGN KEY (userId) REFERENCES users(userId);

-- ALTER TABLE orders
-- ADD FOREIGN KEY (userId) REFERENCES users(userId),
-- ADD FOREIGN KEY (storeId) REFERENCES stores(storeId);

-- ALTER TABLE order_details
-- ADD FOREIGN KEY (productId) REFERENCES products(productId),
-- ADD FOREIGN KEY (orderId) REFERENCES orders(orderId);

-- ALTER TABLE reviews
-- ADD FOREIGN KEY (userId) REFERENCES users(userId),
-- ADD FOREIGN KEY (productId) REFERENCES products(productId);

-- ALTER TABLE carts
-- ADD FOREIGN KEY (userId) REFERENCES users(userId),
-- ADD FOREIGN KEY (productId) REFERENCES products(productId);

-- 3. CAC CAU LENH TRUY VAN

-- Liệt kê tất cả các thông tin về sản phẩm (products).
-- SELECT * FROM products;

-- Tìm tất cả các đơn hàng (orders) có tổng giá trị (totalPrice) lớn hơn 500,000.
-- SELECT * FROM orders WHERE totalPrice > 500000;

-- Liệt kê tên và địa chỉ của tất cả các cửa hàng (stores).
-- SELECT storeName, addressStore FROM stores;

-- Tìm tất cả người dùng (users) có địa chỉ email kết thúc bằng '@gmail.com'
-- SELECT * FROM users WHERE email LIKE '%@gmail.com';

-- Hiển thị tất cả các đánh giá (reviews) với mức đánh giá (rate) bằng 5
-- SELECT * FROM reviews WHERE rate = 5;

-- Liệt kê tất cả các sản phẩm có số lượng (quantity) dưới 10
-- SELECT * FROM products WHERE quantity < 10;

-- Tìm tất cả các sản phẩm thuộc danh mục categoryId = 1.
-- SELECT * FROM products WHERE categoryId = 1;

-- Đếm số lượng người dùng (users) có trong hệ thống.
-- SELECT COUNT(*) AS total_users FROM users;

-- Tính tổng giá trị của tất cả các đơn hàng (orders).
-- SELECT SUM(totalPrice) AS total_order_value FROM orders;

-- Tìm sản phẩm có giá cao nhất (price).
-- SELECT * FROM products ORDER BY price DESC LIMIT 1;

-- Liệt kê tất cả các cửa hàng đang hoạt động (statusStore = 1).
-- SELECT * FROM stores WHERE statusStore = 1;

-- Đếm số lượng sản phẩm theo từng danh mục (categories).
-- SELECT c.categoryName, COUNT(p.productId) AS sl_product
-- FROM products p
-- JOIN categories c ON p.categoryId = c.categoryId
-- GROUP BY c.categoryName;

-- Tìm tất cả các sản phẩm mà chưa từng có đánh giá
-- SELECT p.*
-- FROM products p
-- LEFT JOIN reviews r ON p.productId = r.productId
-- WHERE r.reviewId IS NULL;

-- Hiển thị tổng số lượng hàng đã bán (quantityOrder) của từng sản phẩm.
-- SELECT p.productId, p.productName, SUM(od.quantityOrder) AS tong_sl_ban
-- FROM products p
-- LEFT JOIN order_details od ON p.productId = od.productId
-- GROUP BY p.productId, p.productName;

-- Tìm tất cả các người dùng (users) chưa đặt bất kỳ đơn hàng nào.
-- SELECT u.*
-- FROM users u
-- LEFT JOIN orders o ON u.userId = o.userId
-- WHERE o.orderId IS NULL;

-- Hiển thị tên cửa hàng và tổng số đơn hàng được thực hiện tại từng cửa hàng. 
-- SELECT s.storeName, COUNT(o.orderId) AS tong_orders
-- FROM stores s
-- LEFT JOIN orders o ON s.storeId = o.storeId
-- GROUP BY s.storeName;

-- Hiển thị thông tin của sản phẩm, kèm số lượng hình ảnh liên quan.
-- SELECT p.*, COUNT(i.imageId) AS so_hinhanh
-- FROM products p
-- LEFT JOIN images i ON p.productId = i.productId
-- GROUP BY p.productId;

-- Hiển thị các sản phẩm kèm số lượng đánh giá và đánh giá trung bình
-- SELECT p.*, COUNT(r.reviewId) AS sl_review, AVG(r.rate) AS tong_rating
-- FROM products p
-- LEFT JOIN reviews r ON p.productId = r.productId
-- GROUP BY p.productId;

-- Tìm người dùng có số lượng đánh giá nhiều nhất
-- SELECT u.*, COUNT(r.reviewId) AS review_count
-- FROM users u
-- LEFT JOIN reviews r ON u.userId = r.userId
-- GROUP BY u.userId
-- ORDER BY review_count DESC
-- LIMIT 1;

-- Hiển thị top 3 sản phẩm bán chạy nhất (dựa trên số lượng đã bán)
-- SELECT p.*, SUM(od.quantityOrder) AS top_3
-- FROM products p
-- LEFT JOIN order_details od ON p.productId = od.productId
-- GROUP BY p.productId
-- ORDER BY top_3 DESC
-- LIMIT 3;

-- Tìm sản phẩm bán chạy nhất tại cửa hàng có storeId = 'S001.
-- Ảo thật vì ko có storeId = 'S001'
-- SELECT p.*, SUM(od.quantityOrder) AS sp_top1
-- FROM products p
-- JOIN order_details od ON p.productId = od.productId
-- JOIN orders o ON od.orderId = o.orderId
-- WHERE o.storeId = 'S001'
-- GROUP BY p.productId
-- ORDER BY sp_top1 DESC
-- LIMIT 1;

-- Hiển thị danh sách tất cả các sản phẩm có giá trị tồn kho lớn hơn 1 triệu (giá * số lượng).
-- SELECT *
-- FROM products
-- WHERE price * quantity > 1000000;

-- Cửa hàng có tổng doanh thu cao nhất
-- SELECT s.storeName, SUM(o.totalPrice) AS tong_danhthu
-- FROM stores s
-- JOIN orders o ON s.storeId = o.storeId
-- GROUP BY s.storeName
-- ORDER BY tong_danhthu DESC
-- LIMIT 1;

-- Hiển thị danh sách người dùng và tổng số tiền họ đã chi tiêu.
-- SELECT u.userId, u.userName, SUM(o.totalPrice) AS tien_chitieu
-- FROM users u
-- LEFT JOIN orders o ON u.userId = o.userId
-- GROUP BY u.userId, u.userName;

-- Tìm đơn hàng có tổng giá trị cao nhất và liệt kê thông tin chi tiết.
-- SELECT *
-- FROM orders
-- ORDER BY totalPrice DESC
-- LIMIT 1;

-- Tính số lượng sản phẩm trung bình được bán ra trong mỗi đơn hàng.
-- SELECT AVG(total_quantity) AS sl_sp_trungbinh
-- FROM (
--   SELECT COUNT(od.orderDetailId) AS total_quantity
--   FROM order_details od
--   GROUP BY od.orderId
-- ) t;

-- Hiển thị tên sản phẩm và số lần sản phẩm đó được thêm vào giỏ hàng.
-- SELECT p.productName, COUNT(c.cartId) AS solan_sp_themvao
-- FROM products p
-- LEFT JOIN carts c ON p.productId = c.productId
-- GROUP BY p.productName;

-- Tìm tất cả các sản phẩm đã bán nhưng không còn tồn kho trong kho hàng.
-- SELECT p.*
-- FROM products p
-- LEFT JOIN order_details od ON p.productId = od.productId
-- WHERE p.quantity = 0 AND od.orderDetailId IS NOT NULL;

-- Tìm các đơn hàng được thực hiện bởi người dùng có email là 'duong@gmail.com'.
-- SELECT o.*
-- FROM orders o
-- JOIN users u ON o.userId = u.userId
-- WHERE u.email = 'duong@gmail.com';

-- Hiển thị danh sách các cửa hàng kèm theo tổng số lượng sản phẩm mà họ sở hữu.
-- SELECT s.storeName, COUNT(p.productId) AS total_products
-- FROM stores s
-- LEFT JOIN products p ON s.storeId = p.storeId
-- GROUP BY s.storeName;

-- 4. TẠO VIEW

-- hiển thị tên sản phẩm (productName) và giá (price) từ bảng products với
-- giá trị giá (price) lớn hơn 500,000 có tên là expensive_products
-- 500000 ko có giá trị nào sửa thành 50,000

-- CREATE VIEW expensive_products AS
-- SELECT productName, price
-- FROM products
-- WHERE price > 50000;

-- Hiển thị bảng ảo view
-- SELECT * FROM expensive_products;

-- Không thể cập nhất trực tiếp trong view vì đây là bảng ảo ko có giá trị 
-- Nên ta chỉ tập nhật giá trị trực tiếp từ bảng 
-- Bảng sau ko chạy vì ko có tên Product A
-- UPDATE products
-- SET price = 600000
-- WHERE productName = 'Product A';

-- XÓa view 
-- DROP VIEW expensive_products;

-- Tạo một view hiển thị tên sản phẩm (productName), tên danh mục (categoryName)
-- bằng cách kết hợp bảng products và categories.
-- CREATE VIEW product_category AS
-- SELECT p.productName, c.categoryName
-- FROM products p
-- JOIN categories c ON p.categoryId = c.categoryId;

-- SELECT * FROM product_category;

-- Bài 5. 
-- Làm thế nào để tạo một index trên cột productName của bảng products?
-- CREATE INDEX idx_productName ON products(productName);

-- Hiển thị danh sách các index trong cơ sở dữ liệu?
-- SHOW INDEX FROM products;

-- Trình bày cách xóa index idx_productName đã tạo trước đó?
-- DROP INDEX idx_productName ON products;

-- Tạo một procedure tên getProductByPrice để lấy danh sách 
-- sản phẩm với giá lớn hơn một giá trị đầu vào (priceInput)?
-- DELIMITER $$
-- CREATE PROCEDURE getProductByPrice(IN priceInput INT)
-- BEGIN
--     SELECT * FROM products WHERE price > priceInput;
-- END $$
-- DELIMITER ;

-- Gọi Procedure getProductByPrice với đầu vào là 500000
-- 50000 có giá trị hơn
-- CALL getProductByPrice(50000);

-- Tạo một procedure getOrderDetails trả về thông tin
-- chi tiết đơn hàng với đầu vào là orderId?

-- DELIMITER $$

-- CREATE PROCEDURE getOrderDetails(IN orderIdInput VARCHAR(255))
-- BEGIN
--     SELECT * FROM order_details WHERE orderId = orderIdInput;
-- END $$

-- DELIMITER ;


-- Làm thế nào để xóa procedure getOrderDetails?

-- DROP PROCEDURE getOrderDetails;

-- Tạo một procedure tên addNewProduct để thêm mới một sản phẩm vào bảng products. 
-- Các tham số gồm productName, price, description, và quantity.
-- DELIMITER $$
-- CREATE PROCEDURE addNewProduct(
--     IN productName VARCHAR(255),
--     IN price INT,
--     IN description LONGTEXT,
--     IN quantity INT
-- )
-- BEGIN
--     INSERT INTO products (productName, price, description, quantity)
--     VALUES (productName, price, description, quantity);
-- END $$
-- DELIMITER ;

-- Tạo một procedure tên deleteProductById
-- để xóa sản phẩm khỏi bảng products dựa trên tham số productId.
-- DELIMITER $$
-- CREATE PROCEDURE deleteProductById(IN productIdInput VARCHAR(255))
-- BEGIN
--     DELETE FROM products WHERE productId = productIdInput;
-- END $$
-- DELIMITER ;

-- Tạo một procedure tên searchProductByName
-- để tìm kiếm sản phẩm theo tên (tìm kiếm gần đúng) từ bảng products.
-- DELIMITER $$
-- CREATE PROCEDURE searchProductByName(IN productNameInput VARCHAR(255))
-- BEGIN
--     SELECT * FROM products WHERE productName LIKE CONCAT('%', productNameInput, '%');
-- END $$
-- DELIMITER ;

-- Tạo một procedure tên filterProductsByPriceRange 
-- để lấy danh sách sản phẩm có giá trong khoảng từ minPrice đến maxPrice.
-- DELIMITER $$
-- CREATE PROCEDURE filterProductsByPriceRange(IN minPrice INT, IN maxPrice INT)
-- BEGIN
--     SELECT * FROM products WHERE price BETWEEN minPrice AND maxPrice;
-- END $$
-- DELIMITER ;

-- Tạo một procedure tên paginateProducts để phân trang danh sách sản phẩm,
-- với hai tham số pageNumber và pageSize.

-- DELIMITER $$
-- CREATE PROCEDURE paginateProducts(IN page_number INT, IN page_size INT)
-- BEGIN
-- DECLARE offset_value INT;
-- SET offset_value = page_size * (page_number-1);
-- SELECT * FROM Products
-- LIMIT page_size 
-- OFFSET offset_value;
-- END $$
-- DELIMITER ;