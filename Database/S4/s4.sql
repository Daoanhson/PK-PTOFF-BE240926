use `management`; 

-- 1. TẠO BẢNG
-- Tạo bảng Projects
-- CREATE TABLE `projects` (
--     ProjectID INT PRIMARY KEY AUTO_INCREMENT,
--     ProjectName VARCHAR(100) NOT NULL,
--     StartDate DATE NOT NULL,
--     EndDate DATE NOT NULL,
--     Budget DECIMAL(10, 2) NOT NULL
-- );

-- Tạo bảng Employees
-- CREATE TABLE `employees` (
--     EmployeeID INT PRIMARY KEY AUTO_INCREMENT,
--     EmployeeName VARCHAR(100) NOT NULL,
--     Position VARCHAR(50) NOT NULL,
--     HireDate DATE NOT NULL,
--     Salary DECIMAL(10, 2) NOT NULL
-- );

-- Tạo bảng Tasks
-- CREATE TABLE `tasks` (
--     TaskID INT PRIMARY KEY AUTO_INCREMENT,
--     ProjectID INT,
--     TaskName VARCHAR(100) NOT NULL,
--     AssignedTo INT,
--     StartDate DATE NOT NULL,
--     EndDate DATE NOT NULL,
--     Status VARCHAR(50) NOT NULL,
--     HoursWorked DECIMAL(5, 2) NOT NULL,
--     FOREIGN KEY (ProjectID) REFERENCES Projects(ProjectID),
--     FOREIGN KEY (AssignedTo) REFERENCES Employees(EmployeeID)
-- );

-- 2. THÊM THÔNG TIN 
-- Thêm 3 dự án vào bảng Projects
-- INSERT INTO `projects` (ProjectName, StartDate, EndDate, Budget) VALUES
-- ('Project A', '2024-01-01', '2024-06-30', 50000.00),
-- ('Project B', '2024-02-01', '2024-06-30', 75000.00),
-- ('Project C', '2024-03-01', '2024-06-30', 90000.00);

-- Thêm 5 nhân viên vào bảng Employees
-- INSERT INTO `employees` (EmployeeName, Position, HireDate, Salary) VALUES
-- ('Name A', 'Developer', '2020-4-16', 40000.00),
-- ('Name B', 'Java Dev', '2020-04-20', 50000.00),
-- ('Name C', 'Manager', '2020-06-10', 60000.00),
-- ('Name D', 'Developer', '2021-06-10', 72000.00),
-- ('Name E', 'Tester', '2022-03-16', 25000.00);

-- Thêm 6 công việc vào bảng Tasks
-- INSERT INTO `tasks` (ProjectID, TaskName, AssignedTo, StartDate, EndDate, Status, HoursWorked) VALUES
-- (1, 'Develop A', 1, '2024-02-5', '2024-03-20', 'Completed', 40.00),
-- (1, 'Design A', 2, '2024-04-15', '2024-05-25', 'Progress', 30.00),
-- (2, 'Develop B', 4, '2024-04-10', '2024-05-20', 'Completed', 25.00),
-- (2, 'Design B', 5, '2024-02-15', '2024-03-25', 'Progress', 15.00),
-- (3, 'Develop  C', 1, '2024-03-05', '2024-04-15', 'Started', 30.00),
-- (3, 'Design C', 2, '2024-03-10', '2024-04-20', 'Started', 35.00);


-- 3. CẬP NHẬT 
-- Cập nhật ngân sách của dự án có ProjectID = 2
-- UPDATE `projects`
-- SET Budget = 50000.00
-- WHERE ProjectID = 2;

-- Cập nhật số giờ làm việc của công việc có TaskID = 4
-- UPDATE `tasks`
-- SET HoursWorked = 25.50
-- WHERE TaskID = 4;

-- 4. DELETE 
-- Xóa nhân viên với EmployeeID = 3
-- DELETE FROM `employees`
-- WHERE EmployeeID = 3;

-- Xóa công việc với TaskID = 5
-- DELETE FROM `tasks`
-- WHERE TaskID = 5;


-- 5. TRUY VẤN 
-- Tổng dự an 
-- SELECT p.ProjectID, p.ProjectName, SUM(t.HoursWorked) * 50.00 AS TotalCost
-- FROM `projects` p
-- JOIN `tasks` t ON p.ProjectID = t.ProjectID
-- GROUP BY p.ProjectID, p.ProjectName;

-- Thông kê dự án 
-- SELECT p.ProjectID, p.ProjectName,
--        COUNT(CASE WHEN t.Status = 'Completed' THEN 1 END) AS Completed,
--        COUNT(CASE WHEN t.Status != 'Completed' THEN 1 END) AS Progess
-- FROM `projects` p
-- LEFT JOIN `tasks` t ON p.ProjectID = t.ProjectID
-- GROUP BY p.ProjectID, p.ProjectName;

-- Truy vấn nhân viên 
-- SELECT e.EmployeeID, e.EmployeeName,
--        COUNT(t.TaskID) AS TaskCount,
--        SUM(t.HoursWorked) AS TotalHoursWorked
-- FROM `employees` e
-- LEFT JOIN `tasks` t ON e.EmployeeID = t.AssignedTo
-- GROUP 
-- Tính lương trung bình
-- SELECT Position, AVG(Salary) AS AverageSalary
-- FROM `employees`
-- GROUP BY Position;