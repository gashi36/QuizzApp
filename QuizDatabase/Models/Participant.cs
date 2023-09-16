﻿using Microsoft.EntityFrameworkCore.Metadata.Internal;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace QuizDatabase.Models
{
    public class Participant
    {
        [Key]
        public int ParticipantId { get; set; }
        [Column(TypeName = "nvarchar(50)")]
        public required string Email { get; set; }
        [Column(TypeName = "nvarchar(50)")]
        public required string Name { get; set; }
       
        public int Score { get; set; }
       
        public int TimeTaken { get; set; }


    }

    public class ParticipantResult
    { 
        public int ParticipantId { get; set; }
        public int Score {get; set; }
        public int TimeTaken { get; set; } 
    
    }


}
