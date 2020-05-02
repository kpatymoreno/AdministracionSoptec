
using System.Collections.Generic;

using System.Threading.Tasks;

using AdmonSoptec.API.Data.Generics;

using AdmonSoptec.API.Dtos.Mantto;

using AdmonSoptec.API.Models.Mantto;
using AutoMapper;
using Microsoft.AspNetCore.Authorization;

using Microsoft.AspNetCore.Mvc;

namespace AdmonSoptec.API.Controllers.Manttos
{
    [Route("api/[controller]")]
    [Consumes("application/json")]
    [ApiController]
    [AllowAnonymous]
    public class CategoriaController : ControllerBase
    {
        private readonly IGenericRepository<Categoria> _categoria;
        private readonly IMapper _mapper;

        public CategoriaController(IGenericRepository<Categoria> categoria, IMapper mapper)
        {
           _categoria = categoria;
           _mapper = mapper;
        }

        [HttpGet("{id}")]
        public async Task<Categoria> OneCategoria(int id)
        {
          return await _categoria.GetById(id);
  
        }

        
        [HttpGet]
        
       
        public async Task<List<Categoria>> AllCategorias()
        {
          return await _categoria.GetAll();
             
        }

         [HttpPost]
        public async Task<IActionResult> NewCategoria(CategoriaRegisterDto categoriaRegisterDto)
        {
          
            var categoriaToCreate = new Categoria
            {
                // Email = userForRegusterDto.Email,
                Nombre = categoriaRegisterDto.Nombre,
                TipoCategoria = categoriaRegisterDto.TipoCategoria

            };
            await _categoria.Create<Categoria>(categoriaToCreate);

              if (await _categoria.SaveAll())
                 return Ok();

              return BadRequest("Failed to like user");
               }
               
                [HttpPut("{id}")]
        public async Task<IActionResult> UpdCategoria(int id,CategoriaUpdateDto categoriaUpdateDto)
        {
          var categoriaFromRepo = await _categoria.GetById(id);
          categoriaUpdateDto.id = categoriaFromRepo.Id;
      
          _mapper.Map(categoriaUpdateDto, categoriaFromRepo);

             _categoria.Update(categoriaFromRepo.Id, categoriaFromRepo);

              if (await _categoria.SaveAll())
                 return Ok();

              return BadRequest("Failed to like user");
             
        }
          [HttpDelete("{id}")]
        public async Task<IActionResult> DelCategoria(int id)
        {
          
             await _categoria.Delete(id);

              if (await _categoria.SaveAll())
                 return Ok();

              return BadRequest("Failed to like user");
             
        }
        
    }
}