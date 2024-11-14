USE construction_mangement;
-- 5. TRUY VAN DUU LIEU TIEP 

-- Hiển thị tên công trình, tên chủ nhân và tên chủ thầu của công trình đó
-- SELECT 
-- 	b.`name` AS `Building`, 
--     h.`name` AS `host`, 
--     c.`name` AS `contactor`
-- FROM building b
-- INNER JOIN `contractor` c ON c.id = b.contractor_id
-- INNER JOIN `host` h ON h.id = b.host_id;


-- Hiển thị tên công trình, tên kiến trúc sư và thù lao ở mỗi công trình
-- SELECT 
-- 	b.`name` AS `design`, 
--     a.`name` AS `architect`,
--     SUM(d.benefit) AS `benefit`
-- FROM building b
-- INNER JOIN `design` d ON  d.building_id = b.id
-- INNER JOIN `architect` a ON a.id = d.architect_id
-- GROUP BY a.`name`, b.`name`;

-- Hãy cho biết tên và địa chỉ công trình (building) do chủ thầu Công ty xây dựng số 6 thi công (contractor)
-- SELECT 
-- b.`name` AS `design`
-- FROM building b
-- INNER JOIN `contractor` c ON c.id = b.contractor_id
-- WHERE c.`name` = "cty xd so 6";

-- Tìm tên và địa chỉ liên lạc của các chủ thầu (contractor) thi công công trình ở Cần Thơ (building)
-- do kiến trúc sư Lê Kim Dung thiết kế (architect, design)
-- SELECT 
-- c.`name` AS `Contractor`,
-- c.phone AS `Address`,
-- b.city AS `city`
-- FROM building b
-- INNER JOIN `design` d ON  d.building_id = b.id
-- INNER JOIN `contractor` c ON c.id = b.contractor_id
-- INNER JOIN `architect` a ON a.id = d.architect_id
-- WHERE b.city = "can tho" AND a.`name` = "le kim dung";

-- Hãy cho biết nơi tốt nghiệp của các kiến trúc sư (architect) đã thiết kế (design) công trình Khách Sạn Quốc Tế ở Cần Thơ (building)
-- SELECT DISTINCT
-- a.place AS `university`
-- FROM building b
-- INNER JOIN `design` d ON  d.building_id = b.id
-- INNER JOIN `architect` a ON a.id = d.architect_id
-- WHERE b.`name` = "khach san quoc te" AND b.city = "can tho";

-- Cho biết họ tên, năm sinh, năm vào nghề của các công nhân có chuyên môn hàn hoặc điện (worker) 
-- đã tham gia các công trình (work) mà chủ thầu Lê Văn Sơn (contractor) đã trúng thầu (building)
-- SELECT 
-- wk.`name` AS `name`,
-- wk.birthday AS `birthday`,
-- wk.`year` AS `year`
-- FROM worker wk
-- INNER JOIN `work` w ON w.worker_id = wk.id
-- INNER JOIN `building` b ON b.id = w.building_id
-- INNER JOIN`contractor` c ON c.id = b.contractor_id
-- WHERE wk.skill IN ('han', 'dien') AND c.`name` = 'le van son';

-- Những công nhân nào (worker) đã bắt đầu tham gia công trình Khách sạn Quốc Tế ở Cần Thơ (building) 
-- trong giai đoạn từ ngày 15/12/1994 đến 31/12/1994 (work) số ngày tương ứng là bao nhiêu
-- SELECT 
-- wk.`name` AS `Họ tên`,
-- DATEDIFF('1994-12-31', GREATEST(w.date, '1994-12-15')) + 1 AS `Số ngày`
-- FROM worker wk
-- INNER JOIN `work` w ON w.worker_id = wk.id
-- INNER JOIN `building` b ON b.id = w.building_id
-- WHERE 
-- 	b.`name` = 'khach san quoc te' 
--     AND b.city = 'can tho'
--     AND w.date BETWEEN '1994-12-15' AND '1994-12-31';


-- Cho biết họ tên và năm sinh của các kiến trúc sư đã tốt nghiệp ở TP Hồ Chí Minh (architect) 
-- và đã thiết kế ít nhất một công trình (design) có kinh phí đầu tư trên 400 triệu đồng (building)

-- SELECT DISTINCT 
-- a.`name` AS `Fullname`,
-- a.birthday AS `Birthday`
-- FROM architect a
-- INNER JOIN `design` d ON  d.architect_id = a.id
-- INNER JOIN `building` b ON b.id = d.building_id
-- WHERE a.place = "tp hcm" AND b.cost > 400;


-- Cho biết tên công trình có kinh phí cao nhất
-- SELECT `name`, `cost`
-- FROM `building`
-- WHERE cost = 
-- (
-- 	SELECT MAX(cost)
-- 	FROM `building`
-- );

-- Cho biết tên các kiến trúc sư (architect) vừa thiết kế các công trình (design) 
-- do Phòng dịch vụ sở xây dựng (contractor) thi công vừa thiết kế các công trình do chủ thầu Lê Văn Sơn thi công
-- SELECT 
-- a.`name` AS `Fullname`
-- FROM `building` b
-- INNER JOIN `design` d ON d.building_id = b.id
-- INNER JOIN `contractor` c ON c.id = b.contractor_id
-- INNER JOIN `architect` a ON a.id = d.architect_id
-- WHERE c.`name` IN ("le van son", "phong dich vu so xd")
-- GROUP BY a.`name`;

