﻿using Belarus.Common.DTOs;
using Belarus.Common.DTOs.NewsDto;

namespace Belarus.BusinessLogic.Interfaces;

public interface INewsService
{
    bool Get();

    bool GetAll();
    
    bool Create(CreateNewsDto newsDto);

    bool Delete();
}