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
