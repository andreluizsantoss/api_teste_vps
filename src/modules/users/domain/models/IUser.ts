export interface IUser {
  codigo: number
  cpf?: string
  senha?: string
  nome?: string
  email?: string
  primeiro_acesso?: string
  codigo_sistema?: number
  descricao_sistema?: string
  cnpj_cliente?: string
  ios_token?: string
  android_token?: string
  refresh_token?: string
  url_avatar?: string
  ultimo_acesso?: Date
  codigo_validacao?: string
  data_expiracao?: Date
}
