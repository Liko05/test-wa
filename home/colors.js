const articles = document.querySelectorAll('article');

const colors = ['red', 'green', 'blue', 'yellow', 'orange', 'purple', 'pink', 'brown', 'cyan','magenta', 'lime', 'teal', 'indigo', 'violet', 'silver', 'gold'];

articles.forEach(article => {
    var colorIndex = Math.floor(Math.random() * colors.length);
    article.style.backgroundColor = colors[colorIndex];
    colors.splice(colorIndex, 1);
    
});