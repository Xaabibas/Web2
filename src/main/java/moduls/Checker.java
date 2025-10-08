package moduls;

import java.util.HashMap;

public class Checker {
    public boolean validate(HashMap<String, String> params) {

        try {
            float x = Integer.parseInt(params.get("x"));
            float y = Float.parseFloat(params.get("y"));
            float r = Integer.parseInt(params.get("r"));

            return checkBox(x, y, r);
        } catch (IllegalArgumentException ignored) {
            // TODO: обработка исключения
        } catch (NullPointerException ignored) {
            // TODO: обработка исключения (оно вообще возникает?)
        }
        return false;
    }

    private boolean checkBox(float x, float y, float r) {
        if (x >= 0 && y >= 0) {
            return x < r / 2 && y < r;
        }
        if (x >= 0 && y < 0) {
            return y >= x / 2 - r / 2;
        }
        if (x < 0 && y < 0) {
            return x*x + y*y <= r*r;
        }
        return false;
    }
}
