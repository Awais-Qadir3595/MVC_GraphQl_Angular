using dummyProject.Model;

namespace dummyProject.Repositery
{
    public interface IStudentRepositery
    {
        Task<IEnumerable<student>> getStudents();

        Task<student> getStudent(int id);
        Task<student> AddStudent(student s);

        Task<string> DeleteStudent(int id);

        Task<int> UpdateStudent(student s);
      }
}
