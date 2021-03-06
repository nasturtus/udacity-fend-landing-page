// event handlers

const handleScrolling = (e) => {
  e.preventDefault();
  navItems.forEach((navItem) => {
    let sectionId = navItem.toLowerCase();
    sectionEl = document.querySelector(`#${sectionId}`);
    let rect = sectionEl.getBoundingClientRect();
    if (rect.y < 100) {
      removeAllHighlights();
      //   highlight section
      addHighlight(sectionEl);
      //   highlight related navbar item
      const navBarItem = "nav-" + sectionId;
      const navBarItemEl = document.querySelector(`#${navBarItem}`);
      addHighlight(navBarItemEl);
    }
  });
};

const handleNavItemClick = (e) => {
  e.preventDefault();

  // remove all existing highlight class
  removeAllHighlights();

  // highlight the navigation item
  const navElId = e.target.id;
  const navEl = document.querySelector(`#${navElId}`);
  addHighlight(navEl);

  // get the id without the 'nav' prefix
  // the id minus the 'nav' prefix is equivalent to the section id
  const navId = deconstructId(navElId);
  const sectionEl = document.querySelector(`#${navId}`);

  // bring the section into view
  sectionEl.scrollIntoView({
    alignToTop: true,
    behavior: "smooth",
  });

  // highlight the section
  addHighlight(sectionEl);
};

const generateNavbar = (navitems) => {
  const ul = document.querySelector(".nav-items");
  for (let item of navItems) {
    const li = document.createElement("li");
    li.textContent = item;
    li.className = "nav-item";
    li.id = "nav-" + item.toLowerCase();
    li.addEventListener("click", handleNavItemClick);
    ul.appendChild(li);
  }
};

// all helper functions

const deconstructId = (str) => {
  let words = str.split("-");
  words.shift();
  return words.join("-");
};

const addHighlight = (el) => {
  el.classList.add("highlight");
};

const removeAllHighlights = () => {
  const highlightedElems = document.querySelectorAll(".highlight");
  highlightedElems.forEach((elem) => elem.classList.remove("highlight"));
};

// starting point of the program: dynamically generate nav items from section headings

const sectionHeadingElems = document.querySelectorAll(".sub-section-heading");
const navItems = [];
sectionHeadingElems.forEach((sectionHeadingElem) =>
  navItems.push(sectionHeadingElem.innerText)
);
generateNavbar(navItems);
window.addEventListener("scroll", handleScrolling);
