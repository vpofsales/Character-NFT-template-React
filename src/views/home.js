import React from 'react'

import Script from 'dangerous-html/react'
import { Helmet } from 'react-helmet'

import './home.css'

const Home = (props) => {
  return (
    <div className="home-container">
      <Helmet>
        <title>Character NFT template</title>
        <meta property="og:title" content="Character NFT template" />
      </Helmet>
      <section className="home-hero">
        <div className="home-heading">
          <h1 className="home-header">Bel Frens</h1>
          <p className="home-caption">
            A unique collection of 25 frens, based off the history of $BEL
          </p>
        </div>
        <div className="home-buttons"></div>
      </section>
      <section className="home-collection">
        <div className="home-content">
          <span className="home-caption01">collection</span>
          <div className="home-heading1"></div>
        </div>
        <div className="home-main">
          <div className="home-card">
            <div className="home-image">
              <img
                alt="image"
                src="/Characters/ac1-500h.png"
                className="home-image01"
              />
            </div>
            <div className="home-content01">
              <span className="home-caption02">Inscription:</span>
              <h3 className="home-title">#2458579</h3>
            </div>
          </div>
          <div className="home-card01">
            <div className="home-image02">
              <img
                alt="image"
                src="/Characters/ac5-500h.png"
                className="home-image03"
              />
            </div>
            <div className="home-content02">
              <span className="home-caption03">Inscription:</span>
              <h3 className="home-title01">#2736230</h3>
            </div>
          </div>
          <div className="home-card02">
            <div className="home-image04">
              <img
                alt="image"
                src="/Characters/ac3-500h.png"
                className="home-image05"
              />
            </div>
            <div className="home-content03">
              <span className="home-caption04">Inscription:</span>
              <h3 className="home-title02">#2736231</h3>
            </div>
          </div>
          <div className="home-card03">
            <div className="home-image06">
              <img
                alt="image"
                src="/Characters/ac2-500h.png"
                className="home-image07"
              />
            </div>
            <div className="home-content04">
              <span className="home-caption05">Inscription:</span>
              <h3 className="home-title03">#2736232</h3>
            </div>
          </div>
          <div className="home-card04">
            <div className="home-image08">
              <img
                alt="image"
                src="/Characters/ac7-500h.png"
                className="home-image09"
              />
            </div>
            <div className="home-content05">
              <span className="home-caption06">Inscription:</span>
              <h3 className="home-title04">#2742287</h3>
            </div>
          </div>
          <div className="home-card05">
            <div className="home-image10">
              <img
                alt="image"
                src="/Characters/ac6-500h.png"
                className="home-image11"
              />
            </div>
            <div className="home-content06">
              <span className="home-caption07">Inscription:</span>
              <h3 className="home-title05">#2742288</h3>
            </div>
          </div>
          <section className="home-collection1">
            <div className="home-content07">
              <div className="home-heading2"></div>
            </div>
          </section>
          <div>
            <div className="home-container02">
              <Script
                html={`<script>
 /*
  Accordion - Code Embed
  */
  const accordionContainers = document.querySelectorAll('[data-role="accordion-container"]'); // All accordion containers
  const accordionContents = document.querySelectorAll('[data-role="accordion-content"]'); // All accordion content
  const accordionIconsClosed = document.querySelectorAll('[data-role="accordion-icon-closed"]'); // All accordion closed icons
  const accordionIconsOpen = document.querySelectorAll('[data-role="accordion-icon-open"]'); // All accordion open icons

  accordionContents.forEach((accordionContent) => {
      accordionContent.style.display = "none"; //Hides all accordion contents
  });

  accordionIconsClosed.forEach((icon) => {
    icon.style.display = "flex"
  })

  accordionIconsOpen.forEach((icon) => {
    icon.style.display = "none"
  })

  accordionContainers.forEach((accordionContainer, index) => {
      accordionContainer.addEventListener("click", () => {
          if (accordionContents[index].style.display === "flex") {
              // If the accordion is already open, close it
              accordionContents[index].style.display = "none";
              accordionIconsClosed[index].style.display = "flex";
              accordionIconsOpen[index].style.display = "none"
          } else {
              // If the accordion is closed, open it
              accordionContents.forEach((accordionContent) => {
                  accordionContent.style.display = "none"; //Hides all accordion contents
              });

              accordionIconsClosed.forEach((accordionIcon) => {
                  accordionIcon.style.display = "flex"; // Resets all icon transforms to 0deg (default)
              });

              accordionIconsOpen.forEach((accordionIcon) => {
                accordionIcon.style.display = "none";
              })
              
              accordionContents[index].style.display = "flex"; // Shows accordion content
              accordionIconsClosed[index].style.display = "none"; // Rotates accordion icon 180deg
              accordionIconsOpen[index].style.display = "flex";
          }
      });
  });
</script>
`}
              ></Script>
            </div>
          </div>
          <div className="home-card06">
            <div className="home-image12">
              <img
                alt="image"
                src="/Characters/ac4-500h.png"
                className="home-image13"
              />
            </div>
            <div className="home-content08">
              <span className="home-caption08">Inscription:</span>
              <h3 className="home-title06">#2736233</h3>
            </div>
          </div>
        </div>
      </section>
      <section className="home-collection2">
        <div className="home-content09">
          <div className="home-heading3"></div>
        </div>
        <div className="home-main1">
          <div className="home-card07">
            <div className="home-image14">
              <img
                alt="image"
                src="/Characters/ac8-400h.png"
                className="home-image15"
              />
            </div>
            <div className="home-content10">
              <span className="home-caption09">Inscription:</span>
              <h3 className="home-title07">#2743324</h3>
            </div>
          </div>
          <div className="home-card08">
            <div className="home-image16">
              <img
                alt="image"
                src="/Characters/ac9-400h.png"
                className="home-image17"
              />
            </div>
            <div className="home-content11">
              <span className="home-caption10">Inscription:</span>
              <h3 className="home-title08">#2743325</h3>
            </div>
          </div>
          <div className="home-card09">
            <div className="home-image18">
              <img
                alt="image"
                src="/Characters/ac10-400h.png"
                className="home-image19"
              />
            </div>
            <div className="home-content12">
              <span className="home-caption11">Inscription:</span>
              <h3 className="home-title09">#2744839</h3>
            </div>
          </div>
          <div className="home-card10">
            <div className="home-image20">
              <img
                alt="image"
                src="/Characters/ac11-400h.png"
                className="home-image21"
              />
            </div>
            <div className="home-content13">
              <span className="home-caption12">Inscription:</span>
              <h3 className="home-title10">#2746328</h3>
            </div>
          </div>
          <div className="home-card11">
            <div className="home-image22">
              <img
                alt="image"
                src="/Characters/ac12-400h.png"
                className="home-image23"
              />
            </div>
            <div className="home-content14">
              <span className="home-caption13">Inscription:</span>
              <h3 className="home-title11">#2746329</h3>
            </div>
          </div>
          <div className="home-card12">
            <div className="home-image24">
              <img
                alt="image"
                src="/Characters/ac14-400h.png"
                className="home-image25"
              />
            </div>
            <div className="home-content15">
              <span className="home-caption14">Inscription:</span>
              <h3 className="home-title12">#2750079</h3>
            </div>
          </div>
          <div className="home-card13">
            <div className="home-image26">
              <img
                alt="image"
                src="/Characters/ac15-400h.png"
                className="home-image27"
              />
            </div>
            <div className="home-content16">
              <span className="home-caption15">Inscription:</span>
              <h3 className="home-title13">#2750080</h3>
            </div>
          </div>
          <section className="home-collection3">
            <div className="home-content17">
              <span className="home-caption16">collection</span>
              <div className="home-heading4"></div>
            </div>
          </section>
          <div>
            <div className="home-container04">
              <Script
                html={`<script>
 /*
  Accordion - Code Embed
  */
  const accordionContainers = document.querySelectorAll('[data-role="accordion-container"]'); // All accordion containers
  const accordionContents = document.querySelectorAll('[data-role="accordion-content"]'); // All accordion content
  const accordionIconsClosed = document.querySelectorAll('[data-role="accordion-icon-closed"]'); // All accordion closed icons
  const accordionIconsOpen = document.querySelectorAll('[data-role="accordion-icon-open"]'); // All accordion open icons

  accordionContents.forEach((accordionContent) => {
      accordionContent.style.display = "none"; //Hides all accordion contents
  });

  accordionIconsClosed.forEach((icon) => {
    icon.style.display = "flex"
  })

  accordionIconsOpen.forEach((icon) => {
    icon.style.display = "none"
  })

  accordionContainers.forEach((accordionContainer, index) => {
      accordionContainer.addEventListener("click", () => {
          if (accordionContents[index].style.display === "flex") {
              // If the accordion is already open, close it
              accordionContents[index].style.display = "none";
              accordionIconsClosed[index].style.display = "flex";
              accordionIconsOpen[index].style.display = "none"
          } else {
              // If the accordion is closed, open it
              accordionContents.forEach((accordionContent) => {
                  accordionContent.style.display = "none"; //Hides all accordion contents
              });

              accordionIconsClosed.forEach((accordionIcon) => {
                  accordionIcon.style.display = "flex"; // Resets all icon transforms to 0deg (default)
              });

              accordionIconsOpen.forEach((accordionIcon) => {
                accordionIcon.style.display = "none";
              })
              
              accordionContents[index].style.display = "flex"; // Shows accordion content
              accordionIconsClosed[index].style.display = "none"; // Rotates accordion icon 180deg
              accordionIconsOpen[index].style.display = "flex";
          }
      });
  });
</script>
`}
              ></Script>
            </div>
          </div>
        </div>
      </section>
      <section className="home-collection4">
        <div className="home-content18">
          <div className="home-heading5"></div>
        </div>
        <div className="home-main2">
          <div className="home-card14">
            <div className="home-image28">
              <img
                alt="image"
                src="/Characters/ac16-400h.png"
                className="home-image29"
              />
            </div>
            <div className="home-content19">
              <span className="home-caption17">Inscription:</span>
              <h3 className="home-title14">#2750081</h3>
            </div>
          </div>
          <div className="home-card15">
            <div className="home-image30">
              <img
                alt="image"
                src="/Characters/ac13-400h.png"
                className="home-image31"
              />
            </div>
            <div className="home-content20">
              <span className="home-caption18">Inscription:</span>
              <h3 className="home-title15">#2750082</h3>
            </div>
          </div>
          <div className="home-card16">
            <div className="home-image32">
              <img
                alt="image"
                src="/Characters/ac17-400h.png"
                className="home-image33"
              />
            </div>
            <div className="home-content21">
              <span className="home-caption19">Inscription:</span>
              <h3 className="home-title16">#2752332</h3>
            </div>
          </div>
          <div className="home-card17">
            <div className="home-image34">
              <img
                alt="image"
                src="/Characters/ac18-400h.png"
                className="home-image35"
              />
            </div>
            <div className="home-content22">
              <span className="home-caption20">Inscription:</span>
              <h3 className="home-title17">#2752333</h3>
            </div>
          </div>
          <div className="home-card18">
            <div className="home-image36">
              <img
                alt="image"
                src="/Characters/ac19-400h.png"
                className="home-image37"
              />
            </div>
            <div className="home-content23">
              <span className="home-caption21">Inscription:</span>
              <h3 className="home-title18">#2753552</h3>
            </div>
          </div>
          <div className="home-card19">
            <div className="home-image38">
              <img
                alt="image"
                src="/Characters/ac20-400h.png"
                className="home-image39"
              />
            </div>
            <div className="home-content24">
              <span className="home-caption22">Inscription:</span>
              <h3 className="home-title19">#2753553</h3>
            </div>
          </div>
          <div className="home-card20">
            <div className="home-image40">
              <img
                alt="image"
                src="/Characters/ac21-400h.png"
                className="home-image41"
              />
            </div>
            <div className="home-content25">
              <span className="home-caption23">Inscription:</span>
              <h3 className="home-title20">#2753554</h3>
            </div>
          </div>
          <section className="home-collection5">
            <div className="home-content26">
              <span className="home-caption24">collection</span>
              <div className="home-heading6"></div>
            </div>
          </section>
          <div>
            <div className="home-container06">
              <Script
                html={`<script>
 /*
  Accordion - Code Embed
  */
  const accordionContainers = document.querySelectorAll('[data-role="accordion-container"]'); // All accordion containers
  const accordionContents = document.querySelectorAll('[data-role="accordion-content"]'); // All accordion content
  const accordionIconsClosed = document.querySelectorAll('[data-role="accordion-icon-closed"]'); // All accordion closed icons
  const accordionIconsOpen = document.querySelectorAll('[data-role="accordion-icon-open"]'); // All accordion open icons

  accordionContents.forEach((accordionContent) => {
      accordionContent.style.display = "none"; //Hides all accordion contents
  });

  accordionIconsClosed.forEach((icon) => {
    icon.style.display = "flex"
  })

  accordionIconsOpen.forEach((icon) => {
    icon.style.display = "none"
  })

  accordionContainers.forEach((accordionContainer, index) => {
      accordionContainer.addEventListener("click", () => {
          if (accordionContents[index].style.display === "flex") {
              // If the accordion is already open, close it
              accordionContents[index].style.display = "none";
              accordionIconsClosed[index].style.display = "flex";
              accordionIconsOpen[index].style.display = "none"
          } else {
              // If the accordion is closed, open it
              accordionContents.forEach((accordionContent) => {
                  accordionContent.style.display = "none"; //Hides all accordion contents
              });

              accordionIconsClosed.forEach((accordionIcon) => {
                  accordionIcon.style.display = "flex"; // Resets all icon transforms to 0deg (default)
              });

              accordionIconsOpen.forEach((accordionIcon) => {
                accordionIcon.style.display = "none";
              })
              
              accordionContents[index].style.display = "flex"; // Shows accordion content
              accordionIconsClosed[index].style.display = "none"; // Rotates accordion icon 180deg
              accordionIconsOpen[index].style.display = "flex";
          }
      });
  });
</script>
`}
              ></Script>
            </div>
          </div>
        </div>
      </section>
      <section className="home-collection6">
        <div className="home-content27">
          <div className="home-heading7"></div>
        </div>
        <div className="home-main3">
          <div className="home-card21">
            <div className="home-image42">
              <img
                alt="image"
                src="/Characters/ac24-400h.png"
                className="home-image43"
              />
            </div>
            <div className="home-content28">
              <span className="home-caption25">Inscription:</span>
              <h3 className="home-title21">#2757022</h3>
            </div>
          </div>
          <div className="home-card22">
            <div className="home-image44">
              <img
                alt="image"
                src="/Characters/ac22-400h.png"
                className="home-image45"
              />
            </div>
            <div className="home-content29">
              <span className="home-caption26">Inscription:</span>
              <h3 className="home-title22">#2756741</h3>
            </div>
          </div>
          <div className="home-card23">
            <div className="home-image46">
              <img
                alt="image"
                src="/Characters/ac25-400h.png"
                className="home-image47"
              />
            </div>
            <div className="home-content30">
              <span className="home-caption27">Inscription:</span>
              <h3 className="home-title23">#2756742</h3>
            </div>
          </div>
          <div className="home-card24">
            <div className="home-image48">
              <img
                alt="image"
                src="/Characters/ac23-400h.png"
                className="home-image49"
              />
            </div>
            <div className="home-content31">
              <span className="home-caption28">Inscription:</span>
              <h3 className="home-title24">#2756743</h3>
            </div>
          </div>
          <section className="home-collection7">
            <div className="home-content32">
              <span className="home-caption29">collection</span>
              <div className="home-heading8"></div>
            </div>
          </section>
          <div>
            <div className="home-container08">
              <Script
                html={`<script>
 /*
  Accordion - Code Embed
  */
  const accordionContainers = document.querySelectorAll('[data-role="accordion-container"]'); // All accordion containers
  const accordionContents = document.querySelectorAll('[data-role="accordion-content"]'); // All accordion content
  const accordionIconsClosed = document.querySelectorAll('[data-role="accordion-icon-closed"]'); // All accordion closed icons
  const accordionIconsOpen = document.querySelectorAll('[data-role="accordion-icon-open"]'); // All accordion open icons

  accordionContents.forEach((accordionContent) => {
      accordionContent.style.display = "none"; //Hides all accordion contents
  });

  accordionIconsClosed.forEach((icon) => {
    icon.style.display = "flex"
  })

  accordionIconsOpen.forEach((icon) => {
    icon.style.display = "none"
  })

  accordionContainers.forEach((accordionContainer, index) => {
      accordionContainer.addEventListener("click", () => {
          if (accordionContents[index].style.display === "flex") {
              // If the accordion is already open, close it
              accordionContents[index].style.display = "none";
              accordionIconsClosed[index].style.display = "flex";
              accordionIconsOpen[index].style.display = "none"
          } else {
              // If the accordion is closed, open it
              accordionContents.forEach((accordionContent) => {
                  accordionContent.style.display = "none"; //Hides all accordion contents
              });

              accordionIconsClosed.forEach((accordionIcon) => {
                  accordionIcon.style.display = "flex"; // Resets all icon transforms to 0deg (default)
              });

              accordionIconsOpen.forEach((accordionIcon) => {
                accordionIcon.style.display = "none";
              })
              
              accordionContents[index].style.display = "flex"; // Shows accordion content
              accordionIconsClosed[index].style.display = "none"; // Rotates accordion icon 180deg
              accordionIconsOpen[index].style.display = "flex";
          }
      });
  });
</script>
`}
              ></Script>
            </div>
          </div>
        </div>
      </section>
      <div>
        <div className="home-container10">
          <Script
            html={`<script>
 /*
  Accordion - Code Embed
  */
  const accordionContainers = document.querySelectorAll('[data-role="accordion-container"]'); // All accordion containers
  const accordionContents = document.querySelectorAll('[data-role="accordion-content"]'); // All accordion content
  const accordionIconsClosed = document.querySelectorAll('[data-role="accordion-icon-closed"]'); // All accordion closed icons
  const accordionIconsOpen = document.querySelectorAll('[data-role="accordion-icon-open"]'); // All accordion open icons

  accordionContents.forEach((accordionContent) => {
      accordionContent.style.display = "none"; //Hides all accordion contents
  });

  accordionIconsClosed.forEach((icon) => {
    icon.style.display = "flex"
  })

  accordionIconsOpen.forEach((icon) => {
    icon.style.display = "none"
  })

  accordionContainers.forEach((accordionContainer, index) => {
      accordionContainer.addEventListener("click", () => {
          if (accordionContents[index].style.display === "flex") {
              // If the accordion is already open, close it
              accordionContents[index].style.display = "none";
              accordionIconsClosed[index].style.display = "flex";
              accordionIconsOpen[index].style.display = "none"
          } else {
              // If the accordion is closed, open it
              accordionContents.forEach((accordionContent) => {
                  accordionContent.style.display = "none"; //Hides all accordion contents
              });

              accordionIconsClosed.forEach((accordionIcon) => {
                  accordionIcon.style.display = "flex"; // Resets all icon transforms to 0deg (default)
              });

              accordionIconsOpen.forEach((accordionIcon) => {
                accordionIcon.style.display = "none";
              })
              
              accordionContents[index].style.display = "flex"; // Shows accordion content
              accordionIconsClosed[index].style.display = "none"; // Rotates accordion icon 180deg
              accordionIconsOpen[index].style.display = "flex";
          }
      });
  });
</script>
`}
          ></Script>
        </div>
      </div>
    </div>
  )
}

export default Home
