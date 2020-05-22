import request from '@/utils/request'

export function getInvitDetail(query) {
  return request({
    url: '/api/v2/Invitation/GetInvitationDetail',
    method: 'get',
    params: query
  })
}

export function getInvitList(query) {
  return request({
    url: '/api/v2/Invitation/GetInvitationList',
    method: 'get',
    params: query
  })
}
