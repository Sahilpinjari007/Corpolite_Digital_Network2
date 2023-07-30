const APP_BASE_URL = 'https://corpolitedigialnetwork.onrender.com/';
const API_URL = APP_BASE_URL + 'data/Api/';


// add data in case study section 
const caseStudyParent = document.querySelector('.case-studys-bottom')
var requestOptions = {
    method: 'GET',
    redirect: 'follow'
};

fetch(API_URL + "allCaseStudys", requestOptions)
    .then(response => response.json())
    .then(result => {

        caseStudyParent.innerHTML = '';
        const caseStudyBg = ['#fa6742', '#32cc73', '#ffb72f', '#478fff', '#fa4166'];
        let bgIndex = 0;

        result.forEach((elem, i) => {

            const div = document.createElement('div');
            div.classList.add('case-study');

            if (bgIndex == caseStudyBg.length) bgIndex = 0;

            if ((i % 2) == 0) {
                div.innerHTML = `
                        <div class="case-study-content">
                            <div class="case-study-left">
                                <div class="case-study-img">
                                    <img src="${elem.imgUrl}" alt="${elem.heading} img" style="background-color: ${caseStudyBg[bgIndex]};">
                                </div>
                            </div>

                            <div class="case-study-right">
                                <div class="case-study-details">
                                    <h2 class="case-study-heading">${elem.heading}</h2>
                                    <div class="case-study-ani">
                                        <div class="case-study-ani-bar-left"></div>
                                        <div class="case-study-ani-bar-right"></div>
                                    </div>

                                    <p class="case-study-desc">${elem.desc}</p>
                                </div>
                            </div>
                        </div>
                    `
            }
            else {
                div.innerHTML = `
                        <div class="case-study-content revers-case-study">
                            <div class="case-study-left">
                                <div class="case-study-img">
                                    <img src="${elem.imgUrl}" alt="${elem.heading} img" style="background-color: ${caseStudyBg[bgIndex]};">
                                </div>
                            </div>

                            <div class="case-study-right">
                                <div class="case-study-details">
                                    <h2 class="case-study-heading">${elem.heading}</h2>
                                    <div class="case-study-ani">
                                        <div class="case-study-ani-bar-left"></div>
                                        <div class="case-study-ani-bar-right"></div>
                                    </div>

                                    <p class="case-study-desc">${elem.desc}</p>
                                </div>
                            </div>
                        </div>
                    `
            }


            bgIndex++;
            caseStudyParent.appendChild(div);

        });
        console.log("Case Study's loaded successful!");
    })
    .catch(error => console.log('error', error));



// add data in vision section
const visionParent = document.querySelector('.vision-desc');
var requestOptions = {
    method: 'GET',
    redirect: 'follow'
};

fetch(API_URL + "vision", requestOptions)
    .then(response => response.json())
    .then(result => {

        visionParent.innerText = result[0].visionDesc;
        console.log("vision loaded successful!");
    })
    .catch(error => console.log('error', error));



// add data in prev work section
const preWorkParent = document.querySelector('.work-logo-slide');
var requestOptions = {
    method: 'GET',
    redirect: 'follow'
};

fetch(API_URL + "prevWork", requestOptions)
    .then(response => response.json())
    .then(result => {

        preWorkParent.innerHTML = '';
        result.forEach((elem) => {

            const div = document.createElement('div');
            div.classList.add('work-card');

            div.innerHTML = `
      <img draggable="false" src="${elem.compunyImg}" alt="previsously worked for">
      `

            preWorkParent.appendChild(div);
        })

        // create clone of preWorkParent for auto scrolling
        document.querySelector('.privi-work-bottom-containt').appendChild(preWorkParent.cloneNode(true));

        console.log("previsously worked loaded successful!");
    })
    .catch(error => console.log('error', error));



// add data in contact and footer section 
const email = document.querySelector('.contact-email');
const phone1 = document.querySelector('.contact-number1');
const phone2 = document.querySelector('.contact-number2');
const webUrl = document.querySelector('.contact-website');
const address = document.querySelector('.contact-address');
const socialIcons = document.querySelector('.social-icons');
var requestOptions = {
    method: 'GET',
    redirect: 'follow'
};

fetch(API_URL + "contactInfo", requestOptions)
    .then(response => response.json())
    .then(result => {

        const compunyDetails = result[0];

        email.innerText = compunyDetails.email;
        phone1.innerText = compunyDetails.phone1;
        phone2.innerText = compunyDetails.phone2;
        webUrl.innerText = compunyDetails.webUrl;


        socialIcons.innerHTML = ''
        socialIcons.innerHTML = `
    
              <a href="${compunyDetails.facbookLink}">
              <div class="social-icon" style="background-color: #3b5998;"><i
                      class="fa-brands fa-facebook-f"></i></div>
              </a>
              <a href="${compunyDetails.twitterLink}">
                  <div class="social-icon" style="background-color: #55acee;"><i
                          class="fa-brands fa-twitter"></i>
                  </div>
              </a>
              <a href="${compunyDetails.instaLink}">
                  <div class="social-icon" style="background-color: #0976b4;"><i
                          class="fa-brands fa-linkedin-in"></i></div>
              </a>
              <a href="${compunyDetails.linkedlnLink}">
                  <div class="social-icon" style="background-color: #b7242a;"><i
                          class="fa-brands fa-instagram"></i></div>
              </a>
    `

        console.log("Compuny Details loaded successful!");
    })
    .catch(error => console.log('error', error));