using dummyProject.Model;
using dummyProject.Repositery;

namespace dummyProject.graphQl
{
    public class query
    {
        public async Task<student> getStudent(int sid, [Service] IStudentRepositery _repositery)
        {
            return await _repositery.getStudent(sid);
        }
        public string a => "awais khan";

        public async Task<IEnumerable<student>> getStu([Service] IStudentRepositery _repositery)
        {
            return await _repositery.getStudents();
        }
       
    }
}
