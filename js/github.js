class GitHub {
  constructor() {
    this.client_id = '90809668aa0657b1d713';
    this.client_secret = '730b33572b8a1b61133e786efa952b32ab958ff5';
    this.repos_counts = 5;
    this.repos_sort = 'created : asc';
  }

  async getUser(user) {
    const profileResponse = await fetch(
      `https://api.github.com/users/${user}?client_id=${this.client_id}&client_secret=${
        this.client_secret
      }`
    );

    const reposResponse = await fetch(
      `https://api.github.com/users/${user}?repos=per_page${this.repos_counts}&sort${
        this.repos_sort
      }&client_secret=${this.client_secret}`
    );

    const profileData = await profileResponse.json();
    const repoData = await reposResponse.json();

    return {
      profileData,
      repoData,
    };
  }
}
