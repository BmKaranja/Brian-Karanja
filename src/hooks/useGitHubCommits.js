import { useState, useEffect } from 'react'

const GITHUB_USER = 'BmKaranja'

// Friendly display names for repos
const REPO_DISPLAY_NAMES = {
  'Brian-Karanja': 'My Portfolio Website',
  'Salio': 'Salio',
  'Wincer_Project': "Wincer's Cake House",
  'StayPay-1': 'StayPay Mobile App',
  'HireNear': 'HireNear',
  'MY-SHOP': 'Tenga and Thrive Website',
  'Oakwood_web': 'OakWood Academy Website',
}

// Infer tags from repo language/name
function inferTags(repo) {
  const lang = repo.language
  const name = repo.name.toLowerCase()
  const tags = []

  if (lang === 'Dart') tags.push('Flutter', 'Dart')
  else if (lang === 'TypeScript') tags.push('React', 'TypeScript')
  else if (lang === 'JavaScript') tags.push('React', 'JavaScript')
  else if (lang === 'HTML') tags.push('HTML', 'CSS')

  if (name.includes('salio') || name.includes('wincer') || name.includes('brian'))
    if (!tags.includes('TailwindCSS')) tags.push('TailwindCSS')

  if (repo.topics && repo.topics.length > 0) {
    repo.topics.slice(0, 2).forEach(t => {
      if (!tags.includes(t)) tags.push(t)
    })
  }

  return tags.length > 0 ? tags : [lang || 'Code']
}

function formatDate(isoString) {
  if (!isoString) return ''
  return isoString.slice(0, 10)
}

async function githubFetch(url) {
  const token = import.meta.env.GITHUB_TOKEN
  const headers = {
    Accept: 'application/vnd.github+json',
    ...(token ? { Authorization: `Bearer ${token}` } : {}),
  }
  const res = await fetch(url, { headers })
  if (!res.ok) throw new Error(`GitHub API error: ${res.status} for ${url}`)
  return res.json()
}

export function useGitHubCommits() {
  const [commits, setCommits] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    let cancelled = false

    async function fetchAll() {
      try {
        setLoading(true)
        setError(null)

        const repos = await githubFetch(
          `https://api.github.com/users/${GITHUB_USER}/repos?per_page=100&sort=updated`
        )

        const commitFetches = repos.map(async (repo) => {
          try {
            const repoCommits = await githubFetch(
              `https://api.github.com/repos/${GITHUB_USER}/${repo.name}/commits?per_page=30`
            )
            return repoCommits.map((c) => ({
              id: c.sha,
              date: formatDate(c.commit?.author?.date || c.commit?.committer?.date),
              project: REPO_DISPLAY_NAMES[repo.name] || repo.name,
              description: c.commit?.message || 'No commit message',
              tags: inferTags(repo),
              link: c.html_url,
              repo: repo.name,
            }))
          } catch {
            return []
          }
        })

        const allCommitArrays = await Promise.all(commitFetches)
        if (cancelled) return

        const flat = allCommitArrays.flat()
        flat.sort((a, b) => new Date(b.date) - new Date(a.date))

        setCommits(flat)
      } catch (err) {
        if (!cancelled) setError(err.message)
      } finally {
        if (!cancelled) setLoading(false)
      }
    }

    fetchAll()
    return () => { cancelled = true }
  }, [])

  return { commits, loading, error }
}
