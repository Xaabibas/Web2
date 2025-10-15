package servlets;

import com.fasterxml.jackson.core.JacksonException;
import jakarta.servlet.RequestDispatcher;
import jakarta.servlet.ServletContext;
import jakarta.servlet.ServletException;
import jakarta.servlet.http.HttpServlet;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import moduls.Answer;
import moduls.Container;
import moduls.Rename;

import java.io.IOException;
import java.util.logging.Logger;

public class ControllerServlet extends HttpServlet {
    private final Logger logger = Logger.getLogger(ControllerServlet.class.getName());
    private final Rename rename = new Rename();

    @Override
    protected void doPost(HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException {
        try {
            Container container = rename.readContainer(request);
            request.setAttribute("container", container);
            String action = request.getHeader("Action");

            if (action.equals("check")) {
                getServletContext().getRequestDispatcher("/check").forward(request, response);
            } else if (action.equals("clear")) {
                logger.info("clear");
                // TODO: очиска файла
            } else {
                getServletContext().getRequestDispatcher("/index.jsp").forward(request, response);
            }
        } catch (NullPointerException | JacksonException e) {
            sendError(response, 422, "Невозможно обработать запрос");
        }
    }

    private void sendError(HttpServletResponse response, int status, String message) throws IOException {
        Answer answer = new Answer();
        answer.setError(message);

        rename.writeAnswer(response, answer);
        response.setStatus(status);
    }
}
