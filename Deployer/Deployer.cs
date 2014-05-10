using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Deployer
{
    public class Deployer
    {
        private DirectorySearcher _directorySearcher;
        private JavascriptMapper _mapper;
        private string _solutionDirectory;
        private string _wowAddonDirectory;

        public Deployer(string solutionDirectory)
        {
            _solutionDirectory = solutionDirectory;
        }

        public void Deploy()
        {
            SetUp();
            MapEachJavascript();
            CreateProjectFile();
        }
         
        private void SetUp() 
        {
            _mapper = new JavascriptMapper();
            _wowAddonDirectory = _solutionDirectory + @"WoWAddon";
            _directorySearcher = new DirectorySearcher(_mapper);
        }

        private void MapEachJavascript()
        {
            _directorySearcher.Execute(_wowAddonDirectory);
        }

        private void CreateProjectFile()
        {
            var projectFile = _wowAddonDirectory + @"\project.js";
            var projectFileGenerator = new ProjectFileGenerator(_mapper.Files);

            projectFileGenerator.CreateFile(projectFile);
        }
         
        static void Main(string[] args)
        {
            string solutionDirectory = args[0]; 
            new Deployer(solutionDirectory).Deploy();  
        }
    }
}
