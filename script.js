document.getElementById("budget-form").addEventListener("submit", function(event) {
    event.preventDefault();

    const budget = parseFloat(document.getElementById("budget").value);
    const resultDiv = document.getElementById("result");

    // Suggested countries based on budget
    let suggestion = "";

    if (budget >= 5000) {
        suggestion = `
            <h2>Luxury Travel Suggestions:</h2>
            <ul>
                <li>Switzerland - Experience luxury stays and private tours.</li>
                <li>Japan - Stay in high-end resorts and enjoy exclusive experiences.</li>
                <li>Maldives - Luxury over-water villas and premium beach resorts.</li>
            </ul>`;
    } else if (budget >= 2000) {
        suggestion = `
            <h2>Better Travel Suggestions:</h2>
            <ul>
                <li>Italy - Great food, culture, and mid-range accommodations.</li>
                <li>Thailand - Enjoy affordable but upscale beaches and resorts.</li>
                <li>Australia - Experience comfortable travel with great sightseeing.</li>
            </ul>`;
    } else if (budget >= 500) {
        suggestion = `
            <h2>Good Travel Suggestions:</h2>
            <ul>
                <li>Mexico - Affordable beach resorts and rich culture.</li>
                <li>Vietnam - Budget-friendly travel with great food and culture.</li>
                <li>Portugal - Affordable but beautiful European destination.</li>
            </ul>`;
    } else {
        suggestion = `<h2>Consider increasing your budget for international travel.</h2>`;
    }

    resultDiv.innerHTML = suggestion;
});
document.getElementById("budget-form").addEventListener("submit", function(event) {
    event.preventDefault();

    const budget = parseFloat(document.getElementById("budget").value);
    const resultDiv = document.getElementById("result");

    let suggestion = "";

    if (budget >= 5000) {
        suggestion = `
            <h2>Luxury Travel Suggestions:</h2>
            <ul>
                <li>Switzerland</li>
                <li>Japan</li>
                <li>Maldives</li>
                <li>France</li>
                <li>United States</li>
                <li>Singapore</li>
                <li>Monaco</li>
                <li>Norway</li>
                <li>United Kingdom</li>
                <li>Australia</li>
                <li>New Zealand</li>
                <li>Canada</li>
                <li>United Arab Emirates</li>
                <li>South Korea</li>
                <li>Austria</li>
                <li>Sweden</li>
                <li>Denmark</li>
                <li>Germany</li>
                <li>Finland</li>
                <li>Iceland</li>
            </ul>`;
    } else if (budget >= 2000) {
        suggestion = `
            <h2>Better Travel Suggestions:</h2>
            <ul>
                <li>Italy</li>
                <li>Spain</li>
                <li>Thailand</li>
                <li>Greece</li>
                <li>Turkey</li>
                <li>Portugal</li>
                <li>Czech Republic</li>
                <li>Hungary</li>
                <li>Malaysia</li>
                <li>Croatia</li>
                <li>Argentina</li>
                <li>Chile</li>
                <li>Brazil</li>
                <li>South Africa</li>
                <li>Mexico</li>
                <li>Poland</li>
                <li>Romania</li>
                <li>Russia</li>
                <li>India</li>
                <li>Indonesia</li>
            </ul>`;
    } else if (budget >= 500) {
        suggestion = `
            <h2>Good Travel Suggestions:</h2>
            <ul>
                <li>Vietnam</li>
                <li>Colombia</li>
                <li>Peru</li>
                <li>Bolivia</li>
                <li>Philippines</li>
                <li>Morocco</li>
                <li>Egypt</li>
                <li>Ukraine</li>
                <li>Albania</li>
                <li>Serbia</li>
                <li>Georgia</li>
                <li>Nepal</li>
                <li>Bangladesh</li>
                <li>Pakistan</li>
                <li>Kenya</li>
                <li>Laos</li>
                <li>Sri Lanka</li>
                <li>Cambodia</li>
                <li>Guatemala</li>
                <li>Paraguay</li>
            </ul>`;
    } else {
        suggestion = `<h2>Consider increasing your budget for international travel.</h2>`;
    }

    resultDiv.innerHTML = suggestion;
});

