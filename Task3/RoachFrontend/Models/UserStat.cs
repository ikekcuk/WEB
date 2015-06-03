using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using Newtonsoft.Json;

namespace RoachFrontend.Models
{
    [JsonObject]
    public class UserStat
    {
        [JsonProperty("user")]
        public string UserId { get; set; }

        [JsonProperty("money")]
        public int Money { get; set; }
    }
}