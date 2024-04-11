export const API_END_POINT = 'http://localhost:8080/api/v1/user'
export const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkMmE1OTE3ZDIwMmVmMzhlMjAzZGU4ZTk2Y2Y2ZmQ5ZCIsInN1YiI6IjY2MTY5ZWM4YzY4YjY5MDE3YjIwNjRhOSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.RPBYKVKkaK8Qk_9RpnPewOgsvYUWmnhJ-WRmVoEhgOo'
    }
  };

export const Now_Playing_Movies = "https://api.themoviedb.org/3/movie/now_playing";
export const Popular_Movies = "https://api.themoviedb.org/3/movie/popular";
export const Top_Rated_Movies = "https://api.themoviedb.org/3/movie/top_rated";
export const Upcoming_Movies = "https://api.themoviedb.org/3/movie/upcoming";