-- Cho biết họ tên các công nhân (worker) có tham gia (work) các công trình ở Cần Thơ (building) 
-- nhưng không có tham gia công trình ở Vĩnh Long


-- Cho biết tên của các chủ thầu đã thi công các công trình có kinh phí lớn hơn tất cả các công trình 
-- do chủ thầu phòng Dịch vụ Sở xây dựng thi công

-- Cho biết họ tên các kiến trúc sư có thù lao thiết kế một công trình nào đó dưới giá trị trung bình thù lao thiết kế cho một công trình
-- SELECT 
-- a.`name` AS `Name`
-- FROM `architect` a
-- INNER JOIN `design` d ON a.id = d.architect_id
-- WHERE d.`benefit` < (
--     SELECT AVG(d2.`benefit`)
--     FROM .`design` d2
-- )
-- GROUP BY a.`name`;


-- Tìm tên và địa chỉ những chủ thầu đã trúng thầu công trình có kinh phí thấp nhất
-- SELECT 
-- `host`.`name` AS `Contractor`, 
-- `host`.`address` AS `Address`, 
-- b.`cost` AS `Cost`
-- FROM `building` b
-- INNER JOIN `host` ON `host`.`id` = b.`host_id`
-- WHERE b.`cost` = (
--     SELECT MIN(b2.`cost`)
--     FROM `building` b2
-- );


-- Tìm họ tên và chuyên môn của các công nhân (worker) tham gia (work) 
-- các công trình do kiến trúc sư Le Thanh Tung thiet ke (architect) (design)


-- Tìm các cặp tên của chủ thầu có trúng thầu các công trình tại cùng một thành phố
-- SELECT 
--     c1.`name` AS `Contractor 1`, 
--     c2.`name` AS `Contractor 2`, 
--     b1.`city` AS `city`
-- FROM `building` b1
-- INNER JOIN `contractor` c1 ON c1.`id` = b1.`contractor_id`
-- INNER JOIN `building` b2 ON b1.`city` = b2.`city` AND b1.`id` < b2.`id`
-- INNER JOIN `contractor` c2 ON c2.`id` = b2.`contractor_id`
-- WHERE c1.`id` != c2.`id`
-- GROUP BY c1.`name`, c2.`name`, b1.`city`;


-- Tìm tổng kinh phí của tất cả các công trình theo từng chủ thầu
-- SELECT 
-- c.`name` AS `contractor`,
-- SUM(b.`cost`) AS `total cost`
-- FROM `building` b
-- INNER JOIN `contractor` c ON c.`id` = b.`contractor_id`
-- GROUP BY c.`name`;


-- Cho biết họ tên các kiến trúc sư có tổng thù lao thiết kế các công trình lớn hơn 25 triệu

-- SELECT 
-- a.`name` AS `Architect`,
-- SUM(d.benefit) AS `Total benefit`
-- FROM building b
-- INNER JOIN `design` d ON  d.building_id = b.id
-- INNER JOIN `architect` a ON a.id = d.architect_id
-- GROUP BY a.`name`
-- HAVING SUM(d.benefit) > 25



-- Tìm tổng số công nhân đã thanm gia ở mỗi công trình
-- SELECT
--     b.`name` AS `Building`,
--     COUNT(wk.`name`) AS `Total worker`
-- FROM worker wk
-- INNER JOIN `work` w ON wk.id = w.worker_id
-- INNER JOIN `building` b ON b.id = w.building_id
-- GROUP BY b.`name`;


-- Tìm tên và địa chỉ công trình có tổng số công nhân tham gia nhiều nhất
-- SELECT 
-- b.`name` AS `Building`,
-- b.`address` AS `Address`,
-- COUNT(wk.`name`) AS `Total worker`
-- FROM worker wk
-- INNER JOIN `work` w ON w.worker_id = wk.id
-- INNER JOIN `building` b ON b.id = w.building_id
-- GROUP BY b.`name`, b.`address`
-- ORDER BY `Total worker` DESC
-- LIMIT 1;


-- Cho biêt tên các thành phố và kinh phí trung bình cho mỗi công trình của từng thành phố tương ứng

-- SELECT 
-- b.`city` AS `Name city`,
-- AVG(b.cost) AS `Total avenger`
-- FROM building b
-- GROUP BY b.city;


-- Cho biết họ tên các công nhân có tổng số ngày tham gia vào các công trình lớn hơn tổng số ngày tham gia của công nhân Nguyễn Hồng Vân


-- Cho biết tổng số công trình mà mỗi chủ thầu đã thi công tại mỗi thành phố
-- SELECT 
--     b.`city` AS `Name city`,
--     c.`name` AS `Name Contractor`,
--     COUNT(b.`name`) AS `building`
-- FROM building b
-- INNER JOIN `contractor` c ON c.id = b.contractor_id
-- GROUP BY b.`city`, c.`name`;


-- Cho biết họ tên công nhân có tham gia ở tất cả các công trình

SELECT 
wk.`name` AS `Tên công nhân`
FROM worker wk
INNER JOIN `work` w ON wk.id = w.worker_id
GROUP BY wk.`name`
HAVING COUNT(DISTINCT w.building_id) = (SELECT COUNT(*) FROM building);

