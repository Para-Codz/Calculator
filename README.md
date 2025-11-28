
View via vercel https://quic-calc.vercel.app/



# 🧮 Calculator Program

A simple and stylish **JavaScript Calculator** built with **HTML, CSS, and JavaScript**.  
It performs basic arithmetic operations — addition, subtraction, multiplication, and division — with a modern dark-themed user interface and hover animations.

---

## 🚀 Features

- ✅ **Basic Operations** — Add, subtract, multiply, and divide numbers.  
- 🖥️ **Real-Time Display** — Shows input and results in a clean display area.  
- 🎨 **Modern UI Design** — Styled with smooth hover effects and glowing red accents.  
- ⚡ **Error Handling** — Displays an error message when invalid expressions are entered.  
- 📱 **Responsive Layout** — Automatically centers and adjusts for different screen sizes.  

---

## 🧩 Project Structure

CalculatorProgram/
│
├── index.html → The main structure of the calculator.
├── style.css → Handles the layout and design of the calculator.
└── script.js → Manages all calculator logic and button functions.



---

## 💻 How It Works

### 1. **HTML (Structure)**
- Builds the calculator layout inside a `<div>` with an input field (`#display`) for showing results.  
- Each button (`<button>`) triggers a JavaScript function when clicked.

### 2. **CSS (Design)**
- Dark theme with soft red glow and hover animations.  
- Rounded corners, smooth transitions, and shadows for a glowing 3D feel.  
- Buttons enlarge slightly on hover for better interactivity.

### 3. **JavaScript (Functionality)**
The main logic includes:

```js
// Selects the display element
const display = document.getElementById("display");

// Adds each clicked number or symbol to the display
function buttonEachNumber(input) {
    display.value += input;
}

// Clears the display
function clearDisplay() {
    display.value = "";
    display.style.color = "white";
}

// Calculates and shows the result
function calculate() {
    try {
        display.value = eval(display.value); // Evaluates the expression
    } catch (error) {
        display.value = "ERROR";
        display.style.color = "red"; // Changes color for error
    }
}



🪄 Future Improvements

Add keyboard input support.

Include %, √, and memory (M+, M-, MR) buttons.

Display calculation history.

Add sound or vibration feedback for clicks.


👨🏽‍💻 About the Author
Paradise Samuel George

💡 Front-End Developer | UI Enthusiast | Creative Builder from Nigeria

I’m a passionate web developer who loves crafting clean, responsive, and user-friendly designs using HTML, CSS, and JavaScript.
I enjoy building digital experiences that feel simple but powerful — whether it’s a small calculator app or a full web project like Dishcovery, my recipe-sharing platform.

Beyond coding, I love exploring new tech trends, learning modern frameworks, and connecting with other developers who share the same growth mindset.
My goal is to keep improving with every project while inspiring others who are just starting out in tech.

🌍 Based in: Nigeria
📧 Open to: Collaboration, learning, and new opportunities


//
🏁 License

This project is licensed under the MIT License — free to use, modify, and share.
