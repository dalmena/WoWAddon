using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Deployer
{
    public class DirectorySearcher
    {
        private ICanMapFile _mapper;

        public DirectorySearcher(ICanMapFile mapper)
        {
            _mapper = mapper;
        }

        public void Execute(string directory)
        {
            ProcessExecute(directory);
            _mapper.EndMap();
        }

        private void ProcessExecute(string directory)
        {
            try
            {
                foreach (string innerDirectory in Directory.GetDirectories(directory))
                {
                    foreach (string file in Directory.GetFiles(innerDirectory))
                    {
                        if (_mapper.CanMap(file))
                        {
                            _mapper.Map(file);
                        }
                    }
                    ProcessExecute(innerDirectory);
                }
            }
            catch (System.Exception)
            {
                throw new CantSearchFile();
            }
        }

        public class CantSearchFile : Exception
        {

        }

    }
}
