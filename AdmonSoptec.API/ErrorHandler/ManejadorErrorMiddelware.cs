using System.Net;
using System.Net.Http;
using System;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.Extensions.Logging;
using Newtonsoft.Json;

namespace AdmonSoptec.API.ErrorHandler
{
    public class ManejadorErrorMiddelware
    {
        private readonly RequestDelegate _next;
        private readonly ILogger<ManejadorErrorMiddelware> _logger;

        public ManejadorErrorMiddelware(RequestDelegate next, ILogger<ManejadorErrorMiddelware> logger)
        {
            _next = next;
            _logger = logger;
        }

        public async Task Invoke(HttpContext context) {
            try {
            await _next(context);
            } catch (Exception ex) {
                await ManejadorExcepcionAsyncrona(context, ex, _logger);
            }
        }
    
        private async Task ManejadorExcepcionAsyncrona(HttpContext context, Exception ex, ILogger<ManejadorErrorMiddelware> logger) {
            object errores = null;
            switch(ex) {
                case ManejadorExcepcion me :
                    logger.LogError(ex, "Manejador Error");
                    errores = me.errores;
                    context.Response.StatusCode = (int)me.codigo;
                    break;
                case Exception e:
                    logger.LogError(ex, "Error de Servidor");
                    errores = string.IsNullOrWhiteSpace(e.Message) ? "Error": e.Message;
                    context.Response.StatusCode = (int)HttpStatusCode.InternalServerError;
                    break;
            }
            context.Response.ContentType = "application/json";
            if(errores != null) {
                var resultado = JsonConvert.SerializeObject(new {errores});
                await context.Response.WriteAsync(resultado);
            }
        }
    }
}