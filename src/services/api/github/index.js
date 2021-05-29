import { get } from "../"
import { GITHUB } from "../constants"

export const getRepositories = user => {
  return get(`${GITHUB}/users/${user}/repos`, "sort=updated")
}
