import java.util.List;

public class Result {
    private int maxValue;
    private List<Item> selectedItems;

    public Result(int maxValue, List<Item> selectedItems) {
        this.maxValue = maxValue;
        this.selectedItems = selectedItems;
    }

    public int getMaxValue() {
        return maxValue;
    }

    public List<Item> getSelectedItems() {
        return selectedItems;
    }
}
