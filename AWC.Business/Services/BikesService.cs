using AWC.Models.DBModels;
using AWC.Repository.Repositories;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace AWC.Business.Services
{
    public class BikesService
    {
        AdventureWorks2014Context _context = null;
        public BikesService(AdventureWorks2014Context context)
        {
            _context = context;
        }

        public IEnumerable<BikesListItem> GetAllBikes()
        {
            List<BikesListItem> list = new List<BikesListItem>();
            IEnumerable<Product> products = null;
            IEnumerable<ProductPhoto> productPhotos = null;
            using (IBikesRepository br = new BikesRepository(_context))
            {
                products = br.GetAllBikes();
                productPhotos = br.GetLookup<ProductPhoto>();
                
                //ProductPhoto image = new ProductPhoto();
                //ProductProductPhoto ppp = new ProductProductPhoto();
                //ppp.ProductPhoto.LargePhoto
                foreach (var p in products)
                {

                    var photoId = p.ProductProductPhoto.Select(s => s.ProductPhotoId).FirstOrDefault();
                    BikesListItem bli = new BikesListItem();
                    bli.ProductId = p.ProductId;
                    bli.ProductModelId = p.ProductModelId;
                    bli.ProductSubCategoryId = p.ProductSubcategoryId;
                    bli.Color = p.Color;
                    bli.Name = p.Name;
                    bli.Image = productPhotos.Where(w => w.ProductPhotoId == photoId).Select(s => s.LargePhoto).FirstOrDefault();
                    //First(f => f.ProductPhotoId == photoId).ThumbNailPhoto;
                    bli.Size = p.Size;
                    bli.SizeUnitMeasureCode = p.SizeUnitMeasureCode;
                    bli.Weight = p.Weight;
                    bli.WeightUnitMeasureCode = p.WeightUnitMeasureCode;
                    bli.ListPrice = p.ListPrice;
                    list.Add(bli);
                }
            }
                return list;
        }


    }
}
