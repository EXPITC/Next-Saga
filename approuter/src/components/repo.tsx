"use client";

import Link from "next/link";

type user = { user: string };
type repo = { id: string; title: string; body: string }[];

const fetchRepos: ({ user }: user) => Promise<repo> = async ({ user }) => {
  // fetching
  // const res = await fetch(`https://api.github.com/users/${user}/repos`, {
  //   cache: "force-cache",
  // });

  const res = await fetch("https://jsonplaceholder.typicode.com/posts", {
    cache: "force-cache",
  });

  // convert to obj
  const repo = await res.json();

  // return obj
  return repo;
};

const RepoList = async ({ user }: user) => {
  const repo = await fetchRepos({ user });

  return (
    <ul className="center space-y-5">
      {repo.map((repo) => (
        <Link key={repo.id} href={`code/repo/${repo.id}`} className="block">
          <li className="bg-white text-black min-h-fit min-w-full py-4 px-2 rounded-lg  hover:scale-105 transition-all">
            <h3 className="text-center text-red-700">{repo.title}</h3>
            <p className="text-center text-sm">{repo.body}</p>
          </li>
        </Link>
      ))}
    </ul>
  );
};

export default RepoList;
