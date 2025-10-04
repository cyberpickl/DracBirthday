// Story data (images + titles + desc)
const stories = [
  {
    img: "images/image1.jpg",
    title: "The Shattered Citadel",
    desc: "Dracxvil and allies fight to reclaim the Citadel of Light from shadows."
  },
  {
    img: "images/image2.jpg",
    title: "Echoes of Silence ",
    desc: "A forbidden Silence Engine threatens to erase all music and voices."
  },
  {
    img: "images/image3.jpg",
    title: "The Abyss Below ",
    desc: "The squad faces horrors in the rift that feeds on fear and doubt."
  },
  {
    img: "images/image4.jpg",
    title: "The Broken Stage",
    desc: "A battle of bands where souls and legends are at stake."
  },
  {
    img: "images/image5.jpg",
    title: "The Iron Dragon ",
    desc: "The squad faces Azekthor, an ancient dragon forged of iron and rage."
  }
];
window.addEventListener("DOMContentLoaded", () => {
  const music = document.getElementById("themeMusic");
  const savedTime = localStorage.getItem("musicTime");

  if (savedTime) {
    music.currentTime = parseFloat(savedTime);
    localStorage.removeItem("musicTime"); // only use once
  }

  music.play().catch(err => {
    console.log("Autoplay blocked until user interacts:", err);
  });
});

const storyCarousel = document.getElementById("story-carousel");

stories.forEach((s, i) => {
  const slide = document.createElement("div");
  slide.classList.add("story-slide");
  slide.id = `story${i+1}`;
  slide.style.backgroundImage = `url('${s.img}')`;

  slide.innerHTML = `
    <div class="overlay">
      <h2>${s.title}</h2>
      <p>${s.desc}</p>
      <button class="play-btn">PLAY NOW</button>
    </div>
  `;

  storyCarousel.appendChild(slide);

  // Attach click event correctly
  slide.querySelector(".play-btn").addEventListener("click", () => {
    // Redirect to the folder's index.html
    window.location.href = `stories/story${i+1}/index.html`;
  });
});



// Carousel controls
let currentSlide = 0;
const totalSlides = stories.length;
const slides = () => document.querySelectorAll(".story-slide");

const updateSlide = () => {
  storyCarousel.style.transform = `translateX(-${currentSlide * 100}%)`;
};


const nextSlide = () => { currentSlide = (currentSlide+1) % totalSlides; updateSlide(); };
const prevSlide = () => { currentSlide = (currentSlide-1+totalSlides) % totalSlides; updateSlide(); };

document.querySelector(".arrow.right").addEventListener("click", nextSlide);
document.querySelector(".arrow.left").addEventListener("click", prevSlide);

// Init
updateSlide();

