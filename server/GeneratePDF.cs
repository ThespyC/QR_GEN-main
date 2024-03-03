using QuestPDF.Fluent;
using QuestPDF.Helpers;
using QuestPDF.Infrastructure;
using QuestPDF.Previewer;
using System;

//licence key for


namespace PDF
{
    
    public class GeneratePDF
    {
        
        private byte[] bytes;
        
        public GeneratePDF()
        {
            QuestPDF.Settings.License = LicenseType.Community;
            var document = Document.Create(document =>
            {
                document.Page(page =>
                {
                     page.Content()
                        .Background(Colors.Grey.Lighten2)
                        .AlignCenter()
                        .AlignMiddle()
                        .Text("Content");
                    page.Size(PageSizes.A4);

                    page.PageColor(Colors.Black);
                    page.DefaultTextStyle(x => x.FontSize(15));
                    page.Content()
                        .Column(column =>{
                         column.Item().Background(Colors.Blue.Medium).Height(50);
                         column.Item().Background(Colors.Grey.Lighten1).Height(100);
                         column.Item().Background(Colors.Grey.Lighten2).Height(150);
                        });
                        

                    
                });
            });
            
            var bytes = document.GeneratePdf();
            this.bytes = bytes;
            Console.WriteLine(bytes);
            System.IO.File.WriteAllBytes("output.pdf", bytes);
 
        }
        public byte[] getBytes()
        {
            return this.bytes;
        }

    }
}
