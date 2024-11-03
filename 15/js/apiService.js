export async function fetchTrendingMovies() {
  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI2Nzc5ZTlmZWY1NTVmM2U3YjQzOWYzZDlmOWJkMWY4YiIsIm5iZiI6MTczMDY2MjEyNS4wNDM2ODgzLCJzdWIiOiI2NzI3Yzk5YTMxZDNhNDBjZmRlYWJiNTgiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.wqQZ5H0V1WvsTj5THv8T5iJvE0eQd9_QPXIhc6HfwtI",
    },
  };
  try {
    let promise = await fetch(
      "https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1",
      options
    );
    let result = await promise.json();
    return result.results;
  } catch {
    (err) => console.error(err);
  }
}

export async function fetchMovieDetails(id) {
  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI2Nzc5ZTlmZWY1NTVmM2U3YjQzOWYzZDlmOWJkMWY4YiIsIm5iZiI6MTczMDY2MjEyNS4wNDM2ODgzLCJzdWIiOiI2NzI3Yzk5YTMxZDNhNDBjZmRlYWJiNTgiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.wqQZ5H0V1WvsTj5THv8T5iJvE0eQd9_QPXIhc6HfwtI",
    },
  };

  try {
    let promise = await fetch(
      `https://api.themoviedb.org/3/movie/${id}?language=en-US`,
      options
    );
    let result = await promise.json();
    return result;
  } catch {
    (err) => console.error(err);
  }
}
