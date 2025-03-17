using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

[ApiController]
[Route("api/[controller]")]
public class CategoryController : ControllerBase{
    private readonly TaskManagementContext _context;
    public CategoryController(TaskManagementContext context){
        _context = context;
    }

    //Get all categories
    [Authorize]
    [HttpGet]
    public async Task<IActionResult> GetAllCategories(){
        var categories = await _context.Categories.ToListAsync();
        return Ok(categories);
    }

    //Get category by id
    [Authorize]
    [HttpGet("{id}")]
    public async Task<IActionResult> GetCategoryById(int id){
        var category = await _context.Categories.FindAsync(id);
        if(category == null){
            return NotFound("Category not found.");
        }
        return Ok(category);
    }

    //Create a new category
    [Authorize]
    [HttpPost]
    public async Task<IActionResult> CreateCategory([FromBody] Category category){
        _context.Categories.Add(category);
        await _context.SaveChangesAsync();
        return CreatedAtAction(nameof(GetCategoryById), new { id = category.Id }, category);
    }

    //Update category by id
    [Authorize]
    [HttpPut("{id}")]
    public async Task<IActionResult> UpdateCategory(int id, [FromBody] Category category){
        if(_context.Categories.Find(id) == null){
            return NotFound("Category not found.");
        }
        _context.Categories.Update(category);
        await _context.SaveChangesAsync();
        return NoContent();
    }
    
    //Delete category by id
    [Authorize]
    [HttpDelete("{id}")]
    public async Task<IActionResult> DeleteCategory(int id){
        var category = await _context.Categories.FindAsync(id);
        if(category == null){
            return NotFound("Category not found.");
        }
        _context.Categories.Remove(category);
        await _context.SaveChangesAsync();
        return NoContent();
    }
}