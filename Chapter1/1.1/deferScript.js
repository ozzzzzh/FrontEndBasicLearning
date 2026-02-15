console.log("3️⃣ defer 脚本开始执行");

const links = document.querySelectorAll('.link');

links.forEach(link => {
  link.addEventListener('click', e => {
    e.preventDefault();
    console.log("点击了：", link.textContent.trim());
  });
});

for (let i = 0; i < 2000000000; i++) {}

console.log("4️⃣ defer 脚本执行完成");
