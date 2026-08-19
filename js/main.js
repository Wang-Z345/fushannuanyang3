// ========== 数据定义 ==========

// 活动数据
const activities = [
    // 青少年组
    {
        id: 'coding-donghan',
        category: 'youth',
        title: '少儿编程·东韩馨悦社区',
        location: '青岛市北区东韩馨悦社区',
        date: '7月15-17日',
        folder: 'youth/少儿编程-东韩馨悦',
        photos: [
            { file: '场景1.jpg', desc: '少儿编程课堂整体场景' },
            { file: '场景3.jpg', desc: '课堂互动场景' },
            { file: '特写2.jpg', desc: '课堂学习特写' },
            { file: '特写3.jpg', desc: '孩子们认真编程' },
            { file: '青少年特写.jpg', desc: '专注学习的青少年' },
            { file: '1.jpg', desc: '孙鸿鸿老师授课1' },
            { file: '2.jpg', desc: '孙鸿鸿老师授课2' },
            { file: '3.jpg', desc: '孙鸿鸿老师授课3' },
            { file: '4.png', desc: '孙鸿鸿老师授课4' },
            { file: '5.jpg', desc: '孙鸿鸿老师授课5' }
        ]
    },
    {
        id: 'coding-chunguang',
        category: 'youth',
        title: '少儿编程·春光山色社区',
        location: '青岛市北区春光山色社区',
        date: '7月15-16日',
        folder: 'youth/少儿编程-春光山色',
        photos: [
            { file: '主讲人授课-杜宽.jpg', desc: '杜宽老师授课中' },
            { file: '志愿者特写1.jpg', desc: '志愿者工作特写1' },
            { file: '志愿者特写2.jpg', desc: '志愿者工作特写2' },
            { file: '指导老师跟进指导.jpg', desc: '刘鹏伟老师到场指导' },
            { file: '现场讨论.jpg', desc: '学员现场讨论交流' },
            { file: '讨论2.jpg', desc: '小组互动讨论' }
        ]
    },
    {
        id: 'coding-zhendong',
        category: 'youth',
        title: '少儿编程·振东社区',
        location: '德州市武城县振东社区',
        date: '7月27日',
        folder: 'youth/少儿编程-振东社区',
        photos: [
            { file: '主讲人特写1.jpg', desc: '讲课老师特写1' },
            { file: '主讲人特写2.jpg', desc: '讲课老师特写2' },
            { file: '场景2.jpg', desc: '振东社区编程课堂' },
            { file: '孩子1.jpg', desc: '认真学习的孩子1' },
            { file: '孩子2.jpg', desc: '认真学习的孩子2' }
        ]
    },
    {
        id: 'cyber-safety',
        category: 'youth',
        title: '网络安全科普·临清松林镇',
        location: '聊城市临清市松林镇',
        date: '8月',
        folder: 'youth/青少年网络安全教育及计算机科普-临清市松林镇',
        photos: [
            { file: '现场讲解场景.jpg', desc: '网络安全教育宣讲现场' },
            { file: '调研特写2.jpg', desc: '调研采访特写2' },
            { file: '调研特写1.jpg', desc: '调研采访特写1' }
        ]
    },
    // 老年组
    {
        id: 'anti-fraud',
        category: 'elderly',
        title: 'AI反诈普及·中海锦年',
        location: '青岛中海锦年长者公寓',
        date: '7月16日',
        folder: 'elderly/AI类诈骗普及反诈-中海锦年',
        photos: [
            { file: '主讲人特写.jpg', desc: '反诈宣讲主讲人' },
            { file: '宣讲场景1.jpg', desc: '反诈宣讲现场' },
            { file: '老人整体.jpg', desc: '参与宣讲的老人全景' },
            { file: '老人特写.jpg', desc: '认真听讲的老人' }
        ]
    },
    {
        id: 'photo-repair',
        category: 'elderly',
        title: 'AI照片修复·中海锦年',
        location: '青岛中海锦年长者公寓',
        date: '7月17日',
        folder: 'elderly/AI老旧照片修复-中海锦年',
        photos: [
            { file: '修复特写1.jpg', desc: '老照片修复操作特写1' },
            { file: '修复特写2.jpg', desc: '老照片修复操作特写2' },
            { file: '修复现场1.jpg', desc: '照片修复活动现场1' },
            { file: '修复活动现场2.jpg', desc: '照片修复活动现场2' },
            { file: '成果展示1.jpg', desc: '修复前后对比展示1' },
            { file: '成果展示2.jpg', desc: '修复前后对比展示2' },
            { file: '讲解技术1.jpg', desc: '讲解照片修复技术' }
        ]
    },
    {
        id: 'voice-assistant',
        category: 'elderly',
        title: 'AI语音助手·西海岸新区',
        location: '青岛西海岸新区耿家村',
        date: '7月27日',
        folder: 'elderly/AI智能语音助手公益课堂-西海岸新区',
        photos: [
            { file: '现场讲解.jpg', desc: '语音助手课堂讲解' },
            { file: '调研或教学特写.jpg', desc: '教学过程特写' }
        ]
    },
    // 基层组
    {
        id: 'office-ai',
        category: 'community',
        title: 'AI智能办公·临沂',
        location: '临沂市临沭县富民社区',
        date: '7月28日',
        folder: 'community/AI智能办公能力培训-临沂',
        photos: [
            { file: '单独讲解.jpg', desc: '一对一单独讲解' },
            { file: '单独指导.jpg', desc: '单独指导学员' },
            { file: '单独讲解 (3).jpg', desc: '个别指导操作' },
            { file: '现场教学场景.jpg', desc: '培训现场教学' }
        ]
    },
    {
        id: 'flood-research',
        category: 'community',
        title: 'AI防汛调研·吉林通化',
        location: '吉林省通化市辉南县辉发城镇大屯村',
        date: '7月下旬',
        folder: 'community/AI协助村委防汛与智能使用-吉林通化辉南县辉发城镇大屯村村委',
        photos: [
            { file: '实地调研洪水导致损失1.jpg', desc: '实地查看洪水损失1' },
            { file: '实地调研洪水导致损失2.jpg', desc: '实地查看洪水损失2' },
            { file: '讲授AI进阶使用.jpg', desc: '讲授AI进阶使用方法' },
            { file: '调研与采访.jpg', desc: '村委调研采访' }
        ]
    },
    {
        id: 'computer-repair',
        category: 'community',
        title: '维C维修·西海岸新区',
        location: '青岛西海岸新区耿家村',
        date: '7月27日',
        folder: 'community/”维C“维修计算机公益服务（目前仅1）',
        photos: [
            { file: '单人.jpg', desc: '计算机维修服务志愿者' }
        ]
    }
];

