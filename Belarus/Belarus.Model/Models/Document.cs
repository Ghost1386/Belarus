﻿using System.ComponentModel.DataAnnotations;

namespace Belarus.Model.Models;

public class Document
{
    [Key]
    public int Id { get; set; }

    public string Title { get; set; }

    public string FilePath { get; set; }
}