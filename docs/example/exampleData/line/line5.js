const option1 = {
  title: {
    text: '周销售额趋势'
  },
  xAxis: {
    name: '第二周',
    data: ['周一', '周二', '周三', '周四', '周五', '周六', '周日']
  },
  yAxis: {
    name: '销售额',
    data: 'value'
  },
  series: [
    {
      data: [1200, 2230, 1900, 2100, 3500, 4200, 3985],
      type: 'line',
      lineArea: {
        show: true,
        gradient: ['rgba(55, 162, 218, 0.6)', 'rgba(55, 162, 218, 0)']
      }
    }
  ]
}

const option2 = {
  title: {
    text: '周销售额趋势'
  },
  xAxis: {
    name: '第二周',
    data: ['周一', '周二', '周三', '周四', '周五', '周六', '周日']
  },
  yAxis: {
    name: '销售额',
    data: 'value'
  },
  series: [
    {
      data: [2339, 1899, 2118, 1790, 3265, 4465, 3996],
      type: 'line',
      lineArea: {
        show: true,
        gradient: ['rgba(251, 114, 147, 0.6)', 'rgba(251, 114, 147, 0)']
      }
    }
  ]
}

export default [option1, option2]