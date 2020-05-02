using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
namespace AdmonSoptec.API.Data.Generics
{
    public class GenericRepository<TEntity> : IGenericRepository<TEntity>
        where TEntity : class, IEntity
    {
       private readonly DataContext _dbContext;

        public GenericRepository(DataContext dbContext)
        {
            _dbContext = dbContext;
        }

       public Task<List<TEntity>> GetAll()
        {   
            return _dbContext.Set<TEntity>()
            .ToListAsync();
        }

      
        public async Task<TEntity> GetById(int id)
        {
            return await _dbContext.Set<TEntity>()
                .AsNoTracking()
                 .FirstOrDefaultAsync(e => e.Id == id);
        }


        public async Task Create<T>(T entity) where T : class
        {
            await _dbContext.Set<T>().AddAsync(entity);
           
        }

         public void Update(int id, TEntity entity)
        {
            _dbContext.Set<TEntity>().Update(entity);
           
        }

        public async Task Delete(int id)
        {
            var entity = await _dbContext.Set<TEntity>().FindAsync(id);
            _dbContext.Set<TEntity>().Remove(entity);
            
        }

        public async Task<bool> SaveAll()
        {
            return await _dbContext.SaveChangesAsync() > 0;
        }
    }
}
