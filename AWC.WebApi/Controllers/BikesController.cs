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
        #endregion

    }
}
