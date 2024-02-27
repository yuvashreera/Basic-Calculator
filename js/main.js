document.addEventListener('DOMContentLoaded', (e) => {
    console.log('Data loaded Successfully!');
    initApp();
});

const initApp = () => {
    // Getting display key
    const displayKey = document.querySelector('.answer');

    // Getting all keys (numbers, math operations, clear, and equal-to)
    const keys = document.querySelectorAll('.numKey');

    keys.forEach((key) => {
        key.addEventListener('click', (e) => {
            const keyContent = e.target.textContent;

            if (keyContent === 'C') {
                // Clear functionality
                displayKey.textContent = '';
            } else if (keyContent === '=') {
                // Evaluate and display result
                try {
                    displayKey.textContent = eval(displayKey.textContent);
                } catch (error) {
                    displayKey.textContent = 'Error';
                }
            } else {
                // Append key content to display
                displayKey.textContent += keyContent;
            }
        });
    });
};
