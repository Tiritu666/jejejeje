const yesBtn = document.querySelector('#yesBtn');
const noBtn = document.querySelector('#noBtn');
const gif = document.querySelector('.gif');

yesBtn.addEventListener('click', function () {
    alert(':3');
});

noBtn.addEventListener('mouseover', function () {
    const gifRect = gif.getBoundingClientRect();
    const noBtnRect = noBtn.getBoundingClientRect();

    let randomX, randomY;
    let overlaps;

    do {
        
        randomX = Math.floor(Math.random() * 100);
        randomY = Math.floor(Math.random() * 100);

        
        const leftPx = (window.innerWidth * randomX) / 100;
        const topPx = (window.innerHeight * randomY) / 100;

       
        const newBtnRect = {
            left: leftPx,
            right: leftPx + noBtnRect.width,
            top: topPx,
            bottom: topPx + noBtnRect.height
        };

       
        overlaps =
            newBtnRect.left < gifRect.right &&
            newBtnRect.right > gifRect.left &&
            newBtnRect.top < gifRect.bottom &&
            newBtnRect.bottom > gifRect.top;

    } while (overlaps);

    
    noBtn.style.left = `${randomX}%`;
    noBtn.style.top = `${randomY}%`;
    noBtn.style.transform = `translate(-${randomX}%, -${randomY}%)`;
});
