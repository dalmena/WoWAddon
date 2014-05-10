using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Deployer
{
    public interface ICanMapFile
    {
        bool CanMap(string file);
        void Map(string file);
        void EndMap();
    }
}
