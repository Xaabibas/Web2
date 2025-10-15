package modules;

import com.fasterxml.jackson.databind.ObjectMapper;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;

import java.io.BufferedReader;
import java.io.IOException;
import java.io.PrintWriter;
import java.util.logging.Logger;

public class Rename { // TODO: rename
    private final ObjectMapper mapper = new ObjectMapper();
    private final Logger logger = Logger.getLogger(Rename.class.getName());


    public Container readContainer(HttpServletRequest request) throws IOException {
        String json = readBody(request);
        Container container = mapper.readValue(json.getBytes(), Container.class);
        logger.info(String.format("x=%f, y=%f, r=%f", container.getX(), container.getY(), container.getR()));
        return container;
    }

    private String readBody(HttpServletRequest request) throws IOException {
        BufferedReader reader = request.getReader();
        int valueOfChar;
        StringBuilder result = new StringBuilder();
        while ((valueOfChar = reader.read()) != -1) {
            result.append((char) valueOfChar);
        }
        reader.close();
        logger.info(result.toString());
        return result.toString();
    }

    public void writeAnswer(HttpServletResponse response, Answer answer) throws IOException {
        response.setContentType("application/json");
        PrintWriter writer = response.getWriter();
        writer.write(mapper.writeValueAsString(answer));
        writer.close();
    }
}
