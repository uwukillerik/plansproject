document.addEventListener('DOMContentLoaded', function() {
    const projects = [
        {
            title: "LightFlash",
            description: "Флэш крипта",
            image: `<svg viewBox="0 0 24 24"><path d="M5.5 12H10V6.5H13.5V12H18L12 17.5L5.5 12Z"/></svg>`,
            details: "Дефолт наш бот который для создания фейк крипты"
        },
        {
            title: "Знакомства Бот",
            description: "Улучшенный бот для знакомств с интеллектуальным подбором",
            image: `<svg viewBox="0 0 24 24"><path d="M12 4C14.21 4 16 5.79 16 8S14.21 12 12 12 8 10.21 8 8 9.79 4 12 4M12 14C16.42 14 20 15.79 20 18V20H4V18C4 15.79 7.58 14 12 14Z"/></svg>`,
            details: "Сделать версию 2.0 Дайвинчика и добавить новые фичи и т.д"
        },
        {
            title: "Telegram Звезд бот",
            description: "Автоматизация заработка в Telegram через монетизацию",
            image: `<svg viewBox="0 0 24 24"><path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z"/></svg>`,
            details: "Комплексный бот для монетизации Telegram-каналов с системой подписок, платного контента и реферальной программой. Ну выполнять задания за баланс и т.д"
        },
        {
            title: "Крипто бот тапалка",
            description: "Типо Хомяка, но не крипта будет а что-то другое допустим",
            image: `<svg viewBox="0 0 24 24"><path d="M3 3H21V5C19.9 5 19 5.9 19 7V19C19 20.1 18.1 21 17 21H7C5.9 21 5 20.1 5 19V7C5 5.9 4.1 5 3 5V3M7 5V19H17V5H7M8 10H16V12H8V10Z"/></svg>`,
            details: "Копия Хамстера без скама"
        },
        {
            title: "Казино бот",
            description: "Виртуальное казино ну или не казино а миниигры сделать просто",
            image: `<svg viewBox="0 0 24 24"><path d="M5 3H19C20.1 3 21 3.9 21 5V19C21 20.1 20.1 21 19 21H5C3.9 21 3 20.1 3 19V5C3 3.9 3.9 3 5 3M12 10C10.9 10 10 10.9 10 12S10.9 14 12 14 14 13.1 14 12 13.1 10 12 10M7 5C5.9 5 5 5.9 5 7V9C5 10.1 5.9 11 7 11H9C10.1 11 11 10.1 11 9V7C11 5.9 10.1 5 9 5H7M17 5C15.9 5 15 5.9 15 7V9C15 10.1 15.9 11 17 11H19C20.1 11 21 10.1 21 9V7C21 5.9 20.1 5 19 5H17M7 13C5.9 13 5 13.9 5 15V17C5 18.1 5.9 19 7 19H9C10.1 19 11 18.1 11 17V15C11 13.9 10.1 13 9 13H7M17 13C15.9 13 15 13.9 15 15V17C15 18.1 15.9 19 17 19H19C20.1 19 21 18.1 21 17V15C21 13.9 20.1 13 19 13H17Z"/></svg>`,
            details: "Полнофункциональное крипто-казино с играми: рулетка, блекджек, слоты, покер. Система бонусов и турниров. Ну или миниигры сделать"
        },
        {
            title: "Бот пробив/снос",
            description: "Инструмент для анализа открытых данных. Глаз Боба типо и т.д",
            image: `<svg viewBox="0 0 24 24"><path d="M9.5 3C4.81 3 1 5.69 1 9C1 10.19 1.5 11.34 2.44 12.33C1.53 13.5 1 14.84 1 16.26C1 19.98 5.95 22 12 22C18.05 22 23 19.98 23 16.26C23 14.84 22.47 13.5 21.56 12.33C22.5 11.34 23 10.19 23 9C23 5.69 19.19 3 14.5 3C12.79 3 11.2 3.5 9.86 4.43C9.63 3.05 8.11 2 6.5 2C5.12 2 4 2.91 4 4.01V4.15C4 4.47 4.19 4.77 4.5 4.9C6.25 5.74 7.67 7.03 8.36 8.58C7.41 8.21 6.5 8 6.5 8C4.98 8 3.67 8.5 2.72 9.2C2.28 8.48 2 7.71 2 7C2 5.97 3 5 5 5C5.26 5 5.5 5.06 5.75 5.12C6.59 3.61 8.08 2.5 9.5 2.5V3Z"/></svg>`,
            details: "Мощный инструмент для анализа цифрового следа с интеграцией с соцсетями и базами данных."
        },
        {
            title: "Бот анонимок",
            description: "Анонимный бот",
            image: `<svg viewBox="0 0 24 24"><path d="M12 3C16.97 3 21 7.03 21 12C21 16.97 16.97 21 12 21C7.03 21 3 16.97 3 12C3 7.03 7.03 3 12 3M12 5C8.14 5 5 8.14 5 12C5 15.86 8.14 19 12 19C15.86 19 19 15.86 19 12C19 8.14 15.86 5 12 5M12 7C13.66 7 15 8.34 15 10C15 11.66 13.66 13 12 13C10.34 13 9 11.66 9 10C9 8.34 10.34 7 12 7M6 13C4.67 14.33 4.67 15.67 6 17C7.33 18.33 8.67 18.33 10 17L11.4 15.6C10.74 15.28 10.13 14.85 9.6 14.3C9.15 13.86 8.72 13.26 8.4 12.6L6 13Z"/></svg>`,
            details: "Бот с анон сообщениями там и анкетами или типо того сделать +фичи"
        },
        {
            title: "Игробот",
            description: "Мультигейм-платформа с мини-играми",
            image: `<svg viewBox="0 0 24 24"><path d="M21 6H3C1.9 6 1 6.9 1 8V16C1 17.1 1.9 18 3 18H21C22.1 18 23 17.1 23 16V8C23 6.9 22.1 6 21 6M10 15H8V13H10V15M16 15H12V13H16V15M21 11H19V9H21V11M3 11H5V9H3V11Z"/></svg>`,
            details: "Платформа с 50+ мини-играми, системой достижений, турнирами и внутриигровой экономикой."
        },
        {
            title: "Gorilla бот",
            description: "Аналог Gorilla в ВК с расширенными функциями",
            image: `<svg viewBox="0 0 24 24"><path d="M19 3C20.1 3 21 3.9 21 5V19C21 20.1 20.1 21 19 21H5C3.9 21 3 20.1 3 19V5C3 3.9 3.9 3 5 3H19M15.71 7.71C15.53 7.53 15.28 7.42 15 7.42C14.72 7.42 14.47 7.53 14.29 7.71L12 10V11H13V16H10V11H11V10L8.71 7.71C8.53 7.53 8.28 7.42 8 7.42C7.45 7.42 7 7.87 7 8.42V16H5V8.42C5 7.32 5.83 6.42 6.91 6.32C7.22 5.14 8.26 4.25 9.5 4.25C9.84 4.25 10.16 4.32 10.46 4.46C10.47 4.46 10.47 4.46 10.48 4.46C10.95 4.71 11.34 5.11 11.57 5.59C11.89 5.27 12.31 5.05 12.78 5.01C13.3 4.97 13.79 5.13 14.18 5.44C14.2 5.45 14.21 5.46 14.23 5.47C14.66 5.84 14.87 6.38 14.82 6.96C14.81 7.02 14.8 7.08 14.78 7.13C15.36 7.22 15.82 7.68 15.91 8.26V16H14V8.42C14 8.15 13.78 7.93 13.5 7.93C13.22 7.93 13 8.15 13 8.42V17H17V8.42C17 7.87 16.55 7.42 16 7.42C15.72 7.42 15.47 7.53 15.29 7.71L15.28 7.72L15.29 7.71Z"/></svg>`,
            details: "Многофункциональный бот для ВКонтакте с модерацией, развлечениями, экономикой и мини-играми."
        },
        {
            title: "Бот поиска тиммейта",
            description: "Поиск игровых партнеров по заданным критериям",
            image: `<svg viewBox="0 0 24 24"><path d="M12 3C14.21 3 16 4.79 16 7S14.21 11 12 11 8 9.21 8 7 9.79 3 12 3M16 13.54C17.07 13 18.26 12.54 19 12V14C19 15.1 18.1 16 17 16H15V17.5C15 18.88 13.88 20 12.5 20C11.12 20 10 18.88 10 17.5V16H7C5.9 16 5 15.1 5 14V12C5.74 12.54 6.93 13 8 13.54V12H16V13.54M20 6H22V12H20V6M20 14H22V16H20V14Z"/></svg>`,
            details: "Система подбора игровых партнеров по рейтингу, предпочитаемым ролям и стилю игры с интеграцией Steam/Epic."
        },
        {
            title: "Магазин Бот",
            description: "Автоматизированная система управления магазином",
            image: `<svg viewBox="0 0 24 24"><path d="M12 13C12.55 13 13 12.55 13 12S12.55 11 12 11 11 11.45 11 12 11.45 13 12 13M18 16V10C18 8.9 17.1 8 16 8H13L15 4H9L11 8H8C6.9 8 6 8.9 6 10V16C6 17.1 6.9 18 8 18H16C17.1 18 18 17.1 18 16M20 8H22V16H20V8Z"/></svg>`,
            details: "Полноценная CRM система для управления интернет-магазином прямо в мессенджере с корзиной, оплатой и трекингом заказов."
        },
        {
            title: "Маркетплейс бот",
            description: "Площадка для торговли с системой гаранта",
            image: `<svg viewBox="0 0 24 24"><path d="M17 18C18.11 18 19 17.11 19 16C19 14.89 18.11 14 17 14C15.89 14 15 14.89 15 16C15 17.11 15.89 18 17 18M7 18C8.11 18 9 17.11 9 16C9 14.89 8.11 14 7 14C5.89 14 5 14.89 5 16C5 17.11 5.89 18 7 18M22 5V11C22 11.55 21.55 12 21 12H19.58L17 19H7L4.42 12H3C2.45 12 2 11.55 2 11V5C2 4.45 2.45 4 3 4H21C21.55 4 22 4.45 22 5M12 9H14V6H16V9H18V6H20V9H21V5H3V9H4V6H6V9H8V6H10V9H12V6H12V9Z"/></svg>`,
            details: "Сделать Фанпей в Телеграм типо"
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
                <button class="details-btn">Подробнее <i class="fas fa-chevron-down"></i></button>
            </div>
            <div class="project-details">
                <div class="details-content">
                    <p>${project.details}</p>
                </div>
            </div>
        `;
        
        grid.appendChild(card);
    });

    // Обработчики для кнопок "Подробнее"
    document.querySelectorAll('.details-btn').forEach(btn => {
        btn.addEventListener('click', function() {
            const details = this.closest('.project-card').querySelector('.project-details');
            details.classList.toggle('active');
            
            const icon = this.querySelector('i');
            if (details.classList.contains('active')) {
                icon.classList.replace('fa-chevron-down', 'fa-chevron-up');
                this.textContent = 'Скрыть ';
            } else {
                icon.classList.replace('fa-chevron-up', 'fa-chevron-down');
                this.textContent = 'Подробнее ';
            }
            this.appendChild(icon);
        });
    });
});
