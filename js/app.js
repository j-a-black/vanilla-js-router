let home = "";
let about = "";
let contact = "";

const loadPage = async (page) => {
  const response = await fetch(page);
  const resHtml = await response.text();
  return resHtml;
};

const loadAllPages = async () => {
  home = await loadPage("home.html");
  about = await loadPage("about.html");
  contact = await loadPage("contact.html");
};

const rootDiv = document.getElementById("root");

const main = async () => {
  await loadAllPages();
  rootDiv.innerHTML = home;
  routes = {
    "/": home,
    "/contact": contact,
    "/about": about,
  };
};

main();

const onNavClick = (pathname) => {
  window.history.pushState({}, pathname, window.location.origin + pathname);
  rootDiv.innerHTML = routes[pathname];
};

window.onpopstate = () => {
  rootDiv.innerHTML = routes[window.location.pathname];
};
