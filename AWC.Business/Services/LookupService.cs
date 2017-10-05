using AWC.Models.DBModels;
using AWC.Models.ViewModels;
using AWC.Repository.Repositories;
using System;
using System.Collections.Generic;
using System.Text;

namespace AWC.Business.Services
{
    public class LookupService
    {
        AdventureWorks2014Context _context = null;
        public LookupService(AdventureWorks2014Context context)
        {
            _context = context;
        }

        public IEnumerable<ProductPhoto> GetProductPhotos()
        {
            //List<ProductPhotoVM> prodPhotos = new List<ProductPhotoVM>();
            IEnumerable<ProductPhoto> prodPhotos = null;
            using (ILookupRepository lr = new LookupRepository(_context))
            {
                prodPhotos = lr.GetLookup<ProductPhoto>();
            }
            return prodPhotos;
        }
    }
}
