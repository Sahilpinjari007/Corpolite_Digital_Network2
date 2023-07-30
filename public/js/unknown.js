const APP_BASE_URL = 'https://corpolitedigialnetwork.onrender.com/';
const API_URL = APP_BASE_URL + 'data/Api/';

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