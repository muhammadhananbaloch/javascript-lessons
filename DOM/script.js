const container = document.querySelector('#container');

const content = document.createElement('div');
content.classList.add('content');
content.textContent = 'This is the glorious text-content!';

container.appendChild(content);

// a <p> with red text that says “Hey I’m red!”

const redText = document.createElement('p');;
redText.classList.add('red-text');
redText.style.color = 'red';
redText.textContent = "Hey I'm red!" 

container.appendChild(redText)