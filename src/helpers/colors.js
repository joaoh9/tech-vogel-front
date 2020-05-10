const getRandomColor = () => {
  const colors = [
    'blue',
    'indigo',
    'purple',
    'pink',
    'red',
    'orange',
    'yellow',
    'green',
    'teal',
    'cyan',
    'gray',
    'dark',
  ];
  const random = Math.floor(Math.random() * (colors.length - 1));
  return colors[random];
};

const getBackgroundColorFromTechnology = (technology) => {
  const colors = {
    vue: '#8AFFC2',
    javascript: '#FFEC6E',
    node: '#B7FF73',
    java: '#FF5D3D',
    devops: '#61BDFF',
    frontend: '#B3A1A1',
    cpp: '#91C8FF',
    react: '#78E2FF',
    kotlin: '#FF9945',
  };

  return colors[technology];
};

export default {
  getRandomColor,
  getBackgroundColorFromTechnology,
};
