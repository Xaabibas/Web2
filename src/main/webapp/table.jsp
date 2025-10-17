<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8" %>
<%@ page import="modules.RequestKeeper" %>
<%@ page import="modules.Row" %>
<%@ page import="modules.Answer" %>
<%@ page import="modules.Container" %>
<%@ page import="java.util.concurrent.CopyOnWriteArrayList" %>
<%@ page import="jakarta.servlet.http.HttpSession" %>

<html>
<head>
</head>
<body>
    <table id="checkTable" class="checkTable" >
        <tr>
            <th scope="col">X</th>
            <th scope="col">Y</th>
            <th scope="col">R</th>
            <th scope="col">Попадание</th>
            <th scope="col">Время отправки</th>
            <th scope="col">Время работы, мкс</th>
        </tr>

        <%
        if (request.getSession().getAttribute("list") == null) {
            request.getSession().setAttribute("list", new RequestKeeper());
        }
        RequestKeeper list = (RequestKeeper) request.getSession().getAttribute("list");

        for (Row row : list.getList()) { %>
            <tr>
                <td>
                    <%= row.getContainer().getX() %>
                </td>
                <td>
                    <%= row.getContainer().getY() %>
                </td>
                <td>
                    <%= row.getContainer().getR() %>
                </td>
                <td>
                    <%= row.getAnswer().isHit() %>
                </td>
                <td>
                    <%= row.getContainer().getStart() %>
                </td>
                <td>
                    <%= row.getAnswer().getTime() %>
                </td>
            </tr>
        <%
        }
        %>
    </table>
</body>
</html>