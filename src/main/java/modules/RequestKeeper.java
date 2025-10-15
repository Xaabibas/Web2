package modules;

import java.util.concurrent.CopyOnWriteArrayList;

public class RequestKeeper {
    private static final CopyOnWriteArrayList<Row> list = new CopyOnWriteArrayList<>();

    public static void add(Row row) {
        list.add(row);
    }
    public static void clear() {

        list.clear();
    }

    public static CopyOnWriteArrayList<Row> getList() {
        return list;
    }
}