// 团队成员数据
const teamMembers = {
    leader: [
        { name: '王宇飞', role: '领队', grade: '2024级', desc: '统筹协调全团实践工作，负责活动整体规划与执行。' }
    ],
    contacts: [
        { name: '刘子怡', role: '活动联系人', grade: '2025级', desc: '负责活动对接与沟通协调工作。' },
        { name: '葛轩辰', role: '活动联系人', grade: '2024级', desc: '负责活动对接与沟通协调工作。' },
        { name: '孙鸿鸿', role: '活动联系人', grade: '2025级', desc: '负责活动对接与沟通协调工作。' }
    ],
    tech: [
        { name: '王音淼', role: '技术负责人', grade: '2024级', desc: '负责技术方案设计与技术指导。' },
        { name: '王邱豪', role: '技术负责人', grade: '2024级', desc: '负责技术方案设计与技术指导。' },
        { name: '卞宝毅', role: '技术负责人', grade: '2025级', desc: '负责技术方案设计与技术指导。' }
    ],
    speakers: [
        { name: '王子璐', role: '宣讲人', grade: '2025级', desc: '负责活动宣讲与内容输出。' },
        { name: '刘佳瑞', role: '宣讲人', grade: '2025级', desc: '负责活动宣讲与内容输出。' },
        { name: '王恩雨', role: '宣讲人', grade: '2025级', desc: '负责活动宣讲与内容输出。' },
        { name: '于娜', role: '宣讲人', grade: '2024级', desc: '负责活动宣讲与内容输出。' },
        { name: '段昀睿', role: '科普员', grade: '2025级', desc: '负责科普讲解与技术演示。' },
        { name: '张洪爽', role: '科普员', grade: '2025级', desc: '负责科普讲解与技术演示。' }
    ],
    media: [
        { name: '马小茹', role: '宣传员', grade: '2025级', desc: '负责活动宣传与图文记录。' },
        { name: '王子怡', role: '宣传员', grade: '2025级', desc: '负责活动宣传与图文记录。' },
        { name: '邢雯丽', role: '宣传员', grade: '2025级', desc: '负责活动宣传与图文记录。' },
        { name: '梅常荣', role: '宣传员', grade: '2025级', desc: '负责活动宣传与图文记录。' }
    ],
    research: [
        { name: '王海琴', role: '调研组', grade: '2025级', desc: '负责调研设计与数据分析。' },
        { name: '耿硕', role: '调研组', grade: '2025级', desc: '负责调研设计与数据分析。' },
        { name: '王忠强', role: '调研组', grade: '2025级', desc: '负责调研设计与数据分析。' }
    ],
    safety: [
        { name: '王中', role: '安全员', grade: '2025级', desc: '负责活动安全保障工作。' },
        { name: '朱原庆', role: '安全员', grade: '2025级', desc: '负责活动安全保障工作。' },
        { name: '伊睿瑾', role: '安全员', grade: '2024级', desc: '负责活动安全保障工作。' }
    ],
    logistics: [
        { name: '杜宽', role: '后勤组', grade: '2025级', desc: '负责后勤保障与物资管理。' },
        { name: '李圣雨', role: '后勤组', grade: '2025级', desc: '负责后勤保障与物资管理。' }
    ]
};

