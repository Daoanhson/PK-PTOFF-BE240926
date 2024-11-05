use CompanyDB; 

-- Tạo bảng Department
-- CREATE TABLE Department (
--     DepartmentID INT PRIMARY KEY AUTO_INCREMENT,
--     DepartmentName VARCHAR(100) NOT NULL,
--     Location VARCHAR(100)
-- );

-- alter table Employees 
-- add column DepartmentID int, 
-- add foreign key (DepartmentID) references Department(DepartmentID);

-- Truy vấn dữ liệu 
select *  from Employees where DepartmentID=1; 

-- Update 
update Employees 
set Salary = 2000.00
where EmployeeID = 1; 

-- Xoa du lieu o muc cu the 
delete from Employees
where Salary <500.00;