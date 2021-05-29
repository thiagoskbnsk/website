const theme = {
  title: "default",

  colors: {
    default: "#c4c4c4",
    white: "#fff",
    warning: "#ffd257",
    danger: "#ff0024",
    success: "#71E9B7",
    light: "#f0f0f0",
    black: "#000",
    dark: "#171717",
  },
  font: {
    primary: "Source Sans Pro, sans-serif",
    size: 16,
  },

  config: {
    columns: 12,
    columnGap: 16,
  },
  screens: {
    phone: {
      size: 576,
      container: 540,
    },
    tablet: {
      size: 768,
      container: 704,
    },
    medium: {
      size: 992,
      container: 928,
    },
    desktop: {
      size: 1024,
      container: 960,
    },
    fullhd: {
      size: 1280,
      container: 1280,
    },
  },
}

export default theme;