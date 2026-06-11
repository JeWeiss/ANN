class MyNavbar extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
        <aside dir="ltr" class="fixed left-0 top-0 h-full flex flex-col p-5 z-40 bg-slate-200 w-64 rounded-r-[32px] shadow-xl font-['Plus_Jakarta_Sans'] text-sm font-medium">
            <div class="mb-8 px-2">
                <h1 class="text-lg font-black text-emerald-800 tracking-tighter">Atar Noder Neder</h1>
                <p class="text-slate-500 text-xs">Elite Member</p>
            </div>
            <nav class="flex-1 space-y-2">
                <a href="index.html" class="flex items-center gap-3 px-4 py-2 text-slate-600 rounded-2xl hover:bg-slate-100 transition-colors">
                    <span class="material-symbols-outlined text-base">arrow_back</span>
                    <span>Go back to Lobby</span>
                </a>
                <a href="wordle.html" class="flex items-center gap-3 px-4 py-2 ${window.location.pathname.includes('wordle') ? 'bg-white text-emerald-700 shadow-sm' : 'text-slate-600 hover:bg-slate-100'} rounded-2xl transition-colors">
                    <span class="material-symbols-outlined text-base">match_word</span>
                    <span>Wordle</span>
                </a>
                <a href="yahtzee.html" class="flex items-center gap-3 px-4 py-2 ${window.location.pathname.includes('yahtzee') ? 'bg-white text-emerald-700 shadow-sm' : 'text-slate-600 hover:bg-slate-100'} rounded-2xl transition-colors">
                    <span class="material-symbols-outlined text-base">casino</span>
                    <span>Yahtzee</span>
                </a>
                <a href="minesweeper.html" class="flex items-center gap-3 px-4 py-2 ${window.location.pathname.includes('minesweeper') ? 'bg-white text-emerald-700 shadow-sm' : 'text-slate-600 hover:bg-slate-100'} rounded-2xl transition-colors">
                    <span class="material-symbols-outlined text-base" style="font-variation-settings:'FILL' 1;">brightness_high</span>
                    <span>Minesweeper</span>
                </a>
                <a href="blackjack.html" class="flex items-center gap-3 px-4 py-2 ${window.location.pathname.includes('blackjack') ? 'bg-white text-emerald-700 shadow-sm' : 'text-slate-600 hover:bg-slate-100'} rounded-2xl transition-colors">
                    <span class="material-symbols-outlined text-base" style="font-variation-settings:'FILL' 1;">playing_cards</span>
                    <span>BlackJack</span>
                </a>
                <a href="bubbleshooter.html" class="flex items-center gap-3 px-4 py-2 ${window.location.pathname.includes('bubbleshooter') ? 'bg-white text-emerald-700 shadow-sm' : 'text-slate-600 hover:bg-slate-100'} rounded-2xl transition-colors">
                    <span class="material-symbols-outlined text-base" style="font-variation-settings:'FILL' 1;">bubble_chart</span>
                    <span>Bubble Shooter</span>
                </a>
                <a href="tetris.html" class="flex items-center gap-3 px-4 py-2 ${window.location.pathname.includes('tetris') ? 'bg-white text-emerald-700 shadow-sm' : 'text-slate-600 hover:bg-slate-100'} rounded-2xl transition-colors">
                    <span class="material-symbols-outlined text-base" style="font-variation-settings:'FILL' 1;">view_agenda</span>
                    <span>Tetris</span>
                </a>
            </nav>
        </aside>
        `;
    }
}
customElements.define('my-navbar', MyNavbar);