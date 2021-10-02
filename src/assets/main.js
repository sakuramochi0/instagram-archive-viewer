document.addEventListener("DOMContentLoaded", () => {
  [...document.querySelectorAll("a.aspect-ratio")].forEach((a) =>
    a.addEventListener("click", (event) => {
      event.preventDefault();
      const imgURL = event.target.src;
      const imgText = event.target.alt;

      const figure = document.createElement("figure");
      figure.id = "picture-box";
      const picture = document.createElement("picture");
      const figcaption = document.createElement("figcaption");

      const img = document.createElement("img");
      img.src = imgURL;
      picture.appendChild(img);
      figure.appendChild(picture);

      const text = document.createElement("p");
      text.textContent = imgText;
      figcaption.appendChild(text);
      figure.appendChild(figcaption);

      figure.addEventListener("click", () => document.body.removeChild(figure));

      document.body.prepend(figure);
    })
  );
});
