// Cookieポップアップの制御
document.addEventListener('DOMContentLoaded', function() {
    const popup = document.getElementById('cookie-popup');
    const okButton = document.getElementById('cookie-ok');
    
    // ローカルストレージでCookie同意状態をチェック
    if (!localStorage.getItem('cookieAccepted')) {
        popup.style.display = 'block';
    }
    
    // OKボタンクリック時の処理
    okButton.addEventListener('click', function() {
        popup.style.display = 'none';
        localStorage.setItem('cookieAccepted', 'true');
    });
});