// 合影照片数据
const groupPhotos = [
    { file: '出征.jpg', desc: '团队出征合影' },
    { file: '7.15东韩馨悦社区合影.jpg', desc: '7月15日 东韩馨悦社区合影' },
    { file: '7.15春光山色社区合影.jpg', desc: '7月15日 春光山色社区合影' },
    { file: '7.16东韩馨悦社区合影.jpg', desc: '7月16日 东韩馨悦社区合影' },
    { file: '7.16中海锦年长者公寓合影 (2).jpg', desc: '7月16日 中海锦年合影2' },
    { file: '7.16中海锦年长者公寓合影.jpg', desc: '7月16日 中海锦年合影' },
    { file: '7.17东韩馨悦社区合影.jpg', desc: '7月17日 东韩馨悦社区合影' },
    { file: '吉林省通化市辉南县辉发城镇大屯村党群服务中心.jpg', desc: '吉林通化大屯村党群服务中心合影' },
    { file: '德州市武城县振东社区合影.jpg', desc: '德州武城县振东社区合影' },
    { file: '西海岸新区耿家村合影.jpg', desc: '西海岸新区耿家村合影' }
];

// AI测验题目
const quizQuestions = [
    {
        question: '以下哪个不是AI的应用领域？',
        options: ['自然语言处理', '计算机视觉', '光合作用', '机器学习'],
        answer: 2,
        explain: '光合作用是植物的生理过程，不是AI的应用领域。自然语言处理、计算机视觉、机器学习都是AI的重要分支。'
    },
    {
        question: '收到"你的银行卡涉嫌洗钱，请转账到安全账户"的短信，应该怎么做？',
        options: ['立即转账', '回拨电话询问', '拨打银行官方电话核实', '转发给朋友'],
        answer: 2,
        explain: '这是典型的电信诈骗。正确做法是拨打银行官方电话或110核实，切勿轻信陌生号码的信息。'
    },
    {
        question: 'ChatGPT的主要功能是什么？',
        options: ['玩游戏', '生成文本对话', '修照片', '做视频'],
        answer: 1,
        explain: 'ChatGPT是一款大型语言模型，主要用于生成文本、对话交流、回答问题、写作等文本类任务。'
    },
    {
        question: '下列哪种密码最安全？',
        options: ['123456', 'password', '你的生日', '字母+数字+符号的组合'],
        answer: 3,
        explain: '安全的密码应该包含大小写字母、数字和特殊符号的组合，长度至少8位以上，避免使用生日、手机号等容易被猜到的信息。'
    },
    {
        question: 'AI老照片修复的原理是什么？',
        options: ['用颜料补色', '深度学习算法还原', '用放大镜看', '手动绘画'],
        answer: 1,
        explain: 'AI照片修复使用深度学习算法，通过大量图片训练，让AI学会"脑补"缺失和模糊的部分，从而修复老旧破损的照片。'
    },
    {
        question: '遇到陌生链接应该怎么做？',
        options: ['点进去看看', '转发到群里', '不轻易点击，确认来源', '保存链接'],
        answer: 2,
        explain: '陌生链接可能是钓鱼网站或携带病毒，应谨慎对待，确认来源安全后再点击。'
    },
    {
        question: '少儿编程学习的主要收获不包括？',
        options: ['培养逻辑思维', '提高问题解决能力', '立即成为黑客', '培养创新能力'],
        answer: 2,
        explain: '少儿编程主要培养逻辑思维、问题解决能力和创新能力。"成为黑客"不是学习编程的目的，黑客攻击也是违法行为。'
    },
    {
        question: '以下哪个工具最适合用来做AI绘画？',
        options: ['微信', 'Midjourney', '计算器', '记事本'],
        answer: 1,
        explain: 'Midjourney是一款知名的AI绘画工具，可以根据文字描述生成高质量的图像。其他选项都不具备AI绘画功能。'
    }
];

