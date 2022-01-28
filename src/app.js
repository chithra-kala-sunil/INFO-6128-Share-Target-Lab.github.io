document.querySelector('#sharebtn').addEventListener('click', () => {
    console.log('share btn clicked');
    if (navigator.share) {
      navigator.share({
        textShare,
        titleShare,
        urlShare,
      })
        .then(() => console.log('Successful share'))
        .catch((error) => console.log('Error sharing', error));
    } else {
      console.log('navigator not working');
    }
  })