document.getElementById("feedback-form").addEventListener("submit", function(event) {
    event.preventDefault();

    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const message = document.getElementById("message").value;
    const resultDiv = document.getElementById("feedback-result");

    // Send the feedback
    fetch(event.target.action, {
        method: 'POST',
        body: new FormData(event.target),
        headers: {
            'Accept': 'application/json'
        }
    }).then(response => {
        if (response.ok) {
            resultDiv.innerHTML = `<h3>Thank you for your feedback, ${name}!</h3>`;
            event.target.reset(); // Reset form after submission
        } else {
            resultDiv.innerHTML = `<h3>Sorry, there was a problem submitting your feedback.</h3>`;
        }
    }).catch(error => {
        resultDiv.innerHTML = `<h3>Sorry, there was a problem submitting your feedback.</h3>`;
    });
});

const quotes = [
    "Business: 'The only way to do great work is to love what you do.' - Steve Jobs",
        "Motivation: 'Success is not final, failure is not fatal: It is the courage to continue that counts.' - Winston Churchill",
        "Depression: 'The greatest glory in living lies not in never falling, but in rising every time we fall.' - Nelson Mandela",
        "Sadness: 'Tears are words that need to be written.' - Paulo Coelho",
        "Happiness: 'For every minute you are angry, you lose sixty seconds of happiness.' - Ralph Waldo Emerson",
        "Motivation: 'Believe you can and you're halfway there.' - Theodore Roosevelt",
        "Business: 'Opportunities don't happen. You create them.' - Chris Grosser",
        "Happiness: 'Happiness is not something ready made. It comes from your own actions.' - Dalai Lama",
        "Sadness: 'Every man has his secret sorrows which the world knows not.' - Henry Wadsworth Longfellow",
        "Depression: 'It's okay to not be okay.' - Unknown",
        "Motivation: 'The future belongs to those who believe in the beauty of their dreams.' - Eleanor Roosevelt",
        "Business: 'Do not wait to strike till the iron is hot, but make it hot by striking.' - William Butler Yeats",
        "Happiness: 'The purpose of our lives is to be happy.' - Dalai Lama",
        "Sadness: 'You can't be brave if you've only had wonderful things happen to you.' - Mary Tyler Moore",
        "Depression: 'Out of your vulnerabilities will come your strength.' - Sigmund Freud",
        "Motivation: 'What lies behind us and what lies before us are tiny matters compared to what lies within us.' - Ralph Waldo Emerson",
        "Business: 'Your most unhappy customers are your greatest source of learning.' - Bill Gates",
        "Happiness: 'The greatest happiness of life is the conviction that we are loved.' - Victor Hugo",
        "Sadness: 'Sorrow is one of the vibrations that prove the fact of living.' - Antoine de Saint-Exupéry",
        "Depression: 'Every day may not be good, but there is something good in every day.' - Alice Morse Earle",
        "Motivation: 'The only limit to our realization of tomorrow will be our doubts of today.' - Franklin D. Roosevelt",
        "Business: 'Business opportunities are like buses; there's always another one coming.' - Richard Branson",
        "Happiness: 'Happiness is not a goal; it is a by-product.' - Eleanor Roosevelt",
        "Sadness: 'To weep is to make less the depth of grief.' - William Shakespeare",
        "Depression: 'The greatest discovery of my generation is that a human being can alter his life by altering his attitude.' - William James",
        "Motivation: 'Success usually comes to those who are too busy to be looking for it.' - Henry David Thoreau",
        "Business: 'In the middle of difficulty lies opportunity.' - Albert Einstein",
        "Happiness: 'Count your blessings, not your problems.' - Unknown",
        "Sadness: 'Don't cry because it's over, smile because it happened.' - Dr. Seuss",
        "Depression: 'Even the darkest night will end and the sun will rise.' - Victor Hugo",
        "Motivation: 'Dream big and dare to fail.' - Norman Vaughan",
        "Business: 'The best way to predict the future is to create it.' - Peter Drucker",
        "Happiness: 'Happiness is when what you think, what you say, and what you do are in harmony.' - Mahatma Gandhi",
        "Sadness: 'Sadness flies away on the wings of time.' - Jean de La Fontaine",
        "Depression: 'It is during our darkest moments that we must focus to see the light.' - Aristotle",
        "Motivation: 'Keep your face always toward the sunshine—and shadows will fall behind you.' - Walt Whitman"
    // Add more quotes as needed for each day of the month
];

// Get today's date and use it to select a quote
const today = new Date();
const dayOfMonth = today.getDate();
const quoteToShow = quotes[dayOfMonth % quotes.length]; // To loop through quotes

document.getElementById("quote").innerText = quoteToShow;