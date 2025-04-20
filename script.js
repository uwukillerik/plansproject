document.addEventListener('DOMContentLoaded', function() {
    const projects = [
        {
            title: "LightFlash",
            description: "Инновационная флэш-криптовалюта с мгновенными транзакциями и низкими комиссиями.",
            image: "🪙"
        },
        {
            title: "Знакомства Бот",
            description: "Улучшенный бот для знакомств с интеллектуальным подбором партнеров и верификацией.",
            image: "💑"
        },
        {
            title: "Telegram Звезд бот",
            description: "Автоматизация заработка в Telegram через монетизацию контента и подписок.",
            image: "⭐"
        },
        {
            title: "Крипто бот тапалка",
            description: "Торговый бот для криптобирж с алгоритмами следования за трендом.",
            image: "📈"
        },
        {
            title: "Казино бот",
            description: "Виртуальное казино с поддержкой криптовалют и прозрачной системой выплат.",
            image: "🎰"
        },
        {
            title: "Бот пробив/снос",
            description: "Инструмент для анализа открытых данных с возможностью формирования отчетов.",
            image: "🔍"
        },
        {
            title: "Бот анонимок",
            description: "Анонимный мессенджер с шифрованием и автоматическим удалением сообщений.",
            image: "🕵️"
        },
        {
            title: "Игробот",
            description: "Мультигейм-платформа с мини-играми и турнирной системой.",
            image: "🎮"
        },
        {
            title: "Gorilla-like бот",
            description: "Аналог Gorilla для ВК с расширенными функциями модерации и развлечения.",
            image: "🦍"
        },
        {
            title: "Бот поиска тиммейта",
            description: "Поиск игровых партнеров по заданным критериям и статистике.",
            image: "👥"
        }
    ];

    const grid = document.querySelector('.projects-grid');
    
    projects.forEach(project => {
        const card = document.createElement('div');
        card.className = 'project-card';
        
        card.innerHTML = `
            <div class="project-image">${project.image}</div>
            <div class="project-content">
                <h3>${project.title}</h3>
                <p>${project.description}</p>
                <button class="details-btn">Подробнее</button>
            </div>
        `;
        
        grid.appendChild(card);
    });

    // Добавляем обработчики для кнопок
    document.querySelectorAll('.details-btn').forEach(btn => {
        btn.addEventListener('click', function() {
            alert('Детальная страница в разработке. Здесь будет полное описание проекта!');
        });
    });
});
