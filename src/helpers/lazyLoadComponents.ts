import { lazy } from "react"

// FUNCTIONS

export const lazyLoad = (
  //path should be relative to this file not to wherever i will use this utility
  path: string,
  exportName?: string
) => {
  return lazy(() => {
    const promise = import(/* @vite-ignore */path)
    // if the component is exported as default
    if (!exportName) return promise
    return promise.then((module: any) => ({
      default: module[exportName],
    }))
  })
}

////////
