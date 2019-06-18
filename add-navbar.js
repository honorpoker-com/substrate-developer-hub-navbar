var substrate_developer_hub_navbar = `
<div id="substrate-dev-hub-nav">
    <div class="fixedHeaderContainer">
        <div class="headerWrapper wrapper">
            <div class="substrate-dev-hub-nav-header"><a href="https://substrate-developer-hub.github.io/en"><img class="logo"
                        src="https://substrate-developer-hub.github.io/img/Substrate-logo.svg"
                        alt="Substrate Developer Hub">
                    <h2 class="headerTitleWithLogo">Substrate Developer Hub</h2>
                </a>
                <div class="navigationWrapper navigationSlider">
                    <nav class="slidingNav">
                        <ul class="nav-site nav-site-internal">
                            <li class=""><a
                                    href="https://substrate-developer-hub.github.io/docs/en/quickstart/getting-started"
                                    target="_self">Docs</a></li>
                            <li class=""><a href="https://substrate-developer-hub.github.io/rustdocs/v1.0/"
                                    target="_self">Reference Docs</a></li>
                            <li class=""><a href="https://substrate-developer-hub.github.io/en/tutorials"
                                    target="_self">Tutorials</a></li>
                            <li class=""><a href="https://substrate-developer-hub.github.io/en/community"
                                    target="_self">Community</a></li>
                            <li class=""><a href="https://github.com/paritytech/substrate" target="_self">GitHub</a></li>
                        </ul>
                    </nav>
                </div>
            </div>
        </div>
    </div>
</div>
`;

function addSubstrateDevHubNavBar() {
  let css = document.createElement("link");
  css.rel = "stylesheet";
  css.href =
    "https://substrate-developer-hub.github.io/substrate-developer-hub-navbar/navbar.css";
  document.head.append(css);
  var nav_container = document.createElement("div");
  nav_container.innerHTML = substrate_developer_hub_navbar;
  document.body.insertBefore(nav_container, document.body.firstChild);
}

addSubstrateDevHubNavBar();
