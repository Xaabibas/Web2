package servlets;

import com.fasterxml.jackson.databind.ObjectMapper;
import exp.ValidationException;
import jakarta.servlet.ServletException;
import jakarta.servlet.http.HttpServlet;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import moduls.Answer;
import moduls.Checker;
import moduls.Container;

import java.io.BufferedReader;
import java.io.IOException;
import java.io.PrintWriter;
import java.util.logging.Logger;

public class AreaCheckServlet extends HttpServlet {
    private final Checker checker = new Checker();
    private final Logger logger = Logger.getLogger(AreaCheckServlet.class.getName());
    private final ObjectMapper mapper = new ObjectMapper();

    @Override
    protected void doPost(HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException {
        String body = readBody(request);
        Container container = readContainer(body);
        Answer answer = formAnswer(container);

        response.setContentType("application/json");
        PrintWriter writer = response.getWriter();
        writer.write(mapper.writeValueAsString(answer));
        writer.close();
    }

    private String readBody(HttpServletRequest request) throws IOException{
        BufferedReader reader = request.getReader();
        int valueOfChar;
        StringBuilder result = new StringBuilder();
        while ((valueOfChar = reader.read()) != -1) {
            result.append((char) valueOfChar);
        }
        return result.toString();
    }

    private Container readContainer(String json) throws IOException {
        Container container = mapper.readValue(json.getBytes(), Container.class);
        return container;
    }

    private Answer formAnswer(Container container) {
        long start = System.nanoTime();
        Answer answer = new Answer();
        try {
            boolean hit = checker.checkBox(container.getX(), container.getY(), container.getR());
            answer.setHit(hit);
        } catch (ValidationException e) {
            answer.setError(e.getMessage());
        }
        long end = System.nanoTime();
        answer.setTime((end - start) / 1_000_000);
        return answer;
    }
}
