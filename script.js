document.getElementById('check-btn').addEventListener('click', function() {
    const input = document.getElementById('text-input').value;
    const resultElement = document.getElementById('result');

    if (!input) {
        alert('Please input a value');
        resultElement.textContent = '';
        return;
    }

    // Remove non-alphanumeric characters and convert to lowercase
    const cleanInput = input.replace(/[^a-z0-9]/gi, '').toLowerCase();

    // Check if the cleaned input is a palindrome
    if (cleanInput === cleanInput.split('').reverse().join('')) {
        resultElement.textContent = `${input} is a palindrome`;
    } else {
        resultElement.textContent = `${input} is not a palindrome`;
    }
});
