class MyNavbar extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
            <nav style="background-color: #222; padding: 15px; text-align: center; font-family: sans-serif; direction: rtl;">
                <a href="index.html" style="color: white; margin: 0 10px; text-decoration: none; font-weight: bold;">בית</a> | 
                <a href="wordle.html" style="color: white; margin: 0 10px; text-decoration: none; font-weight: bold;">וורדל</a> | 
                <a href="tetris.html" style="color: white; margin: 0 10px; text-decoration: none; font-weight: bold;">טטריס</a> | 
                <a href="blackjack.html" style="color: white; margin: 0 10px; text-decoration: none; font-weight: bold;">בלאקג'ק</a> | 
                <a href="bubbleshooter.html" style="color: white; margin: 0 10px; text-decoration: none; font-weight: bold;">באבל שוטר</a> | 
                <a href="minesweeper.html" style="color: white; margin: 0 10px; text-decoration: none; font-weight: bold;">שומר מסך (מוקשים)</a> | 
                <a href="yahtzee.html" style="color: white; margin: 0 10px; text-decoration: none; font-weight: bold;">יאצי</a>
            </nav>
        `;
    }
}

// רישום התגית החדשה
customElements.define('my-navbar', MyNavbar);