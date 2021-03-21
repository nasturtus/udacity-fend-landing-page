const generate = (navitems) => {
  console.log({ navItems });
  const ul = document.querySelector(".nav-items");
  for (const item of navItems) {
    const li = document.createElement("li");
    li.textContent = item;
    li.className = "nav-item";
    ul.appendChild(li);
  }
};

const navItems = ["About", "Team", "Portfolio", "Thought Leadership"];
generate(navItems);