// Character cards (intact + new characters)
const characters = [
  { 
    name:"Dracxvil", 
    role:"The Hero", 
    power:"Friendship Surge – grows stronger when his friends believe in him.", 
    strengths:"Courage, resilience, power fueled by friendship, determination to protect.", 
    weaknesses:"Doubts himself at times, reckless when trying to do everything alone.", 
    skills:{ Power:95, Defense:75, Speed:80, Strategy:70 } 
  },
  { 
    name:"Shaina", 
    role:"The Guardian", 
    power:"Barrier of Care – a glowing shield that protects allies.", 
    strengths:"Loyalty, protective instincts, calm under pressure, shields the group.", 
    weaknesses:"Can be overprotective, sometimes hides her own feelings to stay 'strong.'", 
    skills:{ Power:70, Defense:95, Speed:65, Strategy:80 } 
  },
  { 
    name:"Yari", 
    role:"The Strategist", 
    power:"Tactical Mind – reveals the best path forward or enemy weak points.", 
    strengths:"Smart, logical, always sees the bigger picture, master of battle plans.", 
    weaknesses:"Overthinks, struggles when plans go wrong, doesn't like chaos.", 
    skills:{ Power:60, Defense:70, Speed:65, Strategy:98 } 
  },
  { 
    name:"Illu", 
    role:"The Trickster", 
    power:"Phantom Jokes – illusions and pranks that confuse enemies.", 
    strengths:"Mischief, humor, unpredictability, keeps morale high, illusions to distract foes.", 
    weaknesses:"Doesn't always take things seriously, risks turning fights into jokes.", 
    skills:{ Power:65, Defense:60, Speed:90, Strategy:85 } 
  },
  { 
    name:"Luce", 
    role:"The Flame", 
    power:"Blazing Spirit – erupts in flames that fuel both offense and courage.", 
    strengths:"Passion, energy, boldness, never backs down, fiery spirit that inspires others.", 
    weaknesses:"Hot-headed, can charge in without thinking.", 
    skills:{ Power:92, Defense:65, Speed:85, Strategy:55 } 
  },
  { 
    name:"Moon", 
    role:"The Dreamer", 
    power:"Moonlight Grace – heals allies and restores their strength.", 
    strengths:"Gentle, intuitive, brings calm to the group, healing vibes.", 
    weaknesses:"Sometimes too soft, avoids direct conflict.", 
    skills:{ Power:50, Defense:75, Speed:70, Strategy:80 } 
  },
  { 
    name:"Peachy", 
    role:"The Optimist", 
    power:"Peach Glow – boosts morale and gives energy through joy.", 
    strengths:"Positivity, cheerfulness, keeps everyone smiling, lifts spirits in dark moments.", 
    weaknesses:"Naïve, trusts too easily, overlooks danger.", 
    skills:{ Power:55, Defense:60, Speed:75, Strategy:65 } 
  },
  { 
    name:"Darth", 
    role:"The Challenger", 
    power:"Iron Resolve – becomes stronger the tougher the challenge.", 
    strengths:"Brave, determined, always wants to prove himself, frontline fighter.", 
    weaknesses:"Stubborn, hates losing, sometimes ignores teamwork.", 
    skills:{ Power:88, Defense:80, Speed:70, Strategy:60 } 
  },
  { 
    name:"Kawa", 
    role:"The Scout", 
    power:"Shadowstep – swift movements that scout danger and surprise enemies.", 
    strengths:"Agile, sharp senses, fast reflexes, always knows the terrain.", 
    weaknesses:"Lone wolf tendencies, struggles with relying on others.", 
    skills:{ Power:65, Defense:60, Speed:95, Strategy:78 } 
  },
  { 
    name:"Toofy", 
    role:"The Wildcard", 
    power:"Chomp Chomp – his bite can snap through steel (and sometimes snacks).", 
    strengths:"Unpredictable energy, fearless loyalty, comic relief that boosts team morale.", 
    weaknesses:"Gets distracted by food, can be reckless and too eager to jump in.", 
    skills:{ Power:85, Defense:60, Speed:88, Strategy:50 } 
  },
  { 
    name:"Ram", 
    role:"The Protector", 
    power:"Shield of Valor – creates an impenetrable barrier around allies.", 
    strengths:"Loyal, dependable, always first to defend friends, strong sense of justice.", 
    weaknesses:"Can be overly cautious, sometimes hesitant to take risks.", 
    skills:{ Power:85, Defense:90, Speed:70, Strategy:75 } 
  }
,
  { 
    name:"Claire", 
    role:"The Tactician", 
    power:"Mind Web – predicts enemy moves and plans strategies on the fly.", 
    strengths:"Highly intelligent, quick thinker, and empathetic leader.", 
    weaknesses:"Can overanalyze, sometimes hesitant to act without certainty.", 
    skills:{ Power:70, Defense:65, Speed:75, Strategy:95 } 
  },
  { 
    name:"Ella", 
    role:"The Cat Lady", 
    power:"Feline Friends – calls upon her cats to aid in reconnaissance and combat.", 
    strengths:"Deeply caring, stealthy, and fiercely protective of friends.", 
    weaknesses:"Overprotective, emotionally attached to her cats.", 
    skills:{ Power:60, Defense:70, Speed:80, Strategy:75 } 
  },
  { 
    name:"Tay", 
    role:"The Swift", 
    power:"Lightning Dash – moves with incredible speed, striking before enemies react.", 
    strengths:"Quick, resourceful, adaptable, excellent reflexes.", 
    weaknesses:"Sometimes reckless, underestimates danger.", 
    skills:{ Power:75, Defense:60, Speed:98, Strategy:70 } 
  },
  { 
    name:"Bubble Gum", 
    role:"The Supporter", 
    power:"Sticky Shield – creates barriers to protect teammates and absorb attacks.", 
    strengths:"Caring, tactical, and reliable in difficult situations.", 
    weaknesses:"Not very strong offensively, relies on allies to take the lead.", 
    skills:{ Power:50, Defense:85, Speed:60, Strategy:80 } 
  },
  { 
    name:"Lasang", 
    role:"The Mystic", 
    power:"Illumina – manipulates light and shadow to confuse enemies or heal allies.", 
    strengths:"Mysterious, intelligent, and versatile in both offense and defense.", 
    weaknesses:"Sometimes indecisive, can overthink situations.", 
    skills:{ Power:65, Defense:70, Speed:65, Strategy:90 } 
  }
  
];

