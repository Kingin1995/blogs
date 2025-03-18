tsParticles.load("particles-js", {
particles: {
    number: { value: 100 },
    color: { value: "#a855f7" },
    shape: { type: "circle" },
    opacity: { value: 0.7, random: true },
    size: { value: 5, random: true },
    move: {
        enable: true,
        speed: 2,
        direction: "none",
        random: false,
        straight: false,
        outModes: "out"
    },
    line_linked: {
        enable: true,
        distance: 150,
        color: "#9333ea",
        opacity: 0.5,
        width: 1
    }
},
interactivity: {
    events: {
        onHover: { enable: true, mode: "repulse" },
        onClick: { enable: true, mode: "push" }
    },
    modes: {
        repulse: { distance: 100 },
        push: { particles_nb: 4 }
    }
},
background: { color: "#0d0d2b" }
});

document.getElementById("load-posts").addEventListener("click", async () => {
const postList = document.getElementById("post-list");
postList.innerHTML = "<p>加载文章中...</p>";

const repoOwner = "Kingin1995";
const repoName = "blogs";
const postsPath = `https://api.github.com/repos/${repoOwner}/${repoName}/contents/_posts`;

try {
    const response = await fetch(postsPath);
    if (!response.ok) throw new Error("请求失败");
    const files = await response.json();
    postList.innerHTML = "";

    files.forEach(file => {
    if (file.name.endsWith(".md")) {
        // 从文件名中提取日期和标题
        const [year, month, day, ...titleParts] = file.name.replace(".md", "").split("-");
        const title = titleParts.join("-");
        
        // 构建正确的 Jekyll 文章 URL
        const postUrl = `https://${repoOwner}.github.io/${repoName}/${year}/${month}/${day}/${title}.html`;
        
        // 创建链接
        const listItem = document.createElement("li");
        const link = document.createElement("a");
        link.href = postUrl;
        link.textContent = title.replace(/-/g, " "); // 将短横线转换为空格
        link.target = "_blank";
        listItem.appendChild(link);
        postList.appendChild(listItem);
    }
});
} catch (error) {
    postList.innerHTML = "<p>加载文章失败，请检查 GitHub 仓库是否公开</p>";
    console.error("获取文章列表失败:", error);
}
});
