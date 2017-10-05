using AWC.Models.DBModels;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Text;

namespace AWC.Repository.Repositories
{
    public class LookupRepository : ILookupRepository
    {
        public AdventureWorks2014Context _context;

        public LookupRepository(AdventureWorks2014Context context)
        {
            _context = context;
        }
        public IEnumerable<T> GetLookup<T>() where T : class
        {
            IEnumerable<T> lookup = _context.Set<T>().AsNoTracking();
            return lookup;
        }

        public void Dispose()
        {
            GC.SuppressFinalize(this);
        }
    }
}
