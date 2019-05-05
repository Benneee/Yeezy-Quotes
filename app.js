document.getElementById('btn').addEventListener('click', getQuotes);

function getQuotes() {
  // console.log(e.target);
  const xhr = new XMLHttpRequest();

  xhr.open('GET', 'https://api.kanye.rest', true);
  // xhr.open('GET', 'file.txt', true);

  xhr.onload = function() {
//     console.log('ReadyState', xhr.readyState);
    if (this.status === 200) {
      // We parse the response so we can get access to the nested quote
      const quote = JSON.parse(this.responseText);

      // Now displaying unto the HTML
      let theQuote = document.getElementById('quotes');
      const img = document.querySelector('img');
      if (this.responseText) {
        theQuote.innerHTML = `<h4>${quote.quote}</h4>`;
        theQuote.classList.add('quotes');
        img.setAttribute('src', 'kanye.jpg');
        img.classList.add('center');
      }
    }
  };

  xhr.onerror = function() {
    console.log('Error in getting quotes...');
  };

  xhr.send();
}
