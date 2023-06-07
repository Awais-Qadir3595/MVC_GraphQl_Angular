using dummyProject.Model;
using dummyProject.Repositery;
using System.Text;

namespace dummyProject.graphQl
{
    public class mutation
    {
        public async Task<student> createStudent([Service] IStudentRepositery e,student s)
        {
            return await e.AddStudent(s);
        }

        public async Task<string> delStu(int id, [Service] IStudentRepositery s)
        {
            return await s.DeleteStudent(id);
        }
        public async Task<int> updStudent(student obj , [Service] IStudentRepositery s)
        {
            return await s.UpdateStudent(obj);
        }
    }
}
