import java.util.List;

public class Main {
    public static void main(String[] args) {
        Database.createTable();

        Database.insertItem(new Item("Notebook para jogar LOL", 4, 8));
        Database.insertItem(new Item("Câmera para fotografar as minhas humilhações", 2, 7));
        Database.insertItem(new Item("Casaco para não ficar com frio", 3, 5));
        Database.insertItem(new Item("Mangá de One Piece", 1, 3));
        Database.insertItem(new Item("Carregador que não funciona mais", 1, 1));
        Database.insertItem(new Item("Celular da Xiomi", 2, 10));
        Database.insertItem(new Item("Cachecol para proteger dos vampiros", 1, 1));
        Database.insertItem(new Item("Nintendo", 5, 10));
        Database.insertItem(new Item("Carregador da minha bateria social", 5, 10));

        List<Item> items = Database.getAllItems();
        int capacity = 10;

        KnapsackSolver solver = new KnapsackSolver();
        Result result = solver.solve(capacity, items);

        System.out.println("Máximo valor: " + result.getMaxValue());
        System.out.println("Itens selecionados:");
        for (Item item : result.getSelectedItems()) {
            System.out.println(item.getName() + " (Peso: " + item.getWeight() + ", Valor: " + item.getValue() + ")");
        }
    }
}
