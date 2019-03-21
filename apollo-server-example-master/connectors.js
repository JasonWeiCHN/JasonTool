import _ from 'lodash';
// Fake word generator
import faker from 'faker';//随机数生成工具 类比 mockjs

// Let's generate some tags //先生成模拟数据
var id = 0;
var tags = [];//模拟数据的容器
for (let i = 0; i < 42; i++) {
  if(Math.random() < .5) {
    addTag('City', faker.address.city());//faker生成城市数据
  } else {
    addTag('Company', faker.company.companyName());//faker生成公司数据
  }
}

//抛出方法 添加标签
function addTag(type, label) {
  return new Promise(resolve => {
    setTimeout(() => {
      let t = {
        id: id++,
        label,
        type,
      };
      tags.push(t);
      resolve(t);
    }, 2000);
  });
}

function fakeDelay (cb) {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve(cb())
    }, 2000)
  })
}

export default { //这个库在 schema.js 中被用到
  getTags(type) {
    return fakeDelay(() => _.filter(tags, tag => tag.type === type))
  },
  getTagsPage(page, pageSize) {
    return fakeDelay(() => {
      const start = page * pageSize;
      const end = start + pageSize;
      return {
        tags: tags.slice(start, end),
        hasMore: end < tags.length,
      };
    })
  },
  getRandomTag() {
    return tags[Math.round(Math.random()*(tags.length - 1))];
  },
  getLastTag() {
    return tags[tags.length - 1];
  },
  addTag,
};
