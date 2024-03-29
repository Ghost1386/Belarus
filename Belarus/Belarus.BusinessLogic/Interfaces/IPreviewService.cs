﻿using Belarus.Common.DTOs;
using Belarus.Common.DTOs.PreviewDto;

namespace Belarus.BusinessLogic.Interfaces;

public interface IPreviewService
{
    GetPreviewDto Get(int id);

    Task<List<GetPreviewDto>> GetAll();

    bool Create(CreatePreviewDto previewDto);

    bool Delete(SearchDto searchDto);
}