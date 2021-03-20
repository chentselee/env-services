import { allFeatures } from 'src/features/allFeatures'
import { Service } from 'src/services'
import { service as serviceA } from './serviceA'
import { service as serviceB } from './serviceB'

const defaultService: Service = {
  name: 'none',
  features: allFeatures,
}

const services: Record<string, Service> = {
  serviceA,
  serviceB,
  defaultService,
}

export const service =
  services[
    (import.meta.env.VITE_SERVICE as string)
      ? (import.meta.env.VITE_SERVICE as string)
      : 'defaultService'
  ]
