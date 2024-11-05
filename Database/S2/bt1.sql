USE CompanyDB;

CREATE TABLE Employees (
    EmployeeID INT PRIMARY KEY AUTO_INCREMENT,
    FirstName VARCHAR(50) NOT NULL,
    LastName VARCHAR(50) NOT NULL,
    HireDate DATE NOT NULL,
    Salary DECIMAL(10, 2) NOT NULL
);

ALTER TABLE Employees 
ADD COLUMN Department VARCHAR(50);

ALTER TABLE Employees
MODIFY COLUMN Salary DECIMAL(2,10);