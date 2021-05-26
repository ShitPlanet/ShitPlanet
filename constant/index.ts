import getConfig from 'next/config'

const { publicRuntimeConfig } = getConfig()

export const META = {
  content: 'ShitPlanet',
  description: 'ShitPlanet',
  companyFullName: 'ShitPlanet',
  title: 'ShitPlanet',
  basePath: publicRuntimeConfig.env.BASEPATH
    ? `/${publicRuntimeConfig.env.BASEPATH}`
    : ''
}
