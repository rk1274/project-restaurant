import "./about_page.css";

const container = document.getElementById("content");

const aboutUs = `
<p>At Ember & Thyme, we believe that great food is born from fire, flavour and a touch of nature's finest herbs.
Nestled in the heart of the city, our restaurant blends the warmth of an open flame with the delicate artistry of fresh, locally sourced ingredients.</p>

<p>Our menu is inspired by rustic, wood-fired cooking, featuring dishes that celebrate the balance between bold smoky flavors and refined culinary craftsmanship. 
From perfectly seared ribeye to slow-roasted cedar-planked salmon, every dish is prepared with care and served with passion.</p>

<p>Whether you’re gathering for an intimate dinner, sharing plates with friends, or simply savoring a moment with a glass of wine, 
Ember & Thyme offers an experience that is both comforting and elevated.</p>

<p>Crafted by fire. Inspired by nature. Served with passion.</p>
`;

const openingTimes = `
    <table class="opening-times">
        <tr><td>Monday</td><td>18:00 - 21:00</td></tr>
        <tr><td>Tuesday</td><td>Closed</td></tr>
        <tr><td>Wednesday</td><td>18:00 - 21:00</td></tr>
        <tr><td>Thursday</td><td>18:00 - 21:00</td></tr>
        <tr><td>Friday</td><td>17:00 - 22:00</td></tr>
        <tr><td>Saturday</td><td>17:00 - 22:00</td></tr>
        <tr><td>Sunday</td><td>17:00 - 22:00</td></tr>
    </table>
`;



export const load = () => {
    let aboutPage = document.createElement("div");
    aboutPage.id = 'about-page';

    let about = document.createElement("div");
    about.className = 'about';
    about.textContent = 'About us'

    let aboutContent = document.createElement("div");
    aboutContent.className = 'text';
    aboutContent.innerHTML = aboutUs;

    let times = document.createElement("div");
    times.className = 'times';
    times.textContent = 'Opening times'

    let timesContent = document.createElement("div");
    timesContent.classList.add('timesContent', 'text');
    timesContent.innerHTML = openingTimes;



    let location = document.createElement("div");
    location.className = 'location';
    location.textContent = 'Location'

    let locationContent = document.createElement("div");
    locationContent.classList.add('locationContent', 'text');
    locationContent.innerHTML = '172 Oakwood Lane, Ashford, Wellington, UK, WT4 3NF';

    container.append(aboutPage);
    aboutPage.append(about);
    aboutPage.append(aboutContent);
    aboutPage.append(times);
    aboutPage.append(timesContent);
    aboutPage.append(location);
    aboutPage.append(locationContent);
}