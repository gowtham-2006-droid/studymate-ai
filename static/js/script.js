const menuItems = document.querySelectorAll(".menu-item");
const indicator = document.querySelector(".menu-indicator");
const featureCards = document.querySelectorAll(".feature-card");
const userInput = document.getElementById("user-input");
const sendBtn = document.getElementById("send-btn");
const chatMessages = document.getElementById("chat-messages");


function moveIndicator(element) {
  indicator.style.transform = `translateY(${element.offsetTop}px)`;
}

menuItems.forEach((item) => {
  item.addEventListener("click", () => {
    menuItems.forEach((button) => {
      button.classList.remove("active");
    });

    item.classList.add("active");

    moveIndicator(item);
  });
});

window.addEventListener("load", () => {
  const activeItem = document.querySelector(".menu-item.active");

  if (activeItem) {
    moveIndicator(activeItem);
  }
});


async function sendMessage() {
  const question = userInput.value.trim();

  if (!question) return;

  // Create user message
  const userMessage = document.createElement("div");
  userMessage.className = "user-message";
  userMessage.textContent = question;

  chatMessages.appendChild(userMessage);

  userInput.value = "";

  // Create loading message
  const loadingMessage = document.createElement("div");
  loadingMessage.className = "ai-message";
  loadingMessage.textContent = "Thinking...";

  chatMessages.appendChild(loadingMessage);

  try {
    const response = await fetch("/ask", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ question }),
    });

    const data = await response.json();

    loadingMessage.textContent =
      data.answer || data.error || "No answer received.";

  } catch (error) {
    loadingMessage.textContent =
      "Unable to get a response. Please try again later.";

    console.error("Error fetching response:", error);
  }
}

sendBtn.addEventListener("click", sendMessage);

userInput.addEventListener("keypress", (event) => {
  if (event.key === "Enter") {
    sendMessage();
  }
});
