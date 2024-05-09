


// Define a custom header element
class CustomHeader extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
                    <div class="digimenu page-width header" id="myHeader">
                        <div class="sitelogo">
                            <img src="/Assets/site-logo.png">
                        </div>
                        <div class="digioptions">
                            <a href="#">About</a>
                            <a href="#">Upskill Your Team</a>
                            <div class="mob_optns">
                                <svg width="25px" height="25px" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg"
                                    stroke="" stroke-width="2.8">
                                    <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                                    <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
                                    <g id="SVGRepo_iconCarrier">
                                        <path
                                            d="M4 7C4 6.44771 4.44772 6 5 6H24C24.5523 6 25 6.44771 25 7C25 7.55229 24.5523 8 24 8H5C4.44772 8 4 7.55229 4 7Z"
                                            fill="#000"></path>
                                        <path
                                            d="M4 13.9998C4 13.4475 4.44772 12.9997 5 12.9997L16 13C16.5523 13 17 13.4477 17 14C17 14.5523 16.5523 15 16 15L5 14.9998C4.44772 14.9998 4 14.552 4 13.9998Z"
                                            fill="#000"></path>
                                        <path
                                            d="M5 19.9998C4.44772 19.9998 4 20.4475 4 20.9998C4 21.552 4.44772 21.9997 5 21.9997H22C22.5523 21.9997 23 21.552 23 20.9998C23 20.4475 22.5523 19.9998 22 19.9998H5Z"
                                            fill="#000"></path>
                                    </g>
                                </svg>
                            </div>
                        </div>
                    </div>
                    `;
    }
}

// Define a custom section element (footer)
class CustomSection extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `

                    <Section class="footer">
                    <div class="footer-row">
                        <div class="footer-col para_and_ttl">
                            <h4 class="footer_col_frsthdng">Best Kept Secrets</h4>
                            <p>
                                Be the first to find out about the newest programs,workshops and community activities- plus
                                industry news, articles and spelcial reports. All delivired to you inbox
                            </p>
                            <div class="img_lst">
                                <img src="/Assets/footer-logo.png" alt="">
                            </div>
                        </div>
                        <div class="footer-col">
                            <h4>Industry</h4>
                            <ul class="links">
                                <li><a href="#">About Us</a></li>
                                <li><a href="#">Compressions</a></li>
                                <li><a href="#">Customers</a></li>
                                <li><a href="#">Service</a></li>
                                <li><a href="#">Collection</a></li>
                            </ul>
                        </div>
                        <div class="footer-col">
                            <h4>Roles</h4>
                            <ul class="links">
                                <li><a href="#">Free Designs</a></li>
                                <li><a href="#">Latest Designs</a></li>
                                <li><a href="#">Themes</a></li>
                                <li><a href="#">Popular Designs</a></li>
                                <li><a href="#">Art Skills</a></li>
                                <li><a href="#">New Uploads</a></li>
                            </ul>
                        </div>
                        <div class="footer-col">
                            <h4>Engage</h4>
                            <ul class="links">
                                <li><a href="#">Customer Agreement</a></li>
                                <li><a href="#">Privacy Policy</a></li>
                                <li><a href="#">GDPR</a></li>
                                <li><a href="#">Security</a></li>
                                <li><a href="#">Testimonials</a></li>
                                <li><a href="#">Media Kit</a></li>
                            </ul>
                        </div>
                        <div class="footer-col">
                            <!-- <form action="#">
                                <input type="text" placeholder="Your email" required>
                                <button type="submit">SUBSCRIBE</button>
                            </form> -->
                            <h4>Company</h4>
                            <ul class="links">
                                <li><a href="#">Customer Agreement</a></li>
                                <li><a href="#">Privacy Policy</a></li>
                                <li><a href="#">GDPR</a></li>
                                <li><a href="#">Security</a></li>
                                <li><a href="#">Testimonials</a></li>
                                <li><a href="#">Media Kit</a></li>
                            </ul>
                            <!-- <div class="icons">
                                <i class="fa-brands fa-facebook-f"></i>
                                <i class="fa-brands fa-twitter"></i>
                                <i class="fa-brands fa-linkedin"></i>
                                <i class="fa-brands fa-github"></i>
                            </div> -->
                        </div>
                    </div>
                    <div class="year">
                        <p> &copy; 2024 Digimentor | All Rights Resveved</p>
                    </div>
                </Section>        
                    `;
    }
}

// Register the custom elements
customElements.define('custom-header', CustomHeader);
customElements.define('custom-section', CustomSection);


window.onscroll = function () { myFunction() };

var header = document.getElementById("myHeader");
var sticky = header.offsetTop;

function myFunction() {
    if (window.pageYOffset > sticky) {
        header.classList.add("sticky");
    } else {
        header.classList.remove("sticky");
    }
}