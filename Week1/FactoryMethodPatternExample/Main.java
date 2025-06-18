// Main.java
public class Main {
    public static void main(String[] args) {
        DocumentFactory factory;

        // Create a Word document
        factory = new WordDocumentFactory();
        Document word = factory.createDocument();
        word.open();

        // Create a PDF document
        factory = new PdfDocumentFactory();
        Document pdf = factory.createDocument();
        pdf.open();

        // Create an Excel document
        factory = new ExcelDocumentFactory();
        Document excel = factory.createDocument();
        excel.open();
    }
}
