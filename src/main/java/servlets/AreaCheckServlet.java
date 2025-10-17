package servlets;

import exp.ValidationException;
import jakarta.servlet.ServletException;
import jakarta.servlet.http.HttpServlet;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import modules.*;

import java.io.IOException;
import java.util.logging.Logger;

public class AreaCheckServlet extends HttpServlet {
    private final Checker checker = new Checker();
    private final Logger logger = Logger.getLogger(AreaCheckServlet.class.getName());
    private final Rename rename = new Rename();

    @Override
    protected void doPost(HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException {
        Container container = (Container) request.getAttribute("container");
        Answer answer = formAnswer(container);

        rename.writeAnswer(response, answer);
        RequestKeeper list = (RequestKeeper) request.getSession().getAttribute("list");
        list.add(new Row(container, answer));
    }

    private Answer formAnswer(Container container) {
        long start = System.nanoTime();
        Answer answer = new Answer();
        try {
            boolean hit = checker.checkBox(container.getX(), container.getY(), container.getR());
            answer.setHit(hit);
        } catch (ValidationException e) {
            logger.info(e.getMessage());
            answer.setError(e.getMessage());
        }
        long end = System.nanoTime();
        answer.setTime((end - start) / 1_000);
        return answer;
    }
}
