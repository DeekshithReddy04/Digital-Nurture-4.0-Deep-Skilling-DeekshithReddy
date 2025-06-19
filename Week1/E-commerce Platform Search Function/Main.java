public class Main {
    public static void main(String[] args) {
        Product[] products = {
            new Product(101, "iPhone", "Electronics"),
            new Product(102, "Shoes", "Fashion"),
            new Product(103, "Laptop", "Electronics"),
            new Product(104, "Watch", "Accessories")
        };

        Product result1 = Search.linearSearch(products, "Shoes");
        System.out.println("Linear Search Result: " + result1);

        Product result2 = Search.binarySearch(products, "Laptop");
        System.out.println("Binary Search Result: " + result2);
    }
}
