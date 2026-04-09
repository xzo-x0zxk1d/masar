(function(){
    const body = document.body;
    let fontSize = 16;
    // تبديل السمة
    document.getElementById('toggleMode')?.addEventListener('click', ()=>{
        body.classList.toggle('light-mode');
        const btn = document.getElementById('toggleMode');
        btn.textContent = body.classList.contains('light-mode') ? '☀️' : '🌙';
    });
    // تغيير حجم الخط
    document.getElementById('increaseFont')?.addEventListener('click', ()=>{
        fontSize = Math.min(24, fontSize+2);
        body.style.fontSize = fontSize + 'px';
    });
    document.getElementById('decreaseFont')?.addEventListener('click', ()=>{
        fontSize = Math.max(12, fontSize-2);
        body.style.fontSize = fontSize + 'px';
    });
    // إخفاء شريط الخصوصية
    document.getElementById('acceptPrivacy')?.addEventListener('click', ()=>{
        document.getElementById('privacyBanner').style.display = 'none';
    });
})();
