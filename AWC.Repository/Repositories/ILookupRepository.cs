using System;
using System.Collections.Generic;
using System.Text;

namespace AWC.Repository.Repositories
{
    public interface ILookupRepository:IDisposable
    {
        IEnumerable<T> GetLookup<T>() where T : class;
    }
}
