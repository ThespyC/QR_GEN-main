using Microsoft.AspNetCore.Mvc.RazorPages;
using QuestPDF.Drawing;
using QuestPDF.Fluent;
using QuestPDF.Helpers;
using QuestPDF.Infrastructure;
using QuestPDF.Previewer;
using System;
using System.Reflection.Emit;


using System.Collections.Generic;



//make array example with 65 items
//make a loop to generate 65 items

using QuestPDF.Drawing;
using QuestPDF.Fluent;
using QuestPDF.Helpers;
using QuestPDF.Infrastructure;
using Newtonsoft.Json.Linq;

using System;

namespace PDF1
{
    public class Generate65PDF1
    {
        private readonly int paperWidth;
        private readonly int paperHeight;

        [Obsolete]
        public Generate65PDF1(int paperWidth, int paperHeight, JArray dataArray)
        {
            this.paperWidth = paperWidth;
            this.paperHeight = paperHeight;

            QuestPDF.Settings.License = LicenseType.Community;
            FontManager.RegisterFont(File.OpenRead("./font/LibreBarcode39-Regular.ttf")); // use file name

            Document.Create(container =>
            {
                container.Page(page =>
                {
                    // Change width and height of the page here
                    page.Size(new PageSize(paperHeight,paperWidth)); // Width and height in points (1 inch = 72 points)

                    page.Content()
                        .Border(1)
                        .Grid(grid =>
                        {
                            grid.VerticalSpacing(1);
                            grid.HorizontalSpacing(1);
                            grid.AlignCenter();
                            grid.Columns(11); // 12 by default
                           
                             // Assuming grid is an object representing your grid control

                            // Process each item in the dataArray
                            for (int i = 0; i < dataArray.Count; i++)
                            {
                                // Access each item in the array
                                var item = dataArray[i];

                                // Extract properties from the item
                                string title = item["Title"].ToString();
                                string description = item["Description"].ToString();
                                string code = item["Code"].ToString();

                                // Create a new grid item with the specified properties
                                 grid.Item(2).Background(Colors.White).Border(1).BorderColor(Colors.Black).Height(60).Padding(1).Text(text =>
                                {
                                    
                                    text.Span(title).Bold().FontSize(8);
                                    text.AlignCenter();
                                    text.EmptyLine();

                                    var random = new Random();
                                    var barcode = random.Next(100000000, 999999999).ToString();

                                    text.Span(code).FontFamily("Libre Barcode 39").FontSize(22);

                                    text.EmptyLine();
                                    text.Span(code).FontSize(6);
                                });
}

                        });
                });
            })
            .GeneratePdf("65pdf.pdf");
        }
    }
}
