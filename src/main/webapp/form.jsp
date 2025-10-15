<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8" %>

<html>
<head>
</head>
<body>
    <form>
        <div id="select-x">
            Выбери X:
        </div>
        <label>
            <input id="x-param" name="x-param" type="number" min="-5" max="5"
                placeholder="[-5;5]" required>
            </label>
        <br>
        <div id="select-y">
            Введи Y:
        </div>
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

        <div id="select-r">
            Выбери R:
        </div>
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
</body>
</html>