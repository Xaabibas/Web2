<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8" %>
<%@ page import="modules.RequestKeeper" %>
<%@ page import="modules.Row" %>
<%@ page import="modules.Answer" %>
<%@ page import="modules.Container" %>
<%@ page import="java.util.concurrent.CopyOnWriteArrayList" %>
<%@ page import="jakarta.servlet.http.HttpSession" %>

<svg id="graph" xmlns="http://www.w3.org/2000/svg"
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

    <%
    if (request.getSession().getAttribute("list") == null) {
        request.getSession().setAttribute("list", new RequestKeeper());
    }
    RequestKeeper list = (RequestKeeper) request.getSession().getAttribute("list");

    for (Row row : list.getList()) { %>
      <circle
          class="<%= row.getAnswer().isHit() ? "hit" : "miss" %>"
          r="3"
          data-x="<%= row.getContainer().getX() %>"
          data-y="<%= row.getContainer().getY() %>"
          data-r="<%= row.getContainer().getR() %>"
          cx="<%= 150 + 120 * row.getContainer().getX() / row.getContainer().getR() %>"
          cy="<%= 150 - 120 * row.getContainer().getY() / row.getContainer().getR() %>"
      ></circle>
    <% } %>
</svg>