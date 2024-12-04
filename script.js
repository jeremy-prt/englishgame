document.querySelectorAll(".showResponseButton").forEach((button) => {
  button.addEventListener("click", function () {
    const responseContainer = document.getElementById(
      `responseContainer${this.dataset.responseId}`
    );

    // Vérifie si le contenu est déjà affiché
    if (responseContainer.textContent.trim() === "") {
      const descriptions = [
        "Used to write the main titles of a webpage. It is an HTML heading tag (level 1) that is displayed in large text by default. It also plays an important role in SEO (search engine optimization).",
        "Used to create a clickable link to another page, file, or external URL. It requires the href attribute to specify the destination.",
        "Used to display an image on a webpage. It requires the src attribute to specify the image’s URL and may include alt for describing the image.",
        "Used to highlight text as if using a marker. It draws attention to a specific part of the text.",
        "Used to show deleted or crossed-out text. It is often used to indicate modifications or discounts (e.g., a crossed-out price).",
        "Used to display preformatted text, preserving spaces and line breaks as written in the code. It is useful for showing code or text with specific formatting.",
        "Used to display text as a subscript (lowered compared to the rest of the text). Commonly used in chemical or mathematical formulas.",
        "Used to indicate inserted text. The text appears underlined by default to signal an addition.",
        "Used to create bulleted lists. The <ul> tag defines an unordered list (bullets), and the list items are defined with <li>.",
        "Sets the text color to red. This property is used to change the color of text.",
        "Used to bold text to make it visually stand out. This tag is purely for styling and does not add semantic importance to the text.",
        "Sets the font size of the text to 8px. This property adjusts the size of the text.",
        "Sets the background color of an element to red. It applies color behind the content of the element.",
        "Adds spacing inside the element’s border. This property creates a gap between the content and the border of the element.",
        "Sets the vertical spacing between lines of text. It defines the height of a line box.",
        "Specifies the stacking order of elements. Higher numbers appear in front of lower numbers. This property works on positioned elements (relative, absolute, fixed).",
      ];

      const p = document.createElement("p");
      p.textContent = descriptions[this.dataset.responseId - 1];
      responseContainer.appendChild(p);
      this.textContent = "Hide response";
    } else {
      // Masque le contenu en supprimant les enfants
      responseContainer.innerHTML = "";
      this.textContent = "Show response";
    }
  });
});

document.addEventListener("DOMContentLoaded", function () {
  // Récupère la partie de l'URL après le #
  const hash = window.location.hash.substring(1);

  // Vérifie si un hash est présent
  if (hash) {
    // Sélectionne l'élément correspondant
    const element = document.getElementById(hash);

    // Vérifie si l'élément existe
    if (element) {
      // Applique le style display: block
      element.style.display = "flex";
    }
  }
});
