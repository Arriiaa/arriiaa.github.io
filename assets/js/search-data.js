// get the ninja-keys element
const ninja = document.querySelector('ninja-keys');

// add the home and posts menu items
ninja.data = [{
    id: "nav-about",
    title: "about",
    section: "Navigation",
    handler: () => {
      window.location.href = "/";
    },
  },{id: "nav-projects",
          title: "projects",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/projects/";
          },
        },{id: "nav-blog",
          title: "blog",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/blog/";
          },
        },{id: "nav-cv",
          title: "cv",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/cv/";
          },
        },{id: "post-game-impression-10-hi-fi-rush",
      
        title: "Game Impression #10: Hi-Fi Rush",
      
      description: "A Game Analysis of Hi-Fi Rush",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/blog/2024/Game-Impression-10/";
        
      },
    },{id: "post-game-impression-9-ff14",
      
        title: "Game Impression #9: FF14",
      
      description: "A Game Analysis of FF14",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/blog/2024/Game-Impression-9/";
        
      },
    },{id: "post-game-impression-5-2048",
      
        title: "Game Impression #5: 2048",
      
      description: "A Game Analysis of 2048",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/blog/2024/GameImpression-5/";
        
      },
    },{id: "post-game-impression-4-ori-and-the-blind-forest-will-o-the-wisps",
      
        title: "Game Impression #4: Ori and the Blind Forest/ Will o the Wisps",
      
      description: "A Game Analysis of Ori and the Blind Forest/ Will o the Wisps",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/blog/2024/GameImpression-4/";
        
      },
    },{id: "post-game-impression-3-assassin-39-s-creed-series",
      
        title: "Game Impression #3: Assassin&#39;s Creed series",
      
      description: "A Game Analysis of the Combat System in Assassin&#39;s Creed",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/blog/2024/GameImpression1/";
        
      },
    },{id: "books-the-godfather",
          title: 'The Godfather',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/the_godfather/";
            },},{id: "news-announcement-1",
          title: 'Announcement_1',
          description: "",
          section: "News",handler: () => {
              window.location.href = "/news/announcement_1/";
            },},{id: "news-a-long-announcement-with-details",
          title: 'A long announcement with details',
          description: "",
          section: "News",handler: () => {
              window.location.href = "/news/announcement_2/";
            },},{id: "news-announcement-3",
          title: 'Announcement_3',
          description: "",
          section: "News",handler: () => {
              window.location.href = "/news/announcement_3/";
            },},{id: "projects-隐秘矿洞",
          title: '隐秘矿洞',
          description: "ARPG 项目关卡白盒",
          section: "Projects",handler: () => {
              window.location.href = "/projects/CaveBlockout/";
            },},{id: "projects-科技之城",
          title: '科技之城',
          description: "德式桌游",
          section: "Projects",handler: () => {
              window.location.href = "/projects/City%20of%20Tech/";
            },},{id: "projects-死亡卡牌",
          title: '死亡卡牌',
          description: "卡牌Roguelike",
          section: "Projects",handler: () => {
              window.location.href = "/projects/DeathCards/";
            },},{id: "projects-dokidokivirus",
          title: 'DokiDokiVirus',
          description: "弹幕射击",
          section: "Projects",handler: () => {
              window.location.href = "/projects/DokiDokiVirus/";
            },},{id: "projects-horizon",
          title: 'Horizon',
          description: "解谜冒险",
          section: "Projects",handler: () => {
              window.location.href = "/projects/Horizon/";
            },},{id: "projects-lan",
          title: 'LAN',
          description: "2D平台射击游戏",
          section: "Projects",handler: () => {
              window.location.href = "/projects/LAN/";
            },},{id: "projects-是-否",
          title: '是，否',
          description: "文字冒险",
          section: "Projects",handler: () => {
              window.location.href = "/projects/%E6%98%AF%E5%90%A6/";
            },},{
        id: 'social-email',
        title: 'email',
        section: 'Socials',
        handler: () => {
          window.open("mailto:%77%61%6E%67.%79%69%72%61%6E%37@%6E%6F%72%74%68%65%61%73%74%65%72%6E.%65%64%75", "_blank");
        },
      },{
        id: 'social-github',
        title: 'GitHub',
        section: 'Socials',
        handler: () => {
          window.open("https://github.com/Arriiaa", "_blank");
        },
      },{
        id: 'social-linkedin',
        title: 'LinkedIn',
        section: 'Socials',
        handler: () => {
          window.open("https://www.linkedin.com/in/yiran-wang-404199334", "_blank");
        },
      },{
        id: 'social-wechat_qr',
        title: 'Wechat_qr',
        section: 'Socials',
        handler: () => {
          window.open("", "_blank");
        },
      },{
      id: 'light-theme',
      title: 'Change theme to light',
      description: 'Change the theme of the site to Light',
      section: 'Theme',
      handler: () => {
        setThemeSetting("light");
      },
    },
    {
      id: 'dark-theme',
      title: 'Change theme to dark',
      description: 'Change the theme of the site to Dark',
      section: 'Theme',
      handler: () => {
        setThemeSetting("dark");
      },
    },
    {
      id: 'system-theme',
      title: 'Use system default theme',
      description: 'Change the theme of the site to System Default',
      section: 'Theme',
      handler: () => {
        setThemeSetting("system");
      },
    },];