// 提示词模板
const promptTemplates = {
    study: {
        professional: '你是一位资深的{学科}教师，请帮我{需求}。要求：1. 内容准确，符合教学大纲；2. 结构清晰，分点说明；3. 适合{年级}学生理解水平；4. 包含具体例子辅助理解。',
        casual: '嗨！我想学习{需求}，能用轻松有趣的方式给我讲讲吗？最好能举一些生活化的例子，让我容易理解～',
        detailed: '作为一名{年级}学生，我想要深入了解{需求}。请从以下几个方面详细讲解：1. 基本概念和原理；2. 实际应用场景；3. 常见问题及解答；4. 延伸学习建议。越详细越好！',
        simple: '请用最简单直白的方式解释{需求}，不要用专业术语，就像给小白科普一样，控制在200字以内。'
    },
    work: {
        professional: '你是一位专业的{岗位}，请帮我{需求}。要求：1. 符合职场规范；2. 逻辑清晰，结构完整；3. 数据准确，有理有据；4. 语言正式得体。',
        casual: '帮我{需求}，风格轻松一点，不要太正式，适合在团队内部沟通。',
        detailed: '请帮我完成{需求}，需要包含以下内容：1. 背景介绍；2. 具体方案/内容；3. 实施步骤；4. 预期效果；5. 注意事项。请尽可能详细全面。',
        simple: '帮我{需求}，精简凝练，突出重点，适合快速阅读。'
    },
    creative: {
        professional: '你是一位资深文案策划，请为{需求}创作文案。要求：1. 主题突出，有记忆点；2. 结构完整，有感染力；3. 符合品牌调性；4. 提供3个不同风格的版本供选择。',
        casual: '帮我写一个关于{需求}的内容，要有趣、有梗、接地气，能吸引年轻人的注意力！',
        detailed: '请创作一篇关于{需求}的完整内容，包括：1. 引人入胜的开头；2. 丰富的细节描写；3. 情感共鸣点；4. 有力的结尾。字数不少于800字。',
        simple: '用最简洁有力的方式写{需求}，一句话或短文案，让人印象深刻。'
    },
    code: {
        professional: '你是一位资深{语言}开发工程师，请帮我{需求}。要求：1. 代码规范，注释清晰；2. 考虑边界条件和异常处理；3. 性能优化；4. 附上使用说明和示例。',
        casual: '帮我写个{需求}的代码，能用就行，简单粗暴，注释写清楚就行～',
        detailed: '请帮我实现{需求}，需要：1. 完整的代码实现；2. 详细的代码解释；3. 运行步骤说明；4. 可能的优化方向。请尽可能详细。',
        simple: '帮我写{需求}的核心代码，简洁高效，不要多余的东西。'
    },
    life: {
        professional: '你是一位专业的生活顾问，请帮我{需求}。请从专业角度给出建议，考虑实用性和可操作性。',
        casual: '嘿～关于{需求}，有什么好建议吗？随便聊聊，轻松点～',
        detailed: '我想了解关于{需求}的完整建议，请从以下几个方面详细说明：1. 准备工作；2. 具体步骤；3. 注意事项；4. 常见误区；5. 进阶技巧。越详细越好！',
        simple: '简单说说{需求}的关键点，几句话讲清楚。'
    }
};

// ========== 全局变量 ==========
let currentFilter = 'all';
let lightboxPhotos = [];
let currentLightboxIndex = 0;
let currentQuizIndex = 0;
let quizScore = 0;
let quizAnswered = false;

// ========== 页面加载初始化 ==========
document.addEventListener('DOMContentLoaded', function() {
    initNavbar();
    initReveal();
    initBackToTop();
    initLightbox();
    initMobileMenu();
    initRepairSlider();
    initDragUpload();
});

// ========== 导航栏交互 ==========
function initNavbar() {
    const navbar = document.getElementById('navbar');
    if (!navbar) return;
    
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });
}

function initMobileMenu() {
    const hamburger = document.getElementById('hamburger');
    const navMenu = document.getElementById('navMenu');
    if (!hamburger || !navMenu) return;
    
    hamburger.addEventListener('click', () => {
        navMenu.classList.toggle('active');
    });
}

// ========== 实践风采页 ==========
function initPracticeList() {
    const container = document.getElementById('practice-list');
    if (!container) return;
    
    renderPracticeList('all');
    
    document.querySelectorAll('.filter-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            currentFilter = btn.dataset.filter;
            renderPracticeList(currentFilter);
            initReveal();
        });
    });
}

function renderPracticeList(filter) {
    const container = document.getElementById('practice-list');
    let filtered = activities;
    
    if (filter !== 'all') {
        filtered = activities.filter(a => a.category === filter);
    }
    
    let html = '';
    filtered.forEach(activity => {
        html += `
            <div class="activity-section reveal" id="${activity.id}" data-category="${activity.category}">
                <h3 class="activity-title">
                    ${activity.title}
                    <span style="font-size:0.9rem;font-weight:400;color:var(--text-gray);">
                        📍 ${activity.location} · 📅 ${activity.date}
                    </span>
                </h3>
                <div class="photo-wall">
        `;
        
        activity.photos.forEach((photo, idx) => {
            const imgSrc = `images/${activity.folder}/${photo.file}`;
            const photoIndex = getAllPhotoIndex(activity.id, idx);
            
            html += `
                <div class="photo-item" onclick="openLightbox(${photoIndex})">
                    <img src="${imgSrc}" alt="${photo.desc}" onerror="this.style.display='none';this.nextElementSibling.style.display='flex';">
                    <div class="photo-placeholder" style="display:none;">
                        📷
                        <span>${photo.desc}</span>
                    </div>
                    <div class="photo-overlay">
                        <p>${photo.desc}</p>
                    </div>
                </div>
            `;
        });
        
        html += `
                </div>
            </div>
        `;
    });
    
    container.innerHTML = html;
    
    lightboxPhotos = [];
    filtered.forEach(activity => {
        activity.photos.forEach(photo => {
            lightboxPhotos.push({
                src: `images/${activity.folder}/${photo.file}`,
                desc: `${activity.title} - ${photo.desc}`
            });
        });
    });
}

