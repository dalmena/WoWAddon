using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Deployer
{

    public class JavascriptMapper : ICanMapFile
    {
        public List<string> Files { get; set; }

        public JavascriptMapper()
        {
            Files = new List<string>();
        }

        public bool CanMap(string file)
        {
            return file.ToLower().IndexOf(".js") >= 0;
        }

        public void Map(string file)
        {
            if(file.Contains(@"\config\"))
                Files.Insert(0, file);
            else
                Files.Add(file);
        }

        public void EndMap()
        {
            Files.Reverse();
        }
    }
}
