using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace ArsenalAPI.Models
{
    public class Roster
    {
        public int PlayerID { get; set; }
        public string Position { get; set; }
        public string FirstName { get; set; }
        public string LastName { get; set; }
        public string Country { get; set; }
        public int Appearances { get; set; }
        public int Goals { get; set; }
        public int Assists { get; set; }
        public int CleanSheets { get; set; }
        public string OnLoan { get; set; }
        public string LoanTeam { get; set; }
        public string ImageName { get; set; }
        public string NumberOfRows { get; set; }



    }
}