// Video Modal Logic
const modal = document.getElementById("videoModal");
const btn = document.getElementById("cake-btn");
const span = document.querySelector(".close");
const video = document.getElementById("birthdayVideo");

btn.addEventListener("click", () => {
  modal.style.display = "block";
  video.play();
});

span.addEventListener("click", () => {
  modal.style.display = "none";
  video.pause();
  video.currentTime = 0;
});

window.addEventListener("click", (e) => {
  if (e.target == modal) {
    modal.style.display = "none";
    video.pause();
    video.currentTime = 0;
  }
});

btn.addEventListener("click", () => {
  modal.style.display = "flex";  // show modal centered
  video.play();

  // 🎉 Trigger Confetti
  const duration = 2 * 1000; // 2 seconds
  const animationEnd = Date.now() + duration;
  const defaults = { startVelocity: 30, spread: 360, ticks: 60, zIndex: 10000 };

  function randomInRange(min, max) {
    return Math.random() * (max - min) + min;
  }

  const interval = setInterval(function() {
    const timeLeft = animationEnd - Date.now();

    if (timeLeft <= 0) {
      return clearInterval(interval);
    }

    const particleCount = 50 * (timeLeft / duration);
    confetti(Object.assign({}, defaults, {
      particleCount,
      origin: { x: randomInRange(0.1, 0.9), y: Math.random() - 0.2 }
    }));
  }, 250);
});


// ================== BACKGROUND THEME MUSIC ==================
const bgMusic = new Audio("theme.mp3"); // <-- put your bg music file in same folder or adjust path
bgMusic.loop = true;
bgMusic.volume = 0.2; // softer volume

// Start music once the page is interacted with (for autoplay policy)
document.addEventListener("DOMContentLoaded", () => {
  const resumeMusic = () => {
    bgMusic.play().catch(() => {});
    document.removeEventListener("click", resumeMusic);
  };
  document.addEventListener("click", resumeMusic);
});

// Modify modal logic to pause/resume bg music
btn.addEventListener("click", () => {
  modal.style.display = "block";
  video.play();
  bgMusic.pause(); // pause music when modal opens
});

span.addEventListener("click", () => {
  modal.style.display = "none";
  video.pause();
  video.currentTime = 0;
  bgMusic.play(); // resume music when modal closes
});

window.addEventListener("click", (e) => {
  if (e.target == modal) {
    modal.style.display = "none";
    video.pause();
    video.currentTime = 0;
    bgMusic.play(); // resume music on outside click close
  }
});

// Also resume when video ends naturally (if you want)
video.addEventListener("ended", () => {
  modal.style.display = "none";
  bgMusic.play();
});

// ================== UI SOUND EFFECTS ==================

// Preload swoosh sound (adjust path if inside a folder)
const swooshSound = new Audio("swoosh1.mp3");
swooshSound.volume = 0.8; // set volume (0.0 - 1.0)

// Add swoosh to every button + navbar link
document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll("button, .nav-links a").forEach(el => {
    el.addEventListener("click", () => {
      swooshSound.currentTime = 0; // rewind instantly
      swooshSound.play();
    });
  });
});

const container = document.getElementById("character-container");
characters.forEach(c => {
  const card = document.createElement("div");
  card.classList.add("card");
  card.innerHTML = `
    <div class="card-header">
      <div>
        <h2>${c.name}</h2>
        <span>${c.role}</span>
      </div>
      <span>▼</span>
    </div>
    <div class="card-body">
      <div class="section-title">SIGNATURE POWER</div>
      <p>${c.power}</p>
      <div class="section-title">STRENGTHS</div>
      <p>${c.strengths}</p>
      <div class="section-title">WEAKNESSES</div>
      <p>${c.weaknesses}</p>
      <div class="section-title">SKILL LEVELS</div>
      ${Object.entries(c.skills).map(([skill,value])=>`
        <div class="skill-bar">
          <div class="skill-name">${skill} - ${value}</div>
          <div class="bar"><div class="fill" style="width:${value}%;"></div></div>
        </div>
      `).join("")}
    </div>
  `;
  card.querySelector(".card-header").addEventListener("click",()=>card.classList.toggle("active"));
  container.appendChild(card);
});
