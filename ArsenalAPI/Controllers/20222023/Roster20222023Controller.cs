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
    public class Roster20222023Controller : ApiController
    {
        // GET: api/Roster
        public HttpResponseMessage Get()
        {
            string query = @"
                EXEC SelectRoster;
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

        // GET api/values/5
        public HttpResponseMessage Get(int PlayerID)
        {
            DataTable table = new DataTable();
            string query = @"
                          select * from dbo.Roster where PlayerID = " + PlayerID;

            using (var con = new SqlConnection(ConfigurationManager.ConnectionStrings["Arsenal20222023DB"].ConnectionString))
            using (var cmd = new SqlCommand(query, con))
            using (var da = new SqlDataAdapter(cmd))
            {
                cmd.CommandType = CommandType.Text;
                da.Fill(table);
            }
            return Request.CreateResponse(HttpStatusCode.OK, table);
        }
        // GET: api/Roster
        public string Post(Roster ros)
        {
            try
            {
                DataTable table = new DataTable();
                string query = @"
                          insert into dbo.Roster Values (
                                  '" + ros.Position + @"',
                                  '" + ros.LastName + @"',
                                  '" + ros.FirstName + @"',
                                  '" + ros.Country + @"',
                                  '" + ros.Appearances + @"',
                                  '" + ros.Goals + @"',
                                  '" + ros.Assists + @"',
                                  '" + ros.CleanSheets + @"',
                                  '" + ros.OnLoan + @"',
                                  '" + ros.LoanTeam + @"',
                                  '" + ros.ImageName + @"'
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
                          update dbo.Roster set 
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
                          delete from dbo.Roster where PlayerID = " + id;

                using (var con = new SqlConnection(ConfigurationManager.ConnectionStrings["Arsenal2022203DB"].ConnectionString))
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
