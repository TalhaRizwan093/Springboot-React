package com.app.springbootcrudapp.controller;

import com.app.springbootcrudapp.model.Employee;
import com.app.springbootcrudapp.repository.EmployeeRepository;
import com.app.springbootcrudapp.service.EmployeeService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin("*")
@RestController
public class EmployeeController {

    @Autowired
    private EmployeeService employeeService;


    // display list of employees
//    @GetMapping("/")
//    public String viewHomePage(Model model) {
//        model.addAttribute("listEmployees", employeeService.getAllEmployees());
//        return "index";
//    }
    @GetMapping("/employee")
    public List<Employee> viewHomePage() {
        //model.addAttribute("listEmployees", employeeService.getAllEmployees());
        List<Employee> emp = employeeService.getAllEmployees();
        for(int i = 0; i<emp.size(); i++){
            System.out.println(emp.get(i).getEmail());
        }
        return emp;
    }

    @GetMapping("/showNewEmployeeForm")
    public String showNewEmployeeForm(Model model) {
        // create model attribute to bind form data
        Employee employee = new Employee();
        model.addAttribute("employee", employee);
        return "new_employee";
    }

    @PostMapping("/saveEmployee")
    public ResponseEntity<String> saveEmployee(@RequestBody Employee employee) {
        // save employee to database
        if(employee.getEmail() != null){
            employeeService.saveEmployee(employee);
            return new ResponseEntity<>("Success", HttpStatus.OK);
        }
        else{
            return new ResponseEntity<>("Please Enter All Fields", HttpStatus.BAD_REQUEST);
        }

    }

    @GetMapping("/showFormForUpdate/{id}")
    public String showFormForUpdate(@PathVariable(value = "id") long id, Model model) {

        // get employee from the service
        Employee employee = employeeService.getEmployeeById(id);

        // set employee as a model attribute to pre-populate the form
        model.addAttribute("employee", employee);
        return "update_employee";
    }

    @GetMapping("/deleteEmployee/{id}")
    public ResponseEntity<String> deleteEmployee(@PathVariable(value = "id") long id) {

        // call delete employee method
        List<Employee> emp = employeeService.getAllEmployees();
        for(int i = 0; i< emp.size(); i++) {
            if (emp.get(i).getId() == id) {
                this.employeeService.deleteEmployeeById(id);
                return new ResponseEntity<>("Success", HttpStatus.OK);
            }
        }
        return new ResponseEntity<>("Employee Not found", HttpStatus.NOT_FOUND);
    }
}
