(function() {
  const sidebar = document.getElementById('sidebar');
  const sidebarToggle = document.getElementById('sidebarToggle');
  const sidebarNav = document.getElementById('sidebarNav');
  const contentWrap = document.getElementById('contentWrap');

  let currentPage = 'overview';

  sidebarToggle.addEventListener('click', () => {
    sidebar.classList.toggle('open');
  });

  document.addEventListener('click', (e) => {
    if (window.innerWidth <= 768 && sidebar.classList.contains('open') && !sidebar.contains(e.target) && !sidebarToggle.contains(e.target)) {
      sidebar.classList.remove('open');
    }
  });

  function renderPage(pageId) {
    const page = PAGES[pageId];
    if (!page) return;

    currentPage = pageId;
    document.title = `${page.title} - TURTLE GP Docs`;

    let html = `<div class="markdown">`;
    html += `<h1>${page.title}</h1>`;
    if (page.description) {
      html += `<p class="page-description">${page.description}</p>`;
    }

    for (const section of page.sections) {
      html += renderSection(section);
    }

    html += `</div>`;
    contentWrap.innerHTML = html;

    navItems.forEach(item => {
      item.classList.toggle('active', item.dataset.page === pageId);
    });

    contentWrap.scrollTop = 0;
    window.scrollTo({ top: 0, behavior: 'smooth' });

    contentWrap.querySelectorAll('.copy-btn').forEach(btn => {
      btn.addEventListener('click', handleCopy);
    });

    history.replaceState(null, '', `#${pageId}`);
  }

  function renderSection(section) {
    switch (section.type) {
      case 'h2':
        return `<h2>${section.text}</h2>`;
      case 'h3':
        return `<h3>${section.text}</h3>`;
      case 'p':
        return `<p>${section.text}</p>`;
      case 'ul':
        return `<ul>${section.items.map(i => `<li>${i}</li>`).join('')}</ul>`;
      case 'ol':
        return `<ol>${section.items.map(i => `<li>${i}</li>`).join('')}</ol>`;
      case 'hr':
        return `<hr>`;
      case 'info-box':
        return renderInfoBox(section);
      case 'code-block':
        return renderCodeBlock(section);
      case 'table':
        return renderTable(section);
      case 'feature-grid':
        return renderFeatureGrid(section);
      case 'step-list':
        return renderStepList(section);
      case 'qna':
        return renderQnA(section);
      default:
        return '';
    }
  }

  function renderInfoBox(section) {
    return `<div class="info-box ${section.variant}">
      <strong>${section.title}</strong>
      ${section.body}
    </div>`;
  }

  function renderCodeBlock(section) {
    return `<div class="code-block">
      <div class="code-header">
        <span class="lang">${section.lang}</span>
        <button class="copy-btn" data-code="${encodeURIComponent(section.code)}">Copy</button>
      </div>
      <pre><code>${escapeHtml(section.code)}</code></pre>
    </div>`;
  }

  function renderTable(section) {
    const html = `<table>
      <thead><tr>${section.headers.map(h => `<th>${h}</th>`).join('')}</tr></thead>
      <tbody>${section.rows.map(r => `<tr>${r.map(c => `<td>${c}</td>`).join('')}</tr>`).join('')}</tbody>
    </table>`;
    return html;
  }

  function renderFeatureGrid(section) {
    return `<div class="feature-grid">${section.items.map(item => `
      <div class="feature-card">
        <div class="fc-icon">${item.icon}</div>
        <h4>${item.title}</h4>
        <p>${item.desc}</p>
      </div>
    `).join('')}</div>`;
  }

  function renderStepList(section) {
    return `<ol class="step-list">${section.steps.map(step => `
      <li><strong>${step.title}</strong>${step.body}</li>
    `).join('')}</ol>`;
  }

  function renderQnA(section) {
    return `<div class="qna-list">${section.items.map((item, i) => `
      <div class="qna-item">
        <div class="qna-question" data-index="${i}">
          <span>${item.q}</span>
          <svg class="qna-chevron" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="6 9 12 15 18 9"/></svg>
        </div>
        <div class="qna-answer">${item.a}</div>
      </div>
    `).join('')}</div>`;
  }

  function escapeHtml(str) {
    return str.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
  }

  async function handleCopy(e) {
    const btn = e.currentTarget;
    const code = decodeURIComponent(btn.dataset.code);
    try {
      await navigator.clipboard.writeText(code);
      btn.textContent = 'Copied!';
      setTimeout(() => { btn.textContent = 'Copy'; }, 2000);
    } catch {
      const ta = document.createElement('textarea');
      ta.value = code;
      document.body.appendChild(ta);
      ta.select();
      document.execCommand('copy');
      document.body.removeChild(ta);
      btn.textContent = 'Copied!';
      setTimeout(() => { btn.textContent = 'Copy'; }, 2000);
    }
  }

  const navItems = sidebarNav.querySelectorAll('.nav-item');
  navItems.forEach(item => {
    item.addEventListener('click', (e) => {
      e.preventDefault();
      const page = item.dataset.page;
      if (page) renderPage(page);
      if (window.innerWidth <= 768) sidebar.classList.remove('open');
    });
  });

  function handleHash() {
    const hash = location.hash.replace('#', '');
    if (hash && PAGES[hash]) {
      renderPage(hash);
    }
  }

  window.addEventListener('hashchange', handleHash);

  const qnaStyle = document.createElement('style');
  qnaStyle.textContent = `
    .qna-list{margin-bottom:20px}
    .qna-item{border:1px solid var(--border);border-radius:var(--radius-sm);margin-bottom:8px;overflow:hidden;transition:var(--transition)}
    .qna-item:hover{border-color:var(--accent)}
    .qna-question{display:flex;align-items:center;justify-content:space-between;padding:14px 18px;cursor:pointer;font-size:14px;font-weight:500;color:var(--text-primary);gap:12px;user-select:none}
    .qna-question:hover{color:var(--accent)}
    .qna-chevron{flex-shrink:0;transition:transform .3s ease;color:var(--text-muted)}
    .qna-item.open .qna-chevron{transform:rotate(180deg);color:var(--accent)}
    .qna-answer{padding:0 18px 0;max-height:0;overflow:hidden;transition:all .3s ease;font-size:14px;color:var(--text-secondary);line-height:1.7}
    .qna-item.open .qna-answer{max-height:500px;padding:0 18px 16px}
  `;
  document.head.appendChild(qnaStyle);

  document.addEventListener('click', (e) => {
    const question = e.target.closest('.qna-question');
    if (question) {
      const item = question.closest('.qna-item');
      if (item) item.classList.toggle('open');
    }
  });

  handleHash();
  if (location.hash === '' || !PAGES[location.hash.replace('#', '')]) {
    renderPage('overview');
  }
})();
