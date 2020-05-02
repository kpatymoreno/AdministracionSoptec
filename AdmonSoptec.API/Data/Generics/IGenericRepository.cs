using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
namespace AdmonSoptec.API.Data.Generics
{
    public interface IGenericRepository<TEntity>
        where TEntity : class
    {
      Task<List<TEntity>> GetAll();
          Task<TEntity> GetById(int id);

         Task Create<T>(T entity) where T : class;

         void Update(int id, TEntity entity);

         Task Delete(int id);

         Task<bool> SaveAll();
    }
}