using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Deployer
{
    public class ProjectFileGenerator
    {
        private List<string> _files;

        public ProjectFileGenerator(List<string> files)
        {
            _files = files;
        }

        public void CreateFile(string file)
        {
            string code = GenerateCode();
            ReplaceFileContent(file, code);
        }

        private string GenerateCode(){
            string code = @"// ==UserScript==" + "\r\n" +
                          @"// @name       WoWAddon" + "\r\n" +
                          @"// @namespace  http://github.com/scotilen/WoWAddon" + "\r\n" +
                          @"// @version    1" + "\r\n" +
                          @"// @description  It is a package of addons for World of Warcraft web auction house." + "\r\n" + 
                          @"// @match      https://us.battle.net/wow/en/vault/character/auction/*" + "\r\n";

            foreach (string file in _files)
            {
                code += @"// @require    file://" + file + "\r\n";
            }

            code += @"// @copyright  2014+, miguelcjalmeida@gmail.com" + "\r\n" + 
                    @"// ==/UserScript==" + "\r\n";

            return code;
        }

        private void ReplaceFileContent(string file, string content)
        {
            if (File.Exists(file))
                File.Delete(file);

            using (StreamWriter sw = File.CreateText(file))
            {
                sw.WriteLine(content);
            }	
        }
    }
}
