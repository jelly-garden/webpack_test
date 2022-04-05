import logo from "./images/logo.png";
import "./User.css";

export default function User({ name }) {
    const li = document.createElement("li");
    li.classList.add("user");
    li.addEventListener("click", () => {
        alert(`Hello ${name}`);
    });
    li.innerHTML = `
        <img src="${logo}" alt="name" width="50" />
        ${name}
    `;
    return li;
}
