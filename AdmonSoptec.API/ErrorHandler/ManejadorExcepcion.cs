using System.Net;
using System;
namespace AdmonSoptec.API.ErrorHandler
{
    //Clase que convierte a Json el error para que sea devuelto al cliente
    public class ManejadorExcepcion : Exception
    {
        public HttpStatusCode codigo {get;}
        public object errores {get;}

        public ManejadorExcepcion(HttpStatusCode codigo, Object errores = null)
        {
            this.codigo = codigo;
            this.errores = errores;
        }
    }
}