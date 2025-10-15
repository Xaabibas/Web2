package modules;

public class Container {
    private Float x;
    private Float y;
    private Float r;
    private String start;

    public Container(){

    }
    public Container(float x, float y, float r, String start) {
        this.x = x;
        this.y = y;
        this.r = r;
        this.start = start;
    }

    public float getX() {
        return x;
    }

    public void setX(float x) {
        this.x = x;
    }

    public float getY() {
        return y;
    }

    public void setY(float y) {
        this.y = y;
    }

    public float getR() {
        return r;
    }

    public void setR(float r) {
        this.r = r;
    }

    public String getStart() {
        return start;
    }

    public void setStart(String start) {
        this.start = start;
    }
}
