import React from "react";

export default function Body(props) {


  return (
    <div>


      <div className="riotbar-header">


        <div className="riotbar-left-content">
          <div className="riotbar-brand">
            <a href=""> <img className="nav--logo" src="images/LOL.png" /> </a>
          </div>
        </div>

        <div className="riotbar-center-content">
          <div class="riotbar-navigation-wrapper">
            <div class="link-item">
              <a target="" href="" data-testid="riotbar:link-internal-CHAMPIONS">
                <p>CHAMPIONS</p>
                <div class="link-item-underline"></div>
              </a>
            </div>
            <div className="link-item">
              <a target="" href="" data-testid="riotbar:link-internal-REGIONS">
                <p>REGIONS</p>
                <div className="link-item-underline"></div>
              </a>
            </div>
            <div className="link-item">
              <a target="" href="" data-testid="riotbar:link-internal-COMICS">
                <p>COMICS</p>
                <div className="link-item-underline"></div>
              </a>
            </div>
            <div className="link-item">
              <a target="" href="" data-testid="riotbar:link-internal-ALTUNIVERSE">
                <p>ALTUNIVERSE</p>
                <div className="link-item-underline"></div>
              </a>
            </div>
            <div className="link-item">
              <a target="" href="" data-testid="riotbar:link-internal-MAP">
                <p>MAP</p>
                <div className="link-item-underline"></div>
              </a>
            </div>
            <div className="link-item">
              <a target="" href="" data-testid="riotbar:link-internal-EXPLORE">
                <p>EXPLORE</p>
                <div className="link-item-underline"></div>
              </a>
            </div>

            <div className="link-item">
              <a href="#" data-testid="riotbar:link-internal-MORE">MORE</a>
              <div className="link-item-underline"></div>
              <div className="dropdown-content">
                <a target="" href="#" data-testid="riotbar:link-internal-Star Guardian">Star Guardian</a>
                <a target="" href="#" data-testid="riotbar:link-internal-odyssey"> odyssey</a>
                <a target="" href="#" data-testid="riotbar:link-internal-K/DA">K/DA</a>
              </div>
            </div>
          </div>

        </div>

        <div className="riotbar-right-content">
          <div className="riot-bar-account">
            <a className="riotbar-login-button" href=" " data-testid="riotbar:account:button-login"> SIGN IN </a>
          </div>
        </div>

      </div>

    </div>

  )
}

