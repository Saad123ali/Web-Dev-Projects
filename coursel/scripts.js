
let slideIndex = 0;

const slideData = [
    { title: 'NARUTO UZUMAKI', episode: 'Total Episode : 720', description: 'A young ninja named Naruto Uzumaki seeks recognition and dreams of becoming the strongest ninja, the Hokage, while overcoming the challenges of being an orphan and harboring a powerful demon fox within him.' },
    { title: 'SATORU GOJO', episode: 'Total Episode : 24', description: 'A powerful and charismatic jujutsu sorcerer from "Jujutsu Kaisen," known for his unmatched strength, skill, and enigmatic personality. He teaches at Tokyo Jujutsu High and plays a key role in fighting curses.' },
    { title: 'DEMON SLAYER', episode: 'Total Episode : 44', description: 'Centers on Tanjiro Kamado, a young boy who becomes a demon slayer after his family is slaughtered by demons and his sister is turned into one. He seeks to avenge his family and find a cure for his sister.' },
    { title: 'DRAGON BALL Z', episode: 'Total Episode : 575', description: 'The main protagonist of "Dragon Ball," Goku is a Saiyan warrior with immense strength and a cheerful personality. He defends Earth from various threats and continually pushes his limits with transformations like Super Saiyan and Ultra Instinct.' },
    { title: 'ONE PIECE', episode: 'Total Episode : 1,080', description: 'Follows Monkey D. Luffy and his pirate crew as they journey across the Grand Line in search of the legendary treasure, the One Piece, to become the Pirate King. The series is renowned for its adventure, unique characters, and world-building.' },
    { title: 'CHAINSAW MAN', episode: 'Total Episode : 12', description: 'Follows Denji, a young man with the ability to transform parts of his body into chainsaws, as he becomes a devil hunter to repay his deceased father’s debt. The series blends horror, action, and dark humor.' },
    { title: 'DEATH NOTE', episode: 'Total Episode : 37', description: 'Revolves around Light Yagami, a high school student who discovers a mysterious notebook that allows him to kill anyone by writing their name in it. He embarks on a quest to rid the world of criminals while clashing with the genius detective L.' },
    { title: 'BLEACH', episode: 'Total Episode : 366', description: 'Follows Ichigo Kurosaki, a teenager who accidentally acquires the powers of a Soul Reaper, tasked with defending humans from evil spirits and guiding souls to the afterlife. The series explores his adventures and battles against various supernatural threats.' },
];

function showSlide(index) {
    const slides = document.querySelectorAll('.carousel-slide');
    const dots = document.querySelectorAll('.dot');
    const backgroundImage = document.querySelector('#background-image');
    const textOverlay = document.getElementById('text-overlay');
    const overlayTitle = document.getElementById('overlay-title');
    const overlayEpisode = document.getElementById('overlay-episode');
    const overlayDescription = document.getElementById('overlay-description');

    if (index >= slides.length) {
        slideIndex = 0;
    } else if (index < 0) {
        slideIndex = slides.length - 1;
    } else {
        slideIndex = index;
    }

    // Fade out the text
    textOverlay.classList.add('hidden');

    // Move the carousel slides
    document.querySelector('.carousel').style.transform = `translateX(${-slideIndex * 100}%)`;

    // Update the background image
    backgroundImage.style.backgroundImage = `url('${slides[slideIndex].querySelector('img').src}')`;

    // Update text overlay and fade in the text
    setTimeout(() => {
        overlayTitle.textContent = slideData[slideIndex].title;
        overlayEpisode.textContent = slideData[slideIndex].episode;
        overlayDescription.textContent = slideData[slideIndex].description;

        // Fade in the text
        textOverlay.classList.remove('hidden');
    }, 500); // Match the duration with the fade-out effect

    // Fade in the current slide image
    slides.forEach(slide => slide.querySelector('img').classList.remove('show'));
    slides[slideIndex].querySelector('img').classList.add('show');

    // Update the active dot
    dots.forEach((dot, i) => {
        dot.classList.toggle('active', i === slideIndex);
    });
}

function moveSlide(step) {
    showSlide(slideIndex + step);
}

// Initialize the carousel
showSlide(slideIndex);
