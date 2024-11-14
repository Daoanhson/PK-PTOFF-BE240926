USE construction_mangement;

-- SELECT * FROM `architect`;

-- SELECT `name` AS `Ho va Ten`, `address` AS `Dia chi` FROM host;

-- COUNT()
-- SELECT COUNT(id) FROM architect; 

-- 2. Aggregate Function (Ham tong hop)
-- Max()

-- Lay ra nam sinh cua kien truc su architect tre nhat 
-- SELECT MAX(birthday) AS `Nam sinh lon nhat` FROM architect; 

-- Lay ra nam sinh gia nhat 
-- SELECT MIN(birthday) AS `Nam sinh nho nhat` FROM architect; 


-- SELECT COUNT(address) FROM `architect`;

-- SUM()
-- SELECT * FROM building; 

-- Tinh toan tong doanh thu cua cong ty 
-- SELECT SUM(cost) AS `Tong doanh thu` FROM building; 

-- AVG()
-- Tinh toan doanh thu trung binh cua cac building dc xay dung boi cong ty 
-- SELECT AVG(cost) AS `Danh thu trung binh` FROM building;

-- GROUP BY 
-- Su dung AGGREGATE FUNCTION để tinh toan tong so luong kien trc su
-- Co o moi thanh pho 

-- SELECT place  AS `Thanh Pho`, COUNT(id) AS `SL`
-- FROM architect
-- GROUP BY place
-- HAVING COUNT(id) >=1; 

-- SELECT * FROM building 
-- WHERE cost < (
-- SELECT MAX(cost) FROM building
-- ); 
-- Nested select 


-- Gia tri duy nhat duoc tra ve
-- Lay ra thong tin cua toan bo  building co chi phi thuc hien ()

-- SELECT * FROM building
-- WHERE cost > ALL(
-- SELECT cost FROM building
-- WHERE city = 'ha noi'
-- );

-- Lay ra thong tin cua toan bo cong nhan (worker) co tuoi lon hon
-- Toan bo kien truc su co trong cong ty

-- SELECT * FROM `worker`
-- WHERE 2024 - birthday > ALL(
-- SELECT 2024 - birthday AS `architect age` FROM `architect`
-- );


-- Lay ra toan bo thong tin cua building duoc thiet ke 
-- Boi kien truc su trong cong ty

-- Liet ke toan bo building boi kien truc su 
-- SELECT * FROM building 
-- WHERE id NOT IN (
-- SELECT DISTINCT building_id FROM design
-- );

-- Lay ra toan bo thong tin ve building va 
-- Thonng tin ve host xay dung building do 

-- SELECT b.id, b.name, h.name 
-- FROM `building` AS b
-- INNER JOIN `host` AS h
-- ON b.host_id = h.id;