function getAllPhotoIndex(activityId, photoIndex) {
    let idx = 0;
    const filtered = currentFilter === 'all' ? activities : activities.filter(a => a.category === currentFilter);
    
    for (let i = 0; i < filtered.length; i++) {
        if (filtered[i].id === activityId) {
            return idx + photoIndex;
        }
        idx += filtered[i].photos.length;
    }
    return 0;
}

// ========== 团队成员 ==========
let allGroupsExpanded = true;

function initTeamMembers() {
    renderTeamGroup('team-leader', teamMembers.leader);
    renderTeamGroup('team-contacts', teamMembers.contacts);
    renderTeamGroup('team-tech', teamMembers.tech);
    renderTeamGroup('team-speakers', teamMembers.speakers);
    renderTeamGroup('team-media', teamMembers.media);
    renderTeamGroup('team-research', teamMembers.research);
    renderTeamGroup('team-safety', teamMembers.safety);
    renderTeamGroup('team-logistics', teamMembers.logistics);
    initReveal();
}

function renderTeamGroup(containerId, members) {
    const container = document.getElementById(containerId);
    if (!container) return;
    
    let html = '';
    members.forEach(member => {
        const firstChar = member.name.charAt(0);
        html += `
            <div class="member-card">
                <div class="member-card-inner">
                    <div class="member-front">
                        <div class="member-avatar">${firstChar}</div>
                        <h4>${member.name}</h4>
                        <p class="member-role">${member.role}</p>
                        <div class="member-tags">
                            <span class="member-tag">${member.grade}</span>
                            <span class="member-tag">计算机学院</span>
                        </div>
                    </div>
                    <div class="member-back">
                        <h4>${member.name}</h4>
                        <p>${member.desc}</p>
                    </div>
                </div>
            </div>
        `;
    });
    
    container.innerHTML = html;
}

function toggleGroup(groupName) {
    const group = document.querySelector(`.member-group[data-group="${groupName}"]`);
    if (!group) return;
    group.classList.toggle('collapsed');
    updateExpandAllButton();
}

function toggleAllGroups() {
    const groups = document.querySelectorAll('.member-group');
    allGroupsExpanded = !allGroupsExpanded;
    
    groups.forEach(group => {
        if (allGroupsExpanded) {
            group.classList.remove('collapsed');
        } else {
            group.classList.add('collapsed');
        }
    });
    
    updateExpandAllButton();
}

function updateExpandAllButton() {
    const groups = document.querySelectorAll('.member-group');
    const collapsedGroups = document.querySelectorAll('.member-group.collapsed');
    const icon = document.getElementById('expandAllIcon');
    const text = document.getElementById('expandAllText');
    
    if (!icon || !text) return;
    
    if (collapsedGroups.length === groups.length) {
        allGroupsExpanded = false;
        icon.textContent = '⤵';
        text.textContent = '展开全部分组';
    } else if (collapsedGroups.length === 0) {
        allGroupsExpanded = true;
        icon.textContent = '⤴';
        text.textContent = '收起全部分组';
    }
}

// ========== 合影相册 ==========
function initGroupPhotos() {
    const container = document.getElementById('group-photos');
    if (!container) return;
    
    let html = '';
    groupPhotos.forEach((photo, idx) => {
        const src = `images/group/所有场景合影/${photo.file}`;
        html += `
            <div class="gallery-item reveal" onclick="openGroupLightbox(${idx})">
                <img src="${src}" alt="${photo.desc}" onerror="this.style.display='none';">
                <div class="gallery-caption">${photo.desc}</div>
            </div>
        `;
    });
    
    container.innerHTML = html;
    initReveal();
}

function openGroupLightbox(index) {
    lightboxPhotos = groupPhotos.map(p => ({
        src: `images/group/所有场景合影/${p.file}`,
        desc: p.desc
    }));
    currentLightboxIndex = index;
    showLightbox();
}

// ========== 数字滚动 ==========
function initStatsCounter() {
    const stats = document.querySelectorAll('.stat-number');
    if (stats.length === 0) return;
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const el = entry.target;
                const target = parseInt(el.dataset.target);
                animateCounter(el, target);
                observer.unobserve(el);
            }
        });
    }, { threshold: 0.5 });
    
    stats.forEach(stat => observer.observe(stat));
}

function animateCounter(el, target) {
    const duration = 2000;
    const start = 0;
    const startTime = performance.now();
    
    function update(currentTime) {
        const elapsed = currentTime - startTime;
        const progress = Math.min(elapsed / duration, 1);
        const easeProgress = 1 - Math.pow(1 - progress, 3);
        const current = Math.floor(start + (target - start) * easeProgress);
        el.textContent = current;
        
        if (progress < 1) {
            requestAnimationFrame(update);
        } else {
            el.textContent = target + '+';
        }
    }
    
    requestAnimationFrame(update);
}

