import apiConfigs from "../apiConfigs"

const security = {
  user: {
    new: `${apiConfigs.security}/user/new`,
    select: (id: string) => `${apiConfigs.security}/user/${id}`,
    update: (id: string) => `${apiConfigs.security}/user/${id}/update`,
    delete: (id: string) => `${apiConfigs.security}/user/${id}/delete`,
    search: `${apiConfigs.security}/user`,
    authentication: `${apiConfigs.security}/user/authentication`,
    recoveryPassword: `${apiConfigs.security}/user/recovery_password`,
    confirmRecovery: `${apiConfigs.security}/user/confirm_recovery`
  },
  group: {
    new: `${apiConfigs.security}/group/new`,
    select: (id: string) => `${apiConfigs.security}/group/${id}`,
    update: (id: string) => `${apiConfigs.security}/group/${id}/update`,
    delete: (id: string) => `${apiConfigs.security}/group/${id}/delete`,
    search: `${apiConfigs.security}/group`
  },
  feature: {
    new: `${apiConfigs.security}/feature/new`,
    select: (id: string) => `${apiConfigs.security}/feature/${id}`,
    update: (id: string) => `${apiConfigs.security}/feature/${id}/update`,
    delete: (id: string) => `${apiConfigs.security}/feature/${id}/delete`,
    search: `${apiConfigs.security}/feature`
  },
  deviceComponent: {
    new: `${apiConfigs.security}/device_component/new`,
    select: (id: string) => `${apiConfigs.security}/device_component/${id}`,
    update: (id: string) =>
      `${apiConfigs.security}/device_component/${id}/update`,
    delete: (id: string) =>
      `${apiConfigs.security}/device_component/${id}/delete`,
    search: `${apiConfigs.security}/device_component`
  },
  action: {
    new: `${apiConfigs.security}/action/new`,
    select: (id: string) => `${apiConfigs.security}/action/${id}`,
    update: (id: string) => `${apiConfigs.security}/action/${id}/update`,
    delete: (id: string) => `${apiConfigs.security}/action/${id}/delete`,
    search: `${apiConfigs.security}/action`
  }
}

export default security
