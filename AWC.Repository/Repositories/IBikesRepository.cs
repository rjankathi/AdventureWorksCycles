using AWC.Models.DBModels;
using System;
using System.Collections.Generic;
using System.Text;

namespace AWC.Repository.Repositories
{
    public interface IBikesRepository:IDisposable
    {
        IEnumerable<T> GetLookup<T>() where T : class;
        IEnumerable<Product> GetAllBikes();
    }
}
