const theme = document.querySelector('#theme');
theme.addEventListener('click', () => {
  const dark = document.body.toggleAttribute('data-ds-dark-theme');
  document.body.classList.toggle('showcase-dark', dark);
  theme.textContent = dark ? '切换浅色 / Light' : '切换深色 / Dark';
});
document.querySelector('#motion').addEventListener('click', event => {
  const paused = document.body.classList.toggle('paused');
  event.currentTarget.setAttribute('aria-pressed', String(paused));
  event.currentTarget.textContent = paused ? '播放动画 / Play' : '暂停动画 / Pause';
});
document.querySelector('#fold').addEventListener('click', event => {
  const expanded = event.currentTarget.getAttribute('aria-expanded') !== 'true';
  event.currentTarget.setAttribute('aria-expanded', String(expanded));
  document.querySelector('#letter').hidden = !expanded;
});
const states = {
  files: '示例文件：README.md、preview.html',
  terminal: '等待打开终端 · 示例，不执行命令',
  browser: '等待打开预览 · 示例，不访问网页'
};
document.querySelectorAll('[data-sidebar-right-guide-entry]').forEach(button => {
  button.addEventListener('click', () => {
    document.querySelector('#workspace-status').textContent = states[button.dataset.sidebarRightGuideEntry];
  });
});
