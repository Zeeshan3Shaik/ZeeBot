const predefinedQuestions = {
  "what is the capital of america": "The capital of America (USA) is Washington, D.C.",
  "who is the president of america": "As of 2025, the President of America is Joe Biden.",
  "what is the capital of india": "The capital of India is New Delhi.",
  "who is the prime minister of india": "As of 2025, the Prime Minister of India is Narendra Modi.",
  "what is the largest ocean in the world": "The Pacific Ocean is the largest ocean in the world.",
  "what is the currency of japan": "The currency of Japan is the Japanese Yen (¥).",
  "who discovered gravity": "Gravity was discovered by Sir Isaac Newton.",
  "how many continents are there": "There are 7 continents on Earth.",
  "who is the founder of microsoft": "Microsoft was founded by Bill Gates and Paul Allen.",
  "what is the tallest mountain in the world": "Mount Everest is the tallest mountain in the world.",
  "who wrote the harry potter series": "The Harry Potter series was written by J.K. Rowling.",
  "what is the national animal of the usa": "The national animal of the USA is the Bald Eagle.",
  "what is the boiling point of water": "The boiling point of water is 100°C or 212°F at standard atmospheric pressure.",
  "who invented electricity": "Electricity wasn't 'invented', but Benjamin Franklin is famous for discovering it.",
  "what is the capital of france": "The capital of France is Paris.",
  "which planet is known as the red planet": "Mars is known as the Red Planet.",
  "how many states are there in the usa": "There are 50 states in the USA.",
  "what is the chemical symbol for water": "The chemical symbol for water is H₂O.",
  "who invented the light bulb": "The light bulb was invented by Thomas Edison.",
  "what is the fastest land animal": "The fastest land animal is the cheetah.",
  "which country has the largest population": "As of 2025, China has the largest population.",
  "how many bones are in the human body": "There are 206 bones in the adult human body.",
  "who painted the mona lisa": "The Mona Lisa was painted by Leonardo da Vinci.",
  "what is the national language of pakistan": "The national language of Pakistan is Urdu.",
  "what is the smallest planet in the solar system": "Mercury is the smallest planet in the solar system.",
  "who was the first person to walk on the moon": "Neil Armstrong was the first person to walk on the moon.",
  "what is the largest mammal in the world": "The blue whale is the largest mammal in the world.",
  "which gas do plants use for photosynthesis": "Plants use carbon dioxide (CO₂) for photosynthesis.",
  "what is the main language spoken in brazil": "The main language spoken in Brazil is Portuguese.",
  "who wrote the national anthem of india": "Rabindranath Tagore wrote the national anthem of India.",
  "how many days are there in a leap year": "A leap year has 366 days.",
  "what is the hardest natural substance on earth": "Diamond is the hardest natural substance on Earth.",
  "which country gifted the statue of liberty to the usa": "France gifted the Statue of Liberty to the USA.",
  "what is the longest river in the world": "The Nile River is considered the longest river in the world.",
  "what is the study of the human mind called": "The study of the human mind is called Psychology.",
  "who invented the telephone": "The telephone was invented by Alexander Graham Bell.",
  "how many players are there in a football (soccer) team": "There are 11 players in a football team.",
  "what is the currency of the united kingdom": "The currency of the United Kingdom is the British Pound (£).",
  "what is the speed of light": "The speed of light is approximately 299,792 kilometers per second.",
  "who discovered america": "Christopher Columbus is credited with discovering America in 1492.",
  "which is the largest desert in the world": "The Antarctic Desert is the largest desert in the world.",
  "how many teeth does an adult human have": "An adult human has 32 teeth.",
  "what is the tallest building in the world": "As of 2025, the tallest building is the Burj Khalifa in Dubai.",
  "what is the national flower of india": "The national flower of India is the Lotus.",
  "who is known as the father of computers": "Charles Babbage is known as the father of computers.",
  "what is the main gas found in the air we breathe": "Nitrogen is the main gas found in the air we breathe.",
  "which planet is closest to the sun": "Mercury is the closest planet to the sun.",
  "what is the most spoken language in the world": "English is the most widely spoken language in the world.",
  "how many colors are there in a rainbow": "There are 7 colors in a rainbow.",
  "who wrote 'romeo and juliet'": "William Shakespeare wrote 'Romeo and Juliet'.",
  "what is the freezing point of water": "The freezing point of water is 0°C or 32°F.",
  "which animal is known as the king of the jungle": "The lion is known as the king of the jungle.",
  "how many legs does a spider have": "A spider has 8 legs.",
  "who is the ceo of tesla": "As of 2025, the CEO of Tesla is Elon Musk.",
  "what is the national sport of canada": "The national sports of Canada are ice hockey and lacrosse.",
  "which continent is known as the 'dark continent'": "Africa is known as the 'Dark Continent'.",
  "what is the main ingredient in bread": "The main ingredient in bread is flour.",
  "what is the capital of australia": "The capital of Australia is Canberra.",
  "how many hours are there in a day": "There are 24 hours in a day.",
  "what is the name of the galaxy we live in": "We live in the Milky Way galaxy.",
  "what is the square root of 144": "The square root of 144 is 12.",
  "how many sides does a hexagon have": "A hexagon has 6 sides.",
  "what is the largest ocean": "The Pacific Ocean is the largest ocean on Earth.",
  "what is the tallest statue in the world": "The Statue of Unity in India is the tallest statue in the world.",
  "who is the founder of facebook": "Facebook was founded by Mark Zuckerberg.",
  "what is the capital of china": "The capital of China is Beijing.",
  "which planet is known as the blue planet": "Earth is known as the Blue Planet.",
  "how many strings does a guitar have": "A standard guitar has 6 strings.",
  "which bird is the fastest in the world": "The peregrine falcon is the fastest bird in the world.",
  "what is the main ingredient in chocolate": "The main ingredient in chocolate is cocoa.",
  "how many minutes are there in an hour": "There are 60 minutes in an hour.",
  "what is the largest island in the world": "Greenland is the largest island in the world.",
  "who was the first president of the united states": "George Washington was the first President of the United States.",
  "which is the coldest place on earth": "Antarctica is the coldest place on Earth.",
  "what is the capital of russia": "The capital of Russia is Moscow.",
  "how many vowels are there in the english alphabet": "There are 5 vowels in the English alphabet.",
  "what is the process by which plants make food": "Photosynthesis is the process by which plants make food.",
  "how many planets are there in the solar system": "There are 8 planets in the solar system.",
  "what is the largest organ in the human body": "The skin is the largest organ in the human body.",
  "who was albert einstein": "Albert Einstein was a theoretical physicist famous for the theory of relativity.",
  "what is the currency of the usa": "The currency of the USA is the US Dollar ($).",
  "how many zeros are there in one million": "There are 6 zeros in one million.",
  "what is the capital of germany": "The capital of Germany is Berlin.",
  "what is the national bird of india": "The national bird of India is the Indian Peacock.",
  "who is known as the nightingale of india": "Lata Mangeshkar is known as the Nightingale of India.",
  "which vitamin is produced when sunlight hits the skin": "Vitamin D is produced when sunlight hits the skin.",
  "how many planets have rings": "Four planets have rings: Jupiter, Saturn, Uranus, and Neptune.",
  "what is the boiling point of iron": "The boiling point of iron is about 2862°C.",
  "how many countries are there in the world": "As of 2025, there are 195 countries in the world.",
  "what is the national sport of japan": "Sumo wrestling is considered the national sport of Japan.",
  "which part of the plant conducts photosynthesis": "The leaves conduct photosynthesis.",
  "who invented the airplane": "The Wright brothers invented the airplane.",
  "what is the capital of italy": "The capital of Italy is Rome.",
  "what does cpu stand for": "CPU stands for Central Processing Unit.",
  "which blood type is known as the universal donor": "O negative is the universal donor blood type.",
  "what is the primary source of energy on earth": "The Sun is the primary source of energy on Earth.",
  "what is the distance between earth and the sun": "The average distance is about 93 million miles or 150 million kilometers.",
  "which language has the most native speakers": "Mandarin Chinese has the most native speakers.",
  "how many hearts does an octopus have": "An octopus has 3 hearts.",
  "what does dna stand for": "DNA stands for Deoxyribonucleic Acid.",
  "how many players are there in a cricket team": "There are 11 players in a cricket team.",
  "who was the first woman to go to space": "Valentina Tereshkova was the first woman to go to space.",
  "what is the largest internal organ in the human body": "The liver is the largest internal organ.",
  "how many months have 31 days": "Seven months have 31 days.",
  "what is the capital of south korea": "The capital of South Korea is Seoul.",
  "what does http stand for": "HTTP stands for HyperText Transfer Protocol.",
  "what is the capital of canada": "The capital of Canada is Ottawa.",
  "who is the author of the lord of the rings": "J.R.R. Tolkien is the author of The Lord of the Rings.",
  "what is the most abundant gas in earth’s atmosphere": "Nitrogen is the most abundant gas in the atmosphere.",
  "what is the national animal of india": "The national animal of India is the Bengal Tiger.",
  "which organ pumps blood throughout the body": "The heart pumps blood throughout the body.",
  "how many hours are there in a week": "There are 168 hours in a week.",
  "what is the largest planet in our solar system": "Jupiter is the largest planet in our solar system."
};


