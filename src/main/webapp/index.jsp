<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8" %>

<!DOCTYPE html>
<html lang="ru">
<head>
    <meta charset="UTF-8">
    <title>Лаба 1</title>
    <link rel="stylesheet" href="css/style.css">
    <script src="https://code.jquery.com/jquery-3.6.0.min.js"></script>
</head>
<body class="main">
    <h1>Лабораторная работа №1</h1>
    <h2>Хабиров Тимур Рустемович, P3232, 467898</h2>
    <table>
        <tr>
            <td class="left">
                <jsp:include page="form.jsp" />
            </td>
            <td class="right">
                <div class="graph">
                    <jsp:include page="graph.jsp" />
                </div>
            </td>
        </tr>
        <tr class="info">
            <td id="message">

            </td>
        </tr>
        <tr class"info">
            <td id="point-result">

            </td>
        </tr>
    </table>

    <jsp:include page="table.jsp" />
    <script src="scripts/message.js"></script>
    <script src="scripts/validation.js"></script>
    <script src="scripts/table.js"></script>
    <script src="scripts/graph.js"></script>
    <script src="scripts/script.js"></script>
</body>
</html>