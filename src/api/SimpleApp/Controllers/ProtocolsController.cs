using Microsoft.AspNetCore.Cors;
using Microsoft.AspNetCore.Mvc;

namespace SimpleApp.Controllers
{
    [ApiController]
    [Route("[controller]")]
    [Produces("application/json")]
    public class ProtocolsController : ControllerBase
    {
        private readonly ILogger<ProtocolsController> _logger;
        private readonly SimpleAppContext _context;

        public ProtocolsController(ILogger<ProtocolsController> logger, SimpleAppContext context)
        {
            _logger = logger;
            _context = context;
        }

        [HttpGet]
        //[EnableCors("Policy1")]
        [ProducesResponseType(StatusCodes.Status200OK)]
        [ProducesResponseType(StatusCodes.Status404NotFound)]
        public async Task<IActionResult> GetProtocols([FromQuery] ProtocolQuery query)
        {
            var protocolsCount = _context.Protocols.Skip(query.Offset).Take(query.Limit).Count();
            var protocols = _context.Protocols.Skip(query.Offset).Take(query.Limit).ToArray();

            var meta = new Dictionary<string, int>
            {
                {"totalCount", protocolsCount},
                {"limit", query.Limit},
                {"offset", query.Offset}
            };

            return Ok(new { meta, protocols });
        }

        //[HttpGet]
        //[EnableCors("Policy1")]
        //public async Task<IActionResult> GetProtocolById(int id)
        //{
            //if (_context.Protocols == null)
                //return BadRequest();

            //var foundProtocol = await _context.Protocols.FindAsync(id).ConfigureAwait(false);
            //if (foundProtocol == null)
            //{
                //return NotFound();
            //}
            //return Ok(foundProtocol);

        //}        

        
    }
}