const subAvatar = require('./esm')

async function main () {
  const arr = ['linux_gaming', 'linux', 'dog', 'minecraft', 'bruuhsudasd']
  const promises = []
  arr.forEach((elem) => promises.push(subAvatar.getAvatar(elem)))
  await Promise.all(promises)
  console.log(promises)
}

main()
