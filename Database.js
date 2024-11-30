import java.sql.*;
import java.util.ArrayList;
import java.util.List;

public class Database {
    private static final String URL = "jdbc:sqlite:knapsack.db";

    public static Connection connect() throws SQLException {
        return DriverManager.getConnection(URL);
    }

    public static void createTable() {
        try (Connection conn = connect()) {
            String sql = "CREATE TABLE IF NOT EXISTS items ("
                    + "id INTEGER PRIMARY KEY AUTOINCREMENT, "
                    + "name TEXT NOT NULL, "
                    + "weight INTEGER NOT NULL, "
                    + "value INTEGER NOT NULL)";
            Statement stmt = conn.createStatement();
            stmt.execute(sql);
        } catch (SQLException e) {
            System.out.println(e.getMessage());
        }
    }

    public static void insertItem(Item item) {
        try (Connection conn = connect()) {
            String sql = "INSERT INTO items (name, weight, value) VALUES (?, ?, ?)";
            PreparedStatement pstmt = conn.prepareStatement(sql);
            pstmt.setString(1, item.getName());
            pstmt.setInt(2, item.getWeight());
            pstmt.setInt(3, item.getValue());
            pstmt.executeUpdate();
        } catch (SQLException e) {
            System.out.println(e.getMessage());
        }
    }

    public static List<Item> getAllItems() {
        List<Item> items = new ArrayList<>();
        String sql = "SELECT name, weight, value FROM items";
        try (Connection conn = connect();
             Statement stmt = conn.createStatement();
             ResultSet rs = stmt.executeQuery(sql)) {

            while (rs.next()) {
                String name = rs.getString("name");
                int weight = rs.getInt("weight");
                int value = rs.getInt("value");
                items.add(new Item(name, weight, value));
            }
        } catch (SQLException e) {
            System.out.println(e.getMessage());
        }
        return items;
    }
}
