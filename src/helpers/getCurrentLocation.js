export const getCurrentLocation = () => {
  return new Promise((resolve, reject) => {
    navigator.geolocation.getCurrentPosition(
      ({ coords }) => {
        resolve(`${coords.latitude}, ${coords.longitude}`);
      },
      (err) => {
        console.error(err);
        reject(err);
      },
      {
        enableHighAccuracy: true,
      }
    );
  });
};
