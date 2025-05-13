  const carousel2 = document.getElementById('carouselProject2');
  const imageTitle2 = document.getElementById('carouselImageTitle2');
  const titles2 = [
    'Home Page',
    'Select Subject Page',
    'Online Exam',
    'Question Creation Page',
    'Result'
  ];
  const bsCarousel2 = new bootstrap.Carousel(carousel2);
  carousel2.addEventListener('slide.bs.carousel', function (e) {
    imageTitle2.textContent = titles2[e.to];
  });
   const carouselBot = document.getElementById('carouselTelegramBot');
  const imageTitleBot = document.getElementById('carouselImageTitleBot');
  const botTitles = [
    'Add Movie & Link',
    'Stored Movie in DB',
    'Result Page',
  ];
  carouselBot.addEventListener('slide.bs.carousel', function (e) {
    imageTitleBot.textContent = botTitles[e.to];
  });
  const skills = [
    "React.js", "Node.js", "Express.js", "HTML", "CSS", "JavaScript",
    "MySQL", "MongoDB", "Python", "Flask"
  ];
  let i = 0;
  let j = 0;
  let currentSkill = "";
  let isDeleting = false;
  function type() {
    const typewriterText = document.querySelector(".typewriter-text");
    if (i < skills.length) {
      if (!isDeleting && j <= skills[i].length) {
        currentSkill = skills[i].substring(0, j++);
        typewriterText.innerHTML = `🚀 <strong>${currentSkill}</strong>`;
      }
      if (isDeleting && j >= 0) {
        currentSkill = skills[i].substring(0, j--);
        typewriterText.innerHTML = `🚀 <strong>${currentSkill}</strong>`;
      }
      if (j === skills[i].length) {
        isDeleting = true;
        setTimeout(type, 1000);
      } else if (isDeleting && j === 0) {
        isDeleting = false;
        i = (i + 1) % skills.length;
        setTimeout(type, 300);
      } else {
        setTimeout(type, isDeleting ? 50 : 100);
      }
    }
  }
  document.addEventListener("DOMContentLoaded", type);