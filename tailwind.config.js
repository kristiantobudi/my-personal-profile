module.exports = {
  theme: {
    extend: {
      keyframes: {
        "infinite-scroll": {
          from: { transform: "translateX(0)" },
          to: { transform: "translateX(-50%)" },
        },
      },
      animation: {
        "infinite-scroll": "infinite-scroll 10s linear infinite",
      },
    },
  },
  variants: {},
  plugins: [],
};
