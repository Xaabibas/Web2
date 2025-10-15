package modules;

public class Row {
    private final Container container;
    private final Answer answer;

    public Row(Container container, Answer answer) {
        this.answer = answer;
        this.container = container;
    }

    public Answer getAnswer() {
        return answer;
    }

    public Container getContainer() {
        return container;
    }
}
