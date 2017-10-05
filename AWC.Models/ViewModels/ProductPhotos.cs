using System;
using System.Collections.Generic;
using System.Text;

namespace AWC.Models.ViewModels
{
    public class ProductPhotoVM
    {
        public int ProductPhotoId { get; set; }
        public byte[] ThumbNailPhoto { get; set; }
        public string ThumbnailPhotoFileName { get; set; }
        public byte[] LargePhoto { get; set; }
        public string LargePhotoFileName { get; set; }
    }
}
