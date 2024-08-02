const passwordInput = document.querySelector("#password");
const progressBar = document.querySelector("#progressBar");
const strengthEl = document.querySelector("#strength");

const lcEl = document.querySelector("#lc");
const ucEl = document.querySelector("#uc");
const numEl = document.querySelector("#num");
const symEl = document.querySelector("#sym");
const charsEl = document.querySelector("#chars");

const passwordStrengths = [
    { difficulty: "Weak", color: "red" },
    { difficulty: "Medium", color: "orange" },
    { difficulty: "Strong", color: "green" },
];

const hasNumber = /\d/; // check if password contains at least one number
const hasUpperCase = /[A-Z]/; // check if password contains at least one uppercase letter
const hasLowerCase = /[a-z]/; // check if password contains at least one lowercase letter
const hasSpecial = /[^A-Za-z0-9]/; // check if password contains at least one special character


const getPasswordStrength = (score) => {
    if (score > 8) return passwordStrengths[2]
    if (score > 5) return passwordStrengths[1]
    return passwordStrengths[0]
}

const getPasswordScore = (password) => {
    let score = password.length > 3 ? Math.min(6, Math.floor(password.length / 3)) : 0;
    score += hasNumber.test(password) + hasUpperCase.test(password) + hasLowerCase.test(password) + hasSpecial.test(password);
    return score;
}

const updateUI = (strength, score, length, indicators) => {
    strengthEl.textContent = strength.difficulty;
    progressBar.style.backgroundColor = strength.color;
    progressBar.style.width = score * 10 + '%';
    lcEl.className = indicators.lc ? 'indicator active' : 'indicator';
    ucEl.className = indicators.uc ? 'indicator active' : 'indicator';
    numEl.className = indicators.num ? 'indicator active' : 'indicator';
    symEl.className = indicators.sym ? 'indicator active' : 'indicator';
    charsEl.textContent = length;
}


const handleInputs = () => {
    const password = passwordInput.value;
    const score = getPasswordScore(password);
    const strength = getPasswordStrength(score);
    const indicators = {
        lc: hasLowerCase.test(password),
        uc: hasUpperCase.test(password),
        num: hasNumber.test(password),
        sym: hasSpecial.test(password)
    }
    updateUI(strength, score, password.length, indicators);
}

passwordInput.addEventListener("input", handleInputs)

