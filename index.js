"use strict"

const form = document.getElementById("comment-form");
const listComment = document.getElementById("list-comment")
let i = 0;

const name = document.getElementById("name-input");
const date = document.getElementById("date-input");
const comment = document.getElementById("comment-input");

name.addEventListener("click", (event) => {
    event.target.classList.remove("error");
});

comment.addEventListener("click", (event) => {
    event.target.classList.remove("error");
});

form.addEventListener("submit", (event) => {
    event.preventDefault();

    if (name.value.trim() == "") {
        name.classList.add("error");
        return;
    };

    if (comment.value.trim() == "") {
        comment.classList.add("error");
        return;
    };

    const div = document.createElement("div");
    const spanName = document.createElement("span");
    const spanDate = document.createElement("span");
    const pComment = document.createElement("p");
    const deleteButton = document.createElement("button");
    const likeButton = document.createElement("button");


    spanName.textContent = name.value;
    pComment.textContent = comment.value;
    deleteButton.textContent = "✖";
    likeButton.textContent = "♥";

    const currentTime = new Date();

    if (date.value == "") {
        spanDate.textContent = currentTime.toLocaleString("ru", {
            year: '2-digit',
            month: '2-digit',
            day: '2-digit'
        });
    } else {
        spanDate.textContent = new Date(date.value).toLocaleString("ru", {
            year: '2-digit',
            month: '2-digit',
            day: '2-digit'
        });
    }

    if (spanDate.textContent == currentTime.toLocaleString("ru", {
        year: '2-digit',
        month: '2-digit',
        day: '2-digit'
    })) {
        spanDate.textContent = "сегодня";

    } else {
        const yesterday = new Date();
        yesterday.setDate(yesterday.getDate() - 1);

        if (spanDate.textContent == yesterday.toLocaleString("ru", {
            year: '2-digit',
            month: '2-digit',
            day: '2-digit'
        })) {
            spanDate.textContent = "вчера";
        }
    }

    div.className = "comment-item-" + i;
    spanName.className = "item-name";
    spanDate.className = "item-date";
    pComment.className = "item-description";
    deleteButton.className = "deleteComment";
    likeButton.className = "like";

    deleteButton.id = "delete-button-" + i;
    likeButton.id = "like-" + i;

    div.appendChild(spanName);
    div.appendChild(spanDate);
    div.appendChild(pComment);
    div.appendChild(deleteButton);
    div.appendChild(likeButton);

    listComment.appendChild(div);

    const deleteComment = document.getElementById("delete-button-" + i);
    const likeComment = document.getElementById("like-" + i);

    deleteComment.addEventListener("click", () => {
        listComment.removeChild(div);
    });

    likeComment.addEventListener("click", (event) => {
        event.target.classList.toggle("active");
    });

    i++;
})