// ========== 滚动渐入 ==========
function initReveal() {
    const reveals = document.querySelectorAll('.reveal:not(.active)');
    if (reveals.length === 0) return;
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry, index) => {
            if (entry.isIntersecting) {
                setTimeout(() => {
                    entry.target.classList.add('active');
                }, index * 60);
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.1 });
    
    reveals.forEach(el => observer.observe(el));
}

// ========== 回到顶部 ==========
function initBackToTop() {
    const btn = document.getElementById('backToTop');
    if (!btn) return;
    
    window.addEventListener('scroll', () => {
        if (window.scrollY > 300) {
            btn.classList.add('show');
        } else {
            btn.classList.remove('show');
        }
    });
}

function scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

// ========== 照片灯箱 ==========
function initLightbox() {
    const lightbox = document.getElementById('lightbox');
    if (!lightbox) return;
    
    lightbox.addEventListener('click', (e) => {
        if (e.target === lightbox) {
            closeLightbox();
        }
    });
    
    document.addEventListener('keydown', (e) => {
        if (!document.getElementById('lightbox').classList.contains('active')) return;
        
        if (e.key === 'Escape') closeLightbox();
        if (e.key === 'ArrowLeft') prevPhoto();
        if (e.key === 'ArrowRight') nextPhoto();
    });
}

function openLightbox(index) {
    currentLightboxIndex = index;
    showLightbox();
}

function showLightbox() {
    const lightbox = document.getElementById('lightbox');
    const img = document.getElementById('lightbox-img');
    const caption = document.getElementById('lightbox-caption');
    
    const photo = lightboxPhotos[currentLightboxIndex];
    img.src = photo.src;
    caption.textContent = photo.desc;
    
    lightbox.classList.add('active');
    document.body.style.overflow = 'hidden';
}

function closeLightbox() {
    document.getElementById('lightbox').classList.remove('active');
    document.body.style.overflow = '';
}

function prevPhoto() {
    currentLightboxIndex--;
    if (currentLightboxIndex < 0) currentLightboxIndex = lightboxPhotos.length - 1;
    showLightbox();
}

function nextPhoto() {
    currentLightboxIndex++;
    if (currentLightboxIndex >= lightboxPhotos.length) currentLightboxIndex = 0;
    showLightbox();
}

// ========== 照片修复对比滑块 ==========
function initRepairSlider() {
    const container = document.getElementById('repair-container');
    if (!container) return;
    
    const slider = document.getElementById('repair-slider');
    const beforeEl = document.getElementById('repair-before');
    let isDragging = false;
    
    function updateSlider(x) {
        const rect = container.getBoundingClientRect();
        let percent = ((x - rect.left) / rect.width) * 100;
        percent = Math.max(0, Math.min(100, percent));
        
        slider.style.left = percent + '%';
        beforeEl.style.clipPath = `inset(0 ${100 - percent}% 0 0)`;
    }
    
    slider.addEventListener('mousedown', (e) => {
        isDragging = true;
        e.preventDefault();
    });
    
    document.addEventListener('mousemove', (e) => {
        if (!isDragging) return;
        updateSlider(e.clientX);
    });
    
    document.addEventListener('mouseup', () => {
        isDragging = false;
    });
    
    slider.addEventListener('touchstart', (e) => {
        isDragging = true;
        e.preventDefault();
    });
    
    document.addEventListener('touchmove', (e) => {
        if (!isDragging) return;
        updateSlider(e.touches[0].clientX);
    });
    
    document.addEventListener('touchend', () => {
        isDragging = false;
    });
    
    container.addEventListener('click', (e) => {
        if (e.target === slider || slider.contains(e.target)) return;
        updateSlider(e.clientX);
    });
}

// ========== 上传照片修复功能 ==========
let uploadedImage = null;

function handlePhotoUpload(event) {
    const file = event.target.files[0];
    if (!file) return;
    
    if (!file.type.startsWith('image/')) {
        alert('请上传图片文件');
        return;
    }
    
    loadImageFile(file);
}

