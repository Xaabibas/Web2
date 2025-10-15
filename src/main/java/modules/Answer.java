package modules;

import com.fasterxml.jackson.annotation.JsonProperty;

public class Answer {
    @JsonProperty("result")
    private boolean hit;
    private long time;
    private String error;

    public Answer() {

    }

    public String getError() {
        return error;
    }

    public void setError(String error) {
        this.error = error;
    }

    public boolean isHit() {
        return hit;
    }

    public void setHit(boolean hit) {
        this.hit = hit;
    }

    public long getTime() {
        return time;
    }

    public void setTime(long time) {
        this.time = time;
    }
}
