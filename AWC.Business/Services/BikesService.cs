using AWC.Models.DBModels;
using AWC.Models.ViewModels;
using AWC.Repository.Repositories;
using System;
using System.Collections.Generic;
using System.IO;
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

        public BikeDetailsVM GetBikesDetails(int productId)
        {
            BikeDetailsVM bike = new BikeDetailsVM();
            using (IBikesRepository br = new BikesRepository(_context))
            {
                Product productDetail = br.GetBikesDetails(productId);
                bike.ProductId = productDetail.ProductId;
                bike.ProductId = productDetail.ProductId;
                bike.ProductModelId = productDetail.ProductModelId;
                bike.ProductSubCategoryId = productDetail.ProductSubcategoryId;
                bike.Color = productDetail.Color;
                bike.Name = productDetail.Name;
                var photoId = productDetail.ProductProductPhoto.Select(s => s.ProductPhotoId).FirstOrDefault();
                bike.Image = br.GetImage(photoId);
                //bike.Image = productPhotos.Where(w => w.ProductPhotoId == photoId).Select(s => s.LargePhoto).FirstOrDefault();
                //bikeirst(f => f.ProductPhotoId == photoId).ThumbNailPhoto;
                bike.Size = productDetail.Size;
                bike.SizeUnitMeasureCode = productDetail.SizeUnitMeasureCode;
                bike.Weight = productDetail.Weight;
                bike.WeightUnitMeasureCode = productDetail.WeightUnitMeasureCode;
                bike.ListPrice = productDetail.ListPrice;

            }
                return bike;
        }

       
    }
}
