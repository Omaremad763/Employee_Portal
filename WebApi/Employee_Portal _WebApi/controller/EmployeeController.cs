using Employee_Portal__WebApi.Context;
using Employee_Portal__WebApi.Models;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;


namespace Employee_Portal__WebApi.Controller
{
    [Route("api/[controller]")]
    [ApiController]
    public class EmployeeController : ControllerBase
    {
        private readonly Employee_portalDbcontext _context;

        public EmployeeController(Employee_portalDbcontext context)
        {
            _context = context;
        }

        [HttpGet]
    
        public async Task<IActionResult> GetAll_Emloyess()
        {
            var Employees =await _context.Employees.ToListAsync();
            return Ok(Employees);
        }

        [HttpPost]
        public async Task<IActionResult> AddEmployee([FromBody] Employee employeeRequest)
        {
            employeeRequest.Id=Guid.NewGuid();
            await _context.Employees.AddAsync(employeeRequest);
            await _context.SaveChangesAsync();
            return Ok(employeeRequest);

        }

        [HttpGet]
        [Route("{id:Guid}")]

        public async Task<IActionResult> GetEmployee([FromRoute]Guid id)
        {
            var employee= await _context.Employees.FirstOrDefaultAsync(x=>x.Id==id);

            if (employee == null)
            {
                return NotFound();
            }
            return Ok(employee);
        }

        [HttpPut]
        [Route("{id:Guid}")]
        public async Task<IActionResult> UpdateEmployee([FromRoute] Guid id,Employee UpdateEmployee)
        {
            var employee = await _context.Employees.FindAsync(id);
            if (employee==null)
            {
                return NotFound();
            }
            employee.Name = UpdateEmployee.Name;
            employee.Email = UpdateEmployee.Email;
            employee.salary = UpdateEmployee.salary;
            employee.phone = UpdateEmployee.phone;
            employee.Department = UpdateEmployee.Department;

            await _context.SaveChangesAsync();
            return Ok(employee);

        }

        [HttpDelete]
        [Route("{id:Guid}")]
        public async Task<IActionResult> DeletEmployee([FromRoute] Guid id)
        {
            var employee = await _context.Employees.FindAsync(id);
            if(employee == null)
            {
                return NotFound();
            }
            _context.Employees.Remove(employee);
            await _context.SaveChangesAsync();
            return Ok(employee);

        }
    }
}
