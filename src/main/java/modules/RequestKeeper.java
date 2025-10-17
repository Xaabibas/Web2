package modules;

import java.util.concurrent.CopyOnWriteArrayList;

public class RequestKeeper {
    private final CopyOnWriteArrayList<Row> list = new CopyOnWriteArrayList<>();

    public void add(Row row) {
        list.add(row);
    }
    public void clear() {
        list.clear();
    }

    public CopyOnWriteArrayList<Row> getList() {
        return list;
    }
}
