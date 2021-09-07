package com.app.springbootcrudapp.service;

import java.util.List;

import com.app.springbootcrudapp.model.Employee;


public interface EmployeeService {
    List <Employee> getAllEmployees();
    void saveEmployee(Employee employee);
    Employee getEmployeeById(long id);
    void deleteEmployeeById(long id);
}