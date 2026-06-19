class MyNavbar extends HTMLElement {
    connectedCallback() {
        const path = window.location.pathname;
        const is = (page) => path.includes(page);
        const active = (page) => is(page)
            ? 'bg-white text-emerald-700 shadow-sm'
            : 'text-slate-600 hover:bg-white';

        const categories = [
            {
                id: 'cards',
                label: 'Card Games',
                icon: 'playing_cards',
                items: [
                    { href: 'blackjack.html', icon: 'token',               label: 'BlackJack',   page: 'blackjack' },
                    { href: '#',              icon: 'auto_awesome_mosaic',  label: 'Solitaire',   page: 'solitaire', soon: true },
                    { href: '#',              icon: 'style',                label: 'Taki / Uno',  page: 'taki',      soon: true },
                ]
            },
            {
                id: 'strategy',
                label: 'Strategy & Luck',
                icon: 'flare',
                items: [
                    { href: 'minesweeper.html', icon: 'brightness_high', label: 'Minesweeper', page: 'minesweeper' },
                    { href: 'yahtzee.html',     icon: 'casino',          label: 'Yahtzee',     page: 'yahtzee' },
                ]
            },
            {
                id: 'skills',
                label: 'Skill Tests',
                icon: 'keyboard',
                items: [
                    { href: 'wordle.html', icon: 'match_word',  label: 'Wordle',       page: 'wordle' },
                    { href: '#',           icon: 'keyboard',    label: 'Typing Test',  page: 'typing', soon: true },
                    { href: '#',           icon: 'ads_click',   label: 'CPS Test',     page: 'cps',    soon: true },
                ]
            },
            {
                id: 'geo',
                label: 'Geography',
                icon: 'public',
                items: [
                    { href: 'worldmap.html', icon: 'map', label: 'World map quiz',   page: 'worldmap'},
                    { href: '#', icon: 'location_city',  label: 'Capitals',    page: 'capitals',  soon: true },
                    { href: '#', icon: 'flag',           label: 'Flags',       page: 'flags',     soon: true },
                ]
            },
        ];

        // בדוק אם הדף הנוכחי שייך לקטגוריה — אם כן, פתח אותה אוטומטית
        const isCatOpen = (cat) => cat.items.some(item => is(item.page));

        const renderItems = (cat) => cat.items.map(item => `
            <a href="${item.href}" class="flex items-center gap-3 px-4 py-2 mx-2 rounded-2xl transition-colors
                ${item.soon ? 'text-slate-400 cursor-default pointer-events-none' : active(item.page)}">
                <span class="material-symbols-outlined text-base">${item.icon}</span>
                <span>${item.label}</span>
                ${item.soon ? '<span class="mr-auto text-[10px] bg-slate-100 text-slate-400 px-2 py-0.5 rounded-full">בקרוב</span>' : ''}
            </a>
        `).join('');

        const renderCategory = (cat) => {
            const open = isCatOpen(cat);
            return `
            <div class="accordion" data-id="${cat.id}">
                <button class="accordion-btn w-full flex items-center gap-3 px-4 py-2 text-slate-600 hover:bg-white rounded-2xl transition-colors">
                    <span class="material-symbols-outlined text-base">${cat.icon}</span>
                    <span>${cat.label}</span>
                    <span class="accordion-arrow material-symbols-outlined text-base ml-auto transition-transform duration-200 ${open ? 'rotate-180' : ''}">expand_more</span>
                </button>
                <div class="accordion-body flex flex-col gap-1 overflow-hidden transition-all duration-250 ease-in-out ${open ? '' : 'max-h-0'}">
                    ${renderItems(cat)}
                </div>
            </div>
            `;
        };

        this.innerHTML = `
        <aside dir="ltr" class="fixed left-0 top-0 h-full flex flex-col z-40 bg-slate-359 w-64 shadow-xl font-['Plus_Jakarta_Sans'] text-sm font-medium border-r border-slate-100">

            <!-- לוגו -->
            <div class="px-5 py-5 border-b border-slate-100">
                <h1 class="text-base font-black text-emerald-800 tracking-tight">Atar Noder Neder</h1>
                <p class="text-slate-400 text-xs mt-0.5">Starter pack</p>
            </div>

            <!-- ניווט גלילה -->
            <nav class="flex-1 overflow-y-auto py-3 px-2 space-y-1 scrollbar-hide">

                <!-- Lobby -->
                <a href="index.html" class="flex items-center gap-3 px-4 py-2 ${active('index')} rounded-2xl transition-colors">
                    <span class="material-symbols-outlined text-base">home</span>
                    <span>Lobby</span>
                </a>

                <div class="border-t border-slate-200 my-2 mx-2"></div>

                <!-- קטגוריות accordion -->
                ${categories.map(renderCategory).join('<div class="my-1"></div>')}

            </nav>

            <!-- תחתית קבועה -->
            <div class="border-t border-slate-100 px-2 py-3 space-y-1">
                <a href="leaderboard.html" class="flex items-center gap-3 px-4 py-2 ${active('leaderboard')} rounded-2xl transition-colors">
                    <span class="material-symbols-outlined text-base">trophy</span>
                    <span>Leaderboard</span>
                </a>
                <a href="settings.html" class="flex items-center gap-3 px-4 py-2 ${active('settings')} rounded-2xl transition-colors">
                    <span class="material-symbols-outlined text-base">settings</span>
                    <span>Settings</span>
                </a>
            </div>
        </aside>
        `;

        // Accordion לוגיקה — לולאה על כל הכפתורים
        this.querySelectorAll('.accordion').forEach(acc => {
            const btn  = acc.querySelector('.accordion-btn');
            const body = acc.querySelector('.accordion-body');
            const arrow = acc.querySelector('.accordion-arrow');

            // הגדר max-height ראשוני לפתוחים
            if (!body.classList.contains('max-h-0')) {
                body.style.maxHeight = body.scrollHeight + 'px';
            }

            btn.addEventListener('click', () => {
                const isOpen = body.style.maxHeight && body.style.maxHeight !== '0px';
                if (isOpen) {
                    body.style.maxHeight = '0px';
                    arrow.classList.remove('rotate-180');
                } else {
                    body.style.maxHeight = body.scrollHeight + 'px';
                    arrow.classList.add('rotate-180');
                }
            });
        });
    }
}

customElements.define('my-navbar', MyNavbar);