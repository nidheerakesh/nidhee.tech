import { chapters } from "./data.js";

const lean = { about: 46, projects: 58, research: 62, cp: 42, hi: 50 };
const root = document.documentElement;

document.getElementById("secs").innerHTML = chapters
  .map((c) => `<section class="sec" id="${c.id}" data-s="${lean[c.id]}" aria-label="${c.tab}">
    <div class="col l term">${c.left}</div>
    <div class="col r scrap">${c.right}</div></section>`)
  .join("");

const secs = [...document.querySelectorAll(".sec")];
secs.forEach((s) => s.style.setProperty("--s", s.dataset.s + "%"));

document.getElementById("dots").innerHTML = chapters
  .map((c) => `<a href="#${c.id}" data-id="${c.id}">${c.tab}</a>`)
  .join("");
const dots = [...document.querySelectorAll(".dots a")];

const tick = () => {
  const mid = innerHeight / 2;
  const cs = secs.map((s) => { const r = s.getBoundingClientRect(); return r.top + r.height / 2; });
  let i = 0;
  while (i < cs.length - 1 && cs[i + 1] < mid) i++;
  let v = +secs[i].dataset.s;
  if (i < cs.length - 1 && cs[i] < mid) {
    const t = (mid - cs[i]) / (cs[i + 1] - cs[i]);
    v += (+secs[i + 1].dataset.s - v) * t;
  }
  root.style.setProperty("--seam", v + "%");
  const cur = secs[i].id;
  dots.forEach((d) => d.setAttribute("aria-current", d.dataset.id === cur ? "true" : "false"));
};
addEventListener("scroll", tick, { passive: true });
addEventListener("resize", tick);
tick();

document.addEventListener("mouseover", (e) => {
  const li = e.target.closest(".repos li");
  document.querySelectorAll(".repos li").forEach((x) => x.classList.toggle("hot", x === li));
});

const set = (cls, v) => document.querySelectorAll(cls).forEach((el) => (el.textContent = v));
fetch("https://codeforces.com/api/user.info?handles=nidhirakesh05")
  .then((r) => r.json())
  .then((d) => { const u = d.result[0]; set(".cf-r", u.rating); set(".cf-k", u.rank); })
  .catch(() => {});
fetch("https://alfa-leetcode-api.onrender.com/nidhirakesh05/solved")
  .then((r) => r.json())
  .then((d) => { set(".lc-t", d.solvedProblem); set(".lc-e", d.easySolved); set(".lc-m", d.mediumSolved); set(".lc-h", d.hardSolved); })
  .catch(() => {});
