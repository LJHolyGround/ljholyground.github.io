// 表单提交时验证
document.getElementById('loginForm').addEventListener('submit', function(e) {
    const emailInput = document.getElementById('email');
    const errorElement = document.getElementById('email-error');
    
    // 清除之前的状态
    emailInput.classList.remove('invalid');
    errorElement.style.display = 'none';
    
    // 验证邮箱格式
    if (!validateEmail(emailInput.value)) {
        e.preventDefault(); // 阻止表单提交
        emailInput.classList.add('invalid');
        errorElement.textContent = 'Please enter a valid email address (eg: user@example.com).';
        errorElement.style.display = 'block';
        emailInput.focus();
    } else {
        e.preventDefault(); // 只在验证失败时调用
        const username = document.getElementById('username').value;
        const email = document.getElementById('email').value;
        const major = document.getElementById('major').value;

        // 存储用户信息到sessionStorage
        sessionStorage.setItem('loggedIn', 'true');
        sessionStorage.setItem('username', username);
        sessionStorage.setItem('email', email);
        sessionStorage.setItem('major', major);
                
        // 跳转到评估界面
        window.location.href = 'evaluation.html';
    }
});

// 实时验证（输入时）
document.getElementById('email').addEventListener('input', function() {
    const errorElement = document.getElementById('email-error');
    if (this.value && !validateEmail(this.value)) {
        errorElement.textContent = 'Invalid email address!';
        errorElement.style.display = 'block';
    } else {
        errorElement.style.display = 'none';
    }
});

// 邮箱验证函数
function validateEmail(email) {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}