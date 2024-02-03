javascript:(function(){
    const start = window.location.href;
    const tab = window.open('about:blank');
    const doc = tab.document;
    let favicon = doc.querySelector('link[rel~="icon"]');
    const iim = doc.createElement('main'); const iim_btns = doc.createElement('section');
    const iframe = doc.createElement('iframe'); const iframe_s = iframe.style;
    const reloadBtn = doc.createElement('button');
    if (!favicon) {
        favicon = doc.createElement('link');
        favicon.rel = 'icon';
        doc.head.appendChild(favicon);
    }
    favicon.href = 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f4/Google_Incognito_logo.svg/2048px-Google_Incognito_logo.svg.png';
    doc.body.appendChild(iim); iim.append(iim_btns);
    iim.append(iframe);
    iim_btns.append(reloadBtn);
    function mirror() {
        doc.title = iframe.contentDocument.title;
    }
    setInterval(mirror, 1);
    iframe.src = start;
    iframe_s.width = '100%';
    iframe_s.height = '100%';
    iframe_s.border = 'none';
    for (const item of iim_btns.children) {
        const item_s = item.style;
        item_s.width = '5.6vh';
        item_s.height = '4vh';
        item_s.position = 'fixed';
        item_s.zIndex = '2';
        item_s.color = 'white';
        item_s.backgroundColor = 'black';
        item_s.border = 'none';
        item_s.margin = '.5vh';
        item_s.opacity = '.5';
        item_s.transitionDuration = '.1s';
    }
    reloadBtn.textContent = '⟳';
    reloadBtn.onclick = function(){iframe.contentWindow.location.reload()};
})();
