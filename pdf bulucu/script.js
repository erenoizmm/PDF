document.addEventListener('DOMContentLoaded', function() {
    // Kar efekti
    const snowContainer = document.createElement('div');
    snowContainer.style.position = 'fixed';
    snowContainer.style.width = '100%';
    snowContainer.style.height = '100%';
    snowContainer.style.top = '0';
    snowContainer.style.left = '0';
    snowContainer.style.pointerEvents = 'none';
    document.body.prepend(snowContainer);

    function createSnowflake() {
        const snowflake = document.createElement('div');
        snowflake.className = 'snowflake';
        snowflake.innerHTML = '❄';
        snowflake.style.color = 'white';
        snowflake.style.position = 'absolute';
        snowflake.style.left = Math.random() * 100 + '%';
        snowflake.style.animationDelay = Math.random() * 5 + 's';
        snowflake.style.opacity = Math.random();
        snowflake.style.fontSize = (Math.random() * 20 + 10) + 'px';
        snowContainer.appendChild(snowflake);

        setTimeout(() => {
            snowflake.remove();
        }, 10000);
    }

    setInterval(createSnowflake, 100);

    // PDF arama fonksiyonları
    class PDFMasterSearch {
        constructor() {
            this.searchInput = document.getElementById('searchInput');
            this.searchButton = document.getElementById('searchButton');
            this.results = document.getElementById('results');

            this.searchButton.addEventListener('click', () => this.search());
            this.searchInput.addEventListener('keypress', (e) => {
                if (e.key === 'Enter') this.search();
            });
        }

        search() {
            const query = this.searchInput.value.trim();
            if (!query) return;

            const searchUrl = `https://www.google.com/search?q=${encodeURIComponent(query)}+filetype:pdf`;
            window.open(searchUrl, '_blank');

            const academicSources = [
                {
                    name: "Google Scholar PDF",
                    url: `https://scholar.google.com/scholar?q=${encodeURIComponent(query)}+filetype:pdf`
                },
                {
                    name: "ResearchGate",
                    url: `https://www.researchgate.net/search/publication?q=${encodeURIComponent(query)}`
                },
                {
                    name: "Academia.edu",
                    url: `https://www.academia.edu/search?q=${encodeURIComponent(query)}`
                }
            ];

            this.displayResults(academicSources);
        }

        displayResults(sources) {
            this.results.innerHTML = `
                <div class="result-item">
                    <strong>🎯 Google PDF araması yeni sekmede açıldı!</strong>
                </div>
            `;
            
            sources.forEach(source => {
                const div = document.createElement('div');
                div.className = 'result-item';
                div.innerHTML = `
                    <a href="${source.url}" target="_blank">
                        📚 ${source.name} üzerinde ara
                    </a>
                    <div class="source">
                        ⭐ Güvenilir akademik kaynak
                    </div>
                `;
                this.results.appendChild(div);
            });
        }
    }

    new PDFMasterSearch();
});
