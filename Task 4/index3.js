
document.addEventListener('DOMContentLoaded', function () {

    const trendingMoviesData = [
      { title: 'Movie 1', imageUrl: 'https://th.bing.com/th/id/OIP.b162t5wTg2dABFL7qtFMTgHaE6?rs=1&pid=ImgDetMain' },
      { title: 'Movie 2', imageUrl: 'https://img.wook.pt/images/the-lion-and-the-mouse-susanna-davidson/MXwyMjM0NTkwMnwxODIzMTIwMXwxNjk1MDk2OTMyMDAw/500x' },
      
    ];
  
    const trendingSeriesData = [
      { title: 'Series 1', imageUrl: 'https://th.bing.com/th/id/OIP.8Wa0EM4EJWlwc-fzKf4MwwHaD4?w=4000&h=2093&rs=1&pid=ImgDetMain' },
      { title: 'Series 2', imageUrl: 'https://th.bing.com/th/id/OIP.iP1pzUktQt7NQMMrAt7INAHaE7?pid=ImgDet&w=207&h=138&c=7&dpr=1.3' },
    
    ];
  
    const recommendedContentData = [
      { title: 'Recommended 1', imageUrl: 'https://sanciovfxstudios.com/images/gallery_7.jpg' },
      { title: 'Recommended 2', imageUrl: 'https://th.bing.com/th/id/OIP.2pTA7pNrcH1fs8SUxtXVhwHaEK?w=1024&h=576&rs=1&pid=ImgDetMain' },
    
    ];
  
    
    const trendingMoviesContainer = document.getElementById('trendingMovies');
    trendingMoviesData.forEach(movie => {
      trendingMoviesContainer.innerHTML += `
        <div class="movie-card">
          <img src="${movie.imageUrl}" alt="${movie.title}">
          <p>${movie.title}</p>
        </div>
      `;
    });
  

    const trendingSeriesContainer = document.getElementById('trendingSeries');
    trendingSeriesData.forEach(series => {
      trendingSeriesContainer.innerHTML += `
        <div class="movie-card">
          <img src="${series.imageUrl}" alt="${series.title}">
          <p>${series.title}</p>
        </div>
      `;
    });
  
    const recommendedContentContainer = document.getElementById('recommendedContent');
    recommendedContentData.forEach(content => {
      recommendedContentContainer.innerHTML += `
        <div class="movie-card">
          <img src="${content.imageUrl}" alt="${content.title}">
          <p>${content.title}</p>
        </div>
      `;
    });
  

    const searchInput = document.getElementById('searchInput');
    searchInput.addEventListener('keyup', function (event) {
      const searchTerm = event.target.value.toLowerCase();

      console.log('Searching for:', searchTerm);
    });
  });
  