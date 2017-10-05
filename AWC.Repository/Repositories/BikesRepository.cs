using System;
using System.Collections.Generic;
using System.Text;
using AWC.Models.DBModels;
using Microsoft.EntityFrameworkCore;
using System.Linq;

namespace AWC.Repository.Repositories
{
    public class BikesRepository : IBikesRepository
    {
        public AdventureWorks2014Context _context;

        public BikesRepository(AdventureWorks2014Context context)
        {
            _context = context;
        }

        public void Dispose()
        {
            GC.SuppressFinalize(this);
            // throw new NotImplementedException();
        }

        public IEnumerable<Product> GetAllBikes()
        {
            IEnumerable<Product> products = _context.Product.Include(i => i.ProductProductPhoto).ThenInclude(ti => ti.ProductPhoto).AsNoTracking().ToList();
            return products.Where(w => w.ProductSubcategoryId == 1 || w.ProductSubcategoryId ==2 || w.ProductSubcategoryId ==3);
            //var productCategory = _context.ProductCategory.Select(s => s.ProductCategoryId).First();
                //Where(w => w.ProductCategoryId == 1).FirstOrDefault();
            //return products.Where(w => w.ProductSubcategoryId == productCategory.ProductCategoryId);
        }

        public IEnumerable<T> GetLookup<T>() where T : class
        {
            IEnumerable<T> lookup = _context.Set<T>().AsNoTracking();
            return lookup;
        }
    }
}
