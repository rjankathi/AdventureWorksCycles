using AWC.Business.Services;
using AWC.Models.DBModels;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Threading.Tasks;

namespace AWC.WebApi.Controllers
{
    [Route("api/[controller]")]
    public class LookupController : ControllerBase
    {
        LookupService _ls;
        public LookupController(LookupService ls)
        {
            _ls = ls;
        }
        #region GET LOOKUPS
        [HttpGet("productphotos")]
        public IActionResult GetProductPhotos()
        {
            try
            {
                IEnumerable<ProductPhoto> photos = _ls.GetProductPhotos();
                return Json(photos);
            }
            catch (Exception ex)
            {
                return StatusCode((int)HttpStatusCode.InternalServerError, ex.Message);
            }
        }
        #endregion
    }
}