const userInput = document.getElementById("user-input");
const sendBtn = document.getElementById("send-btn");
const chatBox = document.getElementById("chat-box");
const suggestionsList = document.getElementById("suggestions");

let selectedQuestion = "";

userInput.addEventListener("input", () => {
  const query = userInput.value.toLowerCase().trim();
  showSuggestions(query);
});

function showSuggestions(input) {
  suggestionsList.innerHTML = "";
  if (input.length === 0) {
    suggestionsList.style.display = "none";
    sendBtn.disabled = true;
    selectedQuestion = "";
    return;
  }

  const matches = Object.keys(predefinedQuestions).filter(q =>
    q.startsWith(input)
  );

  if (matches.length === 0) {
    suggestionsList.style.display = "none";
    sendBtn.disabled = true;
    selectedQuestion = "";
    return;
  }

  matches.forEach(match => {
    const li = document.createElement("li");
    li.textContent = match;
    li.onclick = () => {
      userInput.value = match;
      selectedQuestion = match;
      suggestionsList.style.display = "none";
      sendBtn.disabled = false;
    };
    suggestionsList.appendChild(li);
  });

  suggestionsList.style.display = "block";
  sendBtn.disabled = true;
}

function sendMessage() {
  if (!selectedQuestion) return;

  const userMsg = document.createElement("div");
  userMsg.className = "user-msg";
  userMsg.textContent = selectedQuestion;
  chatBox.appendChild(userMsg);

  const botMsg = document.createElement("div");
  botMsg.className = "bot-msg";
  botMsg.textContent = predefinedQuestions[selectedQuestion] || "Sorry, I don't have an answer.";
  chatBox.appendChild(botMsg);

  userInput.value = "";
  selectedQuestion = "";
  sendBtn.disabled = true;
  chatBox.scrollTop = chatBox.scrollHeight;
}
