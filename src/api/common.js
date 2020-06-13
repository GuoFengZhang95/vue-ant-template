import request from '@/utils/request'

// 获取导航 菜单
export function getGlobalMenu (data) {
  return request({
    url: '/yqmm/navigation/list',
    method: 'get',
    params: data,
  })
}