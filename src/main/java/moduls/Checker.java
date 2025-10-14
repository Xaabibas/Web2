package moduls;

import exp.ValidationException;

import java.util.HashMap;

public class Checker {
    public boolean validate(HashMap<String, String> params) {

        try {
            float x = Integer.parseInt(params.get("x"));
            float y = Float.parseFloat(params.get("y"));
            float r = Integer.parseInt(params.get("r"));

            return checkBox(x, y, r);
        } catch (IllegalArgumentException ignored) {
            throw new ValidationException("Некорректный формат данных");
        } catch (NullPointerException ignored) {
            throw new ValidationException("Что-то пошло не так"); // Оно вообще возникает?
        }
    }

    public boolean checkBox(float x, float y, float r) {
        if (x >= 0 && y > 0) {
            return x <= r / 2 && y <= r;
        }
        if (x >= 0 && y <= 0) {
            return y >= x / 2 - r / 2;
        }
        if (x < 0 && y <= 0) {
            return x*x + y*y <= r*r / 4;
        }
        return false;
    }
}
