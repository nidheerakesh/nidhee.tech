const gh = "https://github.com/nidheerakesh";
const p = '<span class="pr">nidhi@nidhee</span><span class="dim">:~$</span> ';

export const chapters = [
  {
    id: "about",
    tab: "hello",
    left: `
      <p>${p}whoami</p>
      <p class="out typed">nidhi rakesh</p>
      <p class="out typed">b.tech ai &amp; data science, iiit kottayam</p>
      <p>${p}cat focus.txt</p>
      <p class="out typed">graph machine learning for security.</p>
      <p class="out typed">malware, fraud, anything that hides in the edges.</p>
      <p>${p}ls ~/also</p>
      <p class="out typed">competitive-programming/  hackathons/  research-code/</p>
      <p>${p}<span class="cursor"></span></p>`,
    right: `
      <div class="tape t1"></div>
      <h2 class="hand big">hi, i'm nidhi!</h2>
      <p class="hand">this page has two sides, same as me.</p>
      <p class="hand">the dark side is where i reverse engineer apks and teach graphs to spot fraud.</p>
      <p class="hand">the pink side is where i make soft, pastel little apps and doodle in the margins.</p>
      <p class="hand note">scroll down, the line between my two sides moves with you ✿</p>
      <span class="sticker s-heart" aria-hidden="true">♡</span>`
  },
  {
    id: "projects",
    tab: "projects",
    left: `
      <p>${p}ls ~/projects/security</p>
      <ul class="repos">
        <li data-k="apk"><a href="${gh}/APKSentinel">APKSentinel/</a><span class="dim">python · GAT · GNNExplainer</span>
          <span class="desc">four static-analysis agents read an android apk, build an evidence graph, and a graph attention net labels it benign, suspicious or malicious, with the subgraph that decided it.</span></li>
        <li data-k="btc"><a href="${gh}/crypto-graph">crypto-graph/</a><span class="dim">python · GraphSAGE · XGBoost</span>
          <span class="desc">bitcoin fraud detection on the elliptic temporal transaction graph.</span></li>
        <li data-k="sg"><a href="${gh}/Cybershield">SentinelGraph/</a><span class="dim">cybershield hackathon 2026</span>
          <span class="desc">drag in an apk, get a banking-trojan risk score, verdict and threat narrative.</span></li>
        <li data-k="gr"><a href="${gh}/GitResume">GitResume/</a><span class="dim">python</span>
          <span class="desc">turns a github profile into a resume.</span></li>
      </ul>`,
    right: `
      <div class="tape t2"></div>
      <h2 class="hand">things i made to be cute</h2>
      <div class="polaroids">
        <a class="pol r1" href="https://mood-code.vercel.app"><span class="ph ph1">☺</span><span class="hand">MoodCode</span></a>
        <a class="pol r2" href="https://unibuddy-nine.vercel.app"><span class="ph ph2">✎</span><span class="hand">UniBuddy</span></a>
        <a class="pol r3" href="https://found-it-ashy-sigma.vercel.app"><span class="ph ph3">⌕</span><span class="hand">FoundIt</span></a>
        <a class="pol r4" href="https://loom-lovat-phi.vercel.app/"><span class="ph ph4">✿</span><span class="hand">loom</span></a>
        <a class="pol r5" href="https://aeon-one.vercel.app"><span class="ph ph5">☾</span><span class="hand">AEON</span></a>
      </div>
      <p class="hand note">more on <a href="${gh}">github.com/nidheerakesh</a></p>`
  },
  {
    id: "research",
    tab: "research",
    left: `
      <p class="dim"># how i build a fraud graph</p>
      <p><span class="kw">nodes</span>  = transactions        <span class="dim"># 203k, elliptic</span></p>
      <p><span class="kw">edges</span>  = btc flows            <span class="dim"># directed</span></p>
      <p><span class="kw">feats</span>  = 166 per node         <span class="dim"># local + aggregated</span></p>
      <p><span class="kw">split</span>  = by time step        <span class="dim"># train on past only</span></p>
      <p>&nbsp;</p>
      <p>h = <span class="fn">SAGEConv</span>(x, edge_index)</p>
      <p>z = <span class="fn">concat</span>(h, x)</p>
      <p>y = <span class="fn">XGBoost</span>().fit(z[train], y[train])</p>
      <p>&nbsp;</p>
      <p class="dim"># same idea for apks: manifest, bytecode,</p>
      <p class="dim"># network and crypto evidence become typed nodes</p>`,
    right: `
      <div class="tape t3"></div>
      <h2 class="hand">what i actually study</h2>
      <svg class="doodle" viewBox="0 0 260 150" aria-label="a doodle of a small graph with one suspicious node">
        <g stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round">
          <path d="M40 40 L120 30 L200 60 L150 120 L60 110 Z M120 30 L150 120 M40 40 L150 120"/>
        </g>
        <g fill="#C7B8F5" stroke="currentColor" stroke-width="2">
          <circle cx="40" cy="40" r="11"/><circle cx="120" cy="30" r="11"/><circle cx="200" cy="60" r="11"/><circle cx="60" cy="110" r="11"/>
        </g>
        <circle cx="150" cy="120" r="14" fill="#E8577E" stroke="currentColor" stroke-width="2"/>
        <text x="172" y="140" class="hand-svg">sus</text>
      </svg>
      <p class="hand">bad actors rarely look bad alone. they look bad in who they talk to.</p>
      <p class="hand">so i model systems as graphs and let gnns learn the shape of trouble: malware evidence graphs, transaction graphs, and explanations a human can check.</p>`
  },
  {
    id: "cp",
    tab: "cp",
    left: `
      <p>${p}./stats --handle nidhirakesh05</p>
      <p class="out">codeforces   rating <span class="cf-r">867</span>  <span class="dim">(<span class="cf-k">newbie</span>)</span></p>
      <p class="out">leetcode     solved <span class="lc-t">82</span></p>
      <p class="out dim">             easy <span class="lc-e">42</span> · medium <span class="lc-m">37</span> · hard <span class="lc-h">3</span></p>
      <p>&nbsp;</p>
      <p>${p}cat habits.txt</p>
      <p class="out">c++ for contests, python for everything else.</p>
      <p class="out">upsolve the one i couldn't get.</p>`,
    right: `
      <div class="tape t1"></div>
      <h2 class="hand">find me on the judges</h2>
      <ul class="badges">
        <li><a href="https://codolio.com/profile/nidhirakesh05">codolio</a></li>
        <li><a href="https://codeforces.com/profile/nidhirakesh05">codeforces</a></li>
        <li><a href="https://leetcode.com/u/nidhirakesh05/">leetcode</a></li>
        <li><a href="https://www.codechef.com/users/nidhirakesh05">codechef</a></li>
      </ul>
      <p class="hand note">every handle is nidhirakesh05</p>
      <span class="sticker s-star" aria-hidden="true">☆</span>`
  },
  {
    id: "hi",
    tab: "say hi",
    left: `
      <p>${p}ssh nidhi@nidhee.tech</p>
      <p class="out">connection open.</p>
      <p class="out">github   <a href="${gh}">github.com/nidheerakesh</a></p>
      <p class="out">codolio  <a href="https://codolio.com/profile/nidhirakesh05">codolio.com/profile/nidhirakesh05</a></p>
      <p>&nbsp;</p>
      <p class="dim"># open to internships and research in</p>
      <p class="dim"># graph ml, security and ml systems</p>
      <p>${p}<span class="cursor"></span></p>`,
    right: `
      <div class="tape t2"></div>
      <div class="envelope"><span class="hand">open an issue, star a repo, or just say hi on github ♡</span></div>
      <p class="hand note">thanks for scrolling all the way down.</p>`
  }
];

