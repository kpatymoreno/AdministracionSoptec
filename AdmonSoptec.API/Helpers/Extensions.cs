using Microsoft.AspNetCore.Http;

namespace AdmonSoptec.API.Helpers
{
    public static class Extensions
    {
        public static void AddApplicationError(this HttpResponse response, string message)
        {
            response.Headers.Add("Application-Error", message);
            response.Headers.Add("Acces-Control-Expose-Headers", "Aplication-Error");
            response.Headers.Add("Acces-Control-Allow-Origin", "*");
            }
    }
}