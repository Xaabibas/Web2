package servlets;

import jakarta.servlet.ServletException;
import jakarta.servlet.http.HttpServlet;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import moduls.Checker;

import java.io.IOException;
import java.io.PrintWriter;
import java.util.logging.Logger;

public class AreaCheckServlet extends HttpServlet {
    private final Checker checker = new Checker();
    private final Logger logger = Logger.getLogger("AreaCheckServlet");

    @Override
    protected void doGet(HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException {
        float x = Float.parseFloat(request.getParameter("x"));
        float y = Float.parseFloat(request.getParameter("y"));
        float r = Float.parseFloat(request.getParameter("r"));
        logger.info(String.format("x = %f, y = %f, r = %f", x, y, r));
        boolean hit = checker.checkBox(x, y, r);

        response.setContentType("text/html");
        PrintWriter writer = response.getWriter();
        writer.write("check is running");
        writer.close();
    }
}
