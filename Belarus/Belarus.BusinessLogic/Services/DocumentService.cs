using Belarus.BusinessLogic.Interfaces;
using Belarus.Common.DTOs.DocumentDto;
using Belarus.Model;
using Belarus.Model.Models;
using Microsoft.EntityFrameworkCore;

namespace Belarus.BusinessLogic.Services;

public class DocumentService : IDocumentService
{
    private readonly ApplicationContext _applicationContext;

    private const string FilesPath = "ClientApp/public/assets/files";

    public DocumentService(ApplicationContext applicationContext)
    {
        _applicationContext = applicationContext;
    }
    
    public async Task<List<GetDocumentDto>> GetAll()
    {
        var documents = await _applicationContext.Documents.ToListAsync();

        var documentsDto = documents.Select(document => new GetDocumentDto
        {
            Title = document.Title,
            FilePath = document.FilePath
        }).ToList();
        
        documentsDto.Reverse();
        
        return documentsDto;
    }

    public bool Create(CreateDocumentDto documentDto)
    {
        try
        {
            var path = Path.Combine(Directory.GetCurrentDirectory(), FilesPath,
                documentDto.Path);

            using (var stream = new FileStream(path, FileMode.Create))
            {
                documentDto.File.CopyTo(stream);
            }
            
            var document = new Document
            {
                Title = documentDto.Title,
                FilePath = documentDto.Path
            };
            
            _applicationContext.Documents.Add(document);
            _applicationContext.SaveChanges();

            return true;
        }
        catch
        {
            return false;
        }
    }

    public bool Delete(string title)
    {
        title = title.ToLower();
        
        var document = _applicationContext.Documents.FirstOrDefault(document => document.Title.ToLower() == title);
        
        if (document != null)
        {
            var fileInfo = new FileInfo(document.FilePath);

            if (fileInfo.Exists)
            {
                fileInfo.Delete();
            }
            
            _applicationContext.Documents.Remove(document);
            _applicationContext.SaveChanges();

            return true;
        }
        
        return false;
    }
}