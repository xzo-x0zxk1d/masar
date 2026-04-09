(function(){
    const body = document.body;
    let fontSize = 16;
    document.getElementById('toggleMode')?.addEventListener('click', ()=>{
        body.classList.toggle('light-mode');
    });
    document.getElementById('increaseFont')?.addEventListener('click', ()=>{
        fontSize = Math.min(28, fontSize+2);
        body.style.fontSize = fontSize+'px';
    });
    document.getElementById('decreaseFont')?.addEventListener('click', ()=>{
        fontSize = Math.max(12, fontSize-2);
        body.style.fontSize = fontSize+'px';
    });
    document.getElementById('acceptPrivacy')?.addEventListener('click', ()=>{
        document.getElementById('privacyBanner').style.display='none';
    });
})();