function processRepair(img) {
    const beforeCanvas = document.getElementById('beforeCanvas');
    const afterCanvas = document.getElementById('afterCanvas');
    const repairResult = document.getElementById('repairResult');
    const uploadArea = document.getElementById('uploadArea');
    
    const size = Math.min(img.width, img.height, 500);
    const scale = size / Math.max(img.width, img.height);
    const w = Math.round(img.width * scale);
    const h = Math.round(img.height * scale);
    
    beforeCanvas.width = w;
    beforeCanvas.height = h;
    afterCanvas.width = w;
    afterCanvas.height = h;
    
    const beforeCtx = beforeCanvas.getContext('2d');
    const afterCtx = afterCanvas.getContext('2d');
    
    beforeCtx.drawImage(img, 0, 0, w, h);
    
    const beforeData = beforeCtx.getImageData(0, 0, w, h);
    const bData = beforeData.data;
    
    for (let i = 0; i < bData.length; i += 4) {
        const r = bData[i];
        const g = bData[i + 1];
        const b = bData[i + 2];
        
        const gray = 0.3 * r + 0.59 * g + 0.11 * b;
        
        const agedR = Math.min(255, gray * 0.75 + 25);
        const agedG = Math.min(255, gray * 0.6 + 18);
        const agedB = Math.min(255, gray * 0.45 + 10);
        
        const noise = (Math.random() - 0.5) * 30;
        
        bData[i] = Math.max(0, Math.min(255, agedR + noise));
        bData[i + 1] = Math.max(0, Math.min(255, agedG + noise));
        bData[i + 2] = Math.max(0, Math.min(255, agedB + noise));
    }
    
    beforeCtx.putImageData(beforeData, 0, 0);
    
    afterCtx.drawImage(img, 0, 0, w, h);
    
    const afterData = afterCtx.getImageData(0, 0, w, h);
    const aData = afterData.data;
    
    const contrast = 1.2;
    const brightness = 8;
    const saturation = 1.4;
    const warmthR = 15;
    const warmthG = 5;
    const warmthB = -10;
    
    for (let i = 0; i < aData.length; i += 4) {
        let r = aData[i];
        let g = aData[i + 1];
        let b = aData[i + 2];
        
        r = (r - 128) * contrast + 128 + brightness;
        g = (g - 128) * contrast + 128 + brightness;
        b = (b - 128) * contrast + 128 + brightness;
        
        const gray = 0.3 * r + 0.59 * g + 0.11 * b;
        r = gray + (r - gray) * saturation;
        g = gray + (g - gray) * saturation;
        b = gray + (b - gray) * saturation;
        
        r += warmthR;
        g += warmthG;
        b += warmthB;
        
        aData[i] = Math.max(0, Math.min(255, r));
        aData[i + 1] = Math.max(0, Math.min(255, g));
        aData[i + 2] = Math.max(0, Math.min(255, b));
    }
    
    afterCtx.putImageData(afterData, 0, 0);
    
    uploadArea.style.display = 'none';
    repairResult.style.display = 'block';
}

function resetUpload() {
    const uploadArea = document.getElementById('uploadArea');
    const repairResult = document.getElementById('repairResult');
    const photoInput = document.getElementById('photoInput');
    
    uploadArea.style.display = 'block';
    repairResult.style.display = 'none';
    photoInput.value = '';
    uploadedImage = null;
}

function downloadRepaired() {
    const afterCanvas = document.getElementById('afterCanvas');
    const link = document.createElement('a');
    link.download = '修复后的照片.png';
    link.href = afterCanvas.toDataURL('image/png');
    link.click();
}

function initDragUpload() {
    const uploadArea = document.getElementById('uploadArea');
    const photoInput = document.getElementById('photoInput');
    if (!uploadArea || !photoInput) return;
    
    // 全局阻止拖拽默认行为，防止浏览器打开图片
    ['dragenter', 'dragover', 'dragleave', 'drop'].forEach(eventName => {
        document.addEventListener(eventName, (e) => {
            e.preventDefault();
            e.stopPropagation();
        }, false);
    });
    
    // 高亮拖拽区域
    ['dragenter', 'dragover'].forEach(eventName => {
        uploadArea.addEventListener(eventName, (e) => {
            e.preventDefault();
            e.stopPropagation();
            uploadArea.classList.add('dragover');
        });
    });
    
    ['dragleave', 'drop'].forEach(eventName => {
        uploadArea.addEventListener(eventName, (e) => {
            e.preventDefault();
            e.stopPropagation();
            uploadArea.classList.remove('dragover');
        });
    });
    
    // 拖拽上传
    uploadArea.addEventListener('drop', (e) => {
        e.preventDefault();
        e.stopPropagation();
        
        const files = e.dataTransfer.files;
        if (files && files.length > 0) {
            const file = files[0];
            if (file.type.startsWith('image/')) {
                loadImageFile(file);
            } else {
                alert('请上传图片文件');
            }
        }
    });
    
    // 点击上传
    photoInput.addEventListener('change', (e) => {
        const file = e.target.files[0];
        if (!file) return;
        
        if (!file.type.startsWith('image/')) {
            alert('请上传图片文件');
            return;
        }
        
        loadImageFile(file);
    });
}

function loadImageFile(file) {
    const reader = new FileReader();
    reader.onload = function(e) {
        const img = new Image();
        img.onload = function() {
            uploadedImage = img;
            processRepair(img);
        };
        img.src = e.target.result;
    };
    reader.readAsDataURL(file);
}

// ========== 提示词生成器 ==========
function initStyleButtons() {
    const styleBtns = document.querySelectorAll('.style-btn');
    styleBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            styleBtns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
        });
    });
}

