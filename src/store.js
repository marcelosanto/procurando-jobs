import create from 'zustand'
import { persist } from 'zustand/middleware'

let settingsStore = (set) => ({
  dark: false,
  toggleDarkMode: () => set((state) => ({ dark: !state.dark })),
})

let jobsStore = (set) => ({
  jobs: [],
  filter: '',
  setJobs: (job) => set((state) => ({ ...state.jobs, job })),
  setFilter: (filter) => set((state) => ({ ...state, filter })),
})

settingsStore = persist(settingsStore, { name: 'app_settings' })

jobsStore = persist(jobsStore, { name: 'jobs_' })

export const useSettingsStore = create(settingsStore)
export const useJobsStore = create(jobsStore)

fetch(
  'https://api.github.com/repos/react-brasil/vagas/issues?page=1&per_page=100',
)
  .then((res) => res.json())
  .then((jobs) => useJobsStore.setState((state) => ({ ...state, jobs })))
