use CompanyDB;

create table Orders (
OrderId int primary key auto_increment,
OrderDate date not null,
TotalAmount decimal(10,1) check (TotalAmount >=0),
foreign key (CustomerID) references Customers(CustomerID)
);