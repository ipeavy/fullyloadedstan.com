const musiclink = document.querySelector('.musicLink');
const videolink = document.querySelector('.videosLink');
const merchlink = document.querySelector('.merchLink');
const subscribelink = document.querySelector('.subscribeLink');
const sidebar = document.getElementById('sidebarMenu');
const hamburger = document.getElementById('ham');

musiclink.addEventListener('click', () => {
    if (sidebar.classList.contains('active') || (sidebar.classList.contains('nonactive'))) {
        sidebar.classList.remove("active");
        sidebar.classList.remove("nonactive");
        hamburger.classList.add('sidebarIconToggle');
    }
})

videolink.addEventListener('click', () => {
            if (sidebar.classList.contains('active') || (sidebar.classList.contains('nonactive'))) {
                    sidebar.classList.remove("active");
                sidebar.classList.remove("nonactive");
                }
})

merchlink.addEventListener('click', () => {
            if (sidebar.classList.contains('active') || (sidebar.classList.contains('nonactive'))) {
                    sidebar.classList.remove("active");
                sidebar.classList.remove("nonactive");
                }
})

subscribelink.addEventListener('click', () => {
            if (sidebar.classList.contains('active') || (sidebar.classList.contains('nonactive'))) {
                    sidebar.classList.remove("active");
                sidebar.classList.remove("nonactive");
                }
})


hamburger.addEventListener('click', () => {
    if (sidebar.classList.contains('nonactive') || (sidebar.classList.contains('active'))) {
        sidebar.classList.remove("nonactive");
        sidebar.classList.remove("active");
    } else {
        sidebar.classList.add("nonactive");

    }
})