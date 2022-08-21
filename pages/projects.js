import React from 'react'
export const getStaticProps = async () => {
  const res = await fetch('https://api.github.com/users/monstajoe2002/repos?sort=newest')
  const data = await res.json();
  return {
    props: {
      repos: data
    }
  }
};

export default function Projects({ repos }) {
  return (
    <>
      <div className="text-dark-blue-50 flex justify-center font-semibold text-5xl">
        My Projects
      </div>
      <div className=" grid grid-cols-3 gap-4 mt-10 p-24 content-center">
      {repos.map((repo) => (
        <div key={repo.id} className="max-w-sm min-h-lg rounded-xl items overflow-hidden shadow-lg px-6 py-4 flex-auto from-blue-100 to-light-blue-100 bg-gradient-to-l justify-center">
          <div className="font-semibold text-3xl mb-2 text-dark-blue-50">{repo.name}</div>
          <div className="text-light-blue-50 text-2xl font-semibold"> {repo.language}</div>
          <div className="text-light-blue-50 text-base font-semibold"> {repo.description}</div>
          <div className="flex border-2 p-2  max-h-max max-w-max items-center ">
            <a href={repo.html_url} target="_blank">Open</a></div>
        </div>
      ))}
      </div>
    </>
  )
}
