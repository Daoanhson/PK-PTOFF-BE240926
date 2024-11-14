USE `employees`;

-- CREATE TABLE Employees (
--     employee_id INT PRIMARY KEY,
--     name VARCHAR(100) NOT NULL,
--     age INT,
--     salary DECIMAL(10, 2)
-- );

-- CREATE TABLE Departments (
--     department_id INT PRIMARY KEY,
--     department_name VARCHAR(100) NOT NULL UNIQUE
-- );

-- CREATE TABLE Collections (
--     employee_id INT,
--     department_id INT,
--     PRIMARY KEY (employee_id, department_id),
--     FOREIGN KEY (employee_id) REFERENCES Employees(employee_id),
--     FOREIGN KEY (department_id) REFERENCES Departments(department_id)
-- );

-- INSERT DATA 
-- INSERT INTO Employees (employee_id, name, age, salary) VALUES
-- (1, 'Nguyễn Văn A', 30, 45000),
-- (2, 'Nguyễn Văn B', 40, 50000),
-- (3, 'Nguyễn Văn C', 50, 55000),
-- (4, 'Nguyễn Văn D', 60, 60000);

-- INSERT INTO Departments (department_id, department_name) VALUES
-- (1, 'Kế toán'),
-- (2, 'Nhân sự'),
-- (3, 'IT'),
-- (4, 'Marketing');

-- INSERT INTO Collections (employee_id, department_id) VALUES
-- (1, 1),
-- (1, 2),
-- (2, 1),
-- (3, 3),
-- (4, 2),
-- (4, 4);

-- a. Liệt kê nhân viên có trong bộ phận kế toán 
-- SELECT e.employee_id, e.name
-- FROM Employees AS e
-- JOIN Collections AS ed ON e.employee_id = ed.employee_id
-- JOIN Departments AS d ON ed.department_id = d.department_id
-- WHERE d.department_name = 'Kế toán';

-- b. Nhan vien co muc luong tren 50000
-- SELECT employee_id, name, salary
-- FROM Employees
-- WHERE salary > 50000;

-- c. Hien thi bộ phân và nhân viên co trong bo phan 
-- SELECT d.department_name, COUNT(ed.employee_id) AS employee_count
-- FROM Departments AS d
-- LEFT JOIN Collections AS ed ON d.department_id = ed.department_id
-- GROUP BY d.department_name;


-- Tim bo phan co tong muc luong qua 100000
-- SELECT d.department_name, SUM(e.salary) AS total_salary
-- FROM Departments AS d
-- JOIN Collections AS ed ON d.department_id = ed.department_id
-- JOIN Employees AS e ON ed.employee_id = e.employee_id
-- GROUP BY d.department_name
-- HAVING SUM(e.salary) > 100000;

-- f. cac nhan vien lam viec trong 2 bo phan khac nhau
SELECT e.employee_id, e.name, COUNT(c.department_id) AS department_count
FROM Employees AS e
JOIN Collections AS c ON e.employee_id = c.employee_id
GROUP BY e.employee_id, e.name
HAVING COUNT(c.department_id) > 2;