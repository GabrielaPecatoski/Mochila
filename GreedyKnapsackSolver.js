import java.util.List;
import java.util.ArrayList;

public class GreedyKnapsackSolver implements KnapsackProblem {

    @Override
    public Result solve(int capacity, List<Item> items) {
        if (!validateItems(items)) {
            throw new IllegalArgumentException("Itens inválidos encontrados");
        }

        items.sort((i1, i2) -> Double.compare(
                (double) i2.getValue() / i2.getWeight(),
                (double) i1.getValue() / i1.getWeight()
        ));

        List<Item> selectedItems = new ArrayList<>();
        int totalWeight = 0;
        int totalValue = 0;

        for (Item item : items) {
            if (totalWeight + item.getWeight() <= capacity) {
                selectedItems.add(item);
                totalWeight += item.getWeight();
                totalValue += item.getValue();
            }
        }

        return new Result(totalValue, selectedItems);
    }

    @Override
    public boolean validateItems(List<Item> items) {
        for (Item item : items) {
            if (item.getWeight() <= 0 || item.getValue() <= 0) {
                return false;
            }
        }
        return true;
    }

    @Override
    public int calculateTotalValue(List<Item> items) {
        return items.stream().mapToInt(Item::getValue).sum();
    }
}