function generatePrompt() {
    const scene = document.getElementById('prompt-scene').value;
    const input = document.getElementById('prompt-input').value.trim();
    const style = document.querySelector('.style-btn.active').dataset.style;
    
    if (!input) {
        alert('请输入你的需求哦～');
        return;
    }
    
    let template = promptTemplates[scene][style];
    let result = '';
    
    if (scene === 'study') {
        result = template.replace('{学科}', '相关学科').replace('{需求}', input).replace('{年级}', '相应阶段');
    } else if (scene === 'work') {
        result = template.replace('{岗位}', '相关岗位').replace('{需求}', input);
    } else if (scene === 'creative') {
        result = template.replace('{需求}', input);
    } else if (scene === 'code') {
        result = template.replace('{语言}', '编程').replace('{需求}', input);
    } else {
        result = template.replace('{需求}', input);
    }
    
    const resultDiv = document.getElementById('prompt-result');
    const resultContent = document.getElementById('result-content');
    resultContent.textContent = result;
    resultDiv.style.display = 'block';
    resultDiv.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
}

function copyPrompt() {
    const content = document.getElementById('result-content').textContent;
    navigator.clipboard.writeText(content).then(() => {
        const btn = document.querySelector('.copy-btn');
        const originalText = btn.textContent;
        btn.textContent = '✅ 已复制';
        setTimeout(() => {
            btn.textContent = originalText;
        }, 2000);
    });
}

// ========== AI小测验 ==========
function startQuiz() {
    currentQuizIndex = 0;
    quizScore = 0;
    
    document.getElementById('quiz-start').style.display = 'none';
    document.getElementById('quiz-result').style.display = 'none';
    document.getElementById('quiz-main').style.display = 'block';
    
    showQuestion();
}

function showQuestion() {
    const q = quizQuestions[currentQuizIndex];
    quizAnswered = false;
    
    document.getElementById('current-q').textContent = currentQuizIndex + 1;
    document.getElementById('progress-fill').style.width = ((currentQuizIndex + 1) / quizQuestions.length * 100) + '%';
    
    document.getElementById('quiz-question').textContent = q.question;
    
    const optionsContainer = document.getElementById('quiz-options');
    let optionsHtml = '';
    const optionLabels = ['A', 'B', 'C', 'D'];
    q.options.forEach((opt, idx) => {
        optionsHtml += `
            <button class="quiz-option" onclick="selectOption(${idx})">
                <strong>${optionLabels[idx]}.</strong> ${opt}
            </button>
        `;
    });
    optionsContainer.innerHTML = optionsHtml;
    
    document.getElementById('quiz-feedback').style.display = 'none';
    document.getElementById('next-btn').style.display = 'none';
}

function selectOption(index) {
    if (quizAnswered) return;
    quizAnswered = true;
    
    const q = quizQuestions[currentQuizIndex];
    const options = document.querySelectorAll('.quiz-option');
    
    options.forEach((opt, idx) => {
        opt.classList.add('disabled');
        if (idx === q.answer) {
            opt.classList.add('correct');
        }
        if (idx === index && idx !== q.answer) {
            opt.classList.add('wrong');
        }
    });
    
    if (index === q.answer) {
        quizScore++;
    }
    
    const feedback = document.getElementById('quiz-feedback');
    feedback.innerHTML = `
        <strong>${index === q.answer ? '✅ 回答正确！' : '❌ 回答错误'}</strong><br>
        ${q.explain}
    `;
    feedback.style.display = 'block';
    
    const nextBtn = document.getElementById('next-btn');
    nextBtn.textContent = currentQuizIndex === quizQuestions.length - 1 ? '查看结果 →' : '下一题 →';
    nextBtn.style.display = 'block';
}

function nextQuestion() {
    currentQuizIndex++;
    
    if (currentQuizIndex >= quizQuestions.length) {
        showQuizResult();
    } else {
        showQuestion();
    }
}

function showQuizResult() {
    document.getElementById('quiz-main').style.display = 'none';
    const resultDiv = document.getElementById('quiz-result');
    resultDiv.style.display = 'block';
    
    document.getElementById('score-value').textContent = quizScore;
    
    let icon, title, desc;
    if (quizScore === 8) {
        icon = '🏆';
        title = '太棒了！满分！';
        desc = '你对AI和网络安全知识掌握得非常好，继续保持！';
    } else if (quizScore >= 6) {
        icon = '🎉';
        title = '表现优秀！';
        desc = '你已经掌握了大部分AI知识，继续加油！';
    } else if (quizScore >= 4) {
        icon = '👍';
        title = '还不错哦！';
        desc = '基础知识有了，但还有提升空间，再多学习一下吧！';
    } else {
        icon = '📚';
        title = '继续加油！';
        desc = 'AI知识储备还不够，多去AI技巧库学习一下吧！';
    }
    
    document.getElementById('result-icon').textContent = icon;
    document.getElementById('result-title').textContent = title;
    document.getElementById('result-desc').textContent = desc;
}

function restartQuiz() {
    startQuiz();
}
