
// ========== 首页轮播图 ==========
const carouselSlides = [
    {
        image: 'images/group/所有场景合影/出征.jpg',
        badge: '团队出征',
        title: '浮山暖阳实践团出征',
        desc: '25名队员整装待发，奔赴各地开展社会实践',
        link: 'practice.html'
    },
    {
        image: 'images/group/所有场景合影/7.15东韩馨悦社区合影.jpg',
        badge: '少儿编程',
        title: '东韩馨悦社区合影',
        desc: '为孩子们开启编程启蒙之旅',
        link: 'practice.html#coding-donghan'
    },
    {
        image: 'images/group/所有场景合影/7.15春光山色社区合影.jpg',
        badge: '少儿编程',
        title: '春光山色社区合影',
        desc: '刘鹏伟老师到场指导，学员们收获满满',
        link: 'practice.html#coding-chunguang'
    },
    {
        image: 'images/group/所有场景合影/7.16东韩馨悦社区合影.jpg',
        badge: '少儿编程',
        title: '东韩馨悦社区合影',
        desc: '课程深入，孩子们渐入佳境',
        link: 'practice.html#coding-donghan'
    },
    {
        image: 'images/group/所有场景合影/7.16中海锦年长者公寓合影.jpg',
        badge: 'AI反诈',
        title: '中海锦年长者公寓合影',
        desc: '为老年人普及AI诈骗防范知识',
        link: 'practice.html#anti-fraud'
    },
    {
        image: 'images/group/所有场景合影/7.16中海锦年长者公寓合影 (2).jpg',
        badge: 'AI反诈',
        title: '中海锦年反诈宣讲合影',
        desc: '志愿者与老人们的温馨合影',
        link: 'practice.html#anti-fraud'
    },
    {
        image: 'images/group/所有场景合影/7.17东韩馨悦社区合影.jpg',
        badge: '少儿编程',
        title: '东韩馨悦社区合影',
        desc: '三天课程圆满结束，见证成长与蜕变',
        link: 'practice.html#coding-donghan'
    },
    {
        image: 'images/group/所有场景合影/德州市武城县振东社区合影.jpg',
        badge: '少儿编程',
        title: '振东社区编程公益课',
        desc: '走进德州武城，点亮乡村少年科技梦想',
        link: 'practice.html#coding-zhendong'
    },
    {
        image: 'images/group/所有场景合影/西海岸新区耿家村合影.jpg',
        badge: 'AI助老',
        title: '西海岸新区耿家村合影',
        desc: 'AI语音助手与计算机维修服务进乡村',
        link: 'practice.html#voice-assistant'
    },
    {
        image: 'images/group/所有场景合影/吉林省通化市辉南县辉发城镇大屯村党群服务中心.jpg',
        badge: 'AI防汛',
        title: '吉林通化防汛调研',
        desc: '用AI技术助力基层防汛减灾',
        link: 'practice.html#flood-research'
    }
];

let currentSlide = 0;
let carouselTimer = null;
const SLIDE_INTERVAL = 4000;

function initHomeCarousel() {
    const container = document.getElementById('carouselContainer');
    const dotsContainer = document.getElementById('carouselDots');
    const carousel = document.querySelector('.hero-carousel');
    if (!container || !dotsContainer || !carousel) return;
    
    let slidesHtml = '';
    let dotsHtml = '';
    
    carouselSlides.forEach((slide, index) => {
        slidesHtml += '<div class="carousel-slide ' + (index === 0 ? 'active' : '') + '" onclick="window.location.href=\'' + slide.link + '\'" data-index="' + index + '">' +
            '<img src="' + slide.image + '" alt="' + slide.title + '" onerror="this.parentElement.style.display=\'none\'">' +
            '<div class="carousel-slide-overlay"></div>' +
            '<div class="carousel-slide-content">' +
            '<span class="carousel-slide-badge">' + slide.badge + '</span>' +
            '<h2 class="carousel-slide-title">' + slide.title + '</h2>' +
            '<p class="carousel-slide-desc">' + slide.desc + '</p>' +
            '<span class="carousel-slide-link">查看详情 →</span>' +
            '</div>' +
            '</div>';
        dotsHtml += '<span class="carousel-dot ' + (index === 0 ? 'active' : '') + '" onclick="goToSlide(' + index + ')"></span>';
    });
    
    container.innerHTML = slidesHtml;
    dotsContainer.innerHTML = dotsHtml;
    
    carousel.addEventListener('mouseenter', stopAutoPlay);
    carousel.addEventListener('mouseleave', startAutoPlay);
    
    document.addEventListener('keydown', function(e) {
        if (!document.querySelector('.hero-carousel')) return;
        if (e.key === 'ArrowLeft') prevSlide();
        if (e.key === 'ArrowRight') nextSlide();
    });
    
    startAutoPlay();
}

function startAutoPlay() {
    stopAutoPlay();
    carouselTimer = setInterval(nextSlide, SLIDE_INTERVAL);
}

function stopAutoPlay() {
    if (carouselTimer) {
        clearInterval(carouselTimer);
        carouselTimer = null;
    }
}

function nextSlide() {
    goToSlide((currentSlide + 1) % carouselSlides.length);
}

function prevSlide() {
    goToSlide((currentSlide - 1 + carouselSlides.length) % carouselSlides.length);
}

function goToSlide(index) {
    const slides = document.querySelectorAll('.carousel-slide');
    const dots = document.querySelectorAll('.carousel-dot');
    
    if (!slides.length) return;
    
    slides[currentSlide].classList.remove('active');
    dots[currentSlide].classList.remove('active');
    
    currentSlide = index;
    
    slides[currentSlide].classList.add('active');
    dots[currentSlide].classList.add('active');
    
    startAutoPlay();
}
