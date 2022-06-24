using ArsenalAPI.Models;
using System;
using System.Collections.Generic;
using System.Configuration;
using System.Data;
using System.Data.SqlClient;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;

namespace ArsenalAPI.Controllers
{
    public class Community_Shield20222023Controller : ApiController
    {
        // GET: api/CommunityShield
        public HttpResponseMessage Get()
        {
            string query = @"
                EXEC SelectCommunityShieldData
            ";
            DataTable table = new DataTable();
            using (var con = new SqlConnection(ConfigurationManager.
                ConnectionStrings["Arsenal20222023DB"].ConnectionString))
            using (var cmd = new SqlCommand(query, con))
            using (var da = new SqlDataAdapter(cmd))
            {
                cmd.CommandType = CommandType.Text;
                da.Fill(table);
            }

            return Request.CreateResponse(HttpStatusCode.OK, table);
        }
        // GET: api/CommunityShield
        public string Post(Roster ros)
        {
            try
            {
                DataTable table = new DataTable();
                string query = @"
                          insert into dbo.CommunityShield Values (
                                  '" + ros.Position + @"',
                                  '" + ros.LastName + @"',
                                  '" + ros.FirstName + @"',
                                  '" + ros.Appearances + @"',
                                  '" + ros.Goals + @"',
                                  '" + ros.Assists + @"',
                                  '" + ros.CleanSheets + @"'
                            )";

                using (var con = new SqlConnection(ConfigurationManager.ConnectionStrings["Arsenal20222023DB"].ConnectionString))
                using (var cmd = new SqlCommand(query, con))
                using (var da = new SqlDataAdapter(cmd))
                {
                    cmd.CommandType = CommandType.Text;
                    da.Fill(table);
                }

                return "Player Data Added successfully!";
            }
            catch (Exception)
            {
                return "Failed to Add Player Data!";
            }

        }
        public string Put(Roster ros)
        {
            try
            {
                DataTable table = new DataTable();
                string query = @"
                          update dbo.CommunityShield set 
                          Position = '" + ros.Position + @"',
                          LastName = '" + ros.LastName + @"',
                          FirstName = '" + ros.FirstName + @"',
                          Country = '" + ros.Country + @"',
                          Appearances = '" + ros.Appearances + @"',
                          Goals = '" + ros.Goals + @"',
                          Assists = '" + ros.Assists + @"',
                          CleanSheets = '" + ros.CleanSheets + @"',
                          OnLoan = '" + ros.OnLoan + @"',
                          CleanSheets = '" + ros.CleanSheets + @"',
                          LoanTeam = '" + ros.LoanTeam + @"'
                            where PlayerID = " + ros.PlayerID + @"
                          ";

                using (var con = new SqlConnection(ConfigurationManager.ConnectionStrings["Arsenal20222023DB"].ConnectionString))
                using (var cmd = new SqlCommand(query, con))
                using (var da = new SqlDataAdapter(cmd))
                {
                    cmd.CommandType = CommandType.Text;
                    da.Fill(table);
                }

                return "Player Data Updated successfully!";
            }
            catch (Exception)
            {
                return "Failed to Update Player Data!";
            }
        }

        public string Delete(int id)
        {
            try
            {
                DataTable table = new DataTable();
                string query = @"
                          delete from dbo.CommunityShield where PlayerID = " + id;

                using (var con = new SqlConnection(ConfigurationManager.ConnectionStrings["Arsenal20222023DB"].ConnectionString))
                using (var cmd = new SqlCommand(query, con))
                using (var da = new SqlDataAdapter(cmd))
                {
                    cmd.CommandType = CommandType.Text;
                    da.Fill(table);
                }

                return "Player Data Delete successfully!";
            }
            catch (Exception)
            {
                return "Failed to Delete Player Data!";
            }
        }

    }
}
