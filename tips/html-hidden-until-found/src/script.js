document.querySelectorAll(".section").forEach((section) => {
  section.onbeforematch = () => {
    section.classList.remove("collapsed");
  };
  section.querySelector(".title").onclick = () => {
    section.classList.toggle("collapsed");

    const details = section.querySelector(".details");
    if (section.classList.contains("collapsed")) {
      details.hidden = "until-found";
    } else {
      details.removeAttribute("hidden");
    }
  };
});
