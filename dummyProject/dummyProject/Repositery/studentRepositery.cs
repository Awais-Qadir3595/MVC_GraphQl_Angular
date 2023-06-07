using dummyProject.Data;
using dummyProject.Model;
using Microsoft.EntityFrameworkCore;

namespace dummyProject.Repositery
{
    public class studentRepositery : IStudentRepositery
    {
        private readonly ApplicationDbContext _context;
        public studentRepositery(ApplicationDbContext context)
        {
            _context = context;
        }

        public async Task<IEnumerable<student>> getStudents()
        {
            var result = await _context.students.ToListAsync();
            return result;
            
        }

        public async  Task<student> AddStudent(student s)
        {
            var result = await _context.students.AddAsync(s);
            await _context.SaveChangesAsync();
            return result.Entity;
        }

        public async Task<string> DeleteStudent(int id)
        {
            var obj = await _context.students.FindAsync(id);
            _context.students.Remove(obj);
            await _context.SaveChangesAsync();

            return "record delete";
            
        }

        public async Task<student> getStudent(int id)
        {
             return await _context.students.FindAsync(id);
             
        }

        public async Task<student> findStu(int id)
        {
            return await _context.students.FindAsync(id);
        }

        public async Task<int> UpdateStudent(student s)
        {
            //var res = findStu(id);
              _context.students.Update(s);
            return await _context.SaveChangesAsync();
        }
    }
}
