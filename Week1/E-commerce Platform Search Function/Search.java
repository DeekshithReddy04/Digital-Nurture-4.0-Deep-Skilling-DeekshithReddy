import java.util.Arrays;
import java.util.Comparator;

public class Search {
    public static Product linearSearch(Product[] products, String name) {
        for (Product product : products) {
            if (product.productName.equalsIgnoreCase(name)) {
                return product;
            }
        }
        return null;
    }

    public static Product binarySearch(Product[] products, String name) {
        Arrays.sort(products, Comparator.comparing(p -> p.productName.toLowerCase()));
        int left = 0, right = products.length - 1;

        while (left <= right) {
            int mid = left + (right - left) / 2;
            int cmp = name.compareToIgnoreCase(products[mid].productName);

            if (cmp == 0) return products[mid];
            else if (cmp < 0) right = mid - 1;
            else left = mid + 1;
        }
        return null;
    }
}
