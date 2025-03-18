tsParticles.load("particles-js", {
    particles: {
        number: { value: 100 },
        color: { value: "#a855f7" }, // 紫色粒子
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
            color: "#9333ea", // 连接线紫色
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

    const repoOwner = "Kingin1995";  // 替换为你的 GitHub 用户名
    const repoName = "blogs"; // 替换为你的仓库名称
    const postsPath = "https://api.github.com/repos/" + repoOwner + "/" + repoName + "/contents/_posts";

    try {
        const response = await fetch(postsPath);
        const files = await response.json();
        postList.innerHTML = "";

        files.forEach(file => {
            if (file.name.endsWith(".md")) {
                const listItem = document.createElement("li");
                const link = document.createElement("a");
                link.href = `https://${repoOwner}.github.io/${repoName}/_posts/${file.name}`;
                link.textContent = file.name.replace(".md", "");
                listItem.appendChild(link);
                postList.appendChild(listItem);
            }
        });
    } catch (error) {
        postList.innerHTML = "<p>加载文章失败，请检查 GitHub 仓库是否公开</p>";
        console.error("获取文章列表失败:", error);
    }
});

