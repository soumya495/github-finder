function UserRepos({ repos }) {
  console.log('Repositories: ', repos)
  return (
    <div>
      {repos.map((repo) => (
        <div key={repo.id}>
          <h2>{repo.name}</h2>
        </div>
      ))}
    </div>
  )
}

export default UserRepos
