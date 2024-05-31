using System.ComponentModel.DataAnnotations.Schema;

namespace Employee_Portal__WebApi.Models
{
    public class Employee
    {
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public Guid Id { get; set; }
        public string Name { get; set; }
        public string Email { get; set; }
        public long phone { get;set; }
        public long salary { get; set; }

        public string Department { get; set; }
    }
}
