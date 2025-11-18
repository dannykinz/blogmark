const posts = [
    {
        id: '1',
        title: 'Tech giants drive surge in carbon removal credits amid AI boom',
        body: 'Major technology firms are increasingly buying high-quality carbon removal credits to offset emissions linked to their artificial intelligence operations. The sudden demand is creating a supply crunch in the carbon-offset market, with buyers such as Microsoft leading the charge. The shortage is viewed by experts as a sign that the nascent market may finally scale up more seriously.',
        slug: 'tech-giants-carbon-removal-credits-ai-boom',
    },
    {
        id: '2',
        title: 'Asia Pacific tech deals pipeline hits four-year high, says JPMorgan',
        body: 'According to JPMorgan Chase & Co., the Asia Pacific region’s pipeline for technology deals is now at its strongest since 2021. China, India and Hong Kong are leading the momentum, underpinned by AI investment and IPO activity in semiconductor and enterprise sectors. The report suggests that regional technology stocks — trading at large discounts compared to US peers — could present interesting opportunities.',
        slug: 'asia-pacific-tech-deals-pipeline-record',
    },
    {
        id: '3',
        title: 'PicoJool emerges with $12 M to advance optical connectivity tech',
        body: 'Startup PicoJool has emerged from stealth mode with $12 million in funding. Based in Palo Alto, the company is focused on next-gen optical connectivity solutions, which could have significant implications for data-centre infrastructure and high-speed networking. The raise underscores growing interest in hardware and connectivity plays even as software/AI dominate headlines.',
        slug: 'picojool-funding-optical-connectivity',
    },
    {
        id: '4',
        title: '“Clair Obscur: Expedition 33” leads nominations for The Game Awards 2025',
        body: 'The forthcoming The Game Awards 2025 nominations list was released, with Clair Obscur: Expedition 33 taking the lead. Other major nominees include Hades 2 and Death Stranding 2. Voting is now live ahead of the December show.',
        slug: 'game-awards-2025-nominations-clair-obscur-expedition-33',
    },
    {
        id: '5',
        title: '“Fortnite Crew” lands on Xbox Game Pass Ultimate and Fortnite launches on Xbox for PC',
        body: 'Starting today, Fortnite Crew is included with Xbox Game Pass Ultimate subscriptions. At the same time, Fortnite becomes available for “Xbox on PC” and supports Xbox Play Anywhere, meaning progress and purchases carry across platforms.',
        slug: 'fortnite-crew-xbox-game-pass-ultimate-pc-launch',
    },
];

export const getBlogPosts = () => {
    return posts;
};

export const getPostSlug = slug => {
    return posts.find(post => post.slug === slug);
};
