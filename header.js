class SiteHeader extends HTMLElement {
    connectedCallback() {
        const title = this.getAttribute('title') || 'Home Page';
        const span =  this.getAttribute('span') || "home";

        this.innerHTML = `
            <header dir="rtl" class="flex justify-between items-center w-full px-6 h-16 bg-slate-105 backdrop-blur-xl sticky top-0 z-30 shrink-0 border-b border-slate-105">
                <div class="w-full max-w-7xl flex justify-between items-center px-12">
                    <div class="flex items-center gap-3 text-primary font-bold">
                        <span class="material-symbols-outlined text-black">${span}</span>
                        <span class="text-lg text-black">${title}</span>
                    </div>
                </div>
                    <div class="text-l font-bold text-emerald-900 whitespace-nowrap">Atar Noder Neder - This marketing spot could be yours</div>
            </header>
        `;
    }
}

customElements.define('site-header', SiteHeader);