package servlets;

import jakarta.servlet.ServletException;
import jakarta.servlet.http.HttpServlet;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import moduls.Checker;

import java.io.BufferedReader;
import java.io.IOException;
import java.io.PrintWriter;
import java.util.logging.Logger;

public class AreaCheckServlet extends HttpServlet {
    private final Checker checker = new Checker();
    private final Logger logger = Logger.getLogger(AreaCheckServlet.class.getName());

    @Override
    protected void doPost(HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException {
        String body = readBody(request);
        logger.info(body);

        response.setContentType("text/html");
        PrintWriter writer = response.getWriter();
        writer.write("check is running");
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
}
