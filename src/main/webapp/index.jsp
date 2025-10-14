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
                <form>
                    Выбери X:
                    <label>
                        <input id="x-param" name="x-param" type="number" min="-5" max="5"
                            placeholder="[-5;5]" required>
                        </label>
                    <br>
                    Введи Y:
                    <button class="y-param" value="-4">-4</button>
                    <button class="y-param" value="-3">-3</button>
                    <button class="y-param" value="-2">-2</button>
                    <button class="y-param" value="-1">-1</button>
                    <button class="y-param" value="0">0</button>
                    <button class="y-param" value="1">1</button>
                    <button class="y-param" value="2">2</button>
                    <button class="y-param" value="3">3</button>
                    <button class="y-param" value="4">4</button>
                    <br>

                    Выбери R:
                    <input class="r-param" type="checkbox" name="r-param" value="1.0" checked="checked" required>1.0
                    <input class="r-param" type="checkbox" name="r-param" value="1.5" required>1.5
                    <input class="r-param" type="checkbox" name="r-param" value="2.0" required>2.0
                    <input class="r-param" type="checkbox" name="r-param" value="2.5" required>2.5
                    <input class="r-param" type="checkbox" name="r-param" value="3.0" required>3.0
                    <br>

                    <button id="checkButton" type="submit">Отправить</button>
                    <button id="clean">Очистить таблицу</button>
                    <br>
                </form>
            </td>
            <td class="right">
                <div class="graph">
                    <svg xmlns="http://www.w3.org/2000/svg"
                         width="300"
                         height="300">
                        <line class="axis" x1="0" y1="150" x2="300" y2="150"></line>
                        <line class="axis" x1="150" y1="0" x2="150" y2="300"></line>

                        <line class="axis" x1="270" y1="148" x2="270" y2="152"></line>
                        <line class="axis" x1="210" y1="148" x2="210" y2="152" ></line>
                        <line class="axis" x1="90" y1="148" x2="90" y2="152" ></line>
                        <line class="axis" x1="30" y1="148" x2="30" y2="152" ></line>
                        <line class="axis" x1="148" y1="30" x2="152" y2="30" ></line>
                        <line class="axis" x1="148" y1="90" x2="152" y2="90" ></line>
                        <line class="axis" x1="148" y1="210" x2="152" y2="210" ></line>
                        <line class="axis" x1="148" y1="270" x2="152" y2="270" ></line>

                        <text x="265" y="140">R</text>
                        <text x="200" y="140">R/2</text>
                        <text x="75" y="140">-R/2</text>
                        <text x="20" y="140">-R</text>
                        <text x="156" y="35">R</text>
                        <text x="156" y="95">R/2</text>
                        <text x="156" y="215">-R/2</text>
                        <text x="156" y="275">-R</text>

                        <polygon points="300,150 295,155 295, 145" fill="#000720" stroke="#000720"></polygon>
                        <polygon points="150,0 145,5 155,5" fill="#000720" stroke="#000720"></polygon>

                        <polygon class="figure" points="150,150 270,150 150,210"></polygon>

                        <rect class="figure" x="150" y="30" width="60" height="120"></rect>

                        <path class="figure" d="M 150 150 L 150 210 C116.863 210, 90 183.137, 90 150 Z"></path>
                        <circle id="pointer" r="3" cx="150" cy="150" visibility="hidden"></circle>
                    </svg>
                </div>
            </td>
        </tr>
        <tr>
            <td id="message">

            </td>
        </tr>
    </table>

    <jsp:include page="table.jsp" />

    <script src="script.js"></script>
</body>
</html>