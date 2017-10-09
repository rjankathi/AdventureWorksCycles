using AWC.Business.Services;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Threading.Tasks;

namespace AWC.WebApi.Controllers
{
    [Route("api/[controller]")]
    public class BikesController : ControllerBase
    {
        BikesService _bs;
        public BikesController(BikesService bs)
        {
            _bs = bs;
        }

        #region GET METHODS
        //api/bikes/all
        [HttpGet("all")]
        public IActionResult GetAllBikes()
        {
            try
            {
                IEnumerable<BikesListItem> bikes = _bs.GetAllBikes();
                return Json(bikes);
            }
            catch (Exception ex)
            {
                return StatusCode((int)HttpStatusCode.InternalServerError, ex.Message);
            }
        }

        //api/bikes/{productId}/details
        [HttpGet("{productId}/details")]
        public IActionResult GetBike(int productId)
        {
            try
            {
                var bikeDetails = _bs.GetBikesDetails(productId);
                return Json(bikeDetails);
            }
            catch (Exception ex)
            {
                return StatusCode((int)HttpStatusCode.InternalServerError, ex.Message);
            }
        }

        #endregion

    }
}
