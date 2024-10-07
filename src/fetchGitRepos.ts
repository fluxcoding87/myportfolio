import axios from "axios";
import { useEffect, useState } from "react";

interface GitHubRepo {
  id: number;
  name: string;
  html_url: string;
  description: string;
  fork: boolean;
  stargazers_count: number;
  language: string;
}

// Function to fetch public repositories of a user
async function fetchPublicRepos(username: string): Promise<GitHubRepo[]> {
  try {
    const response = await axios.get(
      `https://api.github.com/users/${username}/repos`,
      {
        headers: {
          Accept: "application/vnd.github.v3+json",
        },
      }
    );

    // Return the data which will be an array of repositories
    return response.data;
  } catch (error) {
    console.error("Error fetching repos:", error);
    throw new Error("Failed to fetch repositories");
  }
}

export const useFetchGitRepos = (username: string) => {
  const [repoData, setRepoData] = useState<any[]>([]);
  useEffect(() => {
    fetchPublicRepos(username)
      .then((repos) => {
        setRepoData(repos);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [username]);

  return repoData